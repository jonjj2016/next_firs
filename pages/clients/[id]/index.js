import React from 'react'
import {useRouter} from 'next/router';

const ListAllClientProjects = () => {
    const {query} = useRouter();
    console.log(query);
    return (
        <div>
            <h2>
            ListAllClientProjects {query.id}
            
            </h2>
        </div>
    )
}

export default ListAllClientProjects
