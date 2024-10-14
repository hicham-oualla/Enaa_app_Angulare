import {Component, Input} from '@angular/core';
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private serviceaut:AuthService) {
  }
  @Input() userRole!: string | null;



  lougout(){
    this.serviceaut.lougout()
  }
}
