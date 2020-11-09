import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/people.actions';

export interface PersonEntity {
    id: string;
    name: string;
    methodOfContact?: string;
    startDate: Date;
    endDate: Date;
    reoccurrence:string
    lastContact?:Date;
    nextContact?:Date;
  }
  export interface PersonState extends EntityState<PersonEntity> {

  }
  
  export const adapter = createEntityAdapter<PersonEntity>();
  
  //const initialState = adapter.getInitialState();
  
  const initialState: PersonState = {
    ids: ['1'],
    entities: {
      1: { id: '1', name: 'John Doe', methodOfContact:"Phone Call", startDate: new Date("11/05/2020"),endDate:  new Date("12/05/2020"),reoccurrence:"7" },

    }
  };
  
  const reducerFunction = createReducer(
    initialState,
    on(actions.personAdd, (oldState, action) => adapter.addOne(action.payload, oldState))
    
  );
  
  export function reducer(state: PersonState = initialState, action: Action) {
    return reducerFunction(state, action);
  }