import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentLayoutComponent } from './parent-layout/parent-layout.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SpinnerComponent } from './spinner/spinner.component';
import { TextboxComponent } from './textbox/textbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { DraggingDirective } from './parent-layout/directive/dragging.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentLayoutComponent,
    ButtonComponent,
    TextboxComponent,
    NavbarComponent,
    SpinnerComponent,
    DraggingDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
