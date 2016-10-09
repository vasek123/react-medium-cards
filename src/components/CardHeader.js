import React from 'react';
import ArticleInfo from './ArticleInfo';

import './CardHeader.scss';

function CardHeader(props) {
  return (
    <div className="header">
      <ArticleInfo article={props.article} />
      <h1>{props.article.title}</h1>
    </div>
  );
}

CardHeader.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default CardHeader;