import './globals.css';
import Link from "next/link";

const Home = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center">
                <div className="menu">
                    <Link href="/contact">Contact Me</Link>
                </div>
            </main>
        </>
    )
}

export default Home;
