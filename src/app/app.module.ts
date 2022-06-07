import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryStartComponent } from './inventory/inventory-start/inventory-start.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SidebarComponent } from './inventory/sidebar/sidebar.component';
import { ComponentDetailComponent } from './inventory/component-detail/component-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'inventory', pathMatch: 'full' },
  { path: 'inventory', component: InventoryComponent, children: [
    { path: '', component: InventoryStartComponent, pathMatch: 'full' },
    { path: ':type', component: ComponentDetailComponent }
  ] }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    SidebarComponent,
    InventoryStartComponent,
    ComponentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
