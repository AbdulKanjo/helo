SELECT *
FROM posts
    JOIN users ON author_id=users.id
WHERE post_id = $1;