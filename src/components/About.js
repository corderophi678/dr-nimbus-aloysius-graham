import React from 'react'
import {Section} from './Section'

export function About(props) {
  return (
    <Section
      sectionId="about"
      bg="bg-yellow"
      sectionLabel="About"
      render={() => <p>This lovely cat's bio is here, See?</p>}
    />
  )
}
