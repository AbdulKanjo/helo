SELECT *
FROM posts
    JOIN users users ON users.user_id = posts.user_id
WHERE post_id = $1;