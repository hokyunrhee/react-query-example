import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { Todo } from '@prisma/client';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const todoId = Number(req.query.id);

    switch (req.method) {
      case 'GET':
        handleGET(todoId, res);
        break;
      case 'PATCH':
        handlePATCH(todoId, req, res);
        break;
      case 'DELETE':
        handleDELETE(todoId, res);
        break;
      default:
        res.status(405).json({ message: `${req.method} method is not supported at this route.` });
    }
  } catch (error) {
    res.status(500).json({});
  }
};

// GET /api/todo/:id
const handleGET = async (todoId: number, res: NextApiResponse) => {
  const todo = await prisma.todo.findUnique({
    where: { id: todoId },
  });

  res.json(todo);
};

// PATCH /api/todo/:id
const handlePATCH = async (todoId: number, req: NextApiRequest, res: NextApiResponse) => {
  const { title, completed } = req.body;

  const data: Partial<Todo> = {};

  if (title) data.title = title;
  if (completed) data.completed = completed;

  const result = await prisma.todo.update({
    where: { id: todoId },
    data,
  });

  res.json(result);
};

// DELETE /api/todo/:id
const handleDELETE = async (todoId: number, res: NextApiResponse) => {
  const result = await prisma.todo.delete({
    where: { id: todoId },
  });

  res.json(result);
};

export const config = {
  api: { externalResolver: true },
};
