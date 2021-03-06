import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { products } from './products.json';
import { shippingOptions } from './shippingOptions.json';
import { paymentOptions } from './paymentOptions.json';
import { productDescription } from './productDescription.json';
import { reviews } from './reviews.json';


const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/products', (req, res) => {
    // comment res.json and uncomment setTimeout to test loader on fetching products
    // setTimeout(() => res.json(products), 5000);
    res.json(products);
});

app.get('/shippingOptions', (req, res) => {
    res.json(shippingOptions);
});

app.get('/paymentOptions', (req, res) => {
    res.json(paymentOptions);
});

app.get('/productDetails?:productId', (req, res) => {
    const {
        id
    } = req.query;
    const product = products.find(currentProduct => currentProduct.id.toString() === id);

    res.json({
        images: ['fp1.jpg', 'fp2.jpg', 'fp3.jpg'],
        product,
        reviews,
        productDescription
    });
});

app.post('/submitOrder', (req, res) => {
    const {
        cart
    } = req.body;

    const totalPrice = cart.reduce((prevValue, nextValue) => prevValue + nextValue.quantity * nextValue.product.price, 0);
    const currency = cart.length && cart[0].product.currency;
    const orderedItems = cart.map(item => ({ name: item.product.name, quantity: item.quantity }));

    res.json({
        totalPrice,
        currency,
        orderedItems
    });
});

app.get('/*', (req, res) => {
    res.sendFile('public/index.html', { root: path.dirname(__dirname) });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
