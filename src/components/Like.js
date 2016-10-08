import React from 'react';

function Like(props) {
  return (
    <div className="card-like">
      <input type="checkbox" className="like" value={props.liked} onChange={props.handleLike}/>
      <label></label>
      <span className="like-count">{props.article.likesCount + (props.liked ? 1 : 0)}</span>
    </div>
  );
}

Like.propTypes = {
  article: React.PropTypes.object.isRequired,
  liked: React.PropTypes.bool.isRequired,
  handleLike: React.PropTypes.func.isRequired
}

export default Like;