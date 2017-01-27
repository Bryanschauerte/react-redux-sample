import React from 'react';
import Activities from './activities/Activities';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Activities />
      </div>
    );
  }
}
