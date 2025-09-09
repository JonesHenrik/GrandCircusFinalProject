import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Response }        from './components/response/response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Response, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EcoImpact';
}
