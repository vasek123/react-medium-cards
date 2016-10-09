import React from 'react';

import './Bookmark.scss';

function Bookmark(props) {
  return (
    <div className="bookmark" onClick={props.handleBookmark}>
      <input type="checkbox" checked={props.bookmarked} />
      <label>{props.bookmarked ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}</label>
    </div>
  )
}

Bookmark.propTypes = {
  bookmarked: React.PropTypes.bool.isRequired,
  handleBookmark: React.PropTypes.func.isRequired
}

export default Bookmark;