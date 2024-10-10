// pages/api/webtoons/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handleWebtoon(req: NextApiRequest, res: NextApiResponse) {
  const webtoonId = Number(req.query.id);

  if (req.method === 'PUT') {
    const { title, genre, releaseDate, chapters, description } = req.body;
    const updatedWebtoon = await prisma.webtoon.update({
      where: { id: webtoonId },
      data: {
        title,
        genre,
        releaseDate: new Date(releaseDate),
        chapters,
        description,
      },
    });
    res.status(200).json(updatedWebtoon);
  } else if (req.method === 'DELETE') {
    await prisma.webtoon.delete({
      where: { id: webtoonId },
    });
    res.status(204).end();
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
