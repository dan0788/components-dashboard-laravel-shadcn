"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, ChangeEvent } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as React from "react"
import { CameraIcon, PlusIcon, UploadIcon } from "lucide-react";
import { avatarAvataaars } from "@/hooks/avatar-hook";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

interface AvatarPageProps {
  onChange: (fileName: string) => void;
}

export const AvatarPage = ({ onChange }: AvatarPageProps) => {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = React.useState<string>("https://github.com/shadcn.png");
  const fileRef = useRef<File | null>(null);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const commandRef = useRef<HTMLDivElement>(null);
  const [avatars, setAvatars] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchAvatars = async () => {
      const fetchedAvatars = await avatarAvataaars();
      setAvatars(fetchedAvatars);
    };

    fetchAvatars();
  }, []);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreviewUrl(reader.result as string);
        onChange(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredefinedImageSelect = () => {
    //console.log("Seleccionar imagen predefinida (lucide-chart, etc.)");
    // Lógica para el AlertDialog, que luego podría llamar a onChange con la URL de la imagen predefinida
    setIsAlertOpen(true);

  };

  const handlePredefinedAvatarClick = (avatar: { svg: string; seed: string }) => {
    setAvatarPreviewUrl(avatar.svg);
    onChange(avatar.seed);
    setIsAlertOpen(false);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap items-center gap-12">
        <div className="relative h-40 w-40">
          <Avatar className="h-full w-full">
            {/* Usa el valor del formulario (value) para la URL de la imagen */}
            <AvatarImage src={avatarPreviewUrl} alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className="absolute bottom-0 right-0 p-1 rounded-full cursor-pointer text-white bg-icon-plus"
              >
                <PlusIcon className="h-6 w-6" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
                <UploadIcon className="mr-2 h-4 w-4" />
                <span>Subir del dispositivo</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handlePredefinedImageSelect}>
                <CameraIcon className="mr-2 h-4 w-4" />
                <span>Seleccionar predefinida</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleImageChange} // Llama a la nueva función local
      />

      {/* AlertDialog para la selección de imágenes predefinidas */}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Choose an avatar</AlertDialogTitle>
          </AlertDialogHeader>

          {/* El Command para la búsqueda de avatares */}
          <Command>
            <CommandInput placeholder="Choose by name..." />
            <CommandGroup
              ref={commandRef}
              // Agrega un manejador de eventos para evitar que el scroll se propague
              onWheel={(e) => {
                e.stopPropagation();
              }}
              className="max-h-64 overflow-y-auto">
              <CommandEmpty>Avatar no encontrado.</CommandEmpty>
              {avatars.map((avatar, index) => (
                <CommandItem
                  key={index}
                  value={avatar.seed}
                  onSelect={() => handlePredefinedAvatarClick(avatar)}
                >
                  <img
                    src={avatar.svg}
                    alt={`Avatar de ${avatar.seed}`}
                    className="inline-block h-8 w-8 rounded-full mr-2"
                  />
                  {avatar.seed}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>

          {/* Cuadrícula visual de avatares para selección */}
          {/* <div className="grid grid-cols-5 gap-2 overflow-y-auto max-h-[400px]">
            {avatars.map((avatar, index) => (
              <Avatar 
                key={index} 
                className="h-16 w-16 cursor-pointer" 
                onClick={() => handlePredefinedAvatarClick(avatar)}
              >
                <AvatarImage src={avatar.svg} alt={avatar.seed} />
              </Avatar>
            ))}
          </div> */}

          <AlertDialogFooter>
            <AlertDialogCancel>Cerrar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};