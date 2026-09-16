// Returns the correct path for public assets (works in dev AND GitHub Pages)
export function assetPath(path) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}