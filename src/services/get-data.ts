// @/services/get-data.ts
import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

import { FundRaisingVariation } from '@/models/types';
import {IFundRaising} from '@/models/interfaces';

/* ----- FUND CAMPAIGNS  ----- */
export async function fetchAllFundRaiserData():Promise<IFundRaising[]> {
  // noStore(); this prevent response from being cached
  try {
    console.log('Fetching Fund Raising Info...');
    const raiserData = await sql<IFundRaising>`
      -- choose the data we need
      SELECT 
        fri.id, frt.type AS variation, fri.is_actual,
		fri.purpose, fri.info, fri.value,
        fri.request_video_url,
        fri.report_video_url    
      FROM 
        fund_raising_info fri
      -- combine data table with fields of other table
      JOIN 
        fund_raising_types frt ON fri.type_id = frt.id
      -- sort received data rows
      ORDER BY 
        fri.id DESC;
    `;
    console.log('Raiser Data fetch completed.');
    console.log(raiserData.rows[0]);

    return raiserData.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Raiser Data.');
  }
};





/* -----  ----- */
