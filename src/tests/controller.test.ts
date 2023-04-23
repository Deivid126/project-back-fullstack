import { Request, Response } from 'express';
import ApiService from '../services/api';
import CartController from '../controllers/CartController';

describe('CartController', () => {
    let mockRequest: Partial<Request>;
    let mockRequestError: Partial<Request>;
    let mockResponse: Partial<Response>;
    let cartController: CartController;

    beforeEach(() => {
        mockRequest = {
            params: {
                id: '1'
            }
        };
        mockRequestError = {
            params: {
                id:'999'
            }
        };
    
        mockResponse = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis(),
        };
        cartController = new CartController();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getcart', () => {
        it('should return a response with status 200 and the cart data', async () => {
            jest.spyOn(ApiService.prototype, 'getresponse').mockResolvedValueOnce({
                name: 'John Doe',
                email: 'johndoe@example.com',
                last_compras: [
                    {
                        id: 1,
                        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        price: 109.95,
                        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        category: "men's clothing",
                        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        rating: {
                            rate: 3.9,
                            count: 120
                        }
                    },
                    {
                        id: 2,
                        title: "Mens Casual Premium Slim Fit T-Shirts ",
                        price: 22.3,
                        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                        category: "men's clothing",
                        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                        rating: {
                            rate: 4.1,
                            count: 259
                        }
                    }
                ]
            }
            );

            await cartController.getcart(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                name: 'John Doe',
                email: 'johndoe@example.com',
                last_compras: [
                    {
                        id: 1,
                        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        price: 109.95,
                        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        category: "men's clothing",
                        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        rating: {
                            rate: 3.9,
                            count: 120
                        }
                    },
                    {
                        id: 2,
                        title: "Mens Casual Premium Slim Fit T-Shirts ",
                        price: 22.3,
                        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                        category: "men's clothing",
                        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                        rating: {
                            rate: 4.1,
                            count: 259
                        }
                    }
                ]
            }
            );
        });

        it('should return an error response if an exception is thrown', async () => {
            jest.spyOn(ApiService.prototype, 'getresponse').mockImplementationOnce(() => {
                throw new Error('An error occurred, verify the Id');
            });

            await cartController.getcart(mockRequestError as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(500);
            expect(mockResponse.json).toHaveBeenCalledWith({
                message: 'An error occurred, verify the Id'
            });
        });
    });
});
