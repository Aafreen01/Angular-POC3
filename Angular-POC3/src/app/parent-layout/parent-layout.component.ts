import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { DraggingDirective } from './directive/dragging.directive';


@Component({
  selector: 'app-parent-layout',
  templateUrl: './parent-layout.component.html',
  styleUrls: ['./parent-layout.component.scss'],
})
export class ParentLayoutComponent implements OnInit {
  @ViewChild(DraggingDirective, { static: true }) dragdropDir!: DraggingDirective;
  components = ['Textbox', 'Button', 'Navbar', 'Spinner'];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {} 

  drop(event: CdkDragDrop<string[]>) {
    if (this.components[event.previousIndex] === 'Textbox') {
      const componentFactoryText =
        this.componentFactoryResolver.resolveComponentFactory(TextboxComponent);
      const viewContainerRef = this.dragdropDir.viewContainerRef;
      const componentRef =
        viewContainerRef.createComponent<any>(componentFactoryText);
    } else if (this.components[event.previousIndex] === 'Button') {
      const componentFactoryBtn =
        this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
      const viewContainerRef = this.dragdropDir.viewContainerRef;
      const componentRef =
        viewContainerRef.createComponent<any>(componentFactoryBtn);
    } else if (this.components[event.previousIndex] === 'Navbar') {
      const componentFactoryBtn =
        this.componentFactoryResolver.resolveComponentFactory(NavbarComponent);
      const viewContainerRef = this.dragdropDir.viewContainerRef;
      const componentRef =
        viewContainerRef.createComponent<any>(componentFactoryBtn);
    } else if (this.components[event.previousIndex] === 'Spinner') {
      const componentFactoryBtn =
        this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
      const viewContainerRef = this.dragdropDir.viewContainerRef;
      const componentRef =
        viewContainerRef.createComponent<any>(componentFactoryBtn);
    }
  }
}

