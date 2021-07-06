import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminHomePage from './pages/adminHomePage/AdminHomePage';
import ApplicationFormPage from './pages/applicationFormPage/ApplicationFormPage';
import ListTripsPage from './pages/listTripsPage/ListTripsPage';
import LoginPage from './pages/loginPage/LoginPage';
import TripDetailsPage from './pages/tripDetails/TripDetailsPage';
import HomePage from './pages/homePage/HomePage';
import CreateTripPage from './pages/createTripPage/CreateTripPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
              <HomePage/>
          </Route>
          <Route exact path={"/trips/list"}>
            <ListTripsPage/>
          </Route>
          <Route exact path={"/login"}>
            <LoginPage/>
          </Route>
          <Route exact path={"/admin/trips/:id"}>
            <TripDetailsPage/>
          </Route>
          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage/>
          </Route>
          <Route exact path={"/trips/application"}>
            <ApplicationFormPage/>
          </Route>
          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
