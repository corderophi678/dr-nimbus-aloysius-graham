import React from 'react'
import {Section} from './Section'

export function CV(props) {
  return (
    <Section
      sectionId="cv"
      bg="bg-green"
      sectionLabel="CV"
      render={cvContents}
    />
  )
}

function cvContents() {
  return <p>This lovely cat's CV goes here, See?</p>
}
