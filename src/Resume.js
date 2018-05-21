import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div className="entrywrapper">
        <div className="entry">
          <div className="entry--content">
            <object width="100%" height="800" data="resume.pdf">
              <p>
                This browser does not support viewing PDFs. Please <a href="resume.pdf">click here to download it</a>.
              </p>
            </object>
          </div>
        </div>
      </div>
    );
  }
}
