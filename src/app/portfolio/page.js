import Template3 from '@/components/template-3'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    { title: "FLOOR MOVES TO SLOW FASHION", href:"/portfolio/floor",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "GUGUMUKA", href:"/portfolio/gugumuka",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "WE ARE GOING TO MARS", href:"/portfolio/mars",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "MISTAKEN FABRICS", href:"/portfolio/",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "MUNSIKO", href:"/portfolio/",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "KAMPALA DISASTERS", href:"/portfolio/",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
  ]

  const image = "https://igcfashion.africa/images/folio/sample/AW19/aw4.jpg"
  const title = "PORTFOLIO"
  return (
    <Template3 projects={projects} image={image} title={title}/>
  )
}