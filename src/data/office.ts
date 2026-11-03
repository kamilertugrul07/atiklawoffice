// Büro ve ekip bilgileri: tek kaynak. Boş alanlar henüz bildirilmedi.

export const office = {
  address: {
    street: 'Hacet Mahallesi, Alaiye Caddesi, No: 28/1, Kaçmaz Apartmanı',
    district: 'Alanya',
    city: 'Antalya',
    country: 'Türkiye',
  },
  phone: '0242 511 12 99',
  phoneHref: 'tel:+902425111299',
  // WhatsApp ofis hattında; uluslararası biçimde, başında + olmadan
  whatsapp: '902425111299',
  email: '',
  kep: '',
  linkedin: '',
  // İletişim formu: web3forms.com'dan büro e-postasıyla alınan erişim anahtarı
  web3formsKey: '1a27297c-f1cc-414b-a8f3-741aa3bb955f',
  // Google Haritalar'daki büro kaydı ve gömülü harita için koordinat
  mapsLink: 'https://maps.app.goo.gl/pfhonBTgYxkQJw9p7',
  mapsCoords: '36.5511413,32.0081028',
  // Google Haritalar'da ziyaretçinin konumundan ofise yol tarifi
  directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=36.5511413,32.0081028',
};

// Faaliyet alanı kimlikleri (src/i18n/content/*.ts içindeki practice.areas[].id ile aynı)
// ve arabuluculuk konuları. İletişim formunda konuya göre avukat önerisi bunlarla yapılır.
export type AreaId =
  | 'mediation-voluntary'
  | 'mediation-mandatory'
  | 'corporate'
  | 'administrative'
  | 'contracts'
  | 'enforcement'
  | 'employment'
  | 'union'
  | 'realestate'
  | 'immigration'
  | 'citizenship'
  | 'family'
  | 'inheritance'
  | 'criminal'
  | 'consumer'
  | 'international';

type Localized = { tr: string; en: string; ru: string };

export type Lawyer = {
  name: string;
  // Avukat sayfasının adresi: /tr/hakkimizda/<slug>/
  slug: string;
  // public/ altındaki fotoğraf yolu (ör. '/team/ibrahim-atik.jpg'); boşsa baş harfler gösterilir
  photo: string;
  title: Localized;
  university: string;
  email: string;
  // Tüm avukatlar ofis hattını kullanıyor
  phone: string;
  isMediator: boolean;
  // Konuştuğu diller; boşsa gösterilmez
  languages: Localized;
  // Özgeçmiş metni; boşsa pencerede gösterilmez
  bio: Localized;
  // Çalışma alanları; ilk sıradaki alanlar formdaki öneride önceliklidir
  areas: AreaId[];
};

const attorney = { tr: 'Avukat', en: 'Attorney', ru: 'Адвокат' };
const noBio = { tr: '', en: '', ru: '' };
const trEn = { tr: 'Türkçe, İngilizce', en: 'Turkish, English', ru: 'турецкий, английский' };

// Sıra sitede her yerde aynıdır: İnci, İbrahim, Bihter
export const team: Lawyer[] = [
  {
    name: 'İnci Atik',
    slug: 'inci-atik',
    photo: '',
    title: attorney,
    university: 'Hasan Kalyoncu Üniversitesi Hukuk Fakültesi',
    email: 'incitvl@gmail.com',
    phone: office.phone,
    isMediator: false,
    languages: trEn,
    bio: {
      tr: "Av. İnci Atik, Hasan Kalyoncu Üniversitesi Hukuk Fakültesi'nden mezun oldu. Meslek hayatına Alanya'da Arslan Hukuk Bürosu'nda adım attı, ardından Tuncay Barcın Hukuk Bürosu'nda çalışmalarını sürdürdü. Bugün Atik Hukuk Bürosu'nda avukat olarak çalışıyor.\n\nAtik Hukuk Bürosu'na icra ve iflas, tüketici, uluslararası hukuk ve vatandaşlık alanlarındaki birikimini taşıdı. Türkçenin yanı sıra İngilizce de çalışabilmesi, dil engelini ortadan kaldırarak yabancı uyruklu müvekkillerle güvene dayalı bir iletişim kurmasını sağlıyor.",
      en: "Av. İnci Atik graduated from Hasan Kalyoncu University Faculty of Law, began practising at Arslan Law Office in Alanya and went on to work at Tuncay Barcın Law Office. Today İnci Atik practises as an attorney at Atik Law Office.\n\nİnci Atik brought to the office a background in enforcement and bankruptcy, consumer law, international law and citizenship. Working in English as well as Turkish removes the language barrier and makes communication with foreign clients one built on trust.",
      ru: "Av. İnci Atik — выпускник юридического факультета Университета Хасана Калйонджу. Профессиональный путь начинается в Arslan Hukuk Bürosu в Аланье и продолжается в Tuncay Barcın Hukuk Bürosu. Сегодня — адвокат Юридической фирмы Atik.\n\nОпыт в области исполнительного производства и банкротства, защиты прав потребителей, международного права и гражданства — вклад İnci Atik в работу бюро. Владение английским наряду с турецким снимает языковой барьер и позволяет выстраивать с иностранными клиентами общение, основанное на доверии.",
    },
    areas: ['enforcement', 'consumer', 'international', 'citizenship'],
  },
  {
    name: 'İbrahim Atik',
    slug: 'ibrahim-atik',
    photo: '',
    title: { tr: 'Avukat & Arabulucu', en: 'Attorney & Mediator', ru: 'Адвокат и медиатор' },
    university: 'Selçuk Üniversitesi Hukuk Fakültesi',
    email: 'av.ibrahimatik@gmail.com',
    phone: office.phone,
    isMediator: true,
    languages: trEn,
    bio: {
      tr: "Av. Arb. İbrahim Atik, Selçuk Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra avukatlık ruhsatını alarak mesleğe başladı. Kurucu ortağı olduğu Atik & Şahin Hukuk Bürosu ile meslek yolculuğunda emin adımlarla ilerledi.\n\nArdından Atik Hukuk Bürosu'nu kurdu ve o günden bu yana büronun yönetici avukatı olarak çalışıyor. Arabulucu unvanını da alarak büroyu, avukatlığın yanında arabuluculuk hizmeti de veren bir yapıya kavuşturdu.\n\nGayrimenkul, kira, kadastro, icra ve iflas, şirketler, aile ve miras hukuku gibi alanlardaki birikimini arabuluculukla birleştirerek büronun her uyuşmazlıkta iki yolda da hizmet vermesini sağlıyor. Türkçenin yanı sıra İngilizce de çalışabilmesi, yabancı uyruklu müvekkillerle güvene dayalı bir iletişim kurmasına imkân tanıyor.",
      en: "Av. Arb. İbrahim Atik graduated from Selçuk University Faculty of Law and, after obtaining a licence to practise, began a career as an attorney. As a founding partner of Atik & Şahin Law Office, İbrahim Atik moved forward in the profession with steady steps.\n\nİbrahim Atik then founded Atik Law Office and has served as its managing attorney ever since. Qualifying as a mediator brought mediation into the office alongside its legal practice.\n\nBy combining a background in real estate, tenancy, cadastre, enforcement and bankruptcy, corporate, family and inheritance law with mediation, İbrahim Atik enables the office to offer both paths in every dispute. Working in English as well as Turkish makes communication with foreign clients one built on trust.",
      ru: "Av. Arb. İbrahim Atik — выпускник юридического факультета Университета Сельчук. Профессиональный путь начинается с получения адвокатской лицензии; затем — бюро Atik & Şahin Hukuk Bürosu, одним из учредителей которого является İbrahim Atik, и уверенные шаги в профессии.\n\nЗатем основана Юридическая фирма Atik, которой İbrahim Atik с тех пор руководит как управляющий адвокат. Статус медиатора позволил бюро наряду с адвокатской практикой оказывать и услуги медиации.\n\nОпыт в области недвижимости, аренды, кадастра, исполнительного производства и банкротства, корпоративного, семейного и наследственного права в сочетании с медиацией позволяет бюро предлагать в каждом споре оба пути. Владение английским наряду с турецким позволяет выстраивать с иностранными клиентами общение, основанное на доверии.",
    },
    areas: [
      'realestate',
      'enforcement',
      'corporate',
      'contracts',
      'employment',
      'immigration',
      'citizenship',
      'family',
      'inheritance',
      'criminal',
      'consumer',
      'international',
      'mediation-voluntary',
      'mediation-mandatory',
    ],
  },
  {
    name: 'Bihter Gönültaş',
    slug: 'bihter-gonultas',
    photo: '',
    title: attorney,
    university: 'Erzurum Üniversitesi Hukuk Fakültesi',
    email: '',
    phone: office.phone,
    isMediator: false,
    languages: noBio,
    bio: noBio,
    areas: [],
  },
];
