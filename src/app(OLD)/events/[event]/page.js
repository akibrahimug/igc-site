import Template6 from "@/components/template-6";
import React from "react";

function Event({ params }) {
    const events = [
        { title: "ALTERNATIVE REALITIES", href: "/portfolio/floor", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "GUGUMUKA MU KAZO", href: "/portfolio/gugumuka", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "KWETU KWANZA", href: "/portfolio/mars", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "NDERE CENTRE", href: "/portfolio/ndere-centre", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "SOCREATIVE SUMMIT 24", href: "/portfolio/so-creative", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "SENEGAL", href: "/portfolio/senegal", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "IATF CAMEX 23", href: "/portfolio/iatf-camex", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
        { title: "LONDON FASHION WEEK 2023", href: "/portfolio/london-fashion-week", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    ];

    // Find the event title based on the `params.event` value
    const event = events.find(item => item.href.endsWith(params.event));
    const eventTitle = event ? event.title : "Event";

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.";

    return (
        <Template6
            title={eventTitle}
            description={description}
            image={"https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"}
        />
    );
}

export default Event;
