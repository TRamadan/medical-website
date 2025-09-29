export interface Education {
  id?: number;
  categoryId: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  img: string;
  createdAt: Date;
  createdBy: string;
  isArticle: boolean;
  videoUrl: string;
}

export interface Category {
  id?: number;
  name: string;
  nameEn: string;
}
