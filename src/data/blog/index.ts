export interface BlogPost {
  title: string;
  content: string;
  image: string;
  date: string;
}

export interface BlogPosts {
  [key: string]: {
    [slug: string]: BlogPost;
  };
}

export const blogPosts: BlogPosts = {
  tr: {
    'turkiyede-saglik-turizmi-2024-rehberi': {
      title: 'Türkiye\'de Sağlık Turizmi: 2024 Rehberi',
      content: `Türkiye, son yıllarda sağlık turizminde dünya çapında önemli bir destinasyon haline geldi. Modern hastaneleri, deneyimli doktorları ve uygun fiyatlarıyla her yıl binlerce hastaya hizmet veriyor.

Neden Türkiye'yi Tercih Etmelisiniz?

1. Yüksek Kaliteli Sağlık Hizmetleri
- JCI akreditasyonlu hastaneler
- Son teknoloji tıbbi ekipmanlar
- Deneyimli ve uzman doktorlar

2. Uygun Fiyatlar
- Avrupa ve Amerika'ya göre %50-70 daha ekonomik
- Kapsamlı tedavi paketleri
- Şeffaf fiyatlandırma politikası

3. Kolay Ulaşım ve Konaklama
- Dünya'nın her yerinden direkt uçuşlar
- Lüks ve konforlu konaklama seçenekleri
- Şehir merkezlerine yakın hastaneler

4. Kişiselleştirilmiş Hizmet
- Çok dilli sağlık personeli
- 7/24 hasta destek hizmetleri
- Özel transfer ve tercümanlık hizmetleri`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15 Mart 2024'
    },
    'estetik-operasyonlar-rehberi': {
      title: 'Estetik Operasyonlar: Kapsamlı Rehber',
      content: `Estetik operasyonlar, kişilerin kendilerini daha iyi hissetmelerini sağlayan önemli tıbbi müdahalelerdir. Bu rehberde, en popüler estetik operasyonlar hakkında detaylı bilgiler bulacaksınız.

En Popüler Estetik Operasyonlar:

1. Yüz Estetiği
- Burun estetiği (Rinoplasti)
- Yüz germe
- Göz kapağı estetiği

2. Vücut Estetiği
- Liposuction
- Karın germe
- Meme estetiği

3. Saç Ekimi
- FUE yöntemi
- DHI yöntemi
- Saç mezoterapisi

İyileşme Süreçleri ve Dikkat Edilmesi Gerekenler:
- Operasyon öncesi hazırlık
- İyileşme süreci tavsiyeleri
- Kontrol randevuları`,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      date: '10 Mart 2024'
    }
  },
  en: {
    'health-tourism-in-turkey-2024-guide': {
      title: 'Health Tourism in Turkey: 2024 Guide',
      content: `Turkey has become a major destination for health tourism in recent years. With its modern hospitals, experienced doctors, and affordable prices, it serves thousands of patients every year.

Why Choose Turkey?

1. High-Quality Healthcare Services
- JCI-accredited hospitals
- State-of-the-art medical equipment
- Experienced and specialist doctors

2. Affordable Prices
- 50-70% more economical compared to Europe and America
- Comprehensive treatment packages
- Transparent pricing policy

3. Easy Access and Accommodation
- Direct flights from around the world
- Luxury and comfortable accommodation options
- Hospitals close to city centers

4. Personalized Service
- Multilingual healthcare staff
- 24/7 patient support services
- Private transfer and interpretation services`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: 'March 15, 2024'
    }
  },
  de: {
    'gesundheitstourismus-in-der-turkei-2024-leitfaden': {
      title: 'Gesundheitstourismus in der Türkei: Leitfaden 2024',
      content: `Die Türkei hat sich in den letzten Jahren zu einem wichtigen Ziel für Gesundheitstourismus entwickelt. Mit modernen Krankenhäusern, erfahrenen Ärzten und erschwinglichen Preisen werden jährlich tausende Patienten versorgt.

Warum die Türkei wählen?

1. Hochwertige Gesundheitsversorgung
- JCI-akkreditierte Krankenhäuser
- Modernste medizinische Ausrüstung
- Erfahrene und spezialisierte Ärzte

2. Erschwingliche Preise
- 50-70% günstiger im Vergleich zu Europa und Amerika
- Umfassende Behandlungspakete
- Transparente Preispolitik

3. Einfache Anreise und Unterkunft
- Direktflüge aus aller Welt
- Luxuriöse und komfortable Unterkünfte
- Krankenhäuser in Stadtnähe

4. Personalisierter Service
- Mehrsprachiges Gesundheitspersonal
- 24/7 Patientenbetreuung
- Privater Transfer und Dolmetscherdienste`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15. März 2024'
    }
  },
  fr: {
    'guide-du-tourisme-medical-en-turquie-2024': {
      title: 'Guide du Tourisme Médical en Turquie 2024',
      content: `La Turquie est devenue une destination majeure pour le tourisme médical ces dernières années. Avec ses hôpitaux modernes, ses médecins expérimentés et ses prix abordables, elle accueille des milliers de patients chaque année.

Pourquoi Choisir la Turquie ?

1. Services de Santé de Haute Qualité
- Hôpitaux accrédités JCI
- Équipement médical de pointe
- Médecins expérimentés et spécialistes

2. Prix Abordables
- 50-70% plus économique par rapport à l'Europe et l'Amérique
- Forfaits de traitement complets
- Politique de prix transparente

3. Accès et Hébergement Faciles
- Vols directs du monde entier
- Options d'hébergement luxueuses et confortables
- Hôpitaux proches des centres-villes

4. Service Personnalisé
- Personnel de santé multilingue
- Service d'assistance aux patients 24/7
- Transfert privé et services d'interprétation`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15 Mars 2024'
    }
  },
  ru: {
    'rukovodstvo-po-meditsinskomu-turizmu-v-turtsii-2024': {
      title: 'Руководство по Медицинскому Туризму в Турции 2024',
      content: `Турция стала важным направлением медицинского туризма в последние годы. С современными больницами, опытными врачами и доступными ценами она обслуживает тысячи пациентов ежегодно.

Почему Стоит Выбрать Турцию?

1. Высококачественные Медицинские Услуги
- Больницы с аккредитацией JCI
- Современное медицинское оборудование
- Опытные врачи-специалисты

2. Доступные Цены
- На 50-70% экономичнее, чем в Европе и Америке
- Комплексные пакеты лечения
- Прозрачная ценовая политика

3. Удобный Доступ и Проживание
- Прямые рейсы со всего мира
- Роскошные и комфортные варианты проживания
- Больницы рядом с центром города

4. Персонализированный Сервис
- Многоязычный медицинский персонал
- Поддержка пациентов 24/7
- Частный трансфер и услуги перевода`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15 Марта 2024'
    }
  },
  ar: {
    'dalil-alsiyahat-altibbiat-fi-turkia-2024': {
      title: 'دليل السياحة الطبية في تركيا 2024',
      content: `أصبحت تركيا وجهة رئيسية للسياحة الطبية في السنوات الأخيرة. مع مستشفياتها الحديثة وأطبائها ذوي الخبرة وأسعارها المعقولة، تخدم آلاف المرضى كل عام.

لماذا تختار تركيا؟

1. خدمات صحية عالية الجودة
- مستشفيات معتمدة من JCI
- معدات طبية حديثة
- أطباء ذوو خبرة ومتخصصون

2. أسعار معقولة
- أقل بنسبة 50-70٪ مقارنة بأوروبا وأمريكا
- حزم علاج شاملة
- سياسة أسعار شفافة

3. سهولة الوصول والإقامة
- رحلات مباشرة من جميع أنحاء العالم
- خيارات إقامة فاخرة ومريحة
- مستشفيات قريبة من مراكز المدن

4. خدمة شخصية
- طاقم طبي متعدد اللغات
- خدمة دعم المرضى على مدار الساعة
- خدمات النقل الخاص والترجمة`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15 مارس 2024'
    }
  }
} 