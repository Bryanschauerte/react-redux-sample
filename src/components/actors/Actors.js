import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {
  fetchActors
} from './actions';
import {
    getActors
} from './entities';

export class Actors extends Component {
  propTypes: {
    onFetchActors: PropTypes.func
  }

  componentDidMount() {
    this.props.onFetchActors();
  }

  render() {
    return (
      <div>
        {`${this.props.actors}`}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    actors: getActors(state)
  };
}

function mapDispatchToProps(dispatch) {
  const onFetchActors = () => {
    fetchActors(dispatch);
  };

  return {
    onFetchActors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
