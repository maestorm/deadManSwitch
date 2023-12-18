import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact Me</Link>
      <Link href="/management">management</Link>
    </>
  );
};

export default Header;