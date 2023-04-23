import { Request, Response } from 'express';
import ApiService from '../services/api';

const cartCache = new Map<number,any>();

export default class CartController {


    /**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Operações relacionadas a carrinhos
 */

    /**
     * @swagger
     * /cart-history/{id}:
     *   get:
     *     summary: Retorna um carrinho com base no ID do usuário
     *     tags: [Cart]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID do usuário
     *     responses:
     *       200:
     *         description: Carrinho encontrado
     *       500:
     *         description: Erro interno no servidor
     */
    public async getcart(req: Request, res: Response) {

        try {
            const { id } = req.params;
            let cart = cartCache.get(parseInt(id));

            if (!cart) {
                cart = await new ApiService().getresponse(parseInt(id));
                cartCache.set(parseInt(id), cart);
            }
            return res.json(cart).status(200);
        } catch (error) {
            return res.json({ message: "An error occurred, verify the Id" }).status(500);
        }
    }
}