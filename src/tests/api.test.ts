import axios from 'axios';
import ApiService from '../services/api';



describe('ApiService', () => {
    let apiService: ApiService;
    beforeAll(() => {
        apiService = new ApiService();
    });

    describe('getcards', () => {
        it('should return an object with an array of products', async () => {
          const userId = 1;
          const result = await apiService.getcards(userId);
          expect(result).toBeDefined();
          expect(Array.isArray(result.products)).toBeTruthy();
        });
      });
    
      describe('getuser', () => {
        it('should return an object with user information', async () => {
          const userId = 1;
          const result = await apiService.getuser(userId);
          expect(result).toBeDefined();
          expect(result.email).toBeDefined();
          expect(result.name).toBeDefined();
        });
      });
    
      describe('getresponse', () => {
        it('should return a response object', async () => {
          const userId = 1;
          const response = await apiService.getresponse(userId);
          expect(response).toBeDefined();
          expect(response.email).toBeDefined();
          expect(response.name).toBeDefined();
          expect(Array.isArray(response.last_compras)).toBeTruthy();
        });
      });
});
