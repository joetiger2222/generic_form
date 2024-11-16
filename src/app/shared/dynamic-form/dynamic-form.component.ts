import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedComponent } from '../shared.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  @Input() formFields:any;
  form!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.createForm();
  }

  createForm(){
    const controls:any={}
    this.formFields.map((f:any)=>{
      controls[f.name]=[f.value,f.required?Validators.required:null];
    })
    this.form=this.fb.group(controls)
    console.log('this.form',this.form)
  }

  submit(){
    console.log('submit',this.form)
  }

}
