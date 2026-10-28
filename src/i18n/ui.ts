export const languages = { tr: 'TR', en: 'EN', ru: 'RU' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

// Her dilde sayfa adresleri
export const routes = {
  mediation: { tr: 'arabuluculuk', en: 'mediation', ru: 'mediatsiya' },
  practice: { tr: 'faaliyet-alanlari', en: 'practice-areas', ru: 'napravleniya' },
  about: { tr: 'hakkimizda', en: 'about', ru: 'o-nas' },
  articles: { tr: 'yazilar', en: 'articles', ru: 'stati' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty' },
  privacy: { tr: 'kvkk', en: 'privacy', ru: 'konfidentsialnost' },
} as const;
export type RouteKey = keyof typeof routes;

// Üst menüde görünen sayfalar
export const navKeys = ['mediation', 'practice', 'about', 'articles', 'contact'] as const;

export function path(lang: Lang, key?: RouteKey) {
  return key ? `/${lang}/${routes[key][lang]}/` : `/${lang}/`;
}

export const ui = {
  tr: {
    htmlLang: 'tr',
    firmName: 'Atik Hukuk Bürosu',
    skip: 'İçeriğe geç',
    menu: 'Menü',
    close: 'Kapat',
    nav: {
      mediation: 'Arabuluculuk',
      practice: 'Faaliyet alanları',
      about: 'Hakkımızda',
      articles: 'Yazılar',
      contact: 'İletişim',
    },
    cta: 'Görüşme talep edin',
    meta: {
      title: 'Atik Hukuk Bürosu | Alanya',
      description:
        'Alanya merkezli Atik Hukuk Bürosu: avukatlık, hukuki danışmanlık ve ticari, iş ve kira uyuşmazlıklarında arabuluculuk.',
    },
    hero: {
      title: 'Davada temsil, masada çözüm.',
      lead: 'Alanya’da avukatlık ve arabuluculuk bir arada: şirketlere ve bireylere hukuki danışmanlık, davalarda temsil ve uyuşmazlıkları mahkemeye taşımadan çözmek için arabuluculuk. Ofisimizde ya da çevrim içi.',
      secondary: 'Faaliyet alanları',
      directions: 'Yol tarifi',
    },
    intro: {
      title: 'Arabuluculuk, iki tarafın birlikte karar verdiği yoldur.',
      body: [
        'Arabuluculukta karar bir hâkime bırakılmaz. Tarafsız bir arabulucu, tarafların birbirini dinlemesini ve kendi çözümlerini bulmasını kolaylaştırır. Görüşmeler gizlidir; anlaşma sağlanırsa imzalanan belge, mahkeme kararı gibi uygulanabilir.',
        'Arabuluculuk yalnızca kanunun zorunlu tuttuğu durumlara özgü değildir. Ticari, ailevi ya da komşuluk ilişkisinden doğan pek çok uyuşmazlıkta taraflar arabulucuya kendi istekleriyle başvurabilir; dava açılmış olsa bile bu yol açıktır.',
      ],
    },
    whatsapp: { label: 'WhatsApp ile yazın', text: 'Merhaba, görüşme talebinde bulunmak istiyorum.' },
    footer: {
      bar: 'Antalya Barosu',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    htmlLang: 'en',
    firmName: 'Atik Law Office',
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    nav: {
      mediation: 'Mediation',
      practice: 'Practice areas',
      about: 'About us',
      articles: 'Articles',
      contact: 'Contact',
    },
    cta: 'Request a meeting',
    meta: {
      title: 'Atik Law Office | Alanya, Türkiye',
      description:
        'Atik Law Office in Alanya: mediation for commercial, employment and tenancy disputes; legal representation and advice.',
    },
    hero: {
      title: 'Representation in court, resolution at the table.',
      lead: 'Legal practice and mediation under one roof in Alanya: advice for companies and individuals, representation in litigation, and mediation to settle disputes without going to court. At our office or online.',
      secondary: 'Practice areas',
      directions: 'Directions',
    },
    intro: {
      title: 'Mediation is the path where both sides decide together.',
      body: [
        'In mediation, the decision is not left to a judge. An impartial mediator helps the parties listen to each other and find their own solution. Sessions are confidential, and a signed settlement can be enforced like a court judgment.',
        'Mediation is not limited to cases where the law requires it. In many disputes arising from business, family or neighbourly relations, the parties can turn to a mediator voluntarily, even after a lawsuit has been filed.',
      ],
    },
    whatsapp: { label: 'Message us on WhatsApp', text: 'Hello, I would like to request a meeting.' },
    footer: {
      bar: 'Antalya Bar Association',
      rights: 'All rights reserved.',
    },
  },
  ru: {
    htmlLang: 'ru',
    firmName: 'Юридическая фирма Atik',
    skip: 'Перейти к содержанию',
    menu: 'Меню',
    close: 'Закрыть',
    nav: {
      mediation: 'Медиация',
      practice: 'Направления',
      about: 'О нас',
      articles: 'Статьи',
      contact: 'Контакты',
    },
    cta: 'Запросить встречу',
    meta: {
      title: 'Юридическая фирма Atik | Аланья, Турция',
      description:
        'Юридическая фирма Atik в Аланье: медиация в коммерческих, трудовых и арендных спорах; юридическое представительство и консультации.',
    },
    hero: {
      title: 'Защита в суде, решение за столом переговоров.',
      lead: 'Адвокатская практика и медиация в Аланье: консультации для компаний и частных лиц, представительство в суде и медиация, чтобы урегулировать спор без обращения в суд. В нашем офисе или онлайн.',
      secondary: 'Направления практики',
      directions: 'Как добраться',
    },
    intro: {
      title: 'Медиация — это путь, на котором стороны решают вместе.',
      body: [
        'В медиации решение не принимает судья. Беспристрастный медиатор помогает сторонам услышать друг друга и найти собственное решение. Переговоры конфиденциальны, а подписанное соглашение исполняется как решение суда.',
        'Медиация применяется не только там, где её требует закон. Во многих спорах, возникающих из деловых, семейных или соседских отношений, стороны могут обратиться к медиатору добровольно — даже после подачи иска.',
      ],
    },
    whatsapp: { label: 'Написать в WhatsApp', text: 'Здравствуйте! Хочу записаться на встречу.' },
    footer: {
      bar: 'Коллегия адвокатов Анталии',
      rights: 'Все права защищены.',
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
