export const FETCH_SLIDES = 'FETCH_SLIDES';
export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';

import { slides } from './data/slides';

export function fetchSlides() {
  return {
    type: FETCH_SLIDES,
    slides
  };
}

export function login(secret) {
  return {
    type: LOGIN,
    meta: { remote: true },
    secret
  };
}
