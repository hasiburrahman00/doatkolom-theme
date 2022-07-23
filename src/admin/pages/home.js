import PageWrapper from "../layouts/page-wrapper";
import Panel from './../layouts/panel';
import SiteSettings from "../layouts/site-settings";
import { useContext } from "react";
import { AdminContext } from "../context";

export default function Home() {

    const { attribute, setAttribute } = useContext(AdminContext);

    return (
        <PageWrapper>
            {console.log(attribute.setting_fields)}
            <Panel>
                <Panel.VideoHeader url="https://www.youtube.com/embed/D0UnqGm_miA">Site Settings</Panel.VideoHeader>
                <Panel.Body>
                    <SiteSettings/>
                </Panel.Body>
            </Panel>

            <Panel>
                <Panel.VideoHeader url="https://www.youtube.com/embed/D0UnqGm_miA">Site Settings</Panel.VideoHeader>
                <Panel.Body>
                    <h2>Hello world</h2>
                </Panel.Body>
            </Panel>
    
        </PageWrapper>
    )
}