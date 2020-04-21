import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public product = [];
  domain = 'http://localhost:3000/products';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.get(this.domain).subscribe(data => this.product = data);
  }

}
