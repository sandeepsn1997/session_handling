import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  authenticate(username,password):Observable<any>{

    //hit the cam service here with required payload
    // return the access token back to service

    //i have added "of" in return to make it observable (mocking a service call)
    // this is not required while hitting actual cam end point
    return of("XXXX_access-token_XXXX")
  }



}
