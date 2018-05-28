import React, { Component } from 'react';

export default class Entry extends Component {
  render() {
    return (
      <div className="entrywrapper">
      	<div className="entry">
      		<div className="entry--title">{this.props.entry.title}</div>
      		{
      			this.props.entry.hero ? <img className="entry--hero" src={this.props.entry.hero} /> : null
      		}
      		<div className="entry--content">{this.props.entry.content}</div>
      	</div>
      </div>
    );
  }
}
