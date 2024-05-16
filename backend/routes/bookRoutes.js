import express from 'express';
const router = express.Router()
import { create_book, get_all_books } from '../controller/bookController.js';

router.get('/', get_all_books)
router.post('/', create_book)

export default router;
