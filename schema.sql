
CREATE TABLE posts (
    id serial UNIQUE NOT NULL PRIMARY KEY,
    story text NOT NULL,
    next serial,
    votes integer,
    is_head boolean NOT NULL
)

INSERT INTO posts (story, votes, is_head) VALUES ('This is the first post.', 1, true)