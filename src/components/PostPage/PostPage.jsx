import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import SinglePost from '../SinglePost/SinglePost';
import Comments from '../Comments/Comments';
import CreateComment from '../CreateComment/CreateComment';

export default class PostPage extends Component {
  render() {
    const {
      postId,
      posts,
      users,
      comments,
      handleEditPost,
      handleDeletePost,
      handleEditComment,
      handleDeleteComment,
      addComment,
      currentUser,
    } = this.props;

    const [neededPost] = posts.filter((post) => {
      return +post.id === +postId;
    });

    if (!neededPost) {
      return <Redirect to="/blog-byNersisyan" />;
    }

    const { userId, title, content, date, id } = neededPost;
    const neededComments = comments.filter((comment) => comment.postId === id);

    return (
      <Grid container justifyContent="center">
        <Grid key={id} item xs={12} sm={9}>
          <SinglePost
            userId={userId}
            title={title}
            content={content}
            date={date}
            id={id}
            users={users}
            isPostPage={true}
            handleEditPost={handleEditPost}
            handleDeletePost={handleDeletePost}
            currentUser={currentUser}
          />
          <h2>Comments</h2>
          <CreateComment
            post={neededPost}
            addComment={addComment}
            currentUser={currentUser}
          />
          <Comments
            comments={neededComments}
            users={users}
            handleEditComment={handleEditComment}
            handleDeleteComment={handleDeleteComment}
            currentUser={currentUser}
          />
        </Grid>
      </Grid>
    );
  }
}
