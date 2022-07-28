import { useContext } from "react";
import ImageUpload from "../components/ImageUpload"
import { TextField, Box } from "@mui/material";
import { AdminContext } from "../context";

export default function SiteSettings( props ) {

    /**
     * 
     * @param props contains some properties that helps to get exact data from the object coming from backend
     * @param page refers to the page name. ex. home | gallery | developer 
     * @param index refers to the tab nunber 
     * @var settings_fields refers to the settings data coming from database 
     * @author Ashraf
     */ 

    const { attribute, setAttribute } = useContext(AdminContext);
    const data = attribute.setting_fields[props.page][props.index].fields;

    const onChangeHandler = (name, value) => {
        data[name].default = value;

        // update the parent state
        setAttribute({
            setting_fields: attribute.setting_fields
        })
    }

    return (
        <div className="grid grid-cols-4">
            <div className="relative after:content-[''] after:w-px after:h-full after:bg-[#DFE9F1] after:absolute after:top-0 after:right-[50px]">
                <ImageUpload
                    label="Institution Logo"
                    value={data.institution_logo.media_url}
                    onChange={ val => onChangeHandler('institution_logo', val.url) }
                />
            </div>
            <div className="relative after:content-[''] after:w-px after:h-full after:bg-[#DFE9F1] after:absolute after:top-0 after:right-[50px]">
                <ImageUpload
                    label="Website Favicon"
                    value={data.website_favicon.media_url}
                    onChange={ val => onChangeHandler('website_favicon', val.url) }
                />
            </div>
            <div className="col-span-2">
                <Box
                    component="form"
                    className="flex h-full flex-col justify-between"
                    sx={{
                        '& input': {
                            border: '0 !important',
                            boxShadow: 'none !important',
                            padding: '16px !important',
                            minHeight: 'auto !important',
                            borderColor: '#D9D9D9'
                        }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField fullWidth onChange={ ev => onChangeHandler('site_title', ev.target.value) } value={data.site_title.default} label="Site Title" variant="outlined" />
                    <TextField fullWidth onChange={ ev => onChangeHandler('site_description', ev.target.value) } value={data.site_description.default} label="Site Description" variant="outlined" />
                    <TextField fullWidth onChange={ ev => onChangeHandler('site_keywords', ev.target.value) } value={data.site_keywords.default} label="Site Keywords" variant="outlined" />
                </Box>
            </div>
        </div>
    )
}