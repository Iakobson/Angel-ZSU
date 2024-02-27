// @app/api/auth/[...nextauth]/route.ts
// authentication configuration
import { authConfig } from '@/controllers/auth';
// для створення обробника автентифікації
import NextAuth from 'next-auth';

// configuration-based authentication handler
const handler = NextAuth(authConfig);

// to process the relevant types of requests
export { handler as GET, handler as POST };
