const IMAGEKIT_BASE =
  "https://ik.imagekit.io/danielcmadeley/madeleydesignstudio";
const backgrounds = [
  `${IMAGEKIT_BASE}/background-1.png?updatedAt=1739058183985`,
  `${IMAGEKIT_BASE}/background-2.png?updatedAt=1739058203974`,
  `${IMAGEKIT_BASE}/background-3.png?updatedAt=1739058220606`,
  `${IMAGEKIT_BASE}/background-4.png?updatedAt=1739062779911`,
  `${IMAGEKIT_BASE}/background-5.png?updatedAt=1739062804098`,
  `${IMAGEKIT_BASE}/background-6.png?updatedAt=1739062828837`,
  `${IMAGEKIT_BASE}/background-7.png?updatedAt=1739062852970`,
] as const;

export function getRandomBackground(): string {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}
