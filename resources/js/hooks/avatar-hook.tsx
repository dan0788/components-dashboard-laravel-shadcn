import { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/bottts/dist/index.mjs";

// Define la estructura de un avatar con su URL y nombre
interface PredefinedAvatar {
  url: string;
  name: string;
}

/**
 * Hook para obtener una lista de avatares predefinidos generados
 * localmente con la librería de DiceBear.
 * @returns {PredefinedAvatar[]}
 */
export const usePredefinedAvatars = (): PredefinedAvatar[] => {
  const [avatars, setAvatars] = useState<PredefinedAvatar[]>([]);

  useEffect(() => {
    const getAvatars = () => {
      // Lista de seeds (semillas) para generar avatares únicos
      const seeds = [
        "bot-1", "bot-2", "bot-3", "bot-4", "bot-5", "bot-6", "bot-7", "bot-8", "bot-9", "bot-10",
        "bot-11", "bot-12", "bot-13", "bot-14", "bot-15", "bot-16", "bot-17", "bot-18", "bot-19", "bot-20",
        "bot-21", "bot-22", "bot-23", "bot-24", "bot-25", "bot-26", "bot-27", "bot-28", "bot-29", "bot-30"
      ];

      const generatedAvatars: PredefinedAvatar[] = seeds.map(seed => {
        const avatar = createAvatar(bottts, {
          seed: seed,
        });

        // Convierte el SVG a un Data URI para que se pueda usar como src de una imagen
        const dataUri = avatar.toDataUriSync();
        return {
          url: dataUri,
          name: `${seed}.svg`
        };
      });

      setAvatars(generatedAvatars);
    };

    getAvatars();
  }, []); // El array vacío asegura que la función se ejecute solo una vez al montar

  return avatars;
};