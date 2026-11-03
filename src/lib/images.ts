import type { ImageMetadata } from 'astro';

// Alt sayfa üst bandı fotoğrafları: src/assets/img/pages/<sayfa anahtarı>.jpg
// Dilekçe sayfası fotoğrafları: src/assets/img/petitions/<dilekçe adresi>.jpg
const pages = import.meta.glob<{ default: ImageMetadata }>('../assets/img/pages/*.jpg', { eager: true });
const petitions = import.meta.glob<{ default: ImageMetadata }>('../assets/img/petitions/*.jpg', { eager: true });

export function pageImage(key: string) {
  return pages[`../assets/img/pages/${key}.jpg`]?.default;
}

export function petitionImage(id: string) {
  return petitions[`../assets/img/petitions/${id}.jpg`]?.default;
}
