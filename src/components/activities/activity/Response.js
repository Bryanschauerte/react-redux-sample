import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';

export default class Response extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onLike() {
    console.log('Liked');
    this.setState({ liked: !this.state.liked });
  }

  onReply() {
    console.log(`Replying with value: ${this.state.input}`);
    this.setState({ replied: true });
  }

  onInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <td>
        <textarea onChange={this.onInput.bind(this)}></textarea>
        <Button onClick={this.onReply.bind(this)} bsStyle={this.state.replied ? 'success' : null}>Reply</Button>
        <Button onClick={this.onLike.bind(this)} bsStyle={this.state.liked ? 'success' : null}>Like</Button>
      </td>
    );
  }
}
