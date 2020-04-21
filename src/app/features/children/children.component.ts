import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  public product = [];
  domain = 'http://localhost:3000/products';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.get(this.domain).subscribe(data => this.product = data);

  }
}
