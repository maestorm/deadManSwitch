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

function Home(props) {
  const [ clientId, setClientId ] = useState(0);
  const { data: session } = useSession();
  const { dataFromMongo } = props;

  console.log('clientId: ', clientId);
  useEffect(() => {
    setClientId((previousId) => ++previousId);
  }, []);

  return (
    <Main>
      <Menu>
        <Header isSigned={!!session} signOut={signOut} signIn={signIn} />
      </Menu>
      <section>
        <ul>
          {dataFromMongo.map((id) => (
            <li key={id._id}>{`id: ${ id._id } - name: ${ id.name } - email: ${ id.email } - message: ${ id.message }`}</li>
          ))}
        </ul>
      </section>
    </Main>
  );
}

export default Home;
