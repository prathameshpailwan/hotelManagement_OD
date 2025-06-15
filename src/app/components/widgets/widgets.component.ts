import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../SharedModule';

@Component({
  selector: 'app-widgets',
  imports: [SharedModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent implements OnInit {
  @Input() hotelDetailData: any;
  widgets: any[] = []

  ngOnInit(): void {
    this.assignWidgets();
  }

  assignWidgets() {
    
    this.widgets.push(
      { label: 'Last Used', value: this.hotelDetailData['lastUsedDate'] },
      { label: 'Upcoming Confirmed', value: this.hotelDetailData['confirmedBookings']?.toString() },
      { label: 'Upcoming Request', value: this.hotelDetailData['onRequestBookings']?.toString() },
      { label: 'Next Booking Date', value: this.hotelDetailData['nextBooking'] },
      {
        label: 'Open (& Total) Complaints',
        value: `${this.hotelDetailData['openComplaints']} <small>(${this.hotelDetailData['totalComplaints']})</small>`
      },
      {
        label: 'To Be Paid',
        value: `GBP ${this.hotelDetailData['toBePaid']?.toLocaleString('en-GB', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      }
    );


  }
}
