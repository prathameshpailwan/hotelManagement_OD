import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { SharedModule } from '../../SharedModule';

@Component({
  selector: 'app-booking-overview',
  imports: [SharedModule],
  templateUrl: './booking-overview.component.html',
  styleUrl: './booking-overview.component.css'
})
export class BookingOverviewComponent implements OnInit {
  @Input() monthlyBookings: number[] = [];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Bookings Overview'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 7
        }
      }
    }
  };

  public barChartLabels: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: '#2196f3',
        borderRadius: 4
      }
    ]
  };

  ngOnInit(): void {
    
    this.barChartData.datasets[0].data = this.monthlyBookings;
  }
}