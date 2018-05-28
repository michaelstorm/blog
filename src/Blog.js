import React, { Component } from 'react';
import Entry from './Entry.js';
import Header from './Header.js';
import Resume from './Resume.js';
import Sidebar from './Sidebar.js';
import Entries from './Entries.js';
import { entries, orderedEntries } from './entriesData.js';

const pages = {
  'resume': <Resume />,
  'entries': <Entries entries={orderedEntries} />
}

export default class Blog extends Component {
  render() {
    let content;
    if (window.selectedEntry) {
      const entry = entries[window.selectedEntry];
      content = <Entry domain="www.michaelstorm.io" entry={entry} />;
    }
    else {
      content = window.page ? pages[window.page] : null;
    }

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
