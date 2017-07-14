import { Component, OnInit } from '@angular/core';
import { HelloService } from "../hello.service";

import { ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [HelloService]
})
export class HelloComponent implements OnInit {

  public tester: any;	

  constructor(private restcountries: HelloService) { }

  ngOnInit() {
  	console.log('test');
    this.restcountry();
  }
  
  restcountry(){
  	console.log('rest test')
     let self = this;
    self.restcountries.restcountrysvc().subscribe((data) => {
        this.tester = data; 
        console.log(data);
    });
  }

}
