import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder:FormBuilder) {
    
  }
  title = 'loginform';
  submitted=false;

  contactForm =this.formBuilder.group({
    firstname:['',[Validators.required,Validators.minLength(5)]],
    lastname:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(10)]],
    gender:['',Validators.required],
    dateofbirth:['',Validators.required],
    country:['',Validators.required],
    phonenumber:['',Validators.required],
    address:this.formBuilder.group({
      city:['',Validators.required],
      street:['',Validators.required],
      pincode:['',Validators.required]
      
    })
  });
  get firstname()
  {
    return this.contactForm.get("firstname");
  }
  get lastname()
  {
    return this.contactForm.get("lastname");
  }
  get email()
  {
    return this.contactForm.get("email");
  }
  get password()
  {
    return this.contactForm.get("password");
  }
  get gender()
  {
    return this.contactForm.get("gender");
  }
  get dateofbirth()
  {
    return this.contactForm.get("dateofbirth");
  }
  get country()
  {
    return this.contactForm.get("country");
  }
  get phonenumber()
  {
    return this.contactForm.get("phonenumber");
  }
  get city()
  {
    return this.contactForm.get("city");
  }
  get street()
  {
    return this.contactForm.get("street");
  }
  get pincode()
  {
    return this.contactForm.get("pincode");
  }

  countryList: country[]=[
    new country("1","India"),
    new country("2","USA"),
    new country("3","Aus"),
  ];


  onSubmit()
  {
    this.submitted=true;
    console.log(this.contactForm.value);
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