import React from 'react';

function CardDescription(props) {
  return (
    <div className="card-description">
      <p>{props.article.description}</p>
      <a href="#">Read more...</a>
    </div>
  );
}

CardDescription.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default CardDescription;