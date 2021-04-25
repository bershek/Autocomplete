import React from 'react'
import {ALL_FILMS} from "../../../queries/queries";
import { useQuery } from '@apollo/react-hooks';
import InputField from "../../reusable/InputField/InputField";

const MainPage = () => {
  // TODO: I got cors error, link on this issue https://github.com/graphql/swapi-graphql/issues/184
  // const { data, loading, error } = useQuery(ALL_FILMS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Something went wrong...</p>;
  const data = {
    "data": {
      "allFilms": {
        "films": [
          {
            "id": "ZmlsbXM6MQ==",
            "title": "A New Hope"
          },
          {
            "id": "ZmlsbXM6Mg==",
            "title": "The Empire Strikes Back"
          },
          {
            "id": "ZmlsbXM6Mw==",
            "title": "Return of the Jedi"
          },
          {
            "id": "ZmlsbXM6NA==",
            "title": "The Phantom Menace"
          },
          {
            "id": "ZmlsbXM6NQ==",
            "title": "Attack of the Clones"
          },
          {
            "id": "ZmlsbXM6Ng==",
            "title": "Revenge of the Sith"
          }
        ]
      }
    }
  };

  const options = data.data.allFilms.films;

  return <InputField options={options} />
}

export default MainPage;
