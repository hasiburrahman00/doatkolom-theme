const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <h2>Result Part</h2>
            
                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.result_title }
                    onChange={ ( value ) => setAttributes({result_title: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.result_title_link }
                    onChange={ ( value ) => setAttributes({result_title_link: value}) }
                />

            <h2>Class Routine Part</h2>

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.class_routine }
                    onChange={ ( value ) => setAttributes({class_routine: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.class_routine_link }
                    onChange={ ( value ) => setAttributes({class_routine_link: value}) }
                />

            <h2>Exam Routine Part</h2>

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.exam_routine }
                    onChange={ ( value ) => setAttributes({exam_routine: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.exam_routine_link }
                    onChange={ ( value ) => setAttributes({exam_routine_link: value}) }
                />

            <h2>Syllabus Part</h2>

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.syllabus }
                    onChange={ ( value ) => setAttributes({syllabus: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.syllabus_link }
                    onChange={ ( value ) => setAttributes({syllabus_link: value}) }
                />

            <h2>Notice Board Part</h2>

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.notice_board }
                    onChange={ ( value ) => setAttributes({notice_board: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.notice_board_link }
                    onChange={ ( value ) => setAttributes({notice_board_link: value}) }
                />

            <h2>Event Part</h2>

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.event }
                    onChange={ ( value ) => setAttributes({event: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.event_link }
                    onChange={ ( value ) => setAttributes({event_link: value}) }
                />


           

        </div>
    )
}