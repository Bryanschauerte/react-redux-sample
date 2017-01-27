import actorsReducer, {
  getActorEntity,
  getActors
} from "../../src/components/actors/entities";
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import {
  ACTORS_LOAD,
  ACTORS_LOAD_FAILURE,
  ACTORS_LOAD_SUCCESS
} from "../../src/components/actors/actions";

const defaultState = {
  loaded: false,
  loading: false
};
deepFreeze(defaultState);

const loadAction = {
  type: ACTORS_LOAD
};
deepFreeze(loadAction);

const loadSuccessAction = {
  type: ACTORS_LOAD_SUCCESS,
  actors: 'actors'
};
deepFreeze(loadSuccessAction);

const loadFailureAction = {
  type: ACTORS_LOAD_FAILURE
};
deepFreeze(loadFailureAction);

describe('Actors entities', () => {
  describe('getActorEntity', () => {
    it('gets the actor entity from the state', () => {
      const state = {
        actors: 'actors',
        random: 'random'
      };

      expect(getActorEntity(state))
        .to.eql('actors');
    });
  });

  describe('getActors', () => {
    it('gets the actors from the actor entity', () => {
      expect(getActors.resultFunc({actors: 'actors'}))
        .to.eql('actors');
    });
  });

  describe('Actors reducer', () => {
    describe('ACTORS_LOAD', () => {
      it('sets the loading state to true', () => {
        //Set up
        const expectedState = {
          loading: true,
          loaded: false
        };

        //Run unit and verify expectations
        expect(actorsReducer(defaultState, loadAction))
          .to.eql(expectedState);
      });
    });

    describe('ACTORS_LOAD_SUCCESS', () => {
      it('sets the loading state to false and adds the actors to the state', () => {
        //Set up
        const expectedState = {
          actors: 'actors',
          loading: false,
          loaded: true
        };

        //Run unit and verify expectations
        expect(actorsReducer(defaultState, loadSuccessAction))
          .to.eql(expectedState);
      });
    });

    describe('ACTORS_LOAD_FAILURE', () => {
      it('sets the loading state to false and adds an error to the state', () => {
        //Set up
        const expectedState = {
          error: true,
          loading: false,
          loaded: false
        };

        //Run unit and verify expectations
        expect(actorsReducer(defaultState, loadFailureAction))
          .to.eql(expectedState);
      });
    });
  });
});
