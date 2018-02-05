import React from 'react'
import {Section} from './Section'

export function Contact(props) {
  return (
    <Section
      sectionId="contact"
      bg="bg-pink"
      sectionLabel="Contact"
      render={() => <p>This lovely cat's contact details goes here, See?</p>}
    />
  )
}
