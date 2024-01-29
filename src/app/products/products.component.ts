import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { SearchService } from '../sevice/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  public productList : any;
  searchKey:string="";
  constructor(private api : ApiService, private searchService:SearchService ){ }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;

      
    })

    
    
  this.searchService.search.subscribe((val:any)=>{
    this.searchKey = val
  })
  
  }

}
