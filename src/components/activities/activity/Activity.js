import React, {PropTypes} from 'react';
import Response from'./Response';

const Activity = ({
  activityUrl,
  date,
  image,
  message,
  provider,
  userName
}) => (
  <tr>
    <Response />
    <td>
      {message}
    </td>
    <td>
      {image ? <img src={image} /> : null}
    </td>
    <td>
      {userName}
    </td>
    <td>
      {provider}
    </td>
    <td>
      {date}
    </td>
    <td>
      <a href={activityUrl}>{activityUrl}</a>
    </td>
  </tr>
);

Activity.propTypes = {
  activityUrl: PropTypes.string,
  date: PropTypes.string,
  provider: PropTypes.string,
  userName: PropTypes.string
};

export default Activity;
