import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sessionPoc';



  constructor(private userIdle: UserIdleService, private router: Router, private service: LoginserviceService) {
  }

  ngOnInit() {
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => {

      console.log(count);
      //also promt to stay logged in with a pop up box

    });

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      console.log('Time is up!');
      //if user doesnt respond redirect to login page
      this.router.navigate(['login']);


      // clear the session even though its invalid (good pratice)
      sessionStorage.clear();

    });


    // refresh the token here
    // example if token expires after 1 hr set ping duration to 55 min or 59 min (ideal case)
    // so that every 55-59 min it refreshes the token
    this.userIdle.ping$.subscribe(() => {
      console.log("PING");
      this.service.authenticate("username", "password").subscribe(token => {

        // this will be the new token
        sessionStorage.setItem("accessToken", token);
        // this will override the previous token value
        // this time you dont redirect to home page as this happens in background
        // leave the user in same page

      })
    }



    );



  }






  // other methods which can be used if you want to manualy alter the user idle
  // i dont think we will ever use them
  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }



}
