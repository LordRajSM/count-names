import { Component, OnInit} from '@angular/core';
import { NameService } from './name.service';
import { Observable, Subscription } from 'rxjs';
import { arr } from 'src/mock-names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ogArr = arr;
  countObj?: Observable<Record<string,number>>;

  constructor(public nameService: NameService){
    
  }

  ngOnInit(){
    this.countObj = this.nameService.countNames();
  }

}
