import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Pages: lazy imports to save on load time
const About = lazy(() => import('./pages/About/About'));
const Home = lazy(() => import('./pages/Home/Home'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const Projects = lazy(() => import('./pages/Projects/Projects'));

/**
 * Component to manage app routing
 */
function Routes(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
