import React from 'react';

import './AuthorImage.scss';

function AuthorImage(props) {
  return (
    <img className="author-image" src={props.author.image} alt={props.author.name} />
  );
}

AuthorImage.propTypes = {
  author: React.PropTypes.object.isRequired
}

export default AuthorImage;