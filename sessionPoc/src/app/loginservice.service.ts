import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  authenticate(username, password): Observable<any> {

    //hit the cam service here with required payload
    // return the access token back to service

    //i have added "of" in return to make it observable (mocking a service call)
    // this is not required while hitting actual cam end point



    const httpOptions = {
      headers:new HttpHeaders({
        "username": username,
        "password": password


      })

    }

    return this.http.get("https://api.url.com", httpOptions);

    //return of("XXXX_access-token_XXXX")
  }



}
