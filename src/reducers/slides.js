import { FETCH_SLIDES } from '../actions';

export default function slides(state = [], action = {}) {
  switch (action.type) {
    case FETCH_SLIDES:
      return action.slides;

    default:
      return state;
  }
}
