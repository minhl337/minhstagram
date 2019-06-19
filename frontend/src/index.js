import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navbar.css'
import './picture-grid.css'
import './new-post-form.css'
import './my-posts.css'
import NewPost from './NewPost'
import MyPosts from './MyPosts'
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routing = (
    <Router>
        <Switch>
            <Route path='/signup' render={props => <App {...props} page='/signup' />}/>
            <Route exact path='/' render={props => <App {...props} page='/' />} />
            <Route path='/explore' render={props => <App {...props} page='/explore' />} />
            <Route path='/posts/new' render={props => <NewPost {...props} />}/>
            <Route path='/mypost' component={MyPosts}/>
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));