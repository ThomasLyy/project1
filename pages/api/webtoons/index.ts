// pages/api/webtoons/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const webtoons = await prisma.webtoon.findMany();
      res.status(200).json(webtoons);
    } catch (error) {
      console.error('Erreur lors de la récupération des webtoons :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des webtoons' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, genre, releaseDate, chapters, description } = req.body;
      const newWebtoon = await prisma.webtoon.create({
        data: {
          title,
          genre,
          releaseDate: new Date(releaseDate),
          chapters,
          description,
        },
      });
      res.status(201).json(newWebtoon);
    } catch (error) {
      console.error('Erreur lors de la création du webtoon :', error);
      res.status(500).json({ error: 'Erreur lors de la création du webtoon' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
