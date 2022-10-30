import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private weatherService: WeatherService){}

  weatherData?: WeatherData;
  CityName: string = "Delhi";
  DisplayName: string = "Delhi";
  
  ngOnInit(): void {
    this.getWeatherData(this.CityName);
    this.CityName ="";
  }
  
  onSubmit(){
    this.getWeatherData(this.CityName);
    this.DisplayName = this.CityName;
    this.CityName ="";
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (res => {
        this.weatherData = res;
        console.log(res);
      })
  })
  }
  
}
