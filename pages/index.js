import Link from 'next/link';

const HomePage = () => {
  return <div>
    <h1>The Home page</h1>
    <ul>
      <li>
        {/* <Link replace href = '/portfolio'>portfolio</Link> */}
        <Link href = '/portfolio'>portfolio</Link>
      </li>
      <li>
        <Link href = '/blog'>blog page</Link>

      </li>
      <li>
        <Link href = '/clients/45'>clients</Link>

      </li>
    </ul>
  </div>
}
export default HomePage;