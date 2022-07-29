const { Button, PanelBody, PanelRow } = wp.components;

export default function Repeater(props) {
    return(
        <div className="doatkolom-repeater">
            <label className="components-base-control__label mb-3 inline-block">{props?.label}</label>
            <div className="bg-light_gray p-5 border border-solid border-gray-300">
                <main>
                    <ul>
                        {props.children}
                    </ul>
                </main>
                <footer className="mt-5">
                    <Button onClick={props?.addNewRequest} className="justify-center is-primary w-1/2 mx-auto">Add New</Button>
                </footer>
            </div>
        </div>
    )
}

Repeater.Item = props => (
    <li className="relative">
        <div className="header-container">
            <button onClick={props?.deleteRequest} className="remove-button"><span className="dashicons dashicons-no-alt"></span></button>
        </div>
        <PanelBody className="bg-white border border-solid border-gray-200" title={props?.title.substring(0,60)} initialOpen={ false }>
            <PanelRow>
                <div className="py-5 w-full space-y-5">
                    {props.children}
                </div>
            </PanelRow>
        </PanelBody>
    </li>
)