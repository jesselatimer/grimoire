# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
image_url       | string    |
bio             | text      |
canon           | string    |
password_digest | string    | not null
session_token   | string    | not null

## tomes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | foreign key (references users)
title       | string    | not null
description | text      | not null
cover_url   | string    |
canon       | string    |
rating      | integer   |

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
tome_id     | integer   | not null, foreign key (references tomes)
title       | string    | not null
body        | text      | not null
rating      | integer   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
review_id   | integer   | not null, foreign key (references reviews)
body        | text      | not null
