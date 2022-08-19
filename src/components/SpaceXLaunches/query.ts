import { gql } from "@apollo/client";

export const SPACEX_LAUNCHES = gql`
  query Launches($limit: Int!) {
    launches(limit: $limit) {
      id
      mission_name
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      launch_year
      launch_success
    }
  }
`;