import { Skeleton, Box, Divider } from "@mui/material"
export default function AdminPageSkeleton() {
    return (
        <Box className="max-w-screen-lg bg-white mx-auto p-5">
            <div className="flex items-center justify-between">
                <Skeleton width={250} height={70}/>
                <Skeleton width={150} height={70}/>
            </div>
            <Divider className="my-4"/>
            <ul className="list-none space-y-3">
                <li className="list-none flex justify-between space-x-5">
                    <Skeleton width={40} height={40} animation="wave" />
                    <Skeleton animation="wave" className="w-full" height={40} />
                    <Skeleton width={100} height={40} animation="wave" />
                </li>
                <li className="list-none flex justify-between space-x-5">
                    <Skeleton width={40} height={40} animation="wave" />
                    <Skeleton animation="wave" className="w-full" height={40} />
                    <Skeleton width={100} height={40} animation="wave" />
                </li>
                <li className="list-none flex justify-between space-x-5">
                    <Skeleton width={40} height={40} animation="wave" />
                    <Skeleton animation="wave" className="w-full" height={40} />
                    <Skeleton width={100} height={40} animation="wave" />
                </li>
                <li className="list-none flex justify-between space-x-5">
                    <Skeleton width={40} height={40} animation="wave" />
                    <Skeleton animation="wave" className="w-full" height={40} />
                    <Skeleton width={100} height={40} animation="wave" />
                </li>
                <li className="list-none flex justify-between space-x-5">
                    <Skeleton width={40} height={40} animation="wave" />
                    <Skeleton animation="wave" className="w-full" height={40} />
                    <Skeleton width={100} height={40} animation="wave" />
                </li>
                <li className="list-none flex justify-between space-x-5">
                    <Skeleton width={40} height={40} animation="wave" />
                    <Skeleton animation="wave" className="w-full" height={40} />
                    <Skeleton width={100} height={40} animation="wave" />
                </li>
            </ul>
            <Divider className="my-4"/>
            <div className="flex items-center space-x-5">
                <Skeleton width={150} height={40}/>
                <Skeleton width={250} height={40}/>
            </div>
        </Box>
    )
}