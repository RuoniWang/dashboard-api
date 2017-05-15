# starter express app template

* node with babel
* expressjs
* airbnb eslint rules

Procfile set up to run on [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)


A couple sentence description about what you did:
  I added authentication to my blog application by following these steps: create user model in mongodb, add some server side routes for api request related to user signin and signup, created jwtLogin and Locallogin authentication options using passport, apply them as appropriate when routing to controller functions, encode password with salt and hash(with a secret key set up as env variable) in signin method; then in the client side, I added new action types, store states, and a wrapper component (requireAuth), components to deliver appropriate views and access/editing options according to authentication state. I stored token in localstorage of the browser, and send in the header of every api request so that the authenticated user can be identified by the server. 
  
What worked / didn’t work
- For better user experience, visitor(those who are not signed in) will not be able to enter editing state onClick(onClick will not be able to toggle the display state of these fields), as opposed to just allowing them to edit but but not persisting the edits in database.
- Comparing post.author with user.id sometimes involving comparing different objects, hence toString() method instead. 
- Experienced callback hell in user controller functions, esp since findOne() returns three possible options (err, null, object). Used promises elsewhere which is a lot clearer.
- req.user prepared by the jwtlogin middleware comes handy in upgrading authorization.


Any extra credit attempted
1. Error handling: during sign in and sign up, if the input is invalid or user is not authenticated, the user will receive notice. This is done by adding a error message state in store, change error reducer and error action to allow error message to be updated, and a error component which will show up when there is err message. 
2. Extend the permissions system so that users can only edit their own posts. While they can't edit other people's posts in the four main fields, they are allowed to comment on other people's post. 
3. I added the user profile page(accessible by clicking user icon after logging in). This page displays username, password and only the posts that this particular user created. They can also enter post editing page by clicking the post on their profile page. If we are not in authenticated state, this url will be directed to the sign in page (requireAuth applied to this page). 

