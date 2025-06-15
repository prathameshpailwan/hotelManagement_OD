import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../SharedModule';
import { HttpClient } from '@angular/common/http';
import { FilterHotelsPipe } from '../../pipes/filter-hotels.pipe';
import { Router } from '@angular/router';
import { PaginationControlComponent } from '../common/pagination-control/pagination-control.component';
import { SharedService } from '../../services/shared.service';
import { HotelDataService } from '../../services/hotel-data.service';

@Component({
  selector: 'app-hotel-search',
  imports: [SharedModule, FilterHotelsPipe, PaginationControlComponent],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent implements OnInit {

  HotelDataList: any[] = [];
  searchText: string = '';
  pageSize = 18
  currentPage = 1;
  totalPages = 1;
  paginatedHotels: any[] = [];
  constructor(private http: HttpClient,
    private router: Router,
    private sharedService: SharedService, private hotelService: HotelDataService) { }


  ngOnInit() {
    
    this.getHotelData()
  }

  getHotelData() {
    this.hotelService.getHotelData().subscribe({
      next: (data) => {
        this.HotelDataList = data;
      },
      error: (err) => {
        console.error('Error fetching hotel data', err);
      }
    });
  }
  viewHotelDetails(data) {
    
    this.sharedService.setHotel(data);
    this.router.navigate(['hotel-monitoring']);
  }
}
