import { LOGIN_RESULT, SET_SECRET } from '../actions';

const initial = {
  auth: 'denied',
  secret: ''
};

export default function loginReducer(state = initial, action = {}) {
  switch (action.type) {
    case LOGIN_RESULT:
      return Object.assign({}, state, { auth: action.access });

    case SET_SECRET:
      return Object.assign({}, state, { secret: action.secret });

    default:
      return state;
  }
}
