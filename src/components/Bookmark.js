import React from 'react';

function Bookmark(props) {
  return (
    <div className="card-bookmark">
      <input type="checkbox" className="bookmark" value={props.bookmarked} onChange={props.handleBookmark}/>
      <label></label>
    </div>
  )
}

Bookmark.propTypes = {
  bookmarked: React.PropTypes.bool.isRequired,
  handleBookmark: React.PropTypes.func.isRequired
}

export default Bookmark;