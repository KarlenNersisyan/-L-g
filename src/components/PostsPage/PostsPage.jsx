import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SinglePost from '../SinglePost/SinglePost';
import { Box } from '@material-ui/core';

export default class Posts extends Component {
  render() {
    const { posts, users, isLoggedIn } = this.props;

    if (posts.length === 0) {
      return (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {!isLoggedIn ? (
            <Box component='div' textAlign='center'>
              <h2>
                Welcome to the blog{' '}
                <a
                  href="https://www.facebook.com/karlnersisyan"
                  style={{
                    textDecoration: 'none',
                    fontSize: '35px',
                    color: 'red',
                  }}
                >
                  Karlen Nersisyan
                </a>
              </h2>
              <h1>
                <Link to="/blog-byNersisyan/auth">Log In</Link>
              </h1>
            </Box>
          ) : (
            <Box component="div" textAlign="center" fontSize="30px">
              <h5>Your registration process successfully completed.</h5>
              <Link to="/blog-byNersisyan/blog/create">Share Your Story!</Link>
            </Box>
          )}
        </Grid>
      );
    }

    return (
      <Grid container direction="column" alignItems="center">
        <h1 style={{ fontSize: '45px', color: 'rgb(66 111 171)' }}>
          Posts List
        </h1>
        {posts.map(({ userId, title, content, date, id }) => (
          <Grid style={{ width: '100%' }} key={id} item xs={12} sm={9}>
            <SinglePost
              userId={userId}
              title={title}
              content={content}
              date={date}
              id={id}
              users={users}
              isEditable={false}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
