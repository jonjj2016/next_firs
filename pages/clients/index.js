import React from 'react';
import {useRouter}  from 'next/router'

const ClientPage = () => {
    const router = useRouter();
    const moveToOteherPage = () => {
        router.push('/clients/max/jon')
    }
    return (
        <div>
            <h1>ClientPage</h1>
            <button onClick = {moveToOteherPage}>BTN A</button>
        </div>
    )
}

export default ClientPage
