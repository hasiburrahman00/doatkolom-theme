import { useEffect } from "react";
export default function updateBreadcrumb( title = 'App' ) {
    useEffect(()=>{
        const breadcrumb = jQuery('#doatkolom-breadcrumb');
        breadcrumb.find('h1').text(title);
        breadcrumb.find('li').last().text(`${title.substring(0, 15)}...`);
    },[title])
}