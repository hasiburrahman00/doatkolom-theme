import updateBreadcrumb from '../../utils/breadcrumb';
import Teacher from '../../components/teacher';

export default function Teaches(){
    updateBreadcrumb('Teachers')
    return (
        <div className="max-w-screen-xl px-5 py-28 mx-auto">
            <Teacher className="grid-cols-2">
                <Teacher.Item/>
                <Teacher.Item/>
                <Teacher.Item/>
                <Teacher.Item/>
            </Teacher>

            <Teacher className="grid-cols-4">
                <Teacher.Item/>
                <Teacher.Item/>
                <Teacher.Item/>
                <Teacher.Item/>
            </Teacher>
            
        </div>
    )
}


