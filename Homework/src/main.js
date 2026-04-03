import Handlebars from 'handlebars';
import templateSource from "./template.hbs?raw";
import template2 from "./template2.hbs?raw";

const homeworkTemplate = Handlebars.compile(template2);
const template = Handlebars.compile(templateSource);
let box = document.getElementById('box');
let stock = document.getElementById('stock');
let returnBtn = document.getElementById('return');
const item = {
    products: [
        { name: "Ноутбук", price: 30000, category: "tech", inStock: true },
        { name: "Телефон", price: 20000, category: "tech", inStock: false },
        { name: "Куртка", price: 1500, category: "clothes", inStock: true },
        { name: "Кросівки", price: 2500, category: "clothes", inStock: true },
    ]
};

const html = template(item);
box.innerHTML = html;

stock.addEventListener('click', () => {
    let stockItems = { products: [] }
    item.products.forEach((element) => {
        if (element.inStock) {
            stockItems.products.push(element);
        }
    });
    const stock = template(stockItems);
    box.innerHTML = stock;
});
returnBtn.addEventListener('click', () => box.innerHTML = html);
document.getElementById('techStock').addEventListener('click', () => {
    let techStock = { products: [] }
    item.products.forEach((element) => {
        if (element.category === 'tech') {
            techStock.products.push(element);
        }
    });
    const stock = template(techStock);
    box.innerHTML = stock;
});
document.getElementById('filter').addEventListener('click', () => {
    item.products.sort((a, b) => a.price - b.price);
    const filter = template(item);
    box.innerHTML = filter;
});
let search = document.getElementById('search');
search.addEventListener('change', () => {
    let product = search.value;
    let searchItem = { products: [] };
    item.products.forEach((element) => {
        if (element.name === product) {
            searchItem.products.push(element);
        }
    })
    search.value = '';
    const html = template(searchItem);
    box.innerHTML = html;
});
let listCurrency = document.getElementById('listCurrency');
let choose = document.getElementById('choose')
choose.addEventListener('click', event => {
    listCurrency.style.height = '120px'
});
document.getElementById('gryvna').addEventListener('click', () => {
    listCurrency.style.height = '20px'
    box.innerHTML = html
});
document.getElementById('USD').addEventListener('click', () => {
    item.products.map((element) => {
        element.price = Math.floor(element.price / 45);
    })
    const html = template(item);
    box.innerHTML = html;
    listCurrency.style.height = '20px';
});
document.getElementById('EUR').addEventListener('click', () => {
    item.products.map((element) => {
        element.price = Math.floor(element.price / 52);
    })
    const html = template(item);
    box.innerHTML = html;
    listCurrency.style.height = '20px';
});


const productBox = document.getElementById('productBox');
const items = {
    product: [
        {
            id: 1,
            name: 'Laptop',
            price: 1500,
            description: 'A high-performance laptop for all your needs.',
        },
        {
            id: 2,
            name: 'Smartphone',
            price: 700,
            description: 'A modern smartphone with an excellent camera.',
        },
        {
            id: 3,
            name: 'Headphones',
            price: 200,
            description: 'Noise-cancelling headphones for better focus.',
        },
    ]
};
const htmlHW = homeworkTemplate(items);
productBox.innerHTML = htmlHW;