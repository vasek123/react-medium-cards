import React from 'react';

import './CardDescription.scss';

function CardDescription(props) {
  return (
    <div className="description">
      <p>{props.article.description}</p>
      <span className="read-more">Read more...</span>
    </div>
  );
}

CardDescription.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default CardDescription;