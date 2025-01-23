import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to Cars.co.za</h1>
    <p>Click below to view a vehicle:</p>
    <Link href="/vehicle/7927016" passHref>
      <button>View Vehicle</button>
    </Link>
  </div>
);

export default Home;
