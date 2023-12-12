import './globals.css';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, Main } from '../components';
import { connectToDatabase } from '../app/database/mongodb';
import { createRecord } from '../app/database/models/client';
import { useEffect, useState } from 'react';
import Header from './header';

export const getServerSideProps = async () => {
    try {
        const db = await connectToDatabase();

        const collection = db.collection('clients');
        const allData = await collection.find({}).toArray();

        console.log('All data from MongoDB:', allData);

        return {
            props: {
                dataFromMongo: JSON.parse(JSON.stringify(allData)),
            },
        };
    } catch (err) {
        return {
            props: {
                data: []
            }
        }
    }
}

const Management = (props) => {
    const [ clientId, setClientId ] = useState(0); 
    const { data: session } = useSession();
    const { data } = useSession();
    const { dataFromMongo } = props;

    // const removeRecord = async(id) => {
    //     try {
    //         const result = await new Client.deleteOne({ _id: id });
    //         if (result.deletedCount === 1) {
    //           console.log('Document deleted successfully');
    //         } else {
    //           console.log('No document found with the provided ID');
    //         }
    //     } catch (error) {
    //         console.error('Error deleting document:', error);
    //     }
    // };

    useEffect(() => {
        setClientId(previousId => ++previousId);
    }, []);

    if (session) {
        createRecord(clientId, data?.user?.name, data?.user?.email);
    }

    console.log('props: ', props.dataFromMongo[0]._id);

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
                    {dataFromMongo.map(id => (
                        <li key={id._id}>{`id: ${id._id}`}</li>
                    ))}
                </ul>
            </section>
        </Main>
    )
}

export default Management;