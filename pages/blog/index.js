import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const Blog = () => {
    
    return (
        <div>
            Blog page    
            <ul>
                <li>
                    <Link href = '/blog/8799/8787'>blog page</Link>

                </li>
            </ul>     
        </div>
    )
}

export default Blog
