import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/" className="header--title">
          Michael Storm
        </a>
        <a href="https://github.com/michaelstorm" className="header--link">
          <img src="src/images/GitHub-Mark-32px.png" className="header--link" /> <span>GitHub</span>
        </a>
        <a href="/resume" className="header--link">
          Resume
        </a>
        <a href="/rss" className="header--link">
          <img src="src/images/feed-icon-28x28.png" className="header--link" /> <span>RSS</span>
        </a>
      </div>
    );
  }
}
