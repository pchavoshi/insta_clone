# Shiba-Gram 
Shiba-Gram is an Instagram-inspired single page web app that allows users to share photos while being able to comment on and follow other users' content. 

Check it out at https://shiba-gram.herokuapp.com. 

## Structure 

The backend was developed using Ruby on Rails and a PostgreSQL database. Photo are stored with AWS S3. 

The frontend utilizes React components with Redux state management. 

## Features: 
*Sign Up/Login 

Raw user passwords aren't saved to the database. BCrypt gem allows for password hash storage. 

*Main Page 

The main page displays a feed of all content from following accounts. 

*User Profile Page 

Users each have a profile page. Other users' profiles allow you to follow or unfollow their account using a folllow toggle button, which dynamically updates a user's follower number. This was achieved via a stateful component. 

*Photo Show Modal 

All modals were created with vanilla JavaScript. 

*Add Photo Modal 

Photos are attached to models using the Paperclip gem. The figaro gem keeps AWS secret keys safe. 

*Add/Edit/Delete Comment Form 

A unique feature. Users are able to edit their comments. 


## Future Additions: 

1. Likes
2. Infinite Scroll 
3. User Search 
