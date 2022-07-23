import ImageUpload from "../components/ImageUpload"
import { TextField, Box } from "@mui/material"

export default function SiteSettings() {
    return (
        <div className="grid grid-cols-4">
            <div className="relative after:content-[''] after:w-px after:h-full after:bg-[#DFE9F1] after:absolute after:top-0 after:right-[50px]">
                <ImageUpload
                    label="Institution Logo"
                />
            </div>
            <div className="relative after:content-[''] after:w-px after:h-full after:bg-[#DFE9F1] after:absolute after:top-0 after:right-[50px]">
                <ImageUpload
                    label="Website Favicon"
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
                    <TextField fullWidth label="Site Title" variant="outlined" />
                    <TextField fullWidth label="Site Description" variant="outlined" />
                    <TextField fullWidth label="Site Keywords" variant="outlined" />
                </Box>
            </div>
        </div>
    )
}