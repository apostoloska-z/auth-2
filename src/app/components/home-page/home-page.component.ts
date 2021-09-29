import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import { AppState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private store: Store<AppState>,     
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.store.dispatch(LogOut());
    this.router.navigateByUrl('login');
  }
}
