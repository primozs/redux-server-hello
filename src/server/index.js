import configureStore from '../modules/app/store/configureStore';
import { startServer } from './server';

export const store = configureStore();
startServer(store);
