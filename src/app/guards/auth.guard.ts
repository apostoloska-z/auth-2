import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AppState } from '../store/app.states';
import { AuthSelectors } from '../store/selectors/auth.selectors';
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private store$: Store<AppState>) {}


    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): any{
        // return this.store$.select(AuthSelectors.isAuthenticated).pipe(
        //     map((data:any) => {
        //         if(!data){
        //             console.log(data)
        //             return false
        //         }
        //         console.log(data)
        //         return true;
        //     })
        // )

        let loggedIn;
        this.store$.select(AuthSelectors.isAuthenticated).subscribe(data => loggedIn = data);
        console.log(loggedIn);
        return loggedIn;
    }

}
