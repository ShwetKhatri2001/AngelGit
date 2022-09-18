import { Component, Input, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input()
  userDetails: any = {};
  @Input()
  isDataRetrieved: boolean = false;
  faTwitter = faTwitter;
  faLink = faLink;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() {}

  ngOnInit(): void {}
}
