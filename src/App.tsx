import { Router } from '@routes/Router';
import MovieList from '@components/MovieList';

function App() {
  return (
    <div className="App">
      <Router />
      <MovieList />
    </div>
  );
}

export default App;
