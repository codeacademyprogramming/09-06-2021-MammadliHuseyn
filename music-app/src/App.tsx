import React from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import CreateSong from './modules/Songs';
import { getPlaylists } from './store/playlists/actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Play from './modules/Play';
import { getSongs } from './store/songs/actions';
import { AuthRouter } from './authRoute';
import { Login } from './modules/Login';
import { Register } from './modules/Register';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPlaylists());
    dispatch(getSongs());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <AuthRouter exact path="/">
          <CreateSong />
        </AuthRouter>
        <AuthRouter exact path="/play">
          <Play />
        </AuthRouter>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
