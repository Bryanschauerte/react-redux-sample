import activitiesReducer, {
  getActivitiesEntity,
  getActivities,
  getError,
  getIsLoaded,
  getIsLoading,
  getShouldDisplayActivites
} from "../../src/components/activities/entities";
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import {
  ACTIVITIES_LOAD,
  ACTIVITIES_LOAD_FAILURE,
  ACTIVITIES_LOAD_SUCCESS
} from "../../src/components/activities/actions";

const defaultState = {
  loaded: false,
  loading: false
};
deepFreeze(defaultState);

const loadAction = {
  type: ACTIVITIES_LOAD
};
deepFreeze(loadAction);

const loadSuccessAction = {
  type: ACTIVITIES_LOAD_SUCCESS,
  activities: 'activities'
};
deepFreeze(loadSuccessAction);

const loadFailureAction = {
  type: ACTIVITIES_LOAD_FAILURE
};
deepFreeze(loadFailureAction);

describe('Activities entities', () => {
  describe('getActivitiesEntity', () => {
    it('gets the actor entity from the state', () => {
      const state = {
        activities: 'activities',
        random: 'random'
      };

      expect(getActivitiesEntity(state))
        .to.eql('activities');
    });
  });

  describe('getActivities', () => {
    it('gets the activities from the actor entity', () => {
      expect(getActivities.resultFunc({activities: 'activities'}))
        .to.eql('activities');
    });
  });

  describe('getIsLoading', () => {
    it('gets the loading state from the actor entity', () => {
      expect(getIsLoading.resultFunc({loading: true}))
        .to.be.true;
    });
  });

  describe('getIsLoaded', () => {
    it('gets the loaded state from the actor entity', () => {
      expect(getIsLoaded.resultFunc({loaded: true}))
        .to.be.true;
    });
  });

  describe('getError', () => {
    it('gets the error from the actor entity', () => {
      expect(getError.resultFunc({error: true}))
        .to.be.true;
    });
  });

  describe('getShouldDisplayActivites', () => {
    it('returns true if there is no error, the activities has a length, and loaded is true', () => {
      expect(getShouldDisplayActivites.resultFunc(true, ['activity'], false))
        .to.be.true;
    });

    it('returns false if there is no error, activities is an empty array, and loaded is true', () => {
      expect(getShouldDisplayActivites.resultFunc(true, [], false))
        .to.be.falsy;
    });
  });

  describe('Activities reducer', () => {
    describe('ACTIVITIES_LOAD', () => {
      it('sets the loading state to true', () => {
        //Set up
        const expectedState = {
          loading: true,
          loaded: false
        };

        //Run unit and verify expectations
        expect(activitiesReducer(defaultState, loadAction))
          .to.eql(expectedState);
      });
    });

    describe('ACTIVITIES_LOAD_SUCCESS', () => {
      it('sets the loading state to false and adds the activities to the state', () => {
        //Set up
        const expectedState = {
          activities: 'activities',
          loading: false,
          loaded: true
        };

        //Run unit and verify expectations
        expect(activitiesReducer(defaultState, loadSuccessAction))
          .to.eql(expectedState);
      });
    });

    describe('ACTIVITIES_LOAD_FAILURE', () => {
      it('sets the loading state to false and adds an error to the state', () => {
        //Set up
        const expectedState = {
          error: true,
          loading: false,
          loaded: false
        };

        //Run unit and verify expectations
        expect(activitiesReducer(defaultState, loadFailureAction))
          .to.eql(expectedState);
      });
    });
  });
});
