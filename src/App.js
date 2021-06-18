import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/nav/nav';
import Footer from './components/footer';
import Gallery from './pages/Gallery';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import About from './pages/about';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/About' component={About} />
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
