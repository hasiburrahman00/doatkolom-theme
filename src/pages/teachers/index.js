import Heading from './../../components/Heading';
import updateBreadcrumb from '../../utils/breadcrumb';

export default function Teaches(){
    updateBreadcrumb('Teachers')
    return (
        <div>
            <h1 className="text-red-600">Teaches Page</h1>
            <Heading/>
        </div>
    )
}


