import React from 'react'
import {useRouter} from 'next/router';

const ClientProject = () => {
    const {query:{clientprojectid,id}} = useRouter();
    console.log("787878erwhbr");
    return (
        <div>
            ClientProject 
            id: {id} {' '}
            clientprojectid: {clientprojectid}
        </div>
    )
}

export default ClientProject
