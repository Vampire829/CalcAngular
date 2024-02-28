import { Component, DoCheck } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})

export class CalcComponent implements DoCheck {
public counter: number =0
public disablet: boolean = false

 public ngDoCheck(): void {
  this.disablet=this.counter===0
}

public add(){
  this.counter++
}

public remove(){
 this.counter--
}

public defaultCounter(){
  this.counter=0
}
}
