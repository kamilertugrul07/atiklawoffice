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
  web3formsKey: '',
  // Google Haritalar'daki büro kaydı ve gömülü harita için koordinat
  mapsLink: 'https://maps.app.goo.gl/pfhonBTgYxkQJw9p7',
  mapsCoords: '36.5511413,32.0081028',
};

// Faaliyet alanı kimlikleri (src/i18n/content/*.ts içindeki practice.areas[].id ile aynı)
// ve arabuluculuk konuları. İletişim formunda konuya göre avukat önerisi bunlarla yapılır.
export type AreaId =
  | 'mediation-voluntary'
  | 'mediation-mandatory'
  | 'corporate'
  | 'contracts'
  | 'enforcement'
  | 'employment'
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
  title: Localized;
  university: string;
  email: string;
  // Tüm avukatlar ofis hattını kullanıyor
  phone: string;
  isMediator: boolean;
  // Özgeçmiş metni; boşsa pencerede gösterilmez
  bio: Localized;
  // Çalışma alanları; ilk sıradaki alanlar formdaki öneride önceliklidir
  areas: AreaId[];
};

const attorney = { tr: 'Avukat', en: 'Attorney', ru: 'Адвокат' };
const noBio = { tr: '', en: '', ru: '' };

export const team: Lawyer[] = [
  {
    name: 'İbrahim Atik',
    title: { tr: 'Avukat & Arabulucu', en: 'Attorney & Mediator', ru: 'Адвокат и медиатор' },
    university: 'Selçuk Üniversitesi Hukuk Fakültesi',
    email: 'av.ibrahimatik@gmail.com',
    phone: office.phone,
    isMediator: true,
    bio: noBio,
    areas: ['mediation-voluntary', 'mediation-mandatory'],
  },
  {
    name: 'Bihter Gönültaş',
    title: attorney,
    university: 'Erzurum Üniversitesi Hukuk Fakültesi',
    email: '',
    phone: office.phone,
    isMediator: false,
    bio: noBio,
    areas: [],
  },
  {
    name: 'İnci Atik',
    title: attorney,
    university: 'Hasan Kalyoncu Üniversitesi Hukuk Fakültesi',
    email: '',
    phone: office.phone,
    isMediator: false,
    bio: noBio,
    areas: [],
  },
];
