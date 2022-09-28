import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-widget-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent implements OnChanges{
  @Input() name: String | undefined;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes happened');
  }

  ngOnInit(): void {
  }

}
