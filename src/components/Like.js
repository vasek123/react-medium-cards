import React from 'react';

import './Like.scss';

function Like(props) {
  return (
    <div className="like" onClick={props.handleLike}>
      <input type="checkbox" checked={props.liked} />
      <label>{props.liked ? <i className="fa fa-heart" aria-hidden="true"></i> : <i className="fa fa-heart-o" aria-hidden="true"></i>}</label>
      <span className="count">{props.article.likesCount + (props.liked ? 1 : 0)}</span>
    </div>
  );
}

Like.propTypes = {
  article: React.PropTypes.object.isRequired,
  liked: React.PropTypes.bool.isRequired,
  handleLike: React.PropTypes.func.isRequired
}

export default Like;