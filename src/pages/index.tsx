import './globals.css';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu } from '../components';
import { connectToDatabase } from '../app/database/mongodb'

export const getServerSideProps = async () => {
    const db = await connectToDatabase();

    const collection = db.collection('clients');
    const allData = await collection.find({}).toArray();

    console.log('All data from MongoDB:', allData);

    return {
        props: {
            dataFromMongo: JSON.parse(JSON.stringify(allData)),
        },
    };
}

const Home = (props) => {
    const { data: session } = useSession();
    console.log('Data from mongodb: ', props);

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Menu>
                {session ? (
                    <>
                        <Link href="/contact">Contact Me</Link>
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
        </main>
    )
}

export default Home;