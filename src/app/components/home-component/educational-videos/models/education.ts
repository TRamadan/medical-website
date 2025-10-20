export interface Education {
  id?: number;
  categoryId?: number;
  title?: string;
  titleEn?: string;
  categoryNameEn?: string;
  categoryNameAr?: string;
  description?: string;
  descriptionEn?: string;
  img?: string;
  createdAt?: Date;
  createdBy?: string;
  isArticle?: boolean;
  videoUrl?: string;
  nameEn?: string;
  nameAr?: string;
}

export interface Category {
  id?: number;
  nameAr?: string;
  nameEn?: string;
}
