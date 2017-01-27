import 'isomorphic-fetch';

export const ACTORS_LOAD = 'actors/LOAD';
export const ACTORS_LOAD_SUCCESS = 'actors/LOAD_SUCCESS';
export const ACTORS_LOAD_FAILURE = 'actors/LOAD_FAILURE';

export function fetchActors(dispatch) {
  dispatch({type: ACTORS_LOAD});

  fetch('https://nuvi-challenge.herokuapp.com/activities')
    .then(response => {
      return response.json().then(actors => {
        dispatch({
          type: ACTORS_LOAD_SUCCESS,
          actors
        });
      })
    }, () => dispatch({type: ACTORS_LOAD_FAILURE}));
}
