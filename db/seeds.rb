# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  User.destroy_all

  u1 = User.create(username: "parisa1", password_digest: BCrypt::Password.create("fruity"))
  u2 = User.create(username: "parisa2", password_digest: BCrypt::Password.create("fruity"))
  u3 = User.create(username: "parisa3", password_digest: BCrypt::Password.create("fruity"))

  Photo.destroy_all

  u1.photos.create(user_id: u1.id)
  u1.photos.create(user_id: u1.id)
  u1.photos.create(user_id: u1.id)
  u2.photos.create(user_id: u2.id)
  u2.photos.create(user_id: u2.id)
  u2.photos.create(user_id: u2.id)
  u3.photos.create(user_id: u3.id)
  u3.photos.create(user_id: u3.id)
  u3.photos.create(user_id: u3.id)

  Follow.destroy_all

  u1.out_follows.create(followed_id: u2.id)
  u1.out_follows.create(followed_id: u3.id)
  u2.out_follows.create(followed_id: u1.id)
  u3.out_follows.create(followed_id: u2.id)
