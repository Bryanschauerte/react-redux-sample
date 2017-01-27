import {
  ACTORS_LOAD,
  ACTORS_LOAD_FAILURE,
  ACTORS_LOAD_SUCCESS
} from './actions';
import deepEqual from 'deep-equal';
import { createSelector } from 'reselect';
import _get from 'lodash/get';

const defaultState = {
  loaded: false,
  loading: false
};

export default function reducer(state = defaultState, action = {}) {
  let newState;

  switch (action.type) {
    case ACTORS_LOAD: {
      newState = {
        ...state,
        loaded: false,
        loading: true
      };
      return deepEqual(newState, state) ? state : newState;
    }

    case ACTORS_LOAD_SUCCESS: {
      newState = {
        ...state,
        actors: action.actors,
        loaded: true,
        loading: false
      };
      return deepEqual(newState, state) ? state : newState;
    }

    case ACTORS_LOAD_FAILURE: {
      newState = {
        ...state,
        error: true,
        loaded: false,
        loading: false
      };
      return deepEqual(newState, state) ? state : newState;
    }

    default:
      return state;
  }
}

export const getActorEntity = createSelector(
    state => state,
    state => _get(state, 'actors')
);

export const getActors = createSelector(
    getActorEntity,
    actorEntity => _get(actorEntity, 'actors')
);


