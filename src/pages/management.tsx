import './globals.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Menu, Main } from '../components';
import { connectToDatabase } from '../app/database/mongodb';
import Header from './header';

export const getServerSideProps = async () => {
  try {
    const db = await connectToDatabase();

    const collection = db.collection('clients');
    const allData = await collection.find({}).toArray();

    return {
      props: {
        dataFromMongo: JSON.parse(JSON.stringify(allData)),
      },
    };
  } catch (err) {
    return {
      props: {
        data: [],
      },
    };
  }
};

function Management(props) {
  const [clientId, setClientId] = useState(0);
  const { data: session } = useSession();
  const { data } = useSession();
  const { dataFromMongo } = props;
  console.log('management data, clientId: ', data, clientId);

  useEffect(() => {
    setClientId((previousId) => ++previousId);
  }, []);

  console.log('management props.dataFromMongo: ', props.dataFromMongo);

  return (
    <Main>
      <Menu>
        {session ? (
          <>
            <Header />
            <Link href="#" onClick={() => signOut()}>
              Sign out
            </Link>
          </>
        ) : (
          <Link href="#" onClick={() => signIn()}>
            Sign in
          </Link>
        )}
      </Menu>
      <section>
        <ul>
          {dataFromMongo.map((id) => (
            <li key={id._id}>{`id: ${ id._id }`}</li>
          ))}
        </ul>
      </section>
    </Main>
  );
}

export default Management;
