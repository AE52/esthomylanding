export interface BlogPost {
  id: number;
  image: string;
  date: string;
  slugs: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      title: string;
      excerpt: string;
      content: string;
    };
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-15',
    slugs: {
      tr: 'turkiyede-saglik-turizmi-2024-rehberi',
      en: 'health-tourism-in-turkey-2024-guide',
      de: 'gesundheitstourismus-in-der-turkei-2024',
      fr: 'guide-du-tourisme-medical-en-turquie-2024',
      ru: 'rukovodstvo-po-meditsinskomu-turizmu-v-turtsii-2024',
      ar: 'dalil-alsiyahat-altibbiat-fi-turkia-2024'
    },
    translations: {
      tr: {
        title: 'Türkiye\'de Sağlık Turizmi: 2024 Rehberi',
        excerpt: 'Türkiye, son yıllarda sağlık turizminde dünya çapında önemli bir destinasyon haline geldi.',
        content: `Türkiye, son yıllarda sağlık turizminde dünya çapında önemli bir destinasyon haline geldi. Modern hastaneleri, deneyimli doktorları ve uygun fiyatlarıyla her yıl binlerce hastaya hizmet veriyor.`
      },
      en: {
        title: 'Health Tourism in Turkey: 2024 Guide',
        excerpt: 'Turkey has become a major destination for health tourism in recent years.',
        content: `Turkey has become a major destination for health tourism in recent years. With its modern hospitals, experienced doctors, and affordable prices, it serves thousands of patients every year.`
      },
      de: {
        title: 'Gesundheitstourismus in der Türkei: Leitfaden 2024',
        excerpt: 'Die Türkei hat sich in den letzten Jahren zu einem wichtigen Ziel für Gesundheitstourismus entwickelt.',
        content: `Die Türkei hat sich in den letzten Jahren zu einem wichtigen Ziel für Gesundheitstourismus entwickelt. Mit modernen Krankenhäusern, erfahrenen Ärzten und erschwinglichen Preisen werden jährlich tausende Patienten versorgt.`
      },
      fr: {
        title: 'Guide du Tourisme Médical en Turquie 2024',
        excerpt: 'La Turquie est devenue une destination majeure pour le tourisme médical.',
        content: `La Turquie est devenue une destination majeure pour le tourisme médical ces dernières années. Avec ses hôpitaux modernes, ses médecins expérimentés et ses prix abordables.`
      },
      ru: {
        title: 'Руководство по Медицинскому Туризму в Турции 2024',
        excerpt: 'Турция стала важным направлением медицинского туризма.',
        content: `Турция стала важным направлением медицинского туризма в последние годы. С современными больницами, опытными врачами и доступными ценами.`
      },
      ar: {
        title: 'دليل السياحة الطبية في تركيا 2024',
        excerpt: 'أصبحت تركيا وجهة رئيسية للسياحة الطبية.',
        content: `أصبحت تركيا وجهة رئيسية للسياحة الطبية في السنوات الأخيرة. مع مستشفياتها الحديثة وأطبائها ذوي الخبرة وأسعارها المعقولة.`
      }
    }
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-10',
    slugs: {
      tr: 'modern-sac-ekimi-teknikleri',
      en: 'modern-hair-transplant-techniques',
      de: 'moderne-haartransplantationstechniken',
      fr: 'techniques-modernes-de-greffe-de-cheveux',
      ru: 'sovremennye-metody-peresadki-volos',
      ar: 'taqniat-ziraat-alshaer-alhadithat'
    },
    translations: {
      tr: {
        title: 'Modern Saç Ekimi Teknikleri',
        excerpt: 'Saç ekimi teknolojisindeki son gelişmeler ve modern teknikler hakkında detaylı bilgi.',
        content: `Saç ekimi teknolojisindeki son gelişmeler ve modern teknikler hakkında detaylı bilgi. FUE ve DHI gibi yöntemler.`
      },
      en: {
        title: 'Modern Hair Transplant Techniques',
        excerpt: 'Latest developments in hair transplant technology and modern techniques.',
        content: `Latest developments in hair transplant technology and modern techniques. Methods like FUE and DHI.`
      },
      de: {
        title: 'Moderne Haartransplantationstechniken',
        excerpt: 'Neueste Entwicklungen in der Haartransplantationstechnologie.',
        content: `Neueste Entwicklungen in der Haartransplantationstechnologie und moderne Techniken. Methoden wie FUE und DHI.`
      },
      fr: {
        title: 'Techniques Modernes de Greffe de Cheveux',
        excerpt: 'Derniers développements dans la technologie de la greffe de cheveux.',
        content: `Derniers développements dans la technologie de la greffe de cheveux et techniques modernes. Méthodes comme FUE et DHI.`
      },
      ru: {
        title: 'Современные Методы Пересадки Волос',
        excerpt: 'Последние разработки в технологии пересадки волос.',
        content: `Последние разработки в технологии пересадки волос и современные методы. Методы как FUE и DHI.`
      },
      ar: {
        title: 'تقنيات زراعة الشعر الحديثة',
        excerpt: 'أحدث التطورات في تكنولوجيا زراعة الشعر.',
        content: `أحدث التطورات في تكنولوجيا زراعة الشعر والتقنيات الحديثة. طرق مثل FUE و DHI.`
      }
    }
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-05',
    slugs: {
      tr: 'dis-implant-tedavisi-rehberi',
      en: 'dental-implant-treatment-guide',
      de: 'zahnimplantat-behandlungsleitfaden',
      fr: 'guide-de-traitement-des-implants-dentaires',
      ru: 'rukovodstvo-po-lecheniyu-zubnykh-implantatov',
      ar: 'dalil-ilaj-ziraat-alasnan'
    },
    translations: {
      tr: {
        title: 'Diş İmplantı Tedavisi Rehberi',
        excerpt: 'Diş implantı tedavisi hakkında bilmeniz gereken her şey.',
        content: `Diş implantı tedavisi hakkında bilmeniz gereken her şey. Tedavi süreci, iyileşme ve bakım.`
      },
      en: {
        title: 'Dental Implant Treatment Guide',
        excerpt: 'Everything you need to know about dental implant treatment.',
        content: `Everything you need to know about dental implant treatment. Treatment process, healing, and care.`
      },
      de: {
        title: 'Leitfaden zur Zahnimplantatbehandlung',
        excerpt: 'Alles, was Sie über Zahnimplantatbehandlung wissen müssen.',
        content: `Alles, was Sie über Zahnimplantatbehandlung wissen müssen. Behandlungsprozess, Heilung und Pflege.`
      },
      fr: {
        title: 'Guide de Traitement des Implants Dentaires',
        excerpt: 'Tout ce que vous devez savoir sur le traitement des implants dentaires.',
        content: `Tout ce que vous devez savoir sur le traitement des implants dentaires. Processus de traitement, guérison et soins.`
      },
      ru: {
        title: 'Руководство по Лечению Зубных Имплантатов',
        excerpt: 'Всё, что нужно знать о лечении зубных имплантатов.',
        content: `Всё, что нужно знать о лечении зубных имплантатов. Процесс лечения, заживление и уход.`
      },
      ar: {
        title: 'دليل علاج زراعة الأسنان',
        excerpt: 'كل ما تحتاج معرفته عن علاج زراعة الأسنان.',
        content: `كل ما تحتاج معرفته عن علاج زراعة الأسنان. عملية العلاج والشفاء والرعاية.`
      }
    }
  },
  {
    id: 4,
    image: 'https://plus.unsplash.com/premium_photo-1661766708050-b9e5c2cf54a9?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-01',
    slugs: {
      tr: 'modern-burun-estetigi-teknikleri',
      en: 'modern-rhinoplasty-techniques',
      de: 'moderne-nasenkorrektur-techniken',
      fr: 'techniques-modernes-de-rhinoplastie',
      ru: 'sovremennye-metody-rinoplastiki',
      ar: 'taqniat-tajmil-alanf-alhadithat'
    },
    translations: {
      tr: {
        title: 'Modern Burun Estetiği Teknikleri',
        excerpt: 'Burun estetiğinde kullanılan modern teknikler ve yaklaşımlar.',
        content: `Burun estetiğinde kullanılan modern teknikler ve yaklaşımlar. Açık ve kapalı teknikler.`
      },
      en: {
        title: 'Modern Rhinoplasty Techniques',
        excerpt: 'Modern techniques and approaches used in rhinoplasty.',
        content: `Modern techniques and approaches used in rhinoplasty. Open and closed techniques.`
      },
      de: {
        title: 'Moderne Techniken der Nasenkorrektur',
        excerpt: 'Moderne Techniken und Ansätze in der Nasenkorrektur.',
        content: `Moderne Techniken und Ansätze in der Nasenkorrektur. Offene und geschlossene Techniken.`
      },
      fr: {
        title: 'Techniques Modernes de Rhinoplastie',
        excerpt: 'Techniques et approches modernes utilisées en rhinoplastie.',
        content: `Techniques et approches modernes utilisées en rhinoplastie. Techniques ouvertes et fermées.`
      },
      ru: {
        title: 'Современные Методы Ринопластики',
        excerpt: 'Современные методы и подходы в ринопластике.',
        content: `Современные методы и подходы в ринопластике. Открытые и закрытые техники.`
      },
      ar: {
        title: 'تقنيات تجميل الأنف الحديثة',
        excerpt: 'التقنيات والأساليب الحديثة المستخدمة في تجميل الأنف.',
        content: `التقنيات والأساليب الحديثة المستخدمة في تجميل الأنف. التقنيات المفتوحة والمغلقة.`
      }
    }
  }
] 