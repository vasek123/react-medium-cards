import React from 'react';
import Like from './Like';
import Options from './Options';

import './CardFooter.scss';

function CardFooter(props) {
  return (
    <div className="footer">
      <Like article={props.article} liked={props.liked} handleLike={props.handleLike} />
      <Options article={props.article} bookmarked={props.bookmarked} handleBookmark={props.handleBookmark} />
    </div>
  );
}

CardFooter.propTypes = {
  article: React.PropTypes.object.isRequired,
  liked: React.PropTypes.bool.isRequired,
  bookmarked: React.PropTypes.bool.isRequired,
  handleLike: React.PropTypes.func.isRequired,
  handleBookmark: React.PropTypes.func.isRequired
}

export default CardFooter;