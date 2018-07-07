import {createStore} from 'redux';
import { todos_reducers } from '../reducers/todos_reducers';
export const store = createStore(todos_reducers);