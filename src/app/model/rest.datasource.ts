import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Theater } from "./theater.model";


@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `	https://cpsu-test-api.herokuapp.com/api/camt2023
		/theaters
`;
  }
  
  getTheaters(): Observable<Theater[]> {
    return this.http.get<Theater[]>(this.baseUrl);
  }
  
}