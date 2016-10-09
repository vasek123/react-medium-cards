import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';

import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      bookmarked: false
    }

    this.handleLike = this.handleLike.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
  }

  handleLike() {
    const newLiked = !this.state.liked;
    this.setState({ liked: newLiked });
  }

  handleBookmark() {
    const newBookmarked = !this.state.bookmarked;
    this.setState({ bookmarked: newBookmarked });
  }

  render() {
    return (

      <div className="card">
        <CardHeader article={this.props.article} />
        <CardImage article={this.props.article} />
        <CardDescription article={this.props.article} />
        <CardFooter
          article={this.props.article}
          liked={this.state.liked}
          bookmarked={this.state.bookmarked}
          handleLike={this.handleLike}
          handleBookmark={this.handleBookmark}
        />
      </div>

    )
  }
}

export default Card;