import { Injectable } from '@angular/core';
import { Theater } from './theater.model';


@Injectable()
export class ProductRepository {
  private products: Theater[] = [];
  private movie: string[] = [];
  
  
}