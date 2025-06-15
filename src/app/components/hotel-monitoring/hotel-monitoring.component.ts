import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../SharedModule';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { WidgetsComponent } from '../widgets/widgets.component';
import { BookingOverviewComponent } from '../booking-overview/booking-overview.component';
import { MapComponent } from '../map/map.component';
import { RightPanelComponent } from '../right-panel/right-panel.component';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AboutComponent } from '../tabs-components/about/about.component';
import { ClassificationComponent } from '../tabs-components/classification/classification.component';
import { ProductsComponent } from '../tabs-components/products/products.component';
import { FinanceComponent } from '../tabs-components/finance/finance.component';
import { TermsComponent } from '../tabs-components/terms/terms.component';
import { NotesComponent } from '../tabs-components/notes/notes.component';

@Component({
  selector: 'app-hotel-monitoring',
  imports: [SharedModule, LeftPanelComponent,WidgetsComponent,
    BookingOverviewComponent,MapComponent,ClassificationComponent,
    ProductsComponent,RightPanelComponent,AboutComponent,FinanceComponent,
  TermsComponent,NotesComponent],
  templateUrl: './hotel-monitoring.component.html',
  styleUrl: './hotel-monitoring.component.css'
})
export class HotelMonitoringComponent implements OnInit {
  hotelData: any;
  latitude: any
  longitude: any;
  selectedHotel : any
tabName : string = 'Home'
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    debugger
    this.sharedService.hotel$.subscribe(data => {
      this.hotelData = data;
      this.latitude = this.hotelData?.['lat'] || null
      this.longitude = this.hotelData?.['lng'] || null
      this.selectedHotel = this.hotelData?.monthlyBookings || null
    });
  }

  backToSearch() {
    this.router.navigate(['hotel']);

  }
  onTabChanged(data){
    debugger
    this.tabName = data
  }
}
