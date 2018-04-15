import React, { Component } from 'react';

export default class Entry extends Component {
  render() {
    return (
    	<div className="entry">
    		<div className="entry--title">{this.props.title}</div>
    		{
    			this.props.hero ? <img className="entry--hero" src={this.props.hero} /> : null
    		}
    		<div className="entry--content">{this.props.content}</div>
    	</div>
    );
  }
}
