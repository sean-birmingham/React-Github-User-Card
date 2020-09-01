import React from 'react';

const Follower = (props) => {
  const { avatar_url, html_url, login } = props.follower;
  return (
    <div>
      <img src={avatar_url} alt='follower avatar' />
      <a href={html_url}>{login}</a>
    </div>
  );
};

export default Follower;
