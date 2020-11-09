export interface PersonListModel {
    id: string;
    name: string;
    methodOfContact?: string;
    startDate: Date;
    endDate: Date;
    reoccurrence:string
    lastContact?:Date;
    nextContact?:Date;
  }