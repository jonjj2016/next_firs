import React from 'react'
import {useRouter} from 'next/router';

const ClientProject = () => {
    const {query} = useRouter();
    console.log("787878erwhbr",query);
    return (
        <div>
            ClientProject
        </div>
    )
}

export default ClientProject
