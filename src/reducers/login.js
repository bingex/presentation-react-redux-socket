import { LOGIN_SUCCESS, SET_SECRET, LOGIN, LOGIN_RESULT } from '../actions';

const initial = {
  auth: 'denied'
};

export default function login(state = initial, action = {}) {
  switch (action.type) {
    case LOGIN_RESULT:
      return { auth: state.access };

    default:
      return state;
  }
}
