import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const entries = this.props.entries;
  	const links = Object.keys(entries).map(slug => (
  		<a href={slug} className="header--link" key={slug}>
  			{entries[slug].title}
			</a>
		));

    return (
    	<div className="header">
    		<a href="/" className="header--title">
    			Michael Storm
  			</a>
    		<div className="header--links">
    			{links}
    		</div>
    	</div>
    );
  }
}
