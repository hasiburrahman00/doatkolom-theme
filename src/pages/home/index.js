import updateBreadcrumb from '../../utils/breadcrumb';

export default function Home() {

    updateBreadcrumb('Home')

    return(
        <div className="grid grid-cols-2 text-3xl">
            <div>one</div>
            <div>two</div>
        </div>
    )
}