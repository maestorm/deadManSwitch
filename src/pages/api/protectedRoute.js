import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // If authenticated, perform operations for the protected route
  res.status(200).json({ message: 'Authenticated user' });
}
