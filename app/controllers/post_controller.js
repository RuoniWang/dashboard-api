 import Post from '../models/post_model';

 export const createPost = (req, res) => {
   const p = new Post();
   p.title = req.body.title;
   p.tags = req.body.tags;
   p.content = req.body.content;
   p.cover_url = req.body.cover_url;
   p.save().then((result) => {
     res.json({ message: 'Post created!' });
   })
    .catch((error) => {
      res.status(500).json({ error });
    });
 };
 const cleanPosts = (posts) => {
   return posts.map((post) => {
     return { id: post._id, title: post.title, tags: post.tags, cover_url: post.cover_url };
   });
 };
 export const getPosts = (req, res) => {
   Post.find({}).sort('-created_at').then((result) => {
     res.json(cleanPosts(result));
   });
 };
 export const getPost = (req, res) => {
   Post.findOne({ _id: req.params.id }).then((post) => { res.send(post); });
 };
 export const deletePost = (req, res) => {
   Post.findOne({ _id: req.params.id }).then((post) => { console.log(post); post.remove(); })
   .then((result) => { console.log('removed'); res.json({ message: 'Post deleted!' }); })
   .catch((error) => {
     res.status(500).json({ error });
   });
 };
 export const updatePost = (req, res) => {
   Post.findOne({ _id: req.params.id }).then((post) => {
     if (req.body.title) { post.title = req.body.title; }
     if (req.body.tags) { post.tags = req.body.tags; }
     if (req.body.content) { post.content = req.body.content; }
     if (req.body.cover_url) { post.cover_url = req.body.cover_url; }
     post.save().then((result) => {
       res.json(result);
     })
      .catch((error) => {
        res.status(500).json({ error });
      });
   });
 };
