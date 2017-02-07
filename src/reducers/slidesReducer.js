import { FETCH_SLIDES, SLIDE_CHANGED_FROM_SERVER, REFRESH_STATE } from '../actions';

const initial = {
  slides: [],
  activeSlide: false
};

export default function slidesReducer(state = initial, action = {}) {
  switch (action.type) {
    case FETCH_SLIDES:
      return Object.assign({}, state, { slides: action.slides });

    case SLIDE_CHANGED_FROM_SERVER:
      return Object.assign({}, state, {
        activeSlide: action.data ? action.data.slide : 1
      });

    case REFRESH_STATE:
      return Object.assign({}, state, {
        activeSlide: false
      });

    default:
      return state;
  }
}
