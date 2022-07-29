import { useContext, useEffect } from 'react';
import { FrontendContext } from '../../context';
import updateBreadcrumb from '../../utils/breadcrumb';
import Teacher from '../../components/teacher';

export default function Teaches(){
    updateBreadcrumb('Teachers')

    const { attribute, setAttribute } = useContext(FrontendContext)

    useEffect(()=>{
        if( !attribute.teachers ) {
            //call api
            setAttribute({
                teachers: ['one','two']
            })
        }
    },[])

    return (
        <div className="max-w-screen-xl px-5 py-28 mx-auto">
            <Teacher className="grid-cols-1 md:grid-cols-2">
                <Teacher.Item name="Mohammad Rafiquzzaman" designation="Head Teacher of the School" description="The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established."/>
                <Teacher.Item name="Mohammad Rafiquzzaman" designation="Head Teacher of the School" description="The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established."/>
                <Teacher.Item name="Mohammad Rafiquzzaman" designation="Head Teacher of the School" description="The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established."/>
                <Teacher.Item name="Mohammad Rafiquzzaman" designation="Head Teacher of the School" description="The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established."/>
            </Teacher>

            <h2 className='text-primary font-secondary font-weight_primary text-4xl mt-16 lg:mt-36 mb-7'>Our More Teachers</h2>
            <Teacher className="grid-cols-1 md:grid-cols-2">
                <Teacher.Item name="Mohammad Rafiquzzaman" designation="Head Teacher of the School"/>
                <Teacher.Item name="Mohammad Rafiquzzaman" designation="Head Teacher of the School"/>
            </Teacher>

            <Teacher className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
            </Teacher>

            <Teacher className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
                <Teacher.Item name="Mayme F. Lusk" designation="Class Teacher"/>
            </Teacher>
        </div>
    )
}


