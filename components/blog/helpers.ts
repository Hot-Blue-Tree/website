export function getTagColor(tagName: string, opacity: number = 1): string {
  // hash the name of the tag and use it to get a hue value (0-360)
  const hash = tagName.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  const hue = hash % 360;
  return `hsla(${hue}, 100%, 90%, ${opacity})`;
}
