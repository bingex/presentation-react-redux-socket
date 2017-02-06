import { FETCH_SLIDES, SLIDE_CHANGED_FROM_SERVER } from '../actions';

const initial = {
  slides: [],
  needToRedirect: false,
  ignoreSlideChange: false
}

export default function slidesReducer(state = initial, action = {}) {
  switch (action.type) {
    case FETCH_SLIDES:
      return Object.assign({}, state, { slides: action.slides });

    case SLIDE_CHANGED_FROM_SERVER:
      // need to redirect if ignoreSlideChange = true
      return Object.assign({}, state, { needToRedirect: action.data });

    default:
      return state;
  }
}
