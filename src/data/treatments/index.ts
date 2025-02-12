// Mock tedavi verileri
export interface Treatment {
  id: number
  image: string
  translations: {
    [key: string]: {
      title: string
      description: string
      details: string
      benefits: string[]
    }
  }
}

export const treatments: Treatment[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=1000&auto=format&fit=crop',
    translations: {
      tr: {
        title: 'Saç Ekimi',
        description: 'Doğal görünümlü kalıcı saç çözümü',
        details: 'FUE yöntemi ile mikro greftlerin transferi',
        benefits: ['Doğal görünüm', 'Kalıcı sonuç', 'Hızlı iyileşme süreci']
      },
      en: {
        title: 'Hair Transplant',
        description: 'Natural looking permanent hair solution',
        details: 'Micrograft transfer with FUE method',
        benefits: ['Natural appearance', 'Permanent results', 'Fast recovery process']
      },
      de: {
        title: 'Haartransplantation',
        description: 'Natürlich aussehende, dauerhafte Haarlösung',
        details: 'Mikrograft-Transfer mit FUE-Methode',
        benefits: ['Natürliches Aussehen', 'Dauerhafte Ergebnisse', 'Schneller Heilungsprozess']
      },
      fr: {
        title: 'Greffe de Cheveux',
        description: 'Solution capillaire permanente d\'aspect naturel',
        details: 'Transfert de microgreffes avec la méthode FUE',
        benefits: ['Aspect naturel', 'Résultats permanents', 'Processus de guérison rapide']
      },
      ru: {
        title: 'Пересадка Волос',
        description: 'Естественное решение для постоянного роста волос',
        details: 'Пересадка микрографтов методом FUE',
        benefits: ['Естественный вид', 'Постоянный результат', 'Быстрый процесс восстановления']
      },
      ar: {
        title: 'زراعة الشعر',
        description: 'حل دائم للشعر بمظهر طبيعي',
        details: 'نقل الطعوم الدقيقة بطريقة FUE',
        benefits: ['مظهر طبيعي', 'نتائج دائمة', 'عملية شفاء سريعة']
      }
    }
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop',
    translations: {
      tr: {
        title: 'Diş İmplantı',
        description: 'Eksik dişler için kalıcı çözüm',
        details: 'Titanyum implantlar ile güvenli tedavi',
        benefits: ['Doğal çiğneme fonksiyonu', 'Estetik görünüm', 'Uzun ömürlü çözüm']
      },
      en: {
        title: 'Dental Implants',
        description: 'Permanent solution for missing teeth',
        details: 'Safe treatment with titanium implants',
        benefits: ['Natural chewing function', 'Aesthetic appearance', 'Long-lasting solution']
      },
      de: {
        title: 'Zahnimplantate',
        description: 'Dauerhafte Lösung für fehlende Zähne',
        details: 'Sichere Behandlung mit Titan-Implantaten',
        benefits: ['Natürliche Kaufunktion', 'Ästhetisches Aussehen', 'Langanhaltende Lösung']
      },
      fr: {
        title: 'Implants Dentaires',
        description: 'Solution permanente pour les dents manquantes',
        details: 'Traitement sûr avec des implants en titane',
        benefits: ['Fonction de mastication naturelle', 'Apparence esthétique', 'Solution durable']
      },
      ru: {
        title: 'Зубные Имплантаты',
        description: 'Постоянное решение для отсутствующих зубов',
        details: 'Безопасное лечение с титановыми имплантатами',
        benefits: ['Естественная жевательная функция', 'Эстетичный внешний вид', 'Долговечное решение']
      },
      ar: {
        title: 'زراعة الأسنان',
        description: 'حل دائم للأسنان المفقودة',
        details: 'علاج آمن مع زراعات التيتانيوم',
        benefits: ['وظيفة مضغ طبيعية', 'مظهر جمالي', 'حل طويل الأمد']
      }
    }
  },
  {
    id: 3,
    image: 'https://plus.unsplash.com/premium_photo-1661766708050-b9e5c2cf54a9?q=80&w=1000&auto=format&fit=crop',
    translations: {
      tr: {
        title: 'Burun Estetiği',
        description: 'Yüz hatlarınızla uyumlu doğal burun görünümü',
        details: 'Açık veya kapalı teknik ile kişiye özel burun estetiği',
        benefits: ['Doğal görünüm', 'Nefes alma fonksiyonunda iyileşme', 'Kalıcı sonuçlar']
      },
      en: {
        title: 'Rhinoplasty',
        description: 'Natural nose appearance harmonious with facial features',
        details: 'Personalized nose aesthetics with open or closed technique',
        benefits: ['Natural appearance', 'Improved breathing function', 'Permanent results']
      },
      de: {
        title: 'Nasenkorrektur',
        description: 'Natürliches Nasenaussehen in Harmonie mit den Gesichtszügen',
        details: 'Personalisierte Nasenästhetik mit offener oder geschlossener Technik',
        benefits: ['Natürliches Aussehen', 'Verbesserte Atemfunktion', 'Dauerhafte Ergebnisse']
      },
      fr: {
        title: 'Rhinoplastie',
        description: 'Apparence naturelle du nez en harmonie avec les traits du visage',
        details: 'Esthétique nasale personnalisée avec technique ouverte ou fermée',
        benefits: ['Apparence naturelle', 'Amélioration de la fonction respiratoire', 'Résultats permanents']
      },
      ru: {
        title: 'Ринопластика',
        description: 'Естественный вид носа в гармонии с чертами лица',
        details: 'Персонализированная эстетика носа открытой или закрытой техникой',
        benefits: ['Естественный вид', 'Улучшение функции дыхания', 'Постоянные результаты']
      },
      ar: {
        title: 'تجميل الأنف',
        description: 'مظهر طبيعي للأنف متناسق مع ملامح الوجه',
        details: 'تجميل الأنف الشخصي بتقنية مفتوحة أو مغلقة',
        benefits: ['مظهر طبيعي', 'تحسين وظيفة التنفس', 'نتائج دائمة']
      }
    }
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop',
    translations: {
      tr: {
        title: 'Meme Estetiği',
        description: 'Vücut oranlarınızla uyumlu meme estetiği',
        details: 'Silikon implant veya yağ transferi ile meme büyütme',
        benefits: ['Doğal görünüm', 'Kişiye özel planlama', 'Hızlı iyileşme']
      },
      en: {
        title: 'Breast Aesthetics',
        description: 'Breast aesthetics harmonious with body proportions',
        details: 'Breast augmentation with silicone implants or fat transfer',
        benefits: ['Natural appearance', 'Personalized planning', 'Quick recovery']
      },
      de: {
        title: 'Brustästhetik',
        description: 'Brustästhetik in Harmonie mit den Körperproportionen',
        details: 'Brustvergrößerung mit Silikonimplantaten oder Fetttransfer',
        benefits: ['Natürliches Aussehen', 'Personalisierte Planung', 'Schnelle Erholung']
      },
      fr: {
        title: 'Esthétique Mammaire',
        description: 'Esthétique mammaire en harmonie avec les proportions du corps',
        details: 'Augmentation mammaire par implants en silicone ou transfert de graisse',
        benefits: ['Apparence naturelle', 'Planification personnalisée', 'Récupération rapide']
      },
      ru: {
        title: 'Эстетика Груди',
        description: 'Эстетика груди в гармонии с пропорциями тела',
        details: 'Увеличение груди с помощью силиконовых имплантатов или пересадки жира',
        benefits: ['Естественный вид', 'Персонализированное планирование', 'Быстрое восстановление']
      },
      ar: {
        title: 'تجميل الثدي',
        description: 'تجميل الثدي المتناسق مع نسب الجسم',
        details: 'تكبير الثدي بواسطة زرع السيليكون أو نقل الدهون',
        benefits: ['مظهر طبيعي', 'تخطيط شخصي', 'تعافي سريع']
      }
    }
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
    translations: {
      tr: {
        title: 'Liposuction',
        description: 'İnatçı yağ birikintilerinden kurtulun',
        details: 'Vaser liposuction ile konturlu vücut şekillendirme',
        benefits: ['Kalıcı yağ giderme', 'Minimal iz', 'Hızlı sonuç']
      },
      en: {
        title: 'Liposuction',
        description: 'Get rid of stubborn fat deposits',
        details: 'Contoured body shaping with vaser liposuction',
        benefits: ['Permanent fat removal', 'Minimal scarring', 'Quick results']
      },
      de: {
        title: 'Fettabsaugung',
        description: 'Beseitigung hartnäckiger Fettdepots',
        details: 'Konturierte Körperformung mit Vaser-Liposuktion',
        benefits: ['Dauerhafte Fettentfernung', 'Minimale Narbenbildung', 'Schnelle Ergebnisse']
      },
      fr: {
        title: 'Liposuccion',
        description: 'Éliminez les dépôts graisseux tenaces',
        details: 'Remodelage corporel profilé avec liposuccion Vaser',
        benefits: ['Élimination permanente des graisses', 'Cicatrices minimales', 'Résultats rapides']
      },
      ru: {
        title: 'Липосакция',
        description: 'Избавьтесь от упрямых жировых отложений',
        details: 'Контурное формирование тела с помощью Vaser липосакции',
        benefits: ['Постоянное удаление жира', 'Минимальные шрамы', 'Быстрые результаты']
      },
      ar: {
        title: 'شفط الدهون',
        description: 'تخلص من رواسب الدهون العنيدة',
        details: 'تشكيل الجسم المحيطي مع شفط الدهون بتقنية Vaser',
        benefits: ['إزالة دائمة للدهون', 'ندبات ضئيلة', 'نتائج سريعة']
      }
    }
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop',
    translations: {
      tr: {
        title: 'Göz Kapağı Estetiği',
        description: 'Daha genç ve dinç bir bakış',
        details: 'Üst ve alt göz kapağı estetiği operasyonları',
        benefits: ['Gençleşmiş görünüm', 'Doğal sonuçlar', 'Minimal iz']
      },
      en: {
        title: 'Eyelid Aesthetics',
        description: 'A younger and more vibrant look',
        details: 'Upper and lower eyelid aesthetic operations',
        benefits: ['Rejuvenated appearance', 'Natural results', 'Minimal scarring']
      },
      de: {
        title: 'Lidästhetik',
        description: 'Ein jüngerer und lebendigerer Blick',
        details: 'Ästhetische Operationen an Ober- und Unterlidern',
        benefits: ['Verjüngtes Aussehen', 'Natürliche Ergebnisse', 'Minimale Narbenbildung']
      },
      fr: {
        title: 'Esthétique des Paupières',
        description: 'Un regard plus jeune et plus dynamique',
        details: 'Opérations esthétiques des paupières supérieures et inférieures',
        benefits: ['Apparence rajeunie', 'Résultats naturels', 'Cicatrices minimales']
      },
      ru: {
        title: 'Эстетика Век',
        description: 'Более молодой и энергичный взгляд',
        details: 'Эстетические операции верхних и нижних век',
        benefits: ['Омоложенный вид', 'Естественные результаты', 'Минимальные шрамы']
      },
      ar: {
        title: 'تجميل الجفون',
        description: 'نظرة أصغر سناً وأكثر حيوية',
        details: 'عمليات تجميل الجفون العلوية والسفلية',
        benefits: ['مظهر متجدد الشباب', 'نتائج طبيعية', 'ندبات ضئيلة']
      }
    }
  }
] 