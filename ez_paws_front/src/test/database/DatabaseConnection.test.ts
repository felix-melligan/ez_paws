import axios from 'axios';
import {
    getDataFromDB,
    pushDataToDB
} from '../../database/DatabaseConnection';

jest.mock('axios');

const axiosAny:any = axios;
const globalAny:any = global;

afterEach(() => {
    globalAny.fetch.mockClear();
});

describe('DatabaseConnection', () => {
    it('Fetches data from server when server returns a successful response', async () => {
      const mockResponse = {};

      jest.spyOn(globalAny, 'fetch').mockImplementation(() => Promise.resolve(mockResponse));

      const response = await getDataFromDB();
                              
      expect(globalAny.fetch).toHaveBeenCalledTimes(1);
      expect(globalAny.fetch).toHaveBeenCalledWith('http://localhost:3001/api/getData');
      expect(response).toEqual(mockResponse);
    });

    it('Errors when fetch is unsuccessful', async () => {
        const mockResponse = 'Error';
        
        jest.spyOn(globalAny, 'fetch').mockImplementation(() => Promise.reject(mockResponse));
  
        const response = await getDataFromDB();
                                
        expect(globalAny.fetch).toHaveBeenCalledTimes(1);
        expect(globalAny.fetch).toHaveBeenCalledWith('http://localhost:3001/api/getData');
        expect(response).toEqual(mockResponse);
      });

      it('Pushes data to database', async () => {
        const mockResponse = 'Success';
        const id = 0;
        const message = 'Message';

        axiosAny.post.mockResolvedValue(mockResponse);
        const response = await pushDataToDB(0, 'Message');

        expect(axiosAny.post).toHaveBeenCalledTimes(1);
        expect(axiosAny.post).toHaveBeenCalledWith('http://localhost:3001/api/putData', {
            id: id,
            message: message,
          });
        expect(response).toEqual(mockResponse);
      });
  });