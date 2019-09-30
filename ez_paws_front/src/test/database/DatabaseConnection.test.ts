import axios from 'axios';
import {
    getDataFromDB,
    pushDataToDB,
    deleteFromDB,
    updateDB
} from '../../database/DatabaseConnection';

jest.mock('axios');

const axiosAny:any = axios;
const globalAny:any = global;

afterEach(() => {
  jest.clearAllMocks();
});

const mockResponse = 'Response';
const id = 0;
const message = 'Message';


describe('DatabaseConnection', () => {
  describe('Fetch', () => {
    it('Fetches data from server when server returns a successful response', async () => {
      const mockResponse = {};
  
      jest.spyOn(globalAny, 'fetch').mockImplementation(() => Promise.resolve(mockResponse));
  
      const response = await getDataFromDB();
                              
      expect(globalAny.fetch).toHaveBeenCalledTimes(1);
      expect(globalAny.fetch).toHaveBeenCalledWith('http://localhost:3001/api/getData');
      expect(response).toEqual(mockResponse);
    });
  
    it('Errors when fetch is unsuccessful', async () => {
      jest.spyOn(globalAny, 'fetch').mockImplementation(() => Promise.reject(mockResponse));
  
      const response = await getDataFromDB();
                              
      expect(globalAny.fetch).toHaveBeenCalledTimes(1);
      expect(globalAny.fetch).toHaveBeenCalledWith('http://localhost:3001/api/getData');
      expect(response).toEqual(mockResponse);
    });
  });

  describe('Post', () => {
    it('Pushes data to database', async () => {
      axiosAny.post.mockResolvedValueOnce(mockResponse);
      const response = await pushDataToDB(id, message);
  
      expect(axiosAny.post).toHaveBeenCalledTimes(1);
      expect(axiosAny.post).toHaveBeenCalledWith('http://localhost:3001/api/putData', {
          id: id,
          message: message,
        });
      expect(response).toEqual(mockResponse);
    });
  
    it('Errors when push to database errors', async () => {
      axiosAny.post.mockRejectedValueOnce(mockResponse);
      const response = await pushDataToDB(id, message);
  
      expect(axiosAny.post).toHaveBeenCalledTimes(1);
      expect(axiosAny.post).toHaveBeenCalledWith('http://localhost:3001/api/putData', {
          id: id,
          message: message,
        });
      expect(response).toEqual(mockResponse);
    });
  });

  describe('Delete', () => {
    it('Deletes data in database', async () => {
      axiosAny.delete.mockResolvedValueOnce(mockResponse);
      const response = await deleteFromDB(id);
      
      expect(axiosAny.delete).toHaveBeenCalledTimes(1);
      expect(axiosAny.delete).toHaveBeenCalledWith('http://localhost:3001/api/deleteData', {
        data: {
          id: id,
        },
      });
      expect(response).toEqual(mockResponse);
    });

    it('Errors when delete errors', async () => {
      axiosAny.delete.mockRejectedValueOnce(mockResponse);
      const response = await deleteFromDB(id);
  
      expect(axiosAny.delete).toHaveBeenCalledTimes(1);
      expect(axiosAny.delete).toHaveBeenCalledWith('http://localhost:3001/api/deleteData', {
        data: {
          id: id,
        },
      });
      expect(response).toEqual(mockResponse);
    });
  });

  describe('Update', () => {
    it('Updates information to database', async () => {
      axiosAny.post.mockResolvedValueOnce(mockResponse);
      const response = await updateDB(id, message);

      expect(axiosAny.post).toHaveBeenCalledTimes(1);
      expect(axiosAny.post).toHaveBeenCalledWith(
        'http://localhost:3001/api/updateData', {
          id: id,
          update: { message: message },
        }
      );
      expect(response).toEqual(mockResponse);
    });

    it('Updates information to database', async () => {
      axiosAny.post.mockRejectedValueOnce(mockResponse);
      const response = await updateDB(id, message);

      expect(axiosAny.post).toHaveBeenCalledTimes(1);
      expect(axiosAny.post).toHaveBeenCalledWith(
        'http://localhost:3001/api/updateData', {
          id: id,
          update: { message: message },
        }
      );
      expect(response).toEqual(mockResponse);
    });
  });
});