// import { generateNonce } from '@meshsdk/core';
// import type { NextApiRequest, NextApiResponse } from 'next';

// // Lưu trữ tạm nonce trong memory (development only)
// const nonces: Record<string, string> = {};

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { userAddress } = req.query;
//   console.log('userAddress', userAddress);
//   if (!userAddress || typeof userAddress !== 'string') {
//     return res.status(400).json({ error: 'Invalid user address' });
//   }

//   const nonce = generateNonce('I agree to the terms of the Mesh: ');
//   nonces[userAddress] = nonce;

//   res.status(200).json({ nonce });
// }