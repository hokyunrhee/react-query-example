import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      handleGET(req, res);
      break;
    case 'POST':
      handlePOST(req, res);
      break;
    default:
      res.status(405).json({ message: `${req.method} method is not supported at this route.` });
  }
};

// GET /api/todo
const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, completed } = req.query;

  const options: { where?: { id?: number; completed?: boolean } } = {};

  if (id) options.where = { id: Number(id) };
  if (completed) options.where = { completed: Boolean(completed) };

  const todos = await prisma.todo.findMany(options);

  res.json(todos);
};

// POST /api/todo
const handlePOST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.body;

  const todo = await prisma.todo.create({
    data: { title },
  });

  res.json(todo);
};

export const config = {
  api: { externalResolver: true },
};
