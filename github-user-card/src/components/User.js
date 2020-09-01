import React from 'react';

const UserCard = (props) => {
  const {
    avatar_url,
    name,
    login,
    location,
    html_url,
    followers,
    following,
    bio
  } = props.user;

  return (
    <div>
      <img src={avatar_url} alt='github avatar' />
      <h2>{name}</h2>
      <a href={html_url}>{login}</a>
      <p>Location: {location}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserCard;
