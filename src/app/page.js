import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center">
                <div>
                    <Link href="/contact">Contact Me</Link>
                </div>
            </main>
        </>
    )
}
