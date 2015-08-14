# goodtomes

[Heroku link][heroku]

[heroku]: #

## Minimum Viable Product
goodtomes is a clone of goodreads for fantasy-themed fictional books built on
Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts (include guest account)
- [x] Create sessions (log in)
- [x] Explore tomes
- [x] Explore users
- [ ] View users and see their reviews
- [ ] View tomes and see its reviews
- [ ] Add tomes to shelves
- [ ] Review tomes
- [ ] Rate tomes
- [ ] See comments under reviews
- [ ] Leave comments on reviews
- [ ] See a feed of recent reviews

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User & Tome Indexes (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create users using
a simple text form in a Rails view, and explore users and tomes as a grid. I
will also include basic, temporary seed data. The most important part of this
phase will be pushing the app to Heroku and ensuring that everything works
before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Users and Tomes  (~1-2 days)
I will add API routes to serve user and tome data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to view both users and tomes, and create and update
tomes, all inside a single Backbone app.

[Details][phase-two]

### Phase 3: Shelves and Shelving (~1 day)
I will add the ability to create and populate shelves, such as "Want to Read"
and "Currently Reading". By the end of this phase, users will be able to create,
edit, and delete shelves.

[Details][phase-three]

### Phase 4: Reviews and Comments (~2 days)
I will add API routes for reviews and comments, and create Backbone models and
collections. Reviews will be nested as subviews under users and tomes, and
comments will be nested as subviews under reviews. By the end of this phase,
users will be able to create and delete reviews and comments, and view reviews
and comments on user and tome show views.

[Details][phase-four]

### Phase 5: Review and Comment Functionality (~1-2 days)
Comments will start out collapsed, and can be expanded, which includes the new
comment form. Users will be able to edit their own reviews and comments in-
line. Reviews will have a numeric rating, which will update the average rating
in the database. This phase will take care the gritty details of reviewing and
commenting.

[Details][phase-five]

### Phase 6: Review Feed (~1 days)
Users will be able to see a feed of recent reviews, by any user for any tome.
This will be the eventual landing page of the site. By the end of this phase,
users will have access to the full functionality of the MVP.

[Details][phase-six]

### Bonus Features (TBD)
- [ ] Search for tomes/users
- [ ] Follow users with the option to see only followed users in feed
- [ ] Activity history (e.g. reviews, adding tomes to categories, commenting)
- [ ] Multiple sessions/session management
- [ ] Uploaded instead of hotlinked user avatars (Filepicker)
- [ ] Markdown in user inputted fields (Markdown-js/Bootstrap Markdown)
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
