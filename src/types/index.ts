export interface Treatment {
  id: number;
  imageUrl: string;
  translations: string; // JSON string olarak geliyor
  createdAt: string;
}

export interface TreatmentTranslation {
  title: string;
  details: string;
  benefits: string[];
  description: string;
}

export interface ParsedTreatment extends Omit<Treatment, 'translations'> {
  translations: {
    [key: string]: TreatmentTranslation;
  };
} 