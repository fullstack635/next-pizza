import { PizzaDough, PizzaSize } from "../model/CartModel";

interface store {
    pizza: Pizza[];
    combo: Combo[];
    snacks: Product[];
    drinks: Product[];
    deserts: Product[];
    other: Product[];
}

export interface Pizza {
    type: 'pizza';
    id: number;
    name: string;
    desc: string;
    price: {
        [key in PizzaSize]: string;
    }
    weight: {
        trad: {
            [key in PizzaSize]: string;
        };
        thin: {
            [key in Extract<PizzaSize, 'md' | 'xl'>]: string;
        }
    }
    pic: string;
}

export interface Product {
    type: 'snack' | 'desert' | 'drink' | 'other';
    id: number;
    name: string;
    desc: string;
    pic: string;
    price: string;
    weight: string;
}

export interface Combo {
    type: 'combo';
    id: number;
    name: string;
    desc: string;
    pic: string;
    price: string;
    weight: string;
}

export const pseudostore: store = {
    pizza: [
        {
            type: 'pizza',
            id: 1,
            name: 'Сырная',
            desc: 'Моцарелла, сыры чеддер и пармезан, соус альфредо',
            price: {
                sm: '245',
                md: '479',
                xl: '629',
            },
            weight: {
                trad: {
                    sm: '330',
                    md: '490',
                    xl: '650',
                },
                thin: {
                    md: '380',
                    xl: '540',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c71cd53e50746279f7aa0f59c7ec50f_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 2,
            name: 'Пепперони фреш',
            desc: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
            price: {
                sm: '245',
                md: '479',
                xl: '629',
            },
            weight: {
                trad: {
                    sm: '410',
                    md: '610',
                    xl: '800',
                },
                thin: {
                    md: '500',
                    xl: '680',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 3,
            name: 'Песто',
            desc: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '420',
                    md: '620',
                    xl: '840',
                },
                thin: {
                    md: '510',
                    xl: '730',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 4,
            name: 'Ветчина и сыр',
            desc: 'Ветчина, моцарелла, соус альфредо',
            price: {
                sm: '315',
                md: '479',
                xl: '629',
            },
            weight: {
                trad: {
                    sm: '330',
                    md: '470',
                    xl: '610',
                },
                thin: {
                    md: '380',
                    xl: '540',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg',
        },
        {
            type: 'pizza',
            id: 5,
            name: 'Карбонара',
            desc: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '420',
                    md: '620',
                    xl: '840',
                },
                thin: {
                    md: '510',
                    xl: '730',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_292x292.jpeg',
        },
    ],
    combo: [
        {
            type: 'combo',
            id: 30,
            name: 'Комбо за 599 ₽',
            desc: 'Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус. Выбор пицц ограничен.',
            price: '599',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fbf325ba27c24254b3461960263163c9_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 31,
            name: '2 пиццы',
            desc: 'Самое популярное комбо из 2 пицц 30 см. Выбор пицц ограничен.',
            price: '1089',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/d862fb75213047fbb8bb8819f42202e8_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 32,
            name: '2 пиццы и напиток',
            desc: '2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек. Выбор пицц ограничен.',
            price: '859',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/4c2255222bf746e890be4a1361018503_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 33,
            name: '3 Coca-Cola по суперцене',
            desc: '3 Coca-Cola 0,5 литра на выбор по выгодной цене!',
            price: '289',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/9c8ec60870904c17b11e241efb212982_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 34,
            name: 'Комбо за 1099 ₽',
            desc: '3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен',
            price: '1099',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/7f33a2d14f674d34b9c2912bd7c779f7_292x292.webp',
            weight: ''
        },
    ],
    snacks: [
        {
            type: 'snack',
            id: 40,
            name: 'Додстер',
            desc: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
            price: '169',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f901922426894718b3fdfc4158899b1f_292x292.jpeg',
            weight: '200 г',
        },
        {
            type: 'snack',
            id: 41,
            name: 'Острый Додстер',
            desc: 'Горячая закуска с цыпленком, перчиком халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
            price: '169',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/14afcd3cc7094ee49a8b71953ef9f777_292x292.jpeg',
            weight: '190 г',
        },
        {
            type: 'snack',
            id: 42,
            name: 'Сырный Стартер',
            desc: 'Горячая закуска с очень сырной начинкой. Моцарелла, пармезан, чеддер и соус ранч в тонкой пшеничной лепешке',
            price: '169',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/06cda7a8f9a64a2d92a3f87ae0412063_292x292.jpeg',
            weight: '160 г',
        },
        {
            type: 'snack',
            id: 43,
            name: 'Грибной Стартер',
            desc: 'Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке',
            price: '169',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4f21f83f43674d37818f1a26e0e43b65_292x292.jpeg',
            weight: '160 г',
        },
        {
            type: 'snack',
            id: 44,
            name: 'Острый Стартер',
            desc: 'Горячая закуска с острыми колбасками чоризо, цыпленком, перчиком халапеньо, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
            price: '169',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/73c4ba899f164333b208df5439f3d27f_292x292.jpeg',
            weight: '160 г',
        },
    ],
    deserts: [
        {
            type: 'desert',
            id: 55,
            name: 'Молочный коктейль с печеньем Орео',
            desc: 'Напиток из молока и мороженого с добавлением дробленого печенья «Орео»',
            price: '189',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/58900e1ab99b4e7b97de88bc96ad6ef3_292x292.jpeg',
            weight: '0,3 л',
        },
        {
            type: 'desert',
            id: 56,
            name: 'Шоколадный молочный коктейль',
            desc: 'Сладкий напиток на основе молока и мороженого с фирменным какао',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2bf20007a8e54800a10aeb0167205110_292x292.jpeg',
            weight: '0,3 л',
        },
        {
            type: 'desert',
            id: 57,
            name: 'Классический молочный коктейль',
            desc: 'Напиток из молока и мороженого',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f08ef3e758024f378031e8f796480005_292x292.jpeg',
            weight: '0,3 л',
        },
        {
            type: 'desert',
            id: 58,
            name: 'Клубничный молочный коктейль',
            desc: 'Напиток из молока и мороженого с клубничным сиропом',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c78250b130a04c308b6df6994ae0d3d4_292x292.jpeg',
            weight: '0,3 л',
        },
        {
            type: 'desert',
            id: 59,
            name: 'Вишневый пирог',
            desc: 'Это не просто десерт, а вишенка на торте! Творожно-песочное тесто с ягодами, заварным кремом и лепестками миндаля.',
            price: '149',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4c4be1059e5c4643887258b0ff49a557_292x292.jpeg',
            weight: '104 г',
        },
    ],
    drinks: [
        {
            type: 'drink',
            id: 71,
            name: 'Coca-Cola Zero',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/646062734a454f6c9c8b8992846d478a_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 72,
            name: 'Coca-Cola',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c99ec0985f37456a8084928dfe8ed379_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 73,
            name: 'Coca-Cola Lime',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6fadad5d935948848a10c3046e55f9d5_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 74,
            name: 'Coca-Cola Vanilla',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4dde423fc98f4c01a3862917ef7bcb25_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 75,
            name: 'Sprite',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cbf4fc24b6784abe9b061f44411bebed_292x292.jpeg'
        },
    ],
    other: [
        {
            type: 'other',
            id: 97,
            name: 'Кофе в зернах, 250 г',
            desc: '100% арабика с нотками карамели, шоколада и грецкого ореха. Обжарка темнее среднего. Выращен в Бразилии',
            weight: '0.25 кг',
            price: '299',
            pic: 'https://cdn.dodopizza.net/static/Img/Products/d86742653b744c1bb47eaa5a38d4087a_292x292.jpeg'
        },
        {
            type: 'other',
            id: 98,
            name: 'Коллекционный магнит «Додо Пиццы»',
            desc: 'Один из серии сувенирных магнитов Додо Пиццы.',
            weight: '1 шт',
            price: '10',
            pic: 'https://cdn.dodopizza.net/static/Img/Products/Goods/ru-RU/92436e5f-9555-429d-9b26-52732762154e.jpg'
        },
        {
            type: 'other',
            id: 99,
            name: 'Додо Раскраска',
            desc: '',
            weight: '1 шт',
            price: '10',
            pic: 'https://cdn.dodopizza.net/static/Img/Products/c60dfc4a6bbb4ac4a6f4690f3036994b_292x292.jpeg'
        },
        {
            type: 'other',
            id: 100,
            name: 'Додо Клюв',
            desc: '',
            weight: '1 шт',
            price: '10',
            pic: 'https://cdn.dodopizza.net/static/Img/Products/Goods/ru-RU/de3d1762-5f99-42d9-b3a7-ec312d0840a0.jpg'
        },
        {
            type: 'other',
            id: 101,
            name: 'Додо колпак',
            desc: '',
            weight: '1 шт',
            price: '10',
            pic: 'https://cdn.dodopizza.net/static/Img/Products/Goods/ru-RU/6907f6d5-a1bd-4954-913d-3caf6a79e448.jpg'
        },
    ]
}