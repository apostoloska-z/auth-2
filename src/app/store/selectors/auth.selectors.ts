import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from '../reducers/auth.reducers';

export namespace AuthSelectors {
    export const state = createFeatureSelector<State>("Auth");

    export const token = createSelector(state, (state) => state.token);

    export const isAuthenticated = createSelector(state, (state) => state.isAuthenticated);

    export const errorMessage = createSelector(state, (state) => state.errorMessage);
}