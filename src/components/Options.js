import React from 'react';
import Bookmark from './Bookmark';

import './Options.scss';

function Options(props) {
  return (
    <div className="options">
      <span className="responses">{props.article.responsesCount} response(s)</span>
      <Bookmark bookmarked={props.bookmarked} handleBookmark={props.handleBookmark} />
      <span className="dropdown"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
    </div>
  )
}

Options.propTypes = {
  article: React.PropTypes.object.isRequired,
  bookmarked: React.PropTypes.bool.isRequired
}

export default Options;