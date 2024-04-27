import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('MovieList', () => {
  test('Movie라는 제목이 있습니다.', () => {
    render(<MovieList />);
    const titleEl = screen.getByText('Movie');
    expect(titleEl).toBeInTheDocument();
  });

  test('에러가 났을 때 에러 메시지를 보여줍니다.', async () => {
    server.use(
      // GET /movies 요청을 가로챕니다.
      rest.get(
        'https://nomad-movies.nomadcoders.workers.dev/movies',
        (req, res, ctx) => {
          // 요청을 받으면 500 상태 코드를 응답합니다.
          return res(ctx.status(500));
        },
      ),
    );
    render(<MovieList />);
    const error = await screen.findByText('에러 발생..');
    expect(error).toBeInTheDocument();
  });

  test('리스트가 잘 나옵니다.(3개)', async () => {
    render(<MovieList />);
    const list = await screen.findAllByRole('listitem');
    expect(list).toHaveLength(3);
  });
});
