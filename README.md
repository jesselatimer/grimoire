# Grimoire

[View it live.][site]

[site]: http://grimoire.site/

**Grimoire** is a personal full stack project for fantasy characters to rate and review tomes of magic, inspired by Goodreads.

Built on Ruby on Rails and Backbone.js by a single developer in just over two weeks. The culminating final project for [App Academy][app-academy]. The full list of technologies:
* JavaScript (ECMAScript 5)
* [Backbone.js][backbone] (MVC Frontend Framework)
* jQuery
* Ruby on Rails -v 4.2.3
* [PostgreSQL][postgres]
* HTML5
* SCSS/CSS3

[app-academy]: https://www.appacademy.io/
[backbone]: https://github.com/jashkenas/backbone
[postgres]: https://github.com/postgres/postgres

## Features
### Users
- [x] Create and edit user accounts (include guest account)
- [x] Secure password storage using BCrypt password hashing
- [x] User avatars uploaded and transformed with Cloudinary
- [x] Create and destroy sessions (log in/log out)

### Explore
- [x] View all grimoires
- [x] View all practitioners
- [x] View practitioner pages, including user reviews and shelves
- [x] View grimoires, including the grimoire's reviews and current user's shelves
- [x] See a feed of recent reviews

### Interact
- [x] Add grimoires to shelves
- [x] Review and rate grimoires

## To Do
### Features
- [ ] Tabs for Reviews/Lists on user show page
- [ ] Search for grimoires/users
- [ ] Typeahead search bar
- [ ] List view for grimoires
- [ ] Follow users with the option to see only followed users in feed
- [ ] Activity history (e.g. reviews, adding grimoires to categories, commenting)
- [ ] Multiple sessions/session management
- [ ] Add transition effects between pages where appropriate.
- [ ] Markdown in user inputted fields (Markdown-js/Bootstrap Markdown)

### Bug Fixes
- [ ] User/Grimoire 'x' button doesn't work when already logged on.
