# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  User.destroy_all
  file1 = File.open('app/assets/images/profile.jpg')
  u1 = User.create(username: "parisa1", password_digest: BCrypt::Password.create("fruity"), user_blurb: "best boy!", image: file1)
  u2 = User.create(username: "parisa2", password_digest: BCrypt::Password.create("fruity"), user_blurb: "a good boy!", image: file1)
  u3 = User.create(username: "parisa3", password_digest: BCrypt::Password.create("fruity"), user_blurb: "sad boy", image: file1)

  Photo.destroy_all
  file = File.open('app/assets/images/shiba.jpg')
  p1 = u1.photos.create(user_id: u1.id, caption: "such cuteness!", image: file)
  p2 = u2.photos.create(user_id: u2.id, caption: "such cuteness!", image: file)
  p3 = u3.photos.create(user_id: u3.id, caption: "such cuteness!", image: file)

  Follow.destroy_all

  u1.out_follows.create(followed_id: u2.id)
  u1.out_follows.create(followed_id: u3.id)
  u2.out_follows.create(followed_id: u1.id)
  u3.out_follows.create(followed_id: u2.id)
  u3.out_follows.create(followed_id: u1.id)

  Comment.destroy_all
  c1 = p1.comments.create(user_id: u2.id, content: "way too cute!")
  c2 = p2.comments.create(user_id: u3.id, content: "wow!")
  c3 = p3.comments.create(user_id: u1.id, content: ":)")
  
  c5 = p1.comments.create(user_id: u3.id, content: "omg")
