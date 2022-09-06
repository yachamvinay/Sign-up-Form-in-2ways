import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  
  countryList: country[]=[
    new country("1","India"),
    new country("2","USA"),
    new country("3","Aus"),
  ];
  contact:contact={
  firstname: "vinay",
  lastname: "y",
  email: "vinay.y@gmail.com",
  password: "123456789",
  gender: "Male",
  dateofbirth: "03-09-2000",
  country: "2",
  city: "nandyal",
  street: "sai baba nagar",
  pincode: 518501,
  phonenumber: 9876543210,
  
  }
  onSubmit(contactForm:any)
  {
    console.log(contactForm.value);
    
    
  }


  


  constructor() { }

  ngOnInit(): void {
  }
  
}
export class country{
  id: string;
  name: string;
  constructor(id:string,name:string)
  {
    this.id=id;
    this.name=name;
  }
}
export class contact{
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  gender!: string;
  dateofbirth!: string;
  country!: string; 
  city!: string;
  street!: string;
  pincode!: number;
  phonenumber!: number;
  }
