import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// e cu acolade pentru ca importam un obiect, fara acolade exportam un obiect default
import MainMenu from './shared/MainMenu';
import "bootstrap/dist/css/bootstrap.min.css";
import {PostList, PostDetails, PostEdit} from "./views/posts";
import UserContext from './shared/user.context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(user) {
    this.setState({ user });
  }

  render() {
    return (
      <BrowserRouter>
        <UserContext.Provider value={ {user: this.state.user, onUserUpdated: this.handleUserChange} }>
          <div>
            <MainMenu site_name="my_first react app"></MainMenu>
            <Route exact path = "/" component = { () => <h2>Home Page</h2>} />
            <Route exact path ="/posts" component = {PostList} />
            <Route exact path ="/posts/:id" component = {PostDetails} />
            <Route path ="/posts/edit/:id" component = {PostEdit} />
          </div>
      </UserContext.Provider>
     </BrowserRouter>
    );
  }
}

export default App;
