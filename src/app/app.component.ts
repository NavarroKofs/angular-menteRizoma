import { Component } from '@angular/core';
declare var tinymce: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-menteRizoma';
  ngOnInit() {
    tinymce.init(
      {
          selector: "#comentInput",
          
          
      });
      
}
}
