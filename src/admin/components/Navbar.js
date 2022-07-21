import { useContext } from "react"
import { Link } from 'react-router-dom';
import { AdminContext } from "../context";
import { Button, styled } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

export default function Navbar() {

    const {attribute, setAttribute} = useContext(AdminContext)

    const handleSaveSetting = () => {
        setAttribute({save_setting_loader: true})
    }

    const SupportButton = styled(Button)`
        background-color: #DFE9F1;
        color: #0E1F36;
        font-size: 16px;
        text-transform: capitalize;
        padding: 8px 25px;
        border-radius: 8px;
        &:hover {
            background-color: var(--doatkolom-primary-color);
            color: var(--doatkolom-white-color);
        }
    `

    const HeaderComponent = styled('header')`
        left: ${attribute.header_css.left};
        top: ${attribute.header_css.top};
        width: ${attribute.header_css.width};
    `

    return (
        <HeaderComponent className="bg-white py-1 px-7 w-full fixed z-20 top-0 left-0 border-t-0 border-x-0 border-b border-solid border-gray-200">
            <div className="flex">
                <div className="w-2/6">
                    <img src={attribute.logo}/>
                </div>
                <div className="w-4/6 flex justify-end items-center">
                    
                    <Link className="text-primary no-underline inline-block mr-7 text-base hover:text-secondary focus:shadow-none font-medium" to="/">Home</Link>
                    <Link className="text-primary no-underline inline-block mr-7 text-base hover:text-secondary focus:shadow-none font-medium" to="/gallery">Photo Gallery</Link>
                    <Link className="text-primary no-underline inline-block mr-7 text-base hover:text-secondary focus:shadow-none font-medium" to="/developer">Developer Option</Link>
                    
                    <div className="flex items-center space-x-5">
                        <SupportButton size="large">Get Support</SupportButton>
                        <LoadingButton 
                            sx={{
                                boxShadow: 'none',
                                textTransform: 'capitalize',
                                fontSize: '16px',
                                borderRadius: '8px',
                                '&:hover': { 
                                    boxShadow: 'none'
                                }
                            }} 
                            variant="contained" size="large" 
                            onClick={handleSaveSetting}
                            loading={attribute.save_setting_loader}>
                                Submit Now
                            </LoadingButton>
                    </div>
                </div>
            </div>
        </HeaderComponent>
    )
}