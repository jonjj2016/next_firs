import {useRouter} from 'next/router';

const PortfolioProjectPage = (params) => {
    const router = useRouter();
    console.log(router.query.projectid);
    return (
        <div>
            <h1>
            PortfolioProjectPage
            </h1>
        </div>
    )
}

export default PortfolioProjectPage
