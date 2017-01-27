import React from 'react';
import Actors from './actors/Actors';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Actors />
      </div>
    );
  }
}
