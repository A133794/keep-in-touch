  
import { createAction, props } from '@ngrx/store';
import { PersonEntity } from '../resucers/people.reducer';




let currentId = 1;

export const personAdd = createAction(
    '[people] person added',
    ({ name,methodOfContact, startDate,endDate,reoccurrence }: PersonCreate) => ({
      payload: {
        id: 'T' + currentId++,
        name,
        methodOfContact, 
        startDate,
        endDate,
        reoccurrence,
        lastContact: null,
        nextContact: null
        
      } as PersonEntity
    })
  );

  
interface PersonCreate {
    name: string;
    methodOfContact?: string;
    startDate: Date;
    endDate: Date;
    reoccurrence:string
    lastContact?:Date;
    nextContact?:Date;
  }