export interface BlogPost {
  id: number;
  image: string;
  date: string;
  category?: string;
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
        content: `Türkiye, son yıllarda sağlık turizminde dünya çapında önemli bir destinasyon haline geldi. Modern hastaneleri, deneyimli doktorları ve uygun fiyatlarıyla her yıl binlerce hastaya hizmet veriyor. Bu kapsamlı rehberde, Türkiye'de sağlık turizmi hakkında bilmeniz gereken her şeyi bulacaksınız.

Neden Türkiye'yi Tercih Etmelisiniz?
- JCI Akreditasyonlu Hastaneler: Türkiye'deki birçok hastane, uluslararası standartlarda hizmet kalitesini belgeleyen JCI akreditasyonuna sahiptir. Bu akreditasyon, hastanelerin en yüksek kalite standartlarını karşıladığını gösterir.
- Deneyimli Uzmanlar: Türk doktorları, dünya çapında tanınan tıp fakültelerinden mezun olmuş ve uluslararası deneyime sahip profesyonellerdir. Birçoğu Avrupa ve Amerika'da eğitim almış ve çalışmıştır.
- Uygun Fiyatlar: Avrupa ve Amerika'daki fiyatların %60-70 altında, kaliteli sağlık hizmeti sunulmaktadır. Bu fiyat avantajı, tedavi maliyetlerinin yanı sıra konaklama ve diğer hizmetleri de kapsar.
- Modern Teknoloji: En son teknolojik cihazlar ve tedavi yöntemleri kullanılmaktadır. Robotik cerrahi sistemleri, yapay zeka destekli tanı araçları ve ileri görüntüleme sistemleri bunlardan bazılarıdır.
- Kısa Bekleme Süreleri: Birçok tedavi için bekleme süresi minimumda tutulmaktadır. Acil durumlar için hızlı randevu sistemleri mevcuttur.

Popüler Tedavi Seçenekleri:
1. Estetik Cerrahi
   - Yüz germe
   - Burun estetiği
   - Meme estetiği
   - Liposuction
   - Vücut şekillendirme

2. Diş Tedavileri
   - İmplant uygulamaları
   - Zirkonyum kaplamalar
   - Gülüş tasarımı
   - Ortodonti
   - Diş beyazlatma

3. Saç Ekimi
   - FUE tekniği
   - DHI tekniği
   - Sakal ve bıyık ekimi
   - PRP tedavisi
   - Mezoterapi

4. Göz Ameliyatları
   - LASIK
   - SMILE
   - Katarakt ameliyatı
   - Göz tansiyonu tedavisi
   - Şaşılık ameliyatı

5. Ortopedik Tedaviler
   - Diz protezi
   - Kalça protezi
   - Omurga cerrahisi
   - Spor yaralanmaları
   - Artroskopik cerrahi

Sağlık turizmi paketleri genellikle şunları içerir:
- Havalimanı transferleri (VIP transfer seçenekleri mevcut)
- 4-5 yıldızlı otellerde konaklama
- Profesyonel tercümanlık hizmetleri (6+ dilde)
- Tedavi sonrası bakım ve kontroller
- Şehir turu imkanları ve kültürel aktiviteler
- 7/24 destek hizmeti
- Özel asistan hizmeti

İstatistiklerle Türkiye'de Sağlık Turizmi:
- Yıllık 1.2 milyon+ sağlık turisti
- 1000+ JCI akreditasyonlu sağlık kuruluşu
- %95+ hasta memnuniyet oranı
- 30.000+ sağlık profesyoneli
- 50+ ülkeden hasta kabulü

2024 yılında Türkiye'nin sağlık turizmi hedefleri arasında daha fazla uluslararası hasta ağırlamak ve hizmet kalitesini sürekli artırmak yer alıyor. Devlet destekleri ve teşviklerle sektör her geçen gün büyümeye devam ediyor.

Tedavi Planlaması ve Süreç:
1. İlk İletişim ve Konsültasyon
2. Tıbbi Geçmiş Değerlendirmesi
3. Tedavi Planı Oluşturma
4. Seyahat ve Konaklama Organizasyonu
5. Tedavi Süreci
6. İyileşme ve Takip
7. Ülkeye Dönüş ve Uzaktan Takip

Sağlık turizmi için Türkiye'yi seçmek, kaliteli sağlık hizmetine uygun fiyatlarla ulaşmanın en akıllıca yoludur. Deneyimli doktorlar, modern tesisler ve misafirperver yaklaşım, tedavi sürecinizi unutulmaz bir deneyime dönüştürecektir.`
      },
      en: {
        title: 'Health Tourism in Turkey: 2024 Guide',
        excerpt: 'Turkey has become a major destination for health tourism in recent years.',
        content: `Turkey has emerged as a leading destination for health tourism, offering world-class medical care combined with the charm of a country rich in history and culture. This comprehensive guide will walk you through everything you need to know about receiving medical treatment in Turkey.

Why Choose Turkey?
- JCI Accredited Hospitals: Turkey boasts numerous hospitals with Joint Commission International accreditation, the gold standard in global healthcare certification. These facilities maintain the highest levels of patient care and safety protocols.
- Experienced Specialists: Turkish medical professionals are graduates of prestigious international medical schools and many have trained or practiced in the US and Europe. Their expertise spans all major medical specialties.
- Affordable Prices: Medical procedures in Turkey typically cost 60-70% less than in Western countries, without compromising on quality. This includes not just the treatment but also accommodation and other services.
- Modern Technology: Turkish healthcare facilities utilize state-of-the-art medical equipment and cutting-edge treatment methods, including robotic surgery systems and AI-assisted diagnostic tools.
- Short Waiting Times: Most procedures can be scheduled within weeks rather than months, with efficient fast-track systems for urgent cases.

Popular Treatment Options:
1. Aesthetic Surgery
   - Face lifts
   - Rhinoplasty
   - Breast augmentation
   - Liposuction
   - Body contouring

2. Dental Treatments
   - Dental implants
   - Zirconium crowns
   - Smile design
   - Orthodontics
   - Teeth whitening

3. Hair Transplantation
   - FUE technique
   - DHI method
   - Beard and mustache transplants
   - PRP therapy
   - Mesotherapy

4. Eye Surgery
   - LASIK
   - SMILE
   - Cataract surgery
   - Glaucoma treatment
   - Strabismus correction

5. Orthopedic Treatments
   - Knee replacement
   - Hip replacement
   - Spine surgery
   - Sports injuries
   - Arthroscopic surgery

Health Tourism Packages Include:
- Airport transfers (VIP options available)
- 4-5 star hotel accommodation
- Professional interpretation services (6+ languages)
- Post-treatment care and follow-ups
- City tours and cultural activities
- 24/7 support service
- Personal assistant service

Turkish Health Tourism in Numbers:
- 1.2+ million medical tourists annually
- 1000+ JCI accredited healthcare facilities
- 95%+ patient satisfaction rate
- 30,000+ healthcare professionals
- Patients from 50+ countries

Treatment Planning Process:
1. Initial Consultation
2. Medical History Review
3. Treatment Plan Development
4. Travel and Accommodation Arrangements
5. Treatment Phase
6. Recovery and Monitoring
7. Return Home and Remote Follow-up

Turkey's 2024 health tourism goals include expanding international patient capacity and continuously improving service quality. Government support and incentives continue to drive sector growth.

Choosing Turkey for medical treatment combines high-quality healthcare with affordable prices in a country known for its hospitality. The combination of experienced doctors, modern facilities, and a welcoming approach transforms your medical journey into an unforgettable experience.`
      },
      de: {
        title: 'Gesundheitstourismus in der Türkei: Leitfaden 2024',
        excerpt: 'Die Türkei hat sich in den letzten Jahren zu einem wichtigen Ziel für Gesundheitstourismus entwickelt.',
        content: `Die Türkei hat sich in den letzten Jahren zu einem führenden Ziel für Gesundheitstourismus entwickelt. Mit modernen Krankenhäusern, erfahrenen Ärzten und erschwinglichen Preisen werden jährlich tausende Patienten versorgt.

Warum die Türkei wählen?
- JCI-akkreditierte Krankenhäuser
- Erfahrene Spezialisten mit internationaler Ausbildung
- Kostengünstige Behandlungen
- Modernste medizinische Technologie
- Kurze Wartezeiten

Beliebte Behandlungsoptionen:
1. Ästhetische Chirurgie
2. Zahnbehandlungen
3. Haartransplantation
4. Augenoperationen
5. Orthopädische Behandlungen

Gesundheitstourismus-Pakete beinhalten:
- Flughafentransfers
- Unterkunft
- Übersetzungsdienste
- Nachsorge
- Stadtführungen

Die Türkei strebt für 2024 an, ihre Position als führendes Ziel für Gesundheitstourismus weiter auszubauen.`
      },
      fr: {
        title: 'Guide du Tourisme Médical en Turquie 2024',
        excerpt: 'La Turquie est devenue une destination majeure pour le tourisme médical.',
        content: `La Turquie est devenue une destination majeure pour le tourisme médical ces dernières années. Avec ses hôpitaux modernes, ses médecins expérimentés et ses prix abordables.

Pourquoi choisir la Turquie ?
- Hôpitaux accrédités JCI
- Spécialistes expérimentés
- Prix abordables
- Technologie moderne
- Temps d'attente courts

Options de traitement populaires :
1. Chirurgie esthétique
2. Traitements dentaires
3. Greffe de cheveux
4. Chirurgie des yeux
5. Traitements orthopédiques

Les forfaits de tourisme médical comprennent :
- Transferts aéroport
- Hébergement
- Services de traduction
- Soins post-traitement
- Visites guidées

La Turquie vise à renforcer sa position de leader dans le tourisme médical en 2024.`
      },
      ru: {
        title: 'Руководство по Медицинскому Туризму в Турции 2024',
        excerpt: 'Турция стала важным направлением медицинского туризма.',
        content: `Турция стала важным направлением медицинского туризма в последние годы. С современными больницами, опытными врачами и доступными ценами.

Почему стоит выбрать Турцию?
- Больницы с аккредитацией JCI
- Опытные специалисты
- Доступные цены
- Современные технологии
- Короткие сроки ожидания

Популярные варианты лечения:
1. Эстетическая хирургия
2. Стоматологическое лечение
3. Пересадка волос
4. Глазная хирургия
5. Ортопедическое лечение

Пакеты медицинского туризма включают:
- Трансферы из аэропорта
- Проживание
- Услуги перевода
- Послелечебный уход
- Экскурсии по городу

В 2024 году Турция стремится укрепить свои позиции в сфере медицинского туризма.`
      },
      ar: {
        title: 'دليل السياحة الطبية في تركيا 2024',
        excerpt: 'أصبحت تركيا وجهة رئيسية للسياحة الطبية.',
        content: `أصبحت تركيا وجهة رئيسية للسياحة الطبية في السنوات الأخيرة. مع مستشفياتها الحديثة وأطبائها ذوي الخبرة وأسعارها المعقولة.

لماذا تختار تركيا؟
- مستشفيات معتمدة من JCI
- متخصصون ذوو خبرة
- أسعار معقولة
- تكنولوجيا حديثة
- أوقات انتظار قصيرة

خيارات العلاج الشائعة:
1. الجراحة التجميلية
2. علاج الأسنان
3. زراعة الشعر
4. جراحة العيون
5. العلاج العظمي

تشمل حزم السياحة الطبية:
- النقل من المطار
- الإقامة
- خدمات الترجمة
- الرعاية بعد العلاج
- جولات في المدينة

تهدف تركيا في عام 2024 إلى تعزيز مكانتها في السياحة الطبية.`
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
        content: `Saç ekimi teknolojisindeki son gelişmeler ve modern teknikler hakkında kapsamlı bir rehber. Günümüzde saç ekimi, estetik tıbbın en popüler işlemlerinden biri haline gelmiştir.

Saç Ekimi Teknikleri:

1. FUE (Follicular Unit Extraction) Tekniği:
- Minimal invaziv yöntem
- Tek tek folikül transferi
- Doğal görünüm
- Hızlı iyileşme süreci
- İz bırakmayan yöntem

2. DHI (Direct Hair Implantation) Tekniği:
- Kalem tekniği olarak da bilinir
- Daha yoğun ekim imkanı
- Açı ve yön kontrolü
- Minimal travma
- Hızlı sonuç

3. Safir FUE Tekniği:
- Özel safir uçlu aletler
- Daha hassas kesiler
- Daha az doku hasarı
- Hızlı iyileşme
- Minimal iz

Tedavi Süreci:
1. Ön Konsültasyon
2. Saç Analizi
3. Planlama
4. Uygulama
5. İyileşme Süreci
6. Sonuç ve Takip

Saç Ekimi Sonrası Bakım:
- İlk 3 gün özel yıkama teknikleri
- 2 hafta hassas dönem bakımı
- Güneş koruması
- Beslenme önerileri
- Düzenli kontroller

Başarılı Sonuç İçin Öneriler:
- Uzman hekim seçimi
- Doğru teknik seçimi
- Bakım talimatlarına uyum
- Sabırlı olma
- Düzenli kontroller

Modern saç ekimi teknikleri, doğal ve kalıcı sonuçlar sunarak özgüveninizi yeniden kazanmanızı sağlar.`
      },
      en: {
        title: 'Modern Hair Transplant Techniques',
        excerpt: 'Latest developments in hair transplant technology and modern techniques.',
        content: `A comprehensive guide to the latest developments in hair transplant technology and modern techniques. Hair transplantation has become one of the most popular aesthetic medical procedures today.

Hair Transplant Techniques:

1. FUE (Follicular Unit Extraction) Technique:
- Minimally invasive method
- Individual follicle transfer
- Natural appearance
- Quick recovery process
- Scarless method

2. DHI (Direct Hair Implantation) Technique:
- Also known as pen technique
- Higher density implantation
- Angle and direction control
- Minimal trauma
- Quick results

3. Sapphire FUE Technique:
- Special sapphire-tipped instruments
- More precise incisions
- Less tissue damage
- Fast healing
- Minimal scarring

Treatment Process:
1. Initial Consultation
2. Hair Analysis
3. Planning
4. Application
5. Recovery Process
6. Results and Follow-up

Post-Transplant Care:
- Special washing techniques for first 3 days
- 2 weeks sensitive period care
- Sun protection
- Nutrition recommendations
- Regular check-ups

Tips for Successful Results:
- Choose an expert physician
- Select the right technique
- Follow care instructions
- Be patient
- Regular monitoring

Modern hair transplant techniques offer natural and permanent results to restore your confidence.`
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