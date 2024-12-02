import './App.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import ListUser from './Users/ListUser.js';
import DetailUser from './Users/DetailUser.js';

/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>

    </BrowserRouter>
  );
}


export default App;
