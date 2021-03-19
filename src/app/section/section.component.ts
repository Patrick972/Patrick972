import { Component, OnInit } from '@angular/core';
import { ShoesService} from '../shoes.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() {}
    shoesService = new ShoesService;
  
  tbProducts = this.shoesService.tbProducts;

 
  ngOnInit(): void {
  }

}
