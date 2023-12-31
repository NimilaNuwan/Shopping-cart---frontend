import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {
  }

  public getProducts() {
    return this.http.get(this.baseUrl + '/product');
  }
}
