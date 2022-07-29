import LinearProgress from '@mui/material/LinearProgress';
import PageWrapper from "../layouts/page-wrapper";
import Panel from "../layouts/panel";
import SelectMultiImage from "../components/SelectMultiImage";
import PictureOption from "../components/PictureOption";
import API from "../api";

import { AdminContext } from '../context';
import { useEffect, useContext } from 'react';
import { useSnackbar } from 'notistack';

export default function Gallery() {

    const { attribute, setAttribute, loading, setLoading } = useContext(AdminContext)
    
    const { enqueueSnackbar } = useSnackbar()

    useEffect(()=>{
        if( !attribute.galleries ) {
            setLoading(true);
            API.galleries().then( res => {
                setAttribute({
                    galleries: res.data,
                    galleries_mark: new Set(),
                })
                setLoading(false)
            })            
        }
    },[])

    const imageSelectHandler = ({id, data}) => {
        setLoading(true)
        API.add_gallery({image_ids: id}).then( res => {
            setLoading(false)
            setAttribute({galleries : [
                ...data,
                ...attribute.galleries
            ]})
            enqueueSnackbar(res.message, { variant: res.status } )
        })
    }
    const updateState = () => setAttribute({galleries_mark: attribute.galleries_mark})
    const imageAction = {
        mark() {
            const { image_id } = this;
            attribute.galleries_mark.has( image_id ) ? attribute.galleries_mark.delete(image_id) : attribute.galleries_mark.add(image_id);
            updateState();            
        },

        update() {

        },

        delete() {
            const { image_id, index } = this;
            setLoading(true)
            API.delete_gallery({image_ids: [image_id]}).then( res => {
                attribute.galleries.splice(index, 1);
                if( attribute.galleries_mark.has(image_id) ) {
                    attribute.galleries_mark.delete(image_id)
                }
                enqueueSnackbar(res.message, { variant: res.status } )
                setAttribute({
                    galleries: attribute.galleries,
                    galleries_mark: attribute.galleries_mark
                })
                setLoading(false)
            })
        }
    }

    return (
        <PageWrapper>
            { loading && <LinearProgress/> }
            <Panel>
                <Panel.VideoHeader url="#">Photo Gallery</Panel.VideoHeader>
                <Panel.Body>
                    
                    <div className="grid grid-cols-6 gap-5">
                        <div className="bg-[#eee] h-[145px] hover:bg-[#ddd] cursor-pointer rounded-md flex items-center justify-center border border-solid border-[#ddd]">
                            <SelectMultiImage disabled={loading} onSelect={imageSelectHandler}/>
                        </div>
                        { attribute.galleries?.map((item, index) => (
                            <picture className={`relative group border border-solid rounded-md ${attribute.galleries_mark.has(item.image_id) ? 'border-[#1976d2] grayscale-element': 'border-[#ddd]'}`} key={index}>
                                <img loading="lazy" width="140" height="145" className="w-full rounded-md object-cover -mb-1" src={item.image_url} alt="gallery image"/>
                                <PictureOption onClick={ action => imageAction[action].call({...item, index})}/>
                            </picture>
                        )) }
                    </div>
                </Panel.Body>
            </Panel>
        </PageWrapper>
    )
}