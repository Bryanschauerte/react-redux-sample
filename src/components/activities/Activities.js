import React, { Component, PropTypes } from 'react';
import { ProgressBar, Table } from "react-bootstrap";
import Activity from './activity/Activity';
import { connect } from 'react-redux';
import {
  fetchActivities
} from './actions';
import {
  getActivities,
  getShouldDisplayActivites
} from './entities';

export class Activities extends Component {
  propTypes: {
    activities: PropTypes.array,
    onFetchActivities: PropTypes.func,
    shouldDisplayActivities: PropTypes.bool
  }

  componentDidMount() {
    this.props.onFetchActivities();
  }

  render() {
    if (this.props.shouldDisplayActivities) {
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Reply/Like</th>
              <th>Message</th>
              <th>Image</th>
              <th>User Name</th>
              <th>Provider</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.props.activities.map(activity => (
                <Activity
                  key={activity.activity_url}
                  activityUrl={activity.activity_url}
                  date={activity.activity_date}
                  image={activity.activity_attachment}
                  message={activity.activity_message}
                  provider={activity.provider}
                  userName={activity.actor_username}/>
            ))}
          </tbody>
        </Table>
      );
    } else {
        return (
          <ProgressBar active now={100}/>
        );
      }
    }
  }

function mapStateToProps(state) {
  return {
    activities: getActivities(state),
    shouldDisplayActivities: getShouldDisplayActivites(state)
  };
}

function mapDispatchToProps(dispatch) {
  const onFetchActivities = () => {
    fetchActivities(dispatch);
  };

  return {
    onFetchActivities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
