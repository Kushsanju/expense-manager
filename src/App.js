import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import DashBoard from './components/DashBoard/DashBoard';
import Wallet from './components/DashBoardOperations/Wallet';
import { Provider } from 'react-redux';
import store from './Store';
import UpdateWallet from './components/DashBoardOperations/UpdateWallet';
import Transaction from './components/Transactions/Transaction/Transaction';
import AddTransaction from './components/Transactions/TransactionOperations/AddTransaction';
import UpdateTransaction from './components/Transactions/TransactionOperations/UpdateTransaction';
import SignIN from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Navigation} />
        <Switch>

          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIN} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/createwallet" exact component={Wallet} />
          <Route path="/updatewallet/:id" exact component={UpdateWallet} />
          <Route path="/transactions/:id" exact component={Transaction} />
          <Route path="/trns/update/:id" exact component={UpdateTransaction} />
          <Route path="/trns/add/:id" exact component={AddTransaction} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
