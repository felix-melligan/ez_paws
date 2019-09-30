import axios from 'axios';

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  export async function getDataFromDB(): Promise<any> {
    try {
      return await fetch('http://localhost:3001/api/getData');
    } catch (error) {
      return error;
    }
  };

  // our put method that uses our backend api
  // to create new query into our data base
  export async function pushDataToDB(idToBeAdded: number, message: any): Promise<any> {
    try {
      return await axios.post('http://localhost:3001/api/putData', {
        id: idToBeAdded,
        message: message,
      });
    } catch (error) {
      return error;
    }
  };

  // our delete method that uses our backend api
  // to remove existing database information
  export async function deleteFromDB(idToDelete: any): Promise<any> {
    try {
      parseInt(idToDelete)
      return await axios.delete('http://localhost:3001/api/deleteData', {
        data: {
          id: idToDelete,
        },
      });
    } catch (error) {
      return error;
    }

  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  export async function updateDB(idToUpdate: any, updateToApply: any): Promise<any> {
    try {
      parseInt(idToUpdate);
      return await axios.post('http://localhost:3001/api/updateData', {
        id: idToUpdate,
        update: { message: updateToApply },
      });
    } catch (error) {
      return error;
    }
  };