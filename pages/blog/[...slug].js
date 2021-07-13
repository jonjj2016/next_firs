import React from 'react';
import {useRouter} from 'next/router';

const Slug = () => {
    const {query} = useRouter();
    console.log(query);
    return (
        <div>
            The Blog Posts
        </div>
    )
}

export default Slug
