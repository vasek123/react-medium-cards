import React from 'react';

function CardImage(props) {
  return (
    <img className="card-image" src={props.article.image} alt={props.article.title} />
  );
}

CardImage.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default CardImage;