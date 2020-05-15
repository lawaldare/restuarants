export class RestaurantInterface {
  name?: string;
  description?: string;
  logo?: string;
  location?: {
    lat: number;
    log: number;
  }
}
