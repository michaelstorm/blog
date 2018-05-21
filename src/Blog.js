import React, { Component } from 'react';
import Entry from './Entry.js';
import Header from './Header.js';
import Resume from './Resume.js';
import Sidebar from './Sidebar.js';
import AmazonPricehunter from './entries/AmazonPricehunter.js';
import DomainNameDoubleAuctions from './entries/DomainNameDoubleAuctions.js';
import StartWithStaticAnalysis from './entries/StartWithStaticAnalysis.js';

const orderedEntries = [
  AmazonPricehunter,
  DomainNameDoubleAuctions,
  StartWithStaticAnalysis
];

const entries = orderedEntries.reduce((obj, entry) => {
  obj[entry.slug] = entry;
  return obj;
}, {});

const pages = {
  'resume': <Resume />
}

export default class Blog extends Component {
  render() {
    const entry = window.selectedEntry ? entries[window.selectedEntry] : orderedEntries[0];
    const renderedEntry = <Entry domain="www.michaelstorm.io" entry={entry} />;

    const page = window.page ? pages[window.page] : null;
    const content = page ? page : renderedEntry;

    return (
    	<div className="blog">
        <Header />
    		{/*<Sidebar entries={entries} />*/}
        {content}
        <div className="footer">
          Eyeglasses icon made by Freepik on <a href="https://www.flaticon.com">www.flaticon.com</a>.
        </div>
	    </div>
    );
  }
}
