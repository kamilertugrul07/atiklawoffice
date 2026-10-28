// Sayfa metinleri (Türkçe). EN ve RU dosyaları aynı yapıyı izler.
// Mevzuat atıfları yayından önce büro tarafından kontrol edilmelidir.

export const tr = {
  home: {
    practiceTitle: 'Faaliyet alanları',
    practiceLead:
      'Arabuluculuğun yanında şirketlere ve bireylere avukatlık ve hukuki danışmanlık hizmeti veriyoruz.',
    practiceLink: 'Tüm faaliyet alanları',
    teamTitle: 'Avukatlarımız',
    teamLink: 'Hakkımızda',
    contactTitle: 'Bir görüşme planlayalım.',
    contactLead: 'Talebinizi iletin; ofisimizde ya da çevrim içi görüşme için size uygun zamanı birlikte belirleyelim.',
  },

  mediation: {
    title: 'Arabuluculuk',
    lead: 'Tarafların, tarafsız bir arabulucu eşliğinde uyuşmazlığı kendi iradeleriyle, gizli ve esnek bir süreçte çözdüğü yol.',
    whyTitle: 'Taraflar arabuluculuğu neden tercih eder?',
    why: [
      {
        title: 'Takvimi taraflar belirler',
        body: 'İhtiyari arabuluculukta toplantıların zamanı, yeri ve sıklığı taraflarla birlikte planlanır. Süreç, yıllar sürebilecek bir davaya göre çok daha kısa sürede sonuçlanabilir.',
      },
      {
        title: 'Gizlilik',
        body: 'Görüşmelerde söylenenler ve sunulan belgeler gizlidir; anlaşma sağlanamazsa sonradan açılan davada delil olarak kullanılamaz.',
      },
      {
        title: 'İlişkinin korunması',
        body: 'Taraflar karşı karşıya değil, aynı masada oturur. Ticari, ailevi ya da komşuluk ilişkisinin sürmesi çoğu zaman bu sayede mümkün olur.',
      },
      {
        title: 'Karar tarafların elinde',
        body: 'Sonucu bir hâkim değil, taraflar belirler. Anlaşma sağlanmazsa dava yolu açık kalır.',
      },
    ],
    voluntaryTitle: 'İhtiyari arabuluculuk',
    voluntaryLead:
      'Arabuluculuk yalnızca kanunun zorunlu tuttuğu durumlara özgü değildir. Taraflar, üzerinde serbestçe tasarruf edebildikleri her uyuşmazlıkta arabulucuya kendi istekleriyle başvurabilir.',
    voluntary: [
      {
        title: 'Arabulucuyu taraflar seçer',
        body: 'Zorunlu arabuluculukta arabulucu listeden atanır; ihtiyari arabuluculukta ise taraflar arabulucuyu birlikte belirler.',
      },
      {
        title: 'Dava sürerken de mümkündür',
        body: 'Dava açılmış olsa bile taraflar yargılamanın her aşamasında arabulucuya başvurmayı kararlaştırabilir. Mahkeme de tarafları bu yola teşvik edebilir.',
      },
      {
        title: 'Esnek ve çevrim içi',
        body: 'Görüşmeler ofisimizde ya da taraflar uygun gördüğünde video konferansla yapılabilir; farklı şehir ya da ülkelerdeki taraflar da sürece katılabilir.',
      },
      {
        title: 'Anlaşma uygulanabilir',
        body: 'Taraflar, avukatları ve arabulucunun birlikte imzaladığı anlaşma belgesi ilam niteliğinde belge sayılır; diğer durumlarda mahkemeden icra edilebilirlik şerhi alınabilir.',
      },
    ],
    scopeTitle: 'Hangi uyuşmazlıklarda başvurulabilir?',
    scope: [
      'Şirketler arası ticari ilişkiler ve sözleşmeler',
      'Ortaklar arası uyuşmazlıklar',
      'İnşaat ve kat karşılığı inşaat sözleşmeleri',
      'Gayrimenkul, kira ve komşuluk ilişkileri',
      'Miras paylaşımı ve ortaklığın giderilmesi',
      'Boşanmanın mali sonuçları ve mal paylaşımı',
      'Yabancı şirket ve yatırımcıların taraf olduğu uyuşmazlıklar',
      'İşçi ve işveren arasındaki ilişkiler',
    ],
    scopeNote: 'Aile içi şiddet iddiası içeren uyuşmazlıklar ve tarafların üzerinde serbestçe tasarruf edemediği konular arabuluculuğa elverişli değildir.',
    processTitle: 'Süreç nasıl işler?',
    process: [
      {
        title: 'Başvuru',
        body: 'Taraflardan biri ya da her ikisi büromuza başvurur. Diğer taraf, arabuluculuk davetini kabul ederse süreç başlar.',
      },
      {
        title: 'Ön görüşme',
        body: 'Arabulucu, sürecin işleyişini, gizlilik kurallarını ve ücreti açıklar; toplantıların takvimi taraflarla birlikte belirlenir.',
      },
      {
        title: 'Müzakere',
        body: 'Ortak ve ayrı oturumlarla tarafların menfaatleri ve seçenekleri ele alınır. Arabulucu karar vermez, çözüm dayatmaz; iletişimi kolaylaştırır.',
      },
      {
        title: 'Anlaşma belgesi',
        body: 'Süreç anlaşma ya da anlaşmama ile sona erer ve son tutanak düzenlenir. Anlaşma hâlinde imzalanan belge taraflar için bağlayıcıdır.',
      },
    ],
    mandatoryTitle: 'Zorunlu arabuluculuk',
    mandatoryLead: 'Aşağıdaki uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak kanunen zorunludur. Bu süreçlerde de arabulucu ve avukat olarak yanınızdayız.',
    mandatory: [
      { title: 'Ticari alacak ve tazminat talepleri', basis: 'TTK m. 5/A', duration: '6 hafta + en fazla 2 hafta' },
      { title: 'İşçi ve işveren alacakları, işe iade', basis: '7036 s. Kanun m. 3', duration: '3 hafta + en fazla 1 hafta' },
      { title: 'Tüketici uyuşmazlıkları', basis: 'TKHK m. 73/A', duration: '3 hafta + en fazla 1 hafta' },
      { title: 'Kira, ortaklığın giderilmesi, kat mülkiyeti, komşu hakkı', basis: 'HUAK m. 18/B', duration: '3 hafta + en fazla 1 hafta' },
    ],
    durationLabel: 'Süre',
    mediatorTitle: 'Arabulucu',
    mediatorNote: 'Adalet Bakanlığı Arabulucular Siciline kayıtlı',
  },

  practice: {
    title: 'Faaliyet alanları',
    lead: 'Arabuluculuğun yanında şirketlere ve bireylere aşağıdaki alanlarda avukatlık ve hukuki danışmanlık hizmeti veriyoruz. Ayrıntılar için bir alana tıklayın.',
    more: 'Ayrıntılar',
    scopeLabel: 'Kapsam',
    factsLabel: 'Bilmeniz gerekenler',
    close: 'Kapat',
    note: 'Süreler ve tutarlar genel bilgi amaçlıdır; somut duruma ve mevzuat değişikliklerine göre farklılık gösterebilir.',
    areas: [
      {
        id: 'corporate',
        title: 'Ticaret ve şirketler hukuku',
        summary: 'Şirket kuruluşundan ortaklar arası uyuşmazlıklara kadar şirketlerin hukuki süreçleri.',
        items: [
          'Anonim ve limited şirket kuruluşu',
          'Esas sözleşme değişiklikleri, sermaye artırımı, pay devri',
          'Genel kurul ve yönetim kurulu kararları',
          'Ortaklar arası uyuşmazlıklar ve ortaklıktan çıkma',
        ],
        facts: [
          { label: 'Limited şirket asgari sermaye', value: '50.000 TL' },
          { label: 'Anonim şirket asgari sermaye', value: '250.000 TL' },
          { label: 'Genel kurul kararlarının iptali davası', value: 'Karar tarihinden itibaren 3 ay' },
        ],
      },
      {
        id: 'contracts',
        title: 'Sözleşmeler hukuku',
        summary: 'Ticari ve bireysel sözleşmelerin hazırlanması, incelenmesi ve müzakeresi.',
        items: [
          'Satış, tedarik, distribütörlük ve hizmet sözleşmeleri',
          'Gizlilik ve rekabet yasağı sözleşmeleri',
          'Sözleşme risk analizi ve müzakere desteği',
          'Sözleşmeye aykırılık ve tazminat talepleri',
        ],
        facts: [
          { label: 'Genel zamanaşımı', value: '10 yıl' },
          { label: 'Kira, faiz, ücret gibi dönemsel alacaklar', value: '5 yıl' },
          { label: 'Ticari alacaklarda dava öncesi', value: 'Zorunlu arabuluculuk' },
        ],
      },
      {
        id: 'enforcement',
        title: 'İcra ve iflas hukuku',
        summary: 'Alacakların tahsili, icra takipleri ve takiplere karşı savunma.',
        items: [
          'İlamlı ve ilamsız icra takipleri',
          'Kambiyo senetlerine dayalı takipler',
          'İtirazın iptali ve itirazın kaldırılması',
          'Haciz, satış ve iflas süreçleri',
        ],
        facts: [
          { label: 'Ödeme emrine itiraz (genel haciz)', value: '7 gün' },
          { label: 'Kambiyo senedine dayalı takipte itiraz', value: '5 gün' },
          { label: 'İtirazın iptali davası', value: 'İtirazın tebliğinden itibaren 1 yıl' },
          { label: 'İtirazın kaldırılması', value: 'İtirazın tebliğinden itibaren 6 ay' },
        ],
      },
      {
        id: 'employment',
        title: 'İş ve sosyal güvenlik hukuku',
        summary: 'İşçi ve işverenler için iş ilişkisinin kurulmasından sona ermesine kadar danışmanlık ve temsil.',
        items: [
          'İş sözleşmeleri ve işyeri iç düzenlemeleri',
          'Fesih süreçleri, kıdem ve ihbar tazminatı',
          'İşe iade davaları',
          'Sosyal güvenlik ve hizmet tespiti',
        ],
        facts: [
          { label: 'İşe iade için arabulucuya başvuru', value: 'Fesih bildiriminden itibaren 1 ay' },
          { label: 'Anlaşma sağlanamazsa işe iade davası', value: 'Son tutanaktan itibaren 2 hafta' },
          { label: 'Kıdem tazminatı ve işçilik alacakları', value: '5 yıl zamanaşımı' },
        ],
      },
      {
        id: 'realestate',
        title: 'Gayrimenkul ve kira hukuku',
        summary: 'Tapu, kira ve inşaat sözleşmelerinden doğan işlemler ve uyuşmazlıklar.',
        items: [
          'Tapu iptal ve tescil davaları',
          'Kira tespit, kira artışı ve tahliye',
          'Kat karşılığı inşaat sözleşmeleri',
          'Gayrimenkul alım satımında hukuki inceleme',
        ],
        facts: [
          { label: 'Konut ve çatılı işyeri kira artışı', value: 'Son 12 ay TÜFE ortalaması ile sınırlı' },
          { label: 'Kat karşılığı inşaat sözleşmesi', value: 'Noterde düzenleme şeklinde yapılmalı' },
          { label: 'Kira uyuşmazlıklarında dava öncesi', value: 'Zorunlu arabuluculuk' },
        ],
      },
      {
        id: 'immigration',
        title: 'Yabancılar hukuku',
        summary: 'Türkiye’de yaşayan ve çalışan yabancılar için ikamet ve çalışma izni süreçleri.',
        items: [
          'Kısa dönem, aile ve öğrenci ikamet izinleri',
          'Çalışma izni başvuruları',
          'İkamet izni reddine ve iptaline itiraz',
          'Sınır dışı etme ve giriş yasağı kararlarına karşı başvuru',
        ],
        facts: [
          { label: 'Kısa dönem ikamet izni', value: 'Her seferde en fazla 2 yıl' },
          { label: 'İlk çalışma izni', value: 'En fazla 1 yıl' },
          { label: 'İkamet başvurusu', value: 'Vize veya vize muafiyeti süresi dolmadan' },
        ],
      },
      {
        id: 'citizenship',
        title: 'Vatandaşlık hukuku',
        summary: 'Yatırım yoluyla ve diğer yollarla Türk vatandaşlığı başvuruları.',
        items: [
          'Gayrimenkul yatırımı yoluyla vatandaşlık',
          'Sermaye ve mevduat yatırımı yoluyla vatandaşlık',
          'Evlilik yoluyla vatandaşlık',
          'Başvuru dosyasının hazırlanması ve takibi',
        ],
        facts: [
          { label: 'Gayrimenkul yatırımı', value: 'En az 400.000 ABD doları' },
          { label: 'Satmama taahhüdü', value: '3 yıl' },
          { label: 'Evlilik yoluyla başvuru', value: 'En az 3 yıllık evlilik' },
        ],
      },
      {
        id: 'family',
        title: 'Aile hukuku',
        summary: 'Boşanma ve sonuçları ile yabancılık unsuru taşıyan aile uyuşmazlıkları.',
        items: [
          'Anlaşmalı ve çekişmeli boşanma',
          'Velayet, kişisel ilişki ve nafaka',
          'Mal rejiminin tasfiyesi',
          'Yabancı mahkeme boşanma kararlarının tanınması',
        ],
        facts: [
          { label: 'Anlaşmalı boşanma için evlilik süresi', value: 'En az 1 yıl' },
          { label: 'Mal rejimi tasfiyesi', value: 'Boşanmanın kesinleşmesinden itibaren 10 yıl' },
        ],
      },
      {
        id: 'inheritance',
        title: 'Miras hukuku',
        summary: 'Mirasın paylaşımı, mirasçılık belgesi ve mirasçılar arasındaki uyuşmazlıklar.',
        items: [
          'Mirasçılık belgesi (veraset ilamı)',
          'Vasiyetname düzenlenmesi',
          'Tenkis ve muris muvazaası davaları',
          'Ortaklığın giderilmesi',
        ],
        facts: [
          { label: 'Mirasın reddi', value: '3 ay' },
          { label: 'Tenkis davası', value: 'Öğrenmeden itibaren 1 yıl, her hâlde 10 yıl' },
          { label: 'Ortaklığın giderilmesinde dava öncesi', value: 'Zorunlu arabuluculuk' },
        ],
      },
      {
        id: 'criminal',
        title: 'Ceza hukuku',
        summary: 'Soruşturma ve kovuşturma aşamalarında müdafilik ve katılan vekilliği.',
        items: [
          'Soruşturma aşamasında ifade ve sorgu',
          'Kovuşturma aşamasında müdafilik',
          'Şikâyet ve katılan vekilliği',
          'Uzlaştırma süreçleri',
        ],
        facts: [
          { label: 'Şikâyete bağlı suçlarda şikâyet süresi', value: 'Fiili ve faili öğrenmeden itibaren 6 ay' },
          { label: 'Uzlaştırmaya tabi suçlarda', value: 'Önce uzlaştırma süreci işletilir' },
        ],
      },
      {
        id: 'consumer',
        title: 'Tüketici hukuku',
        summary: 'Satıcı, sağlayıcı ve tüketiciler arasındaki uyuşmazlıklar.',
        items: [
          'Ayıplı mal ve hizmet uyuşmazlıkları',
          'Mesafeli ve abonelik sözleşmeleri',
          'Konut satışında tüketici hakları',
          'Tüketici hakem heyeti başvuruları',
        ],
        facts: [
          { label: 'Mesafeli sözleşmelerde cayma hakkı', value: '14 gün' },
          { label: 'Ayıplı maldan sorumluluk', value: 'Teslimden itibaren 2 yıl' },
          { label: 'Hakem heyeti sınırını aşan uyuşmazlıklarda', value: 'Zorunlu arabuluculuk' },
        ],
      },
      {
        id: 'international',
        title: 'Uluslararası ticaret ve tahkim',
        summary: 'Yabancı unsurlu ticari ilişkiler, sözleşmeler ve yabancı kararların Türkiye’de uygulanması.',
        items: [
          'Uluslararası satış ve distribütörlük sözleşmeleri',
          'Tahkim şartlarının hazırlanması',
          'Yabancı mahkeme ve hakem kararlarının tanınması ve tenfizi',
          'Yabancı yatırımcılara Türkiye’de şirket kuruluşu',
        ],
        facts: [
          { label: 'Yabancı hakem kararları', value: 'New York Sözleşmesi çerçevesinde tenfiz edilebilir' },
          { label: 'Uluslararası uyuşmazlıklarda', value: 'İhtiyari arabuluculuk mümkündür' },
        ],
      },
    ],
  },

  about: {
    title: 'Hakkımızda',
    lead: 'Atik Hukuk Bürosu, Alanya’da avukatlık ve arabuluculuk hizmetlerini bir arada sunar.',
    firmTitle: 'Büromuz',
    firm: [
      'Büromuz, Antalya Barosuna kayıtlı avukatlarıyla Alanya’da şirketlere ve bireylere hukuki danışmanlık verir; dava ve icra takiplerinde temsil eder. Avukatlığın yanında, tarafları ortak bir çözümde buluşturan arabuluculuk hizmeti de sunar. Yabancı uyruklu kişi ve şirketlerle de çalışır; görüşmeler ofiste ya da çevrim içi yapılır.',
    ],
    principlesTitle: 'Çalışma ilkelerimiz',
    principles: [
      { title: 'Açıklık', body: 'Sürecin işleyişi, olası sonuçları ve maliyeti hakkında baştan anlaşılır bilgi veririz.' },
      { title: 'Gizlilik', body: 'Paylaşılan her bilgi meslek sırrı kapsamında korunur.' },
      { title: 'Ulaşılabilirlik', body: 'Görüşmeleri ofisimizde ya da çevrim içi, size uygun zamanda yaparız.' },
    ],
    lawyersTitle: 'Avukatlarımız',
    more: 'Özgeçmiş',
    cvTitle: 'Özgeçmiş',
    areasTitle: 'Çalışma alanları',
    education: 'Eğitim',
    bar: 'Baro',
    email: 'E-posta',
    phone: 'Telefon',
    close: 'Kapat',
  },

  articles: {
    title: 'Yazılar',
    lead: 'Arabuluculuk ve mevzuattaki değişiklikler üzerine bilgilendirici yazılar.',
    empty: 'Bu dilde henüz yazı yayımlanmadı.',
    back: 'Tüm yazılar',
    note: 'Bu yazı genel bilgilendirme amaçlıdır ve hukuki görüş niteliği taşımaz.',
  },

  contact: {
    title: 'İletişim',
    lead: 'Görüşme talebinizi iletin; ofisimizde ya da çevrim içi görüşme için size uygun zamanı birlikte belirleyelim.',
    formTitle: 'Görüşme talebi',
    fields: {
      name: 'Ad soyad',
      company: 'Şirket (varsa)',
      email: 'E-posta',
      phone: 'Telefon',
      topic: 'Konu',
      lawyer: 'Avukat',
      date: 'Tercih ettiğiniz tarih',
      time: 'Tercih ettiğiniz saat aralığı',
      mode: 'Görüşme şekli',
      message: 'Kısaca konunuz',
      consent:
        'Kişisel verilerimin görüşme talebimin değerlendirilmesi amacıyla işlenmesine ve formun yurt dışındaki e-posta iletim hizmeti üzerinden iletilmesine, KVKK aydınlatma metni çerçevesinde açık rıza veriyorum.',
      consentLink: 'Aydınlatma metnini okuyun',
    },
    mediationTopics: [
      { id: 'mediation-voluntary', label: 'İhtiyari arabuluculuk' },
      { id: 'mediation-mandatory', label: 'Zorunlu arabuluculuk (ticari, iş, tüketici, kira)' },
    ],
    topicGroups: { mediation: 'Arabuluculuk', practice: 'Avukatlık ve danışmanlık' },
    lawyerAny: 'Büro uygun avukatı belirlesin',
    lawyerHint: 'Seçtiğiniz konuya göre önerildi; dilerseniz değiştirebilirsiniz.',
    times: ['09:00 – 12:00', '12:00 – 15:00', '15:00 – 18:00'],
    modes: ['Ofiste', 'Çevrim içi'],
    optional: 'isteğe bağlı',
    submit: 'Talebi gönder',
    sending: 'Gönderiliyor…',
    success: 'Talebiniz alındı. Sizinle en kısa sürede iletişime geçeceğiz.',
    error: 'Talep gönderilemedi. Lütfen tekrar deneyin ya da bizi telefonla arayın.',
    infoTitle: 'Ofis',
    phone: 'Telefon',
    email: 'E-posta',
    kep: 'KEP',
    mapTitle: 'Konum',
    mapNote: 'Harita Google Haritalar üzerinden yüklenir ve Google’a bağlantı kurar.',
    mapButton: 'Haritayı göster',
    mapLink: 'Google Haritalar’da aç',
  },

  privacy: {
    title: 'KVKK aydınlatma metni',
    lead: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.',
    sections: [
      {
        title: 'Veri sorumlusu',
        body: [
          'Kişisel verileriniz, veri sorumlusu sıfatıyla Atik Hukuk Bürosu tarafından aşağıda açıklanan kapsamda işlenmektedir.',
        ],
      },
      {
        title: 'İşlenen kişisel veriler',
        body: [
          'Görüşme talep formu aracılığıyla ilettiğiniz ad soyad, şirket adı, e-posta adresi, telefon numarası, tercih ettiğiniz görüşme zamanı ve talebinizin konusuna ilişkin açıklamalar işlenir.',
          'Formun açıklama alanına özel nitelikli kişisel veri (sağlık, ceza mahkûmiyeti vb.) yazmamanızı rica ederiz.',
        ],
      },
      {
        title: 'İşleme amaçları ve hukuki sebepler',
        body: [
          'Verileriniz; görüşme talebinizin değerlendirilmesi, sizinle iletişime geçilmesi ve görüşmenin planlanması amaçlarıyla, KVKK m. 5/2-c (bir sözleşmenin kurulmasıyla doğrudan ilgili olması) ve m. 5/2-f (meşru menfaat) hukuki sebeplerine dayanılarak işlenir.',
        ],
      },
      {
        title: 'Aktarım',
        body: [
          'Form, mesajları büro e-posta adresine ileten Web3Forms hizmeti üzerinden gönderilir. Bu hizmetin sunucuları yurt dışında bulunduğundan aktarım, formda verdiğiniz açık rızaya dayanır (KVKK m. 9).',
          'Verileriniz bunun dışında, yasal yükümlülükler saklı kalmak kaydıyla üçüncü kişilerle paylaşılmaz.',
        ],
      },
      {
        title: 'Çerezler ve üçüncü taraf hizmetler',
        body: [
          'Bu site çerez kullanmaz. Yazı tipleri sitenin kendi sunucusundan yüklenir. İletişim sayfasındaki harita yalnızca “Haritayı göster” düğmesine bastığınızda Google Haritalar’dan yüklenir.',
        ],
      },
      {
        title: 'Haklarınız',
        body: [
          'KVKK m. 11 uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini, silinmesini veya yok edilmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi büro adresine yazılı olarak ya da KEP adresimize iletebilirsiniz.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Sayfa bulunamadı',
    lead: 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.',
    home: 'Ana sayfaya dönün',
  },

  footer: {
    privacy: 'KVKK aydınlatma metni',
  },
};

export type Content = typeof tr;
