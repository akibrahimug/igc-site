import Template2 from '@/components/template-2'
import React from 'react'

  const floor = { title: "FLOOR MOVES TO SLOW FASHION", href:"/portfolio/floor/floor", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg", template: Template2 }

function Floor() {
  return (
    <Template2 title={floor.title} description={floor.image}/>
  )
}

export default Floor