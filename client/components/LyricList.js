import React, { Component } from 'react';

class LyricList extends Component {
  onLike(id) {
    console.log('Liked!');
  }

  renderList() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderList()}</ul>;
  }
}

export default LyricList;
