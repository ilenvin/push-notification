import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';

const componentConfig = [
  {
    component: () => import('./widget-one/widget-one.component').then(it => it.WidgetOneComponent),
    inputs: {
      name: 'hello world'
    }
  },
  {
    component: () => import('./widget-two/widget-two.component').then(it => it.WidgetTwoComponent),
    inputs: {
      name: 'hello ei'
    }
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-component';
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;

  createComponentBasedOnConfig() {
    componentConfig.forEach(async componentConfig => {
      const componentInstance = await componentConfig.component()
      const componentRef = this.container.createComponent(componentInstance)
      
      Object.entries(componentConfig.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      });
    })
  }

  createComponent() {
    this.container.clear();
    const widgetOneRef = this.container.createComponent(WidgetOneComponent);
    widgetOneRef.setInput('name', 'ei')
    
    const widgetTwoRef = this.container.createComponent(WidgetTwoComponent );
    // widgetTwoRef.instance.name = 'ilen'
    widgetTwoRef.setInput('name', 'ilen')
  }
}
