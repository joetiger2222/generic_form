import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss'
})
export class SharedComponent {

}
