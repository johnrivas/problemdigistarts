import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'problemsDigistarts';

  constructor(
    private router: Router
  ) {}

  goProblem1(){
    this.router.navigate(['/problem1']);
  }

  goProblem2(){
    this.router.navigate(['/problem2']);
  }

}
