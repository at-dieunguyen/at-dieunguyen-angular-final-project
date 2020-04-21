import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  public product = [];
  domain = 'http://localhost:3000/products';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.get(this.domain).subscribe(data => this.product = data);
  }
}
