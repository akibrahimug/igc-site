import Template2 from "@/components/template-2";
import Template4 from "@/components/template-4";

export default function PortfolioProjectPage({ params }) {
    const projects = [
        { title: "FLOOR MOVES TO SLOW FASHION", href:"/portfolio/floor/floor",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg", template: Template2 },
        { title: "GUGUMUKA", href:"/portfolio/gugumuka",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "WE ARE GOING TO MARS", href:"/portfolio/mars",image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
      ]
    const portfolio = [
        { title: "FLOOR MOVES TO SLOW FASHION", href: "/portfolio/floor/floor", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "GUGUMUKA", href: "/portfolio/gugumuka", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "WE ARE GOING TO MARS", href: "/portfolio/mars", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "MISTAKEN FABRICS", href: "/portfolio/mistaken-fabrics", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "MUNSIKO", href: "/portfolio/munsiko", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "KAMPALA DISASTERS", href: "/portfolio/kampala-disasters", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    ];

    const project = portfolio.find(item => item.href.endsWith(params.project));
    const projectTitle = project ? project.title : "Any project tile";

    const description = "The Gugumuka collection was inspired by the stigma around the Lubugo fabric within Ugandan society due to its untold history and miseducation around it. This fabric, also known as barkcloth, is made out of the bark of a tree and is an integral part of Baganda culture identity in Uganda. Demonised and erased under colonial rule, Lubugo and other such items / symbols of culture and tradition in Uganda have contributed to local and global ignorance surrounding African culture, history, and tradition.";

    return (
		<Template4 title={projectTitle} description={description} image={"https://igcfashion.africa/images/home3.png"} projects={projects}/>
    );
}
