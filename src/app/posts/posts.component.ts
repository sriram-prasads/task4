import { Component, Input } from '@angular/core';
import obj from '../../assets/sample.json';
interface detailEmp {
  firstName : string;
  lastName : string;
  role : string;
  fb : string;
  twitter: string;
  linkedIn : string;

}

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
    
  data : detailEmp[] = obj;



}