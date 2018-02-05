import React from 'react'

export function Section(props) {
  return (
    <section id={`${props.sectionId}`} className="h5">
      <div
        className={`section-heading ${props.bg} w-100 ph1 pv1 pv3-ns ph3-ns`}>
        <h2 className="section-heading-content ml2 black">
          {props.sectionLabel}
        </h2>
      </div>
      {props.render()}
    </section>
  )
}
