import { Component } from '@angular/core';
import { Link } from 'src/app/dto/link';
import { GlobalConstants } from 'src/app/constants/global-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links: Link[] = GlobalConstants.headerLinks;
  // link = new Link("test", 1);
}
