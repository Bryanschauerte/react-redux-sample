import {
  ACTIVITIES_LOAD,
  ACTIVITIES_LOAD_FAILURE,
  ACTIVITIES_LOAD_SUCCESS
} from './actions';
import deepEqual from 'deep-equal';
import { createSelector } from 'reselect';
import _get from 'lodash/get';

const defaultState = {
  activities: [],
  loaded: false,
  loading: false
};

export default function reducer(state = defaultState, action = {}) {
  let newState;

  switch (action.type) {
    case ACTIVITIES_LOAD: {
      newState = {
        ...state,
        loaded: false,
        loading: true
      };
      return deepEqual(newState, state) ? state : newState;
    }

    case ACTIVITIES_LOAD_SUCCESS: {
      newState = {
        ...state,
        activities: action.activities,
        loaded: true,
        loading: false
      };
      return deepEqual(newState, state) ? state : newState;
    }

    case ACTIVITIES_LOAD_FAILURE: {
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

export const getActivitiesEntity = createSelector(
    state => state,
    state => _get(state, 'activities')
);

export const getActivities = createSelector(
    getActivitiesEntity,
    entity => _get(entity, 'activities')
);

export const getIsLoading = createSelector(
  getActivitiesEntity,
  entity => _get(entity, 'loading')
);

export const getIsLoaded = createSelector(
  getActivitiesEntity,
  entity => _get(entity, 'loaded')
);

export const getError = createSelector(
  getActivitiesEntity,
  entity => _get(entity, 'error')
);

export const getShouldDisplayActivites = createSelector(
  getIsLoaded,
  getActivities,
  getError,
  (loaded, activities, error) => loaded && activities.length && !error
);
