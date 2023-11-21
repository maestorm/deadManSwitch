import './globals.css';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu } from '../components';

const Home = () => {
    const { data: session, status } = useSession();
    console.log('status: ', status);
    
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