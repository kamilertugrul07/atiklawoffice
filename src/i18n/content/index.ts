import type { AreaId } from '../../data/office';
import type { Lang } from '../ui';
import { en } from './en';
import { ru } from './ru';
import { tr, type Content } from './tr';

const content: Record<Lang, Content> = { tr, en, ru };

export function c(lang: Lang) {
  return content[lang];
}

// Faaliyet alanı ya da arabuluculuk konusunun o dildeki adı
export function areaTitle(lang: Lang, id: AreaId) {
  const k = content[lang];
  return (
    k.contact.mediationTopics.find((m) => m.id === id)?.label ??
    k.practice.areas.find((a) => a.id === id)?.title ??
    id
  );
}
