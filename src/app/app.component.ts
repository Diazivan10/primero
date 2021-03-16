import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase';

  usuario: string = '';
  clave: string = '';

  validar(): void {
    if (this.usuario == '' || this.clave == '') {
      window.alert(" Los campos no pueden ser vacios")
    }

  }
}

