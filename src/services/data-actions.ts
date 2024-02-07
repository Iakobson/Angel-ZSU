// @/services/data-actions.ts
'use server';
// to determine the schema of the form object and validate its data
// import { z } from 'zod';
// to work with the PostgreSQL database
import { sql } from '@vercel/postgres';
// to update the cache after changes in the database
import { revalidatePath } from 'next/cache';
// to redirect to the desired page
import { redirect } from 'next/navigation';

/* ----- shape scheme definition using zod ----- */


/* -----  ----- */

