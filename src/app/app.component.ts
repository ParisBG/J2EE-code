import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]

  
})
export class AppComponent {
  /** INTERPOLATION
   * surround html component with double curly braces and it becomes a usable variable!
   * 
   */
  title = 'Graphix Genius';
}
