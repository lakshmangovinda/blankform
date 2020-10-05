import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, FormBuilder, Form} from '@angular/forms';
import {UsernameValidators} from '../uservalidators';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface Element {
  candidatename: string;
  email: string;
  Contact: number;
  Team: string;
  Type: string;
  Experience: string;
  Hireddate;
  Duration: string;
  status: string;
  stipend: number;
  Action;
}
const ELEMENT_DATA: Element[] = [
  // tslint:disable-next-line:max-line-length
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com', Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper', Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
  { candidatename: 'lakshman', Contact: 6302569388, email: 'lakshman@example.com',  Team: 'angulardeveloper' , Type: 'unpaid', Experience: 'Fresher', Hireddate: '02/10/2020', Duration: '3 months', status: 'active', stipend: 0, Action: null},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  get username(){
    return    this.form.get('name');
  }
  get phone(){
    return    this.form.get('phone');
  }
  get mail(){
  return this.form.get('email');
  }
  get interndurtion(){
  return this.form.get('interndurtion');
  }
  get collegeaddress(){
  return this.form.get('collegeaddress');
  }
  get collegename(){
    return this.form.get('collegename');
  }
  get collegecontact(){
    return this.form.get('collegecontact');
  }
  get candidateaddress(){
    return this.form.get('candidateaddress');
  }
  get status(){
  return this.form.get('status');
  }
  get experience(){
  return this.form.get('experience');
  }
  get team(){
  return this.form.get('team');
  }
  get payment(){
  return this.form.get('payment');
  }
  get pictureupload(){
  return this.form.get('pictureupload');
  }
  get joiningletter(){
  return this.form.get('joiningletter');
  }
  get resume(){
  return this.form.get('resume');
  }
  get noc(){
  return this.form.get('noc');
  }
  get frontaadhar(){
  return this.form.get('frontaadhar');
  }
  get backaadhar(){
  return this.form.get('backaadhar');
  }
  get frontpan(){
  return this.form.get('frontpan');
  }
  get backpan(){
  return this.form.get('backpan');
  }
  displayedColumns = ['candidateName', 'Contact', 'Type', 'Team', 'Experience', 'Hired Date', 'Duration', 'status', 'stipend', 'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)
      , UsernameValidators.nospace]),
    email: new FormControl('', [Validators.required, Validators.email ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    interndurtion: new FormControl('', [Validators.required]),
    collegeaddress: new FormControl('', [Validators.required, Validators.minLength(20)]),
    collegename: new FormControl('', [Validators.required]),
    collegecontact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    candidateaddress: new FormControl('', [Validators.required, Validators.minLength(20)]),
    status: new FormControl('', [Validators.required]),
    team: new FormControl(''),
    payment: new FormControl(''),
    experience: new FormControl(''),
    pictureupload: new FormControl(''),
    joiningletter: new FormControl(''),
    resume: new FormControl(''),
    noc: new FormControl(''),
    frontaadhar: new FormControl(''),
    backaadhar: new FormControl(''),
    frontpan: new FormControl(''),
    backpan: new FormControl('')
  });
fileupload: any;
imageurl: any;
aadhar: any;
frontaadharurl: any;
backaadharurl: any;
backadhar: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
submit(value){
  console.log(value);
}
  addcontact(){
  const txtNewInputBox = document.createElement('input');
  txtNewInputBox.setAttribute('type', 'text');
  txtNewInputBox.setAttribute('class', 'form-control contact');
  txtNewInputBox.setAttribute('placeholder', 'contact');
  txtNewInputBox.setAttribute('formControlName', 'phone');
  document.getElementById('spanning').appendChild(txtNewInputBox);
}
  imagepreview(file){
this.fileupload = file.item(0);
const reader = new FileReader();
reader.onload = (event: any) => {
  this.imageurl = event.target.result;
};
reader.readAsDataURL(this.fileupload);
}
  aadharfrontpreview(file){
    this.aadhar = file.item(0);
    const fileread = new FileReader();
    fileread.onload = (event: any) => {
      this.frontaadharurl = event.target.result;
    };
    fileread.readAsDataURL(this.aadhar);
  }
  aadharbackpreview(file){
    this.backadhar = file.item(0);
    const fileread = new FileReader();
    fileread.onload = (event: any) => {
      this.backaadharurl = event.target.result;
    };
    fileread.readAsDataURL(this.backadhar);
  }
}
