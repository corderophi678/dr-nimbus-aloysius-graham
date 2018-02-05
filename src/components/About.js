import React from 'react'
import {Section} from './Section'

export function About(props) {
  return (
    <Section
      sectionId="about"
      bg="bg-yellow"
      sectionLabel="About"
      render={aboutContent}
    />
  )
}

function aboutContent() {
  return (
    <React.Fragment>
      <div className="flex-ns flex-row justify-around">
        <div>
          <p className="measure mh1">
            Dr. Nimbus Aloysius Graham is a world-reknowned concert violinist
            and molecular biologist. Dr. Graham (or NAG as he's known by his
            friends and colleagues) has been a guest performer in orchestras all
            over the world. Most recently, he has been a guest performer with
            the Marseille Symphony Orchatstra, prior to which he has performed
            with, among others, The American Catservatory, L'Orchestre
            Purrisien, and The Meowscow Philharmonic.
          </p>
        </div>
        <div>
          <p className="measure mh1">
            When not practicing the violin, Dr. Graham holds a research position
            under the auspices of the Department of Biology at William and Hairy College,
            as part of their Molecular Bioinformatics Program.
          </p>
          <p className="measure">
            Apart from his purrfessional pursuits, Dr. Graham enjoys eating
            lettuce, practicing judo with his partner Ned the Cat, and
            volunteering with his local shelter for lost puppies.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
