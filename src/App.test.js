import { render, screen } from '@testing-library/react';
import App from './App';

// ----------------- Redux -------------------
import { Provider } from "react-redux";
import storeConfig, { saga } from "../src/store/storeConfig"; 
import sagas from '../src/store/middlewares/sagas'

const store = storeConfig()

// then run the saga
saga.run(sagas)
// ----------------- Redux -------------------

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  ); 
  const linkElement = screen.getByText(/rick and morty/i);
  expect(linkElement).toBeInTheDocument();
});
