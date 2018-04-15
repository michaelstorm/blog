import React, { Component } from 'react';
import Entry from './Entry.js'
import Header from './Header.js';
import DomainNameDoubleAuctions from './entries/DomainNameDoubleAuctions.js';
import StartWithStaticAnalysis from './entries/StartWithStaticAnalysis.js';

const orderedEntries = [
  DomainNameDoubleAuctions,
  StartWithStaticAnalysis
];

const entries = orderedEntries.reduce((obj, entry) => {
  obj[entry.slug] = entry;
  return obj;
}, {});

export default class Blog extends Component {
  render() {
    const entry = window.selectedEntry ? entries[window.selectedEntry] : orderedEntries[0];

    return (
    	<div className="blog">
    		<Header entries={entries} />
	    	<div className="entries">
		    	<Entry title={entry.title} hero={entry.hero} content={entry.content} />
		    </div>
	    </div>
    );
  }
}
