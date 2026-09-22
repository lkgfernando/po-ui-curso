import { Component } from '@angular/core';
import { PoInfoModule, PoLinkModule, PoTooltipModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-about',
  imports: [PoLinkModule, PoInfoModule, PoTooltipModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
