/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

enum ActionTypes {
  // NOTE username as nric
  CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME',
  FORM_SUBMIT = 'boilerplate/Home/FORM_SUBMIT',
  CHANGE_PLACE = 'boilerplate/Home/CHANGE_PLACE',
  CHANGE_DATE = 'boilerplate/Home/CHANGE_DATE',
}

export default ActionTypes;
