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
  return (
    <React.Fragment>
      <h4 className="fw7 f4 underline">Employment</h4>
      <p>
        Furman College, Professor of Molecular Bioinformatics, Fall 2009-Present
      </p>
      <h4 className="fw7 f4 underline">Education</h4>
      <p>
        PhD, Molecular Biology and Informatics, Catlifornia Institute of
        Technology (CatTech), 2015. Dissertation:{' '}
        <em>
          The Seeds of Change: Nepata cataria and the cross-hatch quantum
          lattice.
        </em>
      </p>
      <p>BS, Biology, Catbridge University, Cambridge, UK, 2009</p>
      <h4 className="fw7 f4 underline">Research</h4>
      <p>My primary research is aimed toward developing a frost-resistant strain of <em>Nepata cataria</em> (catnip), in an effort to support the well-being of cats world-wide.</p>
      <h4 className="fw7 f4 underline">Publications</h4>
      <p>"On the Merits of the cross-hatch quantum lattice", <em>BIOLOGY!</em>, v.LVI, iss. 03, pp.17-43 (2017)</p>
      <p>"Nepat cataria in Yellow Knife: A struggle for survival and recommendations for intervention", <em>Yellow Knife Journal of Molecular Biology</em>, iss. 43, pp.322-63 (2015)</p>
      <p>"L-tryptothymaninitrate, preserving the future for Nepata cataria", <em>Biology and Information</em>, v.xii pp.1-54 (2015)</p>
    </React.Fragment>
  )
}
