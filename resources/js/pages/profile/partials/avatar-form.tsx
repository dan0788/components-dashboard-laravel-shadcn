"use client"

"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, ChangeEvent } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as React from "react"
import { CameraIcon, PlusIcon, UploadIcon } from "lucide-react";
import { usePredefinedAvatars } from "@/hooks/avatar-hook";

interface AvatarPageProps {
  onChange: (fileName: string) => void;
}

export const AvatarPage = ({ onChange }: AvatarPageProps) => {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = React.useState<string>("https://github.com/shadcn.png");
  const fileRef = useRef<File | null>(null);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  console.log(usePredefinedAvatars());

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
    console.log("Seleccionar imagen predefinida (lucide-chart, etc.)");
    // Lógica para el AlertDialog, que luego podría llamar a onChange con la URL de la imagen predefinida
    setIsAlertOpen(true);
    
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
      {/* <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Command>
                  <CommandInput placeholder="Find country..." />
                  <CommandEmpty>Country not found</CommandEmpty>
                  <CommandGroup>
                    {countries.map((country) => (
                      <CommandItem
                        className="p-1"
                        key={country.value}
                        value={country.value}
                        onSelect={(currentValue) => {
                          field.onChange({ ...field.value, country: currentValue });
                          setOpenPhone(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value.country === country.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        <img
                          src={country.flagUrl}
                          alt={`Bandera de ${country.label}`}
                          className="inline-block h-4 w-6 mr-2" />
                        {country.label} ({country.prefix})
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> */}
    </>
  );
};