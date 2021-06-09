import React from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import CreateSong from './modules/Songs';
import { getPlaylists } from './store/playlists/actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Play from './modules/Play';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CreateSong />
        </Route>
        <Route exact path="/play">
          <Play />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
