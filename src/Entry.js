import React, { Component } from 'react';

export default class Entry extends Component {
  componentDidMount() {
    const component = this;
    window.disqus_config = function () {
      this.page.url = `https://${component.props.domain}/${component.props.entry.slug}`;
      this.page.identifier = component.props.entry.disqusIdentifier;
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://michael-storm.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
  }

  render() {
    return (
      <div className="entrywrapper">
      	<div className="entry">
      		<div className="entry--title">{this.props.entry.title}</div>
      		{
      			this.props.entry.hero ? <img className="entry--hero" src={this.props.entry.hero} /> : null
      		}
      		<div className="entry--content">{this.props.entry.content}</div>
          <div id="disqus_thread"></div>
      	</div>
      </div>
    );
  }
}
