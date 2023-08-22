import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
    //userdefined event
    @Output() toogle = new EventEmitter();

    menuIconClicked(){
      this.toogle.emit()//The value to emit and send to parent
    }
  }
