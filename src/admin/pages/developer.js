import PageWrapper from "../layouts/page-wrapper";
import Panel from './../layouts/panel';
import EmptySettingsUI from "../components/empty-settings-ui";

import { TextField, Box, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material";
import { useContext, useMemo, useCallback } from "react";
import { AdminContext } from "../context";

export default function Home() {

    const { attribute, setAttribute } = useContext(AdminContext);
    const fields = attribute.setting_fields.developer; // input settings for developer page

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
              return <TextField className="col-span-2" fullWidth onChange={ ev => onChangeHandler(attr.tab, attr.name, ev.target.value) }  value={attr.default} label={attr.label} variant="outlined" />
          },
          select(attr) {
              const options = attr.options || [];
              return (
                  <FormControl fullWidth className="col-span-2">
                      <InputLabel id="demo-simple-select-label">{attr.label}</InputLabel>
                      <Select label={attr.label} onChange={ ev => onChangeHandler(attr.tab, attr.name, ev.target.value) } value={attr.default} labelId="demo-simple-select-label">
                          { options.map( item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem> ) }
                      </Select>
                  </FormControl>
              )
          },
          color(attr) {
            return (
              <div className="flex items-center space-x-3">
                <span className="min-w-[40px] h-[40px] rounded-full inline-block border border-solid border-[#eee]" style={{backgroundColor: attr.default}}></span>
                <TextField fullWidth onChange={ ev => onChangeHandler(attr.tab, attr.name, ev.target.value) }  value={attr.default} label={attr.label} variant="outlined" />
              </div>
            )
          },
          auth(attr) {
            const style = {
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none'
              }
            }
            return (
              <>
                <TextField className="col-span-3" fullWidth  value={attr.default.token} label={attr.label} variant="outlined" />
                <Button sx={style} variant="contained">Activate</Button>
              </>
            )
          }
        }
    }, [])

    const InputFieldsBox = useCallback(({index}) => {
      const inputFields = fields[index].fields;
      return (
            <Box
              component="form"
              className="grid grid-cols-4 gap-5"
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

    return (
        <PageWrapper>
        {
            fields && Object.keys(fields).map( key => {
                const Component =  InputFieldsBox  || EmptySettingsUI;;
                const attr = fields[key];
                return (     
                    <Panel key={key} accordion expanded={['font_family_tab', 'theme_color_tab'].includes(key)}>
                        <Panel.Header>{attr.title}</Panel.Header>
                        <Panel.Body>
                            <Component page="developer" index={key}/>
                        </Panel.Body>
                    </Panel>
                )
            })
        }    
        </PageWrapper>
    )
}