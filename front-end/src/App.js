import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homescreen from "./screens/Homescreen";
import ErrorPage from "./screens/ErrorPage";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/" component={Homescreen} exact />
            <Route path="*">
              <ErrorPage>
                <h1>Page Not Found</h1>
              </ErrorPage>
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
