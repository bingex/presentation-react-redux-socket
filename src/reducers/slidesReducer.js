import { SLIDE_CHANGED_FROM_SERVER } from '../actions';

const initial = {
  activeSlide: false
};

export default function slidesReducer(state = initial, action = {}) {
  switch (action.type) {
    case SLIDE_CHANGED_FROM_SERVER:
      return Object.assign({}, state, {
        activeSlide: action.data.slide
      });

    default:
      return state;
  }
}
