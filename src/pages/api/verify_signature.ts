// import { checkSignature } from '@meshsdk/core';
// import type { NextApiRequest, NextApiResponse } from 'next';

// const nonces: Record<string, string> = {};

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { userAddress, signature } = req.body;

//   console.log('Received userAddress:', userAddress);
//   console.log('Received signature:', signature);

//   if (!userAddress || !signature) {
//     console.error('Missing parameters:', { userAddress, signature });
//     return res.status(400).json({ success: false, error: 'Missing parameters' });
//   }

//   const nonce = nonces[userAddress];
//   console.log('Nonce for userAddress:', nonce);

//   if (!nonce) {
//     console.error('Nonce not found for userAddress:', userAddress);
//     return res.status(400).json({ success: false, error: 'Nonce not found' });
//   }

//   try {
//     const isValid = checkSignature(nonce, signature, userAddress);
//     console.log('Signature verification result:', isValid);

//     delete nonces[userAddress];

//     if (isValid) {
//       return res.status(200).json({ success: true });
//     } else {
//       return res.status(401).json({ success: false, error: 'Invalid signature' });
//     }
//   } catch (error) {
//     console.error('Error during signature verification:', error);
//     return res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// }