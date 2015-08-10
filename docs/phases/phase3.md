# Phase 3: Reviews and Comments

## Rails
### Models
* Reviews
* Comments

### Controllers
* API::ReviewsController (create, destroy)
* API::CommentsController (create, destroy)

### Views
**Update**
* tomes/show.json.jbuilder
* users/show.json.jbuilder

## Backbone
### Models
* Review
* Comment

### Collections
* Reviews
* Comments

<!--
  TA: What is the appropriate naming for CommentItem and ReviewShow?
  ReviewShow will only be seen on UserShow or TomeShow, so it's not
  really a show, but I also want to get across that it's a composite view.
-->
### Views
* CommentItem
* CommentForm
* ReviewShow (composite view, contains CommentItems & CommentForm)
* ReviewForm

## Gems/Libraries
