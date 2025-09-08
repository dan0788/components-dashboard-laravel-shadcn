import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { avataaars } from '@dicebear/collection';

const botttsList = [
  'Alexander', 'Wyatt', 'Caleb', 'Mackenzie', 'Brooklynn', 'Sadie', 'Mason', 'Maria', 'Aidan', 'Riley', 'Avery', 'Jack',
]

const avataaarList = [
  'Sara', 'Leo', 'Jocelyn', 'Jessica', 'Adrian', 'Liliana', 'Eden', 'Jameson', 'Alexander', 'Wyatt',
  'Caleb', 'Mackenzie', 'Brooklynn', 'Sadie', 'Mason', 'Maria', 'Aidan', 'Riley', 'Avery', 'Jack',
]
const avatarBottts = createAvatar(bottts, {
  "seed": "Alexander"
});

export const avatarAvataaars = async () => {
  const shadcnAvatarPromise = Promise.resolve({
    svg: 'https://github.com/shadcn.png',
    seed: 'Shadcn avatar'
  });

  const generatedAvatarsPromises = avataaarList.map(async (value) => {
    const avatar = createAvatar(avataaars, {
      "seed": value
    });

    // Espera a que la promesa de la URI se resuelva
    const svg = await avatar.toDataUri();

    return {
      svg: svg,
      seed: value
    };
  });

  // Usa Promise.all para esperar a que todas las promesas se resuelvan
  const generatedAvatars = await Promise.all([
    shadcnAvatarPromise,
    ...generatedAvatarsPromises
  ]);

  return generatedAvatars;

}
