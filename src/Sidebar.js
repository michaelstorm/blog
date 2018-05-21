import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    const entries = this.props.entries;
  	const links = Object.keys(entries).map(slug => (
  		<a href={slug} className="sidebar--link" key={slug}>
  			{entries[slug].title}
			</a>
		));

    return (
    	<div className="sidebar">
    		<div className="sidebar--links">
    			{links}
    		</div>
    	</div>
    );
  }
}
