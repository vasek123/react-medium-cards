import React from 'react';

function AuthorImage(props) {
  return (
    <img src={props.author.image} alt={props.author.name} />
  );
}

AuthorImage.propTypes = {
  author: React.PropTypes.object.isRequired
}

export default AuthorImage;