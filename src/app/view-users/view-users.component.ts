import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers :[UsersService]
})
export class ViewUsersComponent implements OnInit {

  usersList:User[];

  constructor(private usersService:UsersService,private toastr:ToastrService,private authGuard:AuthGuard) { }

  ngOnInit() {
    console.log('Inside View Users, IsAdmin = ',this.authGuard.IsAdmin());
     this.authGuard.IsAdmin().then(value=>
    {
     // if(value==true)
      {
      let misFormattedData=this.usersService.GetData();
    misFormattedData.snapshotChanges().subscribe(item=>{
      this.usersList=[];
      item.forEach(element =>{
        let payLoad=element.payload.toJSON();
        payLoad["$key"]=element.key;
        this.usersList.push(payLoad as User);
        console.log('list of users' , this.usersList)
      
      });
    });
  }
    }) 
  }

}
