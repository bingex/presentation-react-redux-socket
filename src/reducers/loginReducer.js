import { LOGIN, LOGIN_SUCCESS, SET_SECRET } from '../actions';

const initial = {
  auth: false,
  secret: ''
};

export default function loginReducer(state = initial, action = {}) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { auth: action.access });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, { auth: true });

    case SET_SECRET:
      return Object.assign({}, state, { secret: action.secret });

    default:
      return state;
  }
}
