import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Movie from './Movie';

class MovieGrid extends Component {
  render() {
    return (
      <div>
        <Heading>Discover Movies</Heading>
        <MovieGridWrapper>
          {this.props.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
        </MovieGridWrapper>
      </div>
    );
  }
}

export default MovieGrid;

const MovieGridWrapper = Styled.div`
  padding: 0 20px;
  display:grid;
  grid-template-columns: repeat(6,2fr);
  grid-row-gap:1rem;
  margin-bottom:50px;
`;

const Heading = Styled.h1`
  font-size:24px;
  color:white;
  padding:10px 24px;
`;