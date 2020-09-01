import React from 'react';
import Follower from './Follower';

const Followers = (props) => {
  return (
    <div>
      {props.followers.map((follower) => (
        <Follower key={follower.id} follower={follower} />
      ))}
    </div>
  );
};

export default Followers;
