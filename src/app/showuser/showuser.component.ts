import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  user:any;
  ngOnInit(): void {
    this.getAllUsers();
  }
  constructor(private router:Router,private userser:UserService){

  }

  getAllUsers(){
    return this.userser.getAllUser().subscribe((u:any)=>
  {
    console.log(u);
    this.user=u;
  }
  )
  };


}
