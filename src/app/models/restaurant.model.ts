export class RestaurantInterface {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  location?: {
    lat: number;
    log: number;
  }
}
