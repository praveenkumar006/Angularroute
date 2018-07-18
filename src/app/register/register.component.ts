import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nme: any;
  mail: any;
  psd: any;
  adrs: any;
  mob: any;

  regtr(reg:NgForm){
    this.nme=reg.value.name;
    this.mail=reg.value.username;
    this.mob=reg.value.phone;
    alert(this.nme+"\n" + this.mail +"\n" + this.mob);
  }
}
