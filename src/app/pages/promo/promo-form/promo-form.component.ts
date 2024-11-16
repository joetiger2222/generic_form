import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-promo-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './promo-form.component.html',
  styleUrl: './promo-form.component.scss',
})
export class PromoFormComponent {
  formFields: any = [
    { name: 'promoId', displayName: 'Promo ID', value: '', type: 'text',required:true },
    {name:'maxUses',displayName:'Max Uses', value: '', type: 'number'},
    {name:'channel',displayName:'Channel', value: '', type: 'select',required:true,options:[{name:'Web',value:'web'},{name:'Mobile',value:'mobile'}]},
  ];
}
