import Title from './Title';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <header>
                <Title>Dead man&apos;s switch</Title>
            </header>
            <section>{children}</section>
        </body>
    </html>
  )
}

export default RootLayout;