export const FETCH_SLIDES = 'FETCH_SLIDES';
export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const SET_SECRET = 'SET_SECRET';
export const SLIDE_CHANGED = 'SLIDE_CHANGED';
export const SLIDE_CHANGED_FROM_SERVER = 'SLIDE_CHANGED_FROM_SERVER';

import { slides } from './data/slides';

export function fetchSlides() {
  return {
    type: FETCH_SLIDES,
    slides
  };
}

export function setSecret(secret) {
  return {
    type: SET_SECRET,
    secret
  }
}

export function slideChange(slideId, secret) {
  return {
    type: SLIDE_CHANGED,
    meta: { remote: true },
    data: {
      slide: slideId,
      secret: secret
    }
  }

}

export function login(secret) {
  return {
    type: LOGIN,
    meta: { remote: true },
    secret
  };
}
