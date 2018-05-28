import React, { Component } from 'react';

export class EntryBlurb extends Component {
  onClick = () => {
    window.location.href = `/${this.props.entry.slug}`;
  };

  render() {
    return (
      <div className="entry--blurb" onClick={this.onClick}>
        {
          this.props.entry.hero ? <img className="entry--blurb--hero" src={this.props.entry.hero} /> : null
        }
        <div className="entry--blurb--title">{this.props.entry.title}</div>
        <div className="entry--blurb--date">{this.props.entry.date}</div>
      </div>
    );
  }
}

export default class Entries extends Component {
  render() {
    return (
      <div className="entrywrapper">
        {
          this.props.entries.map(entry => <EntryBlurb entry={entry} key={entry.title} />)
        }
      </div>
    );
  }
}
