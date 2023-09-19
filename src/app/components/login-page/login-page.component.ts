import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AppState } from '../../store/app.states';
import { Store } from '@ngrx/store';
import { LogIn } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  public floatLabelControl = new FormControl('auto');

  public submitted = false;

  public error = '';
  token$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private store$: Store<AppState>,
  ) {    
    this.loginForm = this.formBuilder.group({
      floatLabel: this.floatLabelControl,
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.token$ = this.store$.select(AuthSelectors.isAuthenticated);
    console.log(this.token$)
  }

  ngOnInit(): void {
    console.log('hehehehey4444 66667773433 7777777777777')
    this.token$.subscribe(data => {
      console.log(data)
      localStorage.setItem('token', data);
    })

  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      console.log('The information you have entered is not valid');
      return;
    }

    const payload = {
      email: this.f.email.value,
      password: this.f.password.value,
    };
    this.store$.dispatch(LogIn({ payload: payload }));
    this.router.navigateByUrl('/');
  }

  }
