import { Categories } from '@interfaces/categories/categories';
import { categories } from '../const-data/categories';
import { CategoryResponse } from '@model/categories/categories-response';
import { CategoriesMapper } from '@mapper/categories/categories-mapper';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoriesServices {

    getCategories(): Categories[] {
        const categoriesResponse: CategoryResponse[] = categories.map((category) => new CategoryResponse(category));
        const finalResponse: Categories[] = categoriesResponse.map((category) => CategoriesMapper.map(category));
        return finalResponse;
    }
}