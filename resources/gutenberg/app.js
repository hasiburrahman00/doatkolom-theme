import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { useSelect, useDispatch } from '@wordpress/data';
import { CheckboxControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

function Component() {
    const { postType, meta } = useSelect((select) => {
        const editor = select('core/editor');
        return {
            postType: editor.getCurrentPostType(),
            meta: editor.getEditedPostAttribute('meta') || {},
        };
    });

    const [isChecked, setChecked] = useState(meta.is_featured_post || 'no');
    const { editPost } = useDispatch('core/editor');

    useEffect(() => {
        editPost({
            meta: {
                ...meta,
                is_featured_post: isChecked,
            },
        });
    }, [isChecked]);

    if ('post' !== postType) return null;

    return (
        <>
            <PluginDocumentSettingPanel
                name="doatkolom-editor-panel"
                title="Doatkolom Post">
                <CheckboxControl
                    label="Is Featured Post?"
                    checked={isChecked === 'yes'}
                    onChange={(val) => {
                        if (val) {
                            setChecked('yes');
                        } else {
                            setChecked('no');
                        }
                    }}
                />
            </PluginDocumentSettingPanel>
        </>
    );
}

registerPlugin('doatkolom-editor-sidebar', {
    icon: 'palmtree',
    render: Component,
});