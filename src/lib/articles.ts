import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Article = CollectionEntry<'articles'>;

// id biçimi: "<dil>/<adres>"
export function articleLang(entry: Article) {
  return entry.id.split('/')[0] as Lang;
}

export function articleSlug(entry: Article) {
  return entry.id.split('/').slice(1).join('/');
}

export async function articlesFor(lang: Lang) {
  const all = await getCollection('articles', (e) => articleLang(e) === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const locales: Record<Lang, string> = { tr: 'tr-TR', en: 'en-GB', ru: 'ru-RU' };

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(locales[lang], { day: 'numeric', month: 'long', year: 'numeric' });
}
