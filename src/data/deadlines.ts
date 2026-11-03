// Süre hesaplayıcıdaki işlemler. unit: g = gün, i = iş günü, h = hafta, a = ay.
// Her süre ve madde yayından önce büro tarafından kontrol edilmelidir.
type Localized = { tr: string; en: string; ru: string };

export type Deadline = { label: Localized; n: number; unit: 'g' | 'i' | 'h' | 'a'; law: string };

export const deadlines: Deadline[] = [
  {
    label: { tr: 'Ödeme emrine itiraz', en: 'Objection to a payment order', ru: 'Возражение на платёжное требование' },
    n: 7,
    unit: 'g',
    law: 'İİK m. 62',
  },
  {
    label: { tr: 'Çek ve senet takibine itiraz', en: 'Objection in cheque or note proceedings', ru: 'Возражение по чеку или векселю' },
    n: 5,
    unit: 'g',
    law: 'İİK m. 168',
  },
  {
    label: { tr: 'İşe iade için arabulucuya başvuru', en: 'Mediation application for reinstatement', ru: 'Обращение к медиатору для восстановления' },
    n: 1,
    unit: 'a',
    law: 'İş K. m. 20',
  },
  {
    label: { tr: 'Arabuluculuk sonrası işe iade davası', en: 'Reinstatement lawsuit after mediation', ru: 'Иск о восстановлении после медиации' },
    n: 2,
    unit: 'h',
    law: 'İş K. m. 20',
  },
  {
    label: { tr: 'Yetki tespitine itiraz', en: 'Objection to a competence determination', ru: 'Оспаривание определения полномочий' },
    n: 6,
    unit: 'i',
    law: '6356 s. K. m. 43',
  },
  {
    label: { tr: 'İdari işleme karşı iptal davası', en: 'Annulment action against an administrative act', ru: 'Иск об отмене административного акта' },
    n: 60,
    unit: 'g',
    law: 'İYUK m. 7',
  },
  {
    label: { tr: 'İdari para cezasına itiraz', en: 'Objection to an administrative fine', ru: 'Обжалование административного штрафа' },
    n: 15,
    unit: 'g',
    law: 'Kabahatler K. m. 27',
  },
  {
    label: { tr: 'Sınır dışı etme kararına itiraz', en: 'Challenge to a deportation order', ru: 'Обжалование решения о депортации' },
    n: 7,
    unit: 'g',
    law: 'YUKK m. 53',
  },
  {
    label: { tr: 'Genel kurul kararının iptali', en: 'Annulment of a general meeting resolution', ru: 'Отмена решения общего собрания' },
    n: 3,
    unit: 'a',
    law: 'TTK m. 445',
  },
  {
    label: { tr: 'Mirasın reddi', en: 'Disclaimer of inheritance', ru: 'Отказ от наследства' },
    n: 3,
    unit: 'a',
    law: 'TMK m. 606',
  },
  {
    label: { tr: 'Mesafeli satışta cayma', en: 'Withdrawal from a distance sale', ru: 'Отказ от дистанционной покупки' },
    n: 14,
    unit: 'g',
    law: 'TKHK m. 48',
  },
  {
    label: { tr: 'İstinaf başvurusu (hukuk)', en: 'Appeal (civil cases)', ru: 'Апелляция (гражданские дела)' },
    n: 2,
    unit: 'h',
    law: 'HMK m. 345',
  },
  {
    label: { tr: 'Temyiz başvurusu (hukuk)', en: 'Appeal on points of law (civil cases)', ru: 'Кассация (гражданские дела)' },
    n: 1,
    unit: 'a',
    law: 'HMK m. 361',
  },
];
