import 'isomorphic-fetch';

export const ACTIVITIES_LOAD = 'activities/LOAD';
export const ACTIVITIES_LOAD_SUCCESS = 'activities/LOAD_SUCCESS';
export const ACTIVITIES_LOAD_FAILURE = 'activities/LOAD_FAILURE';

export function fetchActivities(dispatch) {
  dispatch({type: ACTIVITIES_LOAD});

  fetch('https://nuvi-challenge.herokuapp.com/activities')
    .then(response => {
      return response.json().then(activities => {
        dispatch({
          type: ACTIVITIES_LOAD_SUCCESS,
          activities
        });
      })
    }, () => dispatch({type: ACTIVITIES_LOAD_FAILURE}));
}
