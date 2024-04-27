import { rest } from 'msw';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  rest.get(
    'https://nomad-movies.nomadcoders.workers.dev/movies',
    (req, res, ctx) => {
      // ...and respond to them using this JSON response.
      return res(
        ctx.json([
          {
            id: 1,
            // release_date: '2024-04-19',
            title: 'Rebel Moon — Part Two: The Scargiver',
            // vote_average: 6.115,
            // vote_count: 469,
          },
          {
            id: 2,
            // release_date: '2024-01-18',
            title: 'No Way Up',
            // vote_average: 6.386,
            // vote_count: 448,
          },
          {
            id: 3,
            // release_date: '2024-03-27',
            title: 'Godzilla x Kong: The New Empire',
            // vote_average: 6.613,
            // vote_count: 759,
          },
        ]),
      );
    },
  ),
];
