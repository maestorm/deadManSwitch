import './globals.css';
import Link from "next/link";

export default function Home() {
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
