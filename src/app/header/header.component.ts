import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CalcComponent } from '../calc/calc.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
