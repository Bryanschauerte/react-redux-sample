import 'isomorphic-fetch';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

import {
  ACTORS_LOAD,
  ACTORS_LOAD_FAILURE,
  ACTORS_LOAD_SUCCESS,
  fetchActors
} from '../../src/components/actors/actions';

let chai = require('chai');
chai.use(require('chai-subset'));
chai.use(require('sinon-chai'));
chai.use(require('chai-enzyme')());

const { expect } = chai;

describe('Actors actions', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    sinon.restore(global.fetch);
  });

  describe('fetchActors', () => {
    it('dispatches a failure action if response is not ok', () => {
      stubedFetch.returnsPromise().rejects();

      const dispatch = sinon.stub();
      fetchActors(dispatch);

      expect(stubedFetch).to.have.been.calledWith('https://nuvi-challenge.herokuapp.com/activities');
      expect(dispatch).to.have.been.calledWith({type: ACTORS_LOAD});
      expect(dispatch).to.have.been.calledWith({type: ACTORS_LOAD_FAILURE});
      expect(dispatch).to.have.callCount(2);
    });

    it('dispatches a success action if response is ok', () => {
      const json = sinon.stub();
      json.returnsPromise().resolves('actors');
      stubedFetch.returnsPromise().resolves({json});

      const dispatch = sinon.stub();
      fetchActors(dispatch);

      expect(stubedFetch).to.have.been.calledWith('https://nuvi-challenge.herokuapp.com/activities');
      expect(dispatch).to.have.been.calledWith({type: ACTORS_LOAD});
      expect(dispatch).to.have.been.calledWith({type: ACTORS_LOAD_SUCCESS, actors: 'actors'});
      expect(dispatch).to.have.callCount(2);
    });
  });
});
