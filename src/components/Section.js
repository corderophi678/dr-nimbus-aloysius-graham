import React from 'react'

export function Section(props) {
  return (
    <section id={`${props.sectionId}`} className="mw9 center">
      <div
        className={`section-heading ${props.bg} w-100 ph1 pv1 pv3-ns ph3-ns`}>
        <h2 className="section-heading-content ml2 black z-0">
          {props.sectionLabel}
        </h2>
      </div>
      <div className="w-100">
        {props.render()}
      </div>
    </section>
  )
}
