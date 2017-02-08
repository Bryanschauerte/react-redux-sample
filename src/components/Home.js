import React from 'react';
import Activities from './activities/Activities';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <Activities />
      </div>
    );
  }
}
