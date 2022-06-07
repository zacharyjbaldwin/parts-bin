import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit, OnDestroy {

  public type: string;

  private routeChanged: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeChanged = this.route.paramMap.subscribe({
      next: () => {
        this.type = this.route.snapshot.params['type'];
      }
    });
  }

  ngOnDestroy(): void {
    this.routeChanged.unsubscribe();
  }

}
