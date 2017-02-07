import { FETCH_SLIDES, SLIDE_CHANGED_FROM_SERVER } from '../actions';

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

    default:
      return state;
  }
}
