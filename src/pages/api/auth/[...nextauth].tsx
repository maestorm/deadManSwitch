const dotenv = require( 'dotenv' );
dotenv.config( { path:'../../../.env' } );

import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptions = {
  secret: process.env.CLIENT_SECRET,
  providers: [
    GoogleProvider( {
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      },
    } ),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },
};

export default NextAuth( authOptions );