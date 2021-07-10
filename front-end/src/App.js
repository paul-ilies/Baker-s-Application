import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './componente/footer/Footer'
import Header from './componente/header/Header'
import Homescreen from './screens/Homescreen';
import Retete from './screens/Retete';
import PaginaInexistenta from './screens/PaginaInexistenta';
import Reteta from './screens/Reteta';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path='/' component={Homescreen} exact />
            <Route path="/recipes" component={Retete} exact />
            <Route path="/recipes/:id" component={Reteta} />
            <Route path="*" >
              <PaginaInexistenta><h1>Page Not Found</h1></PaginaInexistenta>
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
