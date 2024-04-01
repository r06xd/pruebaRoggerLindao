export interface Menu {
    id:                number;
    dishName:          string;
    dishDescription:   string;
    idCategory:        number;
    salePrice:         number;
    productionCost:    number;
    //ingredients:       Ingredients[];
    allergens:         string[];
    dishImage:         string;
}
