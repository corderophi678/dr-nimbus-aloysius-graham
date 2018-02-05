import React from 'react'
import {Section} from './Section'

export function Contact(props) {
  return (
    <Section
      sectionId="contact"
      bg="bg-pink"
      sectionLabel="Contact"
      render={contactContents}
    />
  )
}

function contactContents() {
  return (
    <React.Fragment>
      <div className="flex-ns flex-row justify-around">
        <div>
          <p className="measure">
            <span role="img" alt="email emoji">📧</span> cat@thisisnotarealemailaddress.com
          </p>
        </div>
        <div>
          <p className="measure">
            <span role="img" alt="bird emoji">🐦</span> @thisisnotarealtwitterhandle
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
