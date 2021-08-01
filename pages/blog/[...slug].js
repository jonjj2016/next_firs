import React from 'react';
import {useRouter} from 'next/router';

const Slug = () => {
    const {query} = useRouter();
    console.log(query);
    return (
        <div>
            The Blog Posts query 
            <ul>
                {query.slug&&query.slug.map((i,index)=><li key={index}>{i}</li>)}
            </ul>
        </div>
    )
}

export default Slug
