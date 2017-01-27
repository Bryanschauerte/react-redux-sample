import 'isomorphic-fetch';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

import {
  ACTIVITIES_LOAD,
  ACTIVITIES_LOAD_FAILURE,
  ACTIVITIES_LOAD_SUCCESS,
  fetchActivities
} from '../../src/components/activities/actions';

let chai = require('chai');
chai.use(require('chai-subset'));
chai.use(require('sinon-chai'));
chai.use(require('chai-enzyme')());

const { expect } = chai;

describe('Activities actions', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    sinon.restore(global.fetch);
  });

  describe('fetchActivities', () => {
    it('dispatches a failure action if response is not ok', () => {
      stubedFetch.returnsPromise().rejects();

      const dispatch = sinon.stub();
      fetchActivities(dispatch);

      expect(stubedFetch).to.have.been.calledWith('https://nuvi-challenge.herokuapp.com/activities');
      expect(dispatch).to.have.been.calledWith({type: ACTIVITIES_LOAD});
      expect(dispatch).to.have.been.calledWith({type: ACTIVITIES_LOAD_FAILURE});
      expect(dispatch).to.have.callCount(2);
    });

    it('dispatches a success action if response is ok', () => {
      const json = sinon.stub();
      json.returnsPromise().resolves('activities');
      stubedFetch.returnsPromise().resolves({json});

      const dispatch = sinon.stub();
      fetchActivities(dispatch);

      expect(stubedFetch).to.have.been.calledWith('https://nuvi-challenge.herokuapp.com/activities');
      expect(dispatch).to.have.been.calledWith({type: ACTIVITIES_LOAD});
      expect(dispatch).to.have.been.calledWith({type: ACTIVITIES_LOAD_SUCCESS, activities: 'activities'});
      expect(dispatch).to.have.callCount(2);
    });
  });
});
