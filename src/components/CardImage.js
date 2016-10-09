import React from 'react';

import './CardImage.scss';

function CardImage(props) {
  return (
    <img className="image" src={props.article.image} alt={props.article.title} />
  );
}

CardImage.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default CardImage;