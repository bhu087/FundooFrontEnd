import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/authGuardService/auth.guard';
import { UserServicesService } from 'src/app/services/userService/user-services.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  profileUrl: any;
  data:any;
  constructor(private service: UserServicesService, private router: Router, private auth: AuthGuard) { }

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile(){
    this.service.getProfilePic().subscribe((serve)=>{
      this.data = JSON.stringify(serve);
      var res = JSON.parse(this.data);
      this.profileUrl = res['data'];
    console.log(serve);
   },
   (error)=>{
     console.log(console.error());
   }
   );
  }
  logOut(){
    localStorage.removeItem("Bearer");
    sessionStorage.removeItem("Bearer");
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/events']);
    this.router.navigateByUrl("/login");
  }
}
