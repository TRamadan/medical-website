import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySearch',
  standalone: true,
})
export class CategorySearchPipe implements PipeTransform {
  transform(
    categories: any[],
    searchTerm: string,
    currentLang: 'en' | 'ar'
  ): any[] {
    if (!categories || !searchTerm) {
      return categories;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return categories
      .map((category) => {
        const categoryName =
          currentLang === 'ar' ? category.nameAr : category.nameEn;

        if (categoryName.toLowerCase().includes(lowerCaseSearchTerm)) {
          return category;
        }

        const filteredServices = category.services.filter((service: any) => {
          const serviceName =
            currentLang === 'ar' ? service.nameAr : service.nameEn;
          return serviceName.toLowerCase().includes(lowerCaseSearchTerm);
        });

        return filteredServices.length > 0
          ? { ...category, services: filteredServices }
          : null;
      })
      .filter((category) => category !== null) as any[];
  }
}
