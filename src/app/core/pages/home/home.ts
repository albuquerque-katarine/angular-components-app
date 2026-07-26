import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  name:string = '';

  response:string = '';

  enviar() {    
    this.response = this.name;
    return this.response;
  }
}
