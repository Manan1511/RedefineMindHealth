/**
 * Requests a resized/compressed version of a Supabase Storage public image
 * via the render endpoint, instead of shipping the full original.
 *
 * The endpoint does not auto-scale height when only width is given (it keeps
 * the original height, squishing the image), so height must always be passed
 * explicitly alongside an explicit resize mode.
 */
export function transformImage(
  url: string,
  width: number,
  height: number,
  resize: "cover" | "contain" = "cover",
  quality = 70,
) {
  if (!url.includes("/storage/v1/object/public/")) return url;
  const renderUrl = url.replace("/storage/v1/object/public/", "/storage/v1/render/image/public/");
  return `${renderUrl}?width=${width}&height=${height}&resize=${resize}&quality=${quality}`;
}
