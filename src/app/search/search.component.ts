import { Component } from '@angular/core';
import { SearchService } from '../sevice/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {

  public searchTerm : string=''
  constructor(private searchService:SearchService){ }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.searchService.search.next(this.searchTerm)
    
  }
}
