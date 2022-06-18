const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function HeaderControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

                <ToggleControl
                    label={attributes.result_title_visibility ? "Result Hide" : "Result Show"}
                    checked={ attributes.result_title_visibility }
                    onChange={ ( value ) => setAttributes({result_title_visibility: value}) }
                />

                <ToggleControl
                    label={attributes.class_routine_visibility ? "Result Hide" : "Result Show"}
                    checked={ attributes.class_routine_visibility }
                    onChange={ ( value ) => setAttributes({class_routine_visibility: value}) }
                />

                <ToggleControl
                    label={attributes.class_routine_visibility ? "Result Hide" : "Result Show"}
                    checked={ attributes.class_routine_visibility }
                    onChange={ ( value ) => setAttributes({class_routine_visibility: value}) }
                />

        </div>
    )
}