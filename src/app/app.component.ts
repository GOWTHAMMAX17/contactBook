import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContactBook';
  name: any;
  email: any;
  phoneNumber: Number | undefined;
  uploadimg: any;
  baseUrl: any;
  isDialogOpen: boolean = false;
  contacts: any = [
  
    {
      name: 'Gowtham',
      email: 'gowthamn@iamneo.ai',
      phoneNumber: '9500965313',
      baseUrl:"../assets/peak1.jpeg",
    },

    {
      name: 'jagan',
      email: 'jagan@iamneo.ai',
      phoneNumber: '9500975313',
      baseUrl:"../assets/walter.jpg",
    },


    {
      name: 'sampath',
      email: 'sampath@iamneo.ai',
      phoneNumber: '9508965313',
      baseUrl:"../assets/luci.jpg",
    },
    {
      name: 'dharshan',
      email: 'dharshan@iamneo.ai',
      phoneNumber: '9579965313',
      baseUrl:"../assets/finalprof.jpg",
    },
  ]
  addcontacts() {
    let x: any =
    {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      baseUrl: this.baseUrl,
    }
      ;
    this.contacts.push(x);
    console.log(this.contacts);
    this.isDialogOpen=false;
    this.name=null;
    this.email=null;
    this.phoneNumber=0;
    this.baseUrl=null;
  }

  onFileSelected(event:any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event1: any) => {
        console.log(event1, "event1");
        this.baseUrl = event1.target.result;
        console.log('vals', this.baseUrl);
      }
    }
  
  }
  openAddContact() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
    }
    else {
      this.isDialogOpen = false;
    }

  }
}
