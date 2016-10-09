import React from 'react';
import AuthorImage from './AuthorImage';

import './ArticleInfo.scss';

function ArticleInfo(props) {
  return (
    <div className="article-info">
      <AuthorImage author={props.article.author} />
      <div className="info">
        <div className="author-info">
          <span href="#" className="author">{props.article.author.name}</span>
        </div>
        <span className="publication-date">{props.article.publicationDate}</span>
        <span className="dot"></span>
        <span className="estimated-time">{props.article.estimatedTime} min read</span>
      </div>
    </div>
  );
}

ArticleInfo.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default ArticleInfo;