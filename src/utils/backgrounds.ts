const IMAGEKIT_BASE =
  "https://ik.imagekit.io/danielcmadeley/madeleydesignstudio";
const backgrounds = [
  `${IMAGEKIT_BASE}/background-1.png?updatedAt=1739058183985`,
  `${IMAGEKIT_BASE}/background-2.png?updatedAt=1739058203974`,
  `${IMAGEKIT_BASE}/background-3.png?updatedAt=1739058220606`,
] as const;

export function getRandomBackground(): string {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}
