import { action } from 'typesafe-actions';
// import { } from './types';

import ActionTypes from './constants';

export const submitForm = (username: string, place: string, date: Date) =>
  action(ActionTypes.FORM_SUBMIT, username, place, date);

e//xport const changeUsername = (name: string) =>
  //action(ActionTypes.CHANGE_USERNAME, name);
//export const changePlace = (place: string) =>
  //action(ActionTypes.CHANGE_PLACE, place);
//export const changeDate = (date: Date) => action(ActionTypes.CHANGE_DATE, Date);
