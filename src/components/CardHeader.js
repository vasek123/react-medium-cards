import React from 'react';
import ArticleInfo from './ArticleInfo';

function CardHeader(props) {
  return (
    <div className="card-header">
      <ArticleInfo article={props.article} />
      <h1>{props.article.title}</h1>
    </div>
  );
}

CardHeader.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default CardHeader;