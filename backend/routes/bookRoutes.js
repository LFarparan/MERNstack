import express from 'express';
const router = express.Router()
import { create_book, get_all_books, 
    get_book, delete_book, modify_book, 
    modify_field } from '../controller/bookController.js';

router.get('/', get_all_books)
router.post('/', create_book)
router.get('/:id', get_book)
router.delete('/:id', delete_book)
router.put('/:id', modify_book)
router.patch('/:id', modify_field)

export default router;
