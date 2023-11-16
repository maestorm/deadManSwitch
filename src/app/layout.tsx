export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <header><h1>Dead man&apos;s switch</h1></header>
            <section>{children}</section>
        </body>
    </html>
  )
}
