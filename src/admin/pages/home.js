import PageWrapper from "../layouts/page-wrapper";
import Panel from './../layouts/panel';
import SiteSettings from "../layouts/site-settings";
import EmptySettingsUI from "../components/empty-settings-ui";

import { TextField, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useContext, useMemo, useCallback } from "react";
import { AdminContext } from "../context";

export default function Home() {

    const { attribute, setAttribute } = useContext(AdminContext);
    const fields = attribute.setting_fields.home; // input settings for home page

    const onChangeHandler = useCallback((tab, name, value) => {
        fields[tab].fields[name].default = value;;
        setAttribute({
            setting_fields: attribute.setting_fields
        })
    }, [])
    
    /**
     * 
     * this object contains input field based on type like text, textarea, select, number etc  
     * @description properties name must be similar to the type coming from backend 
     * 
     */ 
    const inputComponents = useMemo(() => {
        return {
            text(attr) {
                return <TextField fullWidth onChange={ ev => onChangeHandler(attr.tab, attr.name, ev.target.value) }  value={attr.default} label={attr.label} variant="outlined" />
            },
    
            textarea(attr) {
                return <TextField multiline onChange={ ev => onChangeHandler(attr.tab, attr.name, ev.target.value) } fullWidth value={attr.default} label={attr.label} variant="outlined" />
            },
    
            select(attr) {
                const options = attr.options || [];
                return (
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{attr.label}</InputLabel>
                        <Select label={attr.label} onChange={ ev => onChangeHandler(attr.tab, attr.name, ev.target.value) } value={attr.default} labelId="demo-simple-select-label">
                            { options.map( item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem> ) }
                        </Select>
                    </FormControl>
                )
            }
        }
    }, [])
    
    const InputFieldsBox = useCallback(({index}) => {
        const inputFields = fields[index].fields;
        return (
            <Box
                component="form"
                className="grid grid-cols-2 gap-5"
                sx={{
                    '& input': {
                        border: '0 !important',
                        boxShadow: 'none !important',
                        padding: '16px !important',
                        minHeight: 'auto !important',
                        borderColor: '#D9D9D9'
                    },
                    '& textarea': {
                        border: '0 !important',
                        boxShadow: 'none !important',
                        minHeight: 'auto !important',
                        borderColor: '#D9D9D9'
                    }
                }}
                noValidate
                autoComplete="off"
            >
                {
                    Object.keys(inputFields).map( key => {
                        const attr = inputFields[key];
                        const Components = inputComponents[attr.type] || EmptySettingsUI;
                        return <Components key={key} name={key} {...attr} tab={index}/>
                    })
                }
            </Box>
        )
    }, [])

    const bodyComponents = useMemo(() => {
        return {
            site_settings   : SiteSettings,
            information     : InputFieldsBox,
            quick_url       : InputFieldsBox,
        }
    }, [])

    return (
        <PageWrapper>
        {
            fields && Object.keys(fields).map( key => {
                const Component = bodyComponents[key]  || EmptySettingsUI;
                const attr = fields[key];
                return (     
                    <Panel key={key}>
                        <Panel.VideoHeader url={attr.tutorial_link}>{attr.title}</Panel.VideoHeader>
                        <Panel.Body>
                            <Component page="home" index={key}/>
                        </Panel.Body>
                    </Panel>
                )
            })
        }    
        </PageWrapper>
    )
}