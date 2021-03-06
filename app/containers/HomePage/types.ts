import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface HomeState {
  readonly username: string;
  readonly place: string;
  readonly date: string;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = HomeState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
