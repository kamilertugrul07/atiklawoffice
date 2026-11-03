export const languages = { tr: 'TR', en: 'EN', ru: 'RU' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

// Her dilde sayfa adresleri
export const routes = {
  mediation: { tr: 'arabuluculuk', en: 'mediation', ru: 'mediatsiya' },
  practice: { tr: 'faaliyet-alanlari', en: 'practice-areas', ru: 'napravleniya' },
  about: { tr: 'hakkimizda', en: 'about', ru: 'o-nas' },
  resources: { tr: 'dilekceler', en: 'petitions', ru: 'zayavleniya' },
  articles: { tr: 'makaleler', en: 'articles', ru: 'stati' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty' },
  privacy: { tr: 'kvkk', en: 'privacy', ru: 'konfidentsialnost' },
} as const;
export type RouteKey = keyof typeof routes;

// Üst menüde görünen sayfalar
export const navKeys = ['mediation', 'practice', 'about', 'resources', 'articles', 'contact'] as const;

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
      home: 'Ana sayfa',
      mediation: 'Arabuluculuk',
      practice: 'Faaliyet alanları',
      about: 'Hakkımızda',
      resources: 'Dilekçeler',
      articles: 'Makaleler',
      contact: 'İletişim',
    },
    cta: 'Görüşme talep edin',
    meta: {
      title: 'Atik Hukuk Bürosu | Avukatlık ve Arabuluculuk',
      description:
        'Atik Hukuk Bürosu: avukatlık, hukuki danışmanlık ve ticari, iş ve kira uyuşmazlıklarında arabuluculuk. Alanya’daki ofisimizde ya da çevrim içi.',
    },
    hero: {
      title: 'Hakkın olduğu yerde\nçaresi de vardır.',
      lead: 'O çare bazen bir dava, bazen bir masada varılan anlaşmadır. Kimi zaman mahkemede aranır, kimi zaman karşılıklı oturulan bir masada bulunur. Avukatlık ve arabuluculukla iki yolda da yanınızdayız.',
      secondary: 'Faaliyet alanları',
      directions: 'Yol tarifi',
    },
    intro: {
      title: 'Arabuluculuk, iki tarafın birlikte karar verdiği yoldur.',
      lead: 'Hakkın olduğu yerde çare de vardır; bazen o çare bir masadadır. Tarafsız bir arabulucu, tarafların birbirini dinlemesini ve kendi çözümlerini bulmasını kolaylaştırır.',
      points: [
        { title: 'Gizlilik', text: 'Masada konuşulanlar masada kalır; anlaşma olmazsa davada delil olarak kullanılamaz.' },
        { title: 'İrade', text: 'Sonucu taraflar belirler; kimse istemediği bir çözüme zorlanmaz.' },
        { title: 'Süreklilik', text: 'Ticari, ailevi ya da komşuluk ilişkisi uyuşmazlıktan sonra da sürebilir.' },
        { title: 'Esneklik', text: 'Görüşmeler ofiste ya da çevrim içi yapılır; dava sürerken de başvurulabilir.' },
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
      home: 'Home',
      mediation: 'Mediation',
      practice: 'Practice areas',
      about: 'About us',
      resources: 'Petitions',
      articles: 'Articles',
      contact: 'Contact',
    },
    cta: 'Request a meeting',
    meta: {
      title: 'Atik Law Office | Law & Mediation',
      description:
        'Atik Law Office: legal representation and advice, and mediation for commercial, employment and tenancy disputes. At our office in Alanya or online.',
    },
    hero: {
      title: 'Where there is a right,\nthere is a remedy.',
      lead: 'That remedy is sometimes a lawsuit, sometimes an agreement reached at the table. At times it is sought in court; at times it is found when both sides sit down face to face. With legal practice and mediation, we stand by you on both paths.',
      secondary: 'Practice areas',
      directions: 'Directions',
    },
    intro: {
      title: 'Mediation is the path where both sides decide together.',
      lead: 'Where there is a right, there is a remedy; sometimes that remedy is found at a table. An impartial mediator helps the parties listen to each other and find their own solution.',
      points: [
        { title: 'Confidentiality', text: 'What is said at the table stays at the table; if no agreement is reached, it cannot be used as evidence in court.' },
        { title: 'Autonomy', text: 'The parties decide the outcome; no one is pressed into a solution they do not want.' },
        { title: 'Continuity', text: 'Business, family or neighbourly relationships can continue after the dispute.' },
        { title: 'Flexibility', text: 'Sessions take place at our office or online, and mediation is possible even during a lawsuit.' },
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
      home: 'Главная',
      mediation: 'Медиация',
      practice: 'Направления',
      about: 'О нас',
      resources: 'Заявления',
      articles: 'Статьи',
      contact: 'Контакты',
    },
    cta: 'Запросить встречу',
    meta: {
      title: 'Юридическая фирма Atik | Право и медиация',
      description:
        'Юридическая фирма Atik: представительство, консультации и медиация в коммерческих, трудовых и арендных спорах. В офисе в Аланье или онлайн.',
    },
    hero: {
      title: 'Где есть право,\nтам есть и защита.',
      lead: 'Иногда это судебный процесс, иногда соглашение, достигнутое за столом переговоров. Порой его ищут в суде, порой находят, сев друг напротив друга за один стол. Адвокатская практика и медиация: мы рядом с вами на обоих путях.',
      secondary: 'Направления практики',
      directions: 'Как добраться',
    },
    intro: {
      title: 'Медиация — это путь, на котором стороны решают вместе.',
      lead: 'Где есть право, там есть и защита; порой её находят за столом переговоров. Беспристрастный медиатор помогает сторонам услышать друг друга и найти собственное решение.',
      points: [
        { title: 'Конфиденциальность', text: 'Сказанное за столом остаётся за столом; если соглашение не достигнуто, это нельзя использовать как доказательство в суде.' },
        { title: 'Воля сторон', text: 'Результат определяют стороны; никого не принуждают к решению, которого он не хочет.' },
        { title: 'Сохранение отношений', text: 'Деловые, семейные или соседские отношения могут продолжиться и после спора.' },
        { title: 'Гибкость', text: 'Встречи проходят в офисе или онлайн; к медиации можно обратиться и во время судебного процесса.' },
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
