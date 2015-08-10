# Phase 2: Viewing Users and Tomes

## Rails
### Models

### Controllers
* *Remove index from UsersController and TomesController*
* Api::UsersController (index, show)
* Api::TomesController (index, show, create, update)

### Views
* static_pages/root.html.erb
* users/index.json.jbuilder
* users/show.json.jbuilder
* tomes/index.json.jbuilder
* tomes/show.json.jbuilder

## Backbone
### Models
* User
* Tome

### Collections
* Users
* Tomes

### Views
* UsersIndex
* TomesIndex
* UserShow (composite view, will contain ReviewShows & ReviewForm)
* TomeShow (composite view, will contain ReviewShows & ReviewForm)
* TomeForm (create and update)

## Gems/Libraries
