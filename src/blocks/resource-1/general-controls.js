const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <h2>Result Part</h2>
                <ToggleControl
                    label={attributes.result_title_visibility ? "Result Hide" : "Result Show"}
                    checked={ attributes.result_title_visibility }
                    onChange={ ( value ) => setAttributes({result_title_visibility: value}) }
                />

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

                <ToggleControl
                    label={attributes.class_routine_visibility ? "Class Routine Hide" : "Class Routine Show"}
                    checked={ attributes.class_routine_visibility }
                    onChange={ ( value ) => setAttributes({class_routine_visibility: value}) }
                />

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

                <ToggleControl
                    label={attributes.exam_routine_visibility ? "Exam Routine Hide" : "Exam Routine Show"}
                    checked={ attributes.exam_routine_visibility }
                    onChange={ ( value ) => setAttributes({exam_routine_visibility: value}) }
                />

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

                <ToggleControl
                    label={attributes.syllabus_visibility ? "Syllabus Hide" : "Syllabus Show"}
                    checked={ attributes.syllabus_visibility }
                    onChange={ ( value ) => setAttributes({syllabus_visibility: value}) }
                />

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

                <ToggleControl
                    label={attributes.notice_board_visibility ? "Notice Board Hide" : "Notice Board Show"}
                    checked={ attributes.notice_board_visibility }
                    onChange={ ( value ) => setAttributes({notice_board_visibility: value}) }
                />

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

                <ToggleControl
                    label={attributes.event_visibility ? "Event Hide" : "Event Show"}
                    checked={ attributes.event_visibility }
                    onChange={ ( value ) => setAttributes({event_visibility: value}) }
                />

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