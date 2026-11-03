import { getCollection, type CollectionEntry } from 'astro:content';
import { routes, type Lang } from '../i18n/ui';

export type Petition = CollectionEntry<'petitions'>;

// Dilekçe metni yalnız Türkçedir; yalnız açıklamalar dile göre değişir
export function petitionInfo(entry: Petition, lang: Lang) {
  const d = entry.data;
  return lang === 'tr' ? d : { ...d, ...d.i18n[lang] };
}

export function petitionHref(entry: Petition, lang: Lang) {
  return `/${lang}/${routes.resources[lang]}/${entry.id}/`;
}

export function petitionDownload(entry: Petition) {
  return `/indir/dilekce/${entry.id}`;
}

export async function petitionsFor(area?: string) {
  const all = await getCollection('petitions', (e) => !area || e.data.area === area);
  return all.sort((a, b) => a.data.order - b.data.order);
}
