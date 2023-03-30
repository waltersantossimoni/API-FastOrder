import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function updateCategory(req: Request, res: Response) {
  try {
    const {categoryId} = req.params;
    const {name} = req.body;

    await Category.findByIdAndUpdate(categoryId, {name});

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
