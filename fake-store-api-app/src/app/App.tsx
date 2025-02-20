import { Button } from '@mui/material';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Button variant={'outlined'}>Нажми на меня!</Button>
      </Provider>
    </>
  );
};
