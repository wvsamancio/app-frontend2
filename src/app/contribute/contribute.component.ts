import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contribute } from 'src/app/interfaces/contribute';
import { ContributeService } from 'src/app/services/contribute.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent {
  public departments: Array<{name: string}> = [
    { name: 'Água e Esgoto' },
    { name: 'Educação' },
    { name: 'Saúde' },
    { name: 'Segurança' },
    { name: 'Transporte' },
    { name: 'Vigilância Sanitária' }
  ];

  private contribute: Contribute = {} as Contribute;
  public success: boolean = false;

  private lat: number = 0;
  private lng: number = 0;

  constructor(private contributeService: ContributeService) {}

  getCurrentLocation() {
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
     });
    }
   else {
    alert("Geolocation is not supported by this browser.");
    }
   }

  public onSubmit(contributeFormValue: NgForm): void {
    this.contribute.content = contributeFormValue.value.content;
    this.contribute.department = contributeFormValue.value.department;
    this.contribute.lat = this.lat.toString();
    this.contribute.lng = this.lng.toString();
    this.contribute.user = "123455678900"

    this.contributeService.saveContribute(this.contribute).subscribe(
      response => {
        response
        this.success = true;},
      error => error
    );
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }
}
