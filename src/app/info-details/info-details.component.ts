import { Component } from '@angular/core';
import { Info } from '../interfaces/info';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.css']
})
export class InfoDetailsComponent {
  public info: Info | any;

  constructor(private infoService: InfoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.infoService.getInfo(id).subscribe(
      response => {
        this.info = response;
      },
      error => {
        console.log(error);
      }
    )
  }
}
