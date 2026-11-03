import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { routes, type Lang } from '../i18n/ui';

export type AreaEntry = CollectionEntry<'areas'>;

// Kart ve sayfa görselleri: src/assets/img/areas/<alan kimliği>.jpg
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/img/areas/*.jpg', { eager: true });

export function areaImage(id: string) {
  return images[`../assets/img/areas/${id}.jpg`]?.default;
}

// id biçimi: "<dil>/<adres>"
export function areaEntryLang(entry: AreaEntry) {
  return entry.id.split('/')[0] as Lang;
}

export function areaEntrySlug(entry: AreaEntry) {
  return entry.id.split('/').slice(1).join('/');
}

export function areaHref(entry: AreaEntry) {
  const lang = areaEntryLang(entry);
  return `/${lang}/${routes.practice[lang]}/${areaEntrySlug(entry)}/`;
}

// Alan kimliğinden o dildeki sayfa adresi; sayfası henüz yazılmamış alan için undefined
export async function areaLinks(lang: Lang) {
  const entries = await getCollection('areas', (e) => areaEntryLang(e) === lang);
  return Object.fromEntries(entries.map((e) => [e.data.key, areaHref(e)])) as Record<string, string | undefined>;
}
