import gql from 'graphql-tag';

export const ALL_FILMS = gql`{
  allFilms {
    films {
      id
      title
    }
  }
}`;
