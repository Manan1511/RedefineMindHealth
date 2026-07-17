/**
 * Requests a resized/compressed version of a Supabase Storage public image
 * via the render endpoint, instead of shipping the full original.
 */
export function transformImage(url: string, width: number, quality = 70) {
  if (!url.includes("/storage/v1/object/public/")) return url;
  const renderUrl = url.replace("/storage/v1/object/public/", "/storage/v1/render/image/public/");
  return `${renderUrl}?width=${width}&quality=${quality}`;
}
