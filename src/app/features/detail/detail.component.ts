import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product = {
    id: '',
    name: '',
    category:'',
    img: '',
    price:''
  };
  domain = 'http://localhost:3000/products';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id');

    this.apiService.getId(productId).subscribe(data => this.product = data);
  }

}
