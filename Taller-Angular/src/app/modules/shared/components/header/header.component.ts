import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {

  @Input() userName$ = this.loginService.currentUser
  .pipe(
    map(user=> user.firstName)
  )

  constructor(private router: Router, private loginService: LoginService){
  }

  logout() {
  
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
