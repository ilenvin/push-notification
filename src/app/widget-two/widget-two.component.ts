import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent {
  @Input() name: String | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
