import { useState, useEffect } from "react";

// Define la estructura de un avatar
interface PredefinedAvatar {
  url: string;
  name: string;
}

/**
 * Hook para obtener una lista de avatares predefinidos de la API de Adorbs.
 * @returns {PredefinedAvatar[]}
 */
export const usePredefinedAvatars = (): PredefinedAvatar[] => {
  const [avatars, setAvatars] = useState<PredefinedAvatar[]>([]);

  useEffect(() => {
    const getAvatars = () => {
      // Lista de palabras clave para generar avatares únicos
      const keywords = [
        "cat", "dog", "lion", "tiger", "bear", "fox", "rabbit", "owl", "penguin", "bird",
        "elephant", "giraffe", "zebra", "monkey", "panda", "koala", "mouse", "frog", "snake", "fish",
        "shark", "whale", "dolphin", "turtle", "octopus", "squid", "crab", "jellyfish", "starfish", "seahorse"
      ];
      
      const generatedAvatars: PredefinedAvatar[] = [];
      const apiUrl = "https://api.adorbs.social/avatars/";
      
      keywords.forEach(keyword => {
        const url = `${apiUrl}${keyword}`;
        generatedAvatars.push({ url, name: `${keyword}.svg` });
      });
      
      setAvatars(generatedAvatars);
    };

    getAvatars();
  }, []); // El array vacío asegura que la función solo se ejecute una vez al montar el componente

  return avatars;
};