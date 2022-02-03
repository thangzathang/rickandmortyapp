import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        gender
        status
        id
        location {
          name
        }
      }
    }
  }
`;

export default function Characters(page = 1) {
  const { data, error, loading } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  return { data, error, loading };
}
