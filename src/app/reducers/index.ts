import {ActionReducerMap, createSelector,props} from '@ngrx/store';
import * as fromPerson from './person.reducer';
import {PersonListModel} from '../models/person';
import {PersonListItemModel} from '../models/person-list-item';


export interface AppState{
    person: fromPerson.PersonState;
}

export const reducers:ActionReducerMap<AppState>={
    person: fromPerson.reducer
};

const selectPersonBranch = (state:AppState)=> state.person;

const {selectAll:selectAllPeopleEntities}=fromPerson.adapter.getSelectors(selectPersonBranch);

export const selectPersonDetails = createSelector(
    selectAllPeopleEntities,
    people => people as PersonListModel[]

);

export const selectProjectList = createSelector(
    selectAllPeopleEntities,
    (people)=>{
        return{
            ...people
        } as PersonListItemModel;
    }
)