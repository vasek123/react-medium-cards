import React from 'react';
import Bookmark from './Bookmark';

function Options(props) {
  return (
    <div className="card-options">
      <span className="responses">{props.article.responsesCount} response(s)</span>
      <Bookmark bookmarked={props.bookmarked} handleBookmark={props.handleBookmark} />
      <span className="dropdown"></span>
    </div>
  )
}

Options.propTypes = {
  article: React.PropTypes.object.isRequired,
  bookmarked: React.PropTypes.bool.isRequired
}

export default Options;