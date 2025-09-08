"use client"

"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, ChangeEvent } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as React from "react"
import { CameraIcon, PlusIcon, UploadIcon } from "lucide-react";

interface AvatarPageProps {
  onChange: (fileName: string) => void;
}

export const AvatarPage = ({ onChange }: AvatarPageProps) => {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = React.useState<string>("https://github.com/shadcn.png");
  const fileRef = useRef<File | null>(null);

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
    </>
  );
};