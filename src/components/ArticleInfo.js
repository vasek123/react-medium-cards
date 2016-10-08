import React from 'react';
import AuthorImage from './AuthorImage';

function ArticleInfo(props) {
  return (
    <div className="card-article-info">
      <AuthorImage author={props.article.author} />
      <p><span className="author">{props.article.author.name}</span></p>
      <p><span className="publication-date">{props.article.publicationDate}</span><span className="dot"></span><span className="estimated-time">{props.article.estimatedTime} min read</span></p>
    </div>
  );
}

ArticleInfo.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default ArticleInfo;