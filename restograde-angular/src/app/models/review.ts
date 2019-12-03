import { SafeUrl } from "@angular/platform-browser";
import { environment } from "../../environments/environment";
import { Restaurant } from "./restaurant";

export class Review {
    id: number;
    rating: number;
    title: string;
    content: string;
    created: Date;
    imageId: number;

    restaurantId: number;
    authordId: number;

    restaurant: Restaurant;

    constructor() {
        this.rating = 5;
    }
}