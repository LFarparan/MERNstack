import { Book } from '../models/bookModel.js';

// get ALL
const get_all_books = (req, res) => {
    res.status(200).send('Hello Human')
}
// get ONE
// post (create) ONE
const create_book = (req, res) => {

}
// put (modify) ONE
// delete ONE



export { create_book, get_all_books };

// const blog_index = (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//         .then(result => {
//                  res.render('index', { blogs: result, title: 'All blogs' });
//         })
//         .catch(err => { console.log(err)  });
// }

// const blog_details = (req, res) => {
//       const id = req.params.id;
//       Blog.findById(id)
//           .then(result => {
//              res.render('details', { blog: result, title: 'Blog Details' });
//           })
//           .catch(err => { console.log(err) });
// }