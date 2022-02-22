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
        {
            type: 'pizza',
            id: 6,
            name: 'Двойной цыпленок',
            desc: 'Цыпленок, моцарелла, соус альфредо',
            price: {
                sm: '245',
                md: '479',
                xl: '629',
            },
            weight: {
                trad: {
                    sm: '360',
                    md: '520',
                    xl: '710',
                },
                thin: {
                    md: '430',
                    xl: '610',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 7,
            name: 'Додо Микс',
            desc: 'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
            price: {
                sm: '545',
                md: '849',
                xl: '999',
            },
            weight: {
                trad: {
                    sm: '440',
                    md: '670',
                    xl: '880',
                },
                thin: {
                    md: '580',
                    xl: '850',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 8,
            name: 'Пепперони',
            desc: 'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '390',
                    md: '570',
                    xl: '740',
                },
                thin: {
                    md: '460',
                    xl: '620',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/80af1cf2138447b4a9afc30df6af712c_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 9,
            name: 'Маргарита',
            desc: 'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
            price: {
                sm: '375',
                md: '549',
                xl: '729',
            },
            weight: {
                trad: {
                    sm: '420',
                    md: '620',
                    xl: '820',
                },
                thin: {
                    md: '520',
                    xl: '710',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6b61691078454b3793cdbfbbaa15cf58_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 10,
            name: 'Ветчина и грибы',
            desc: 'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус',
            price: {
                sm: '375',
                md: '549',
                xl: '729',
            },
            weight: {
                trad: {
                    sm: '410',
                    md: '600',
                    xl: '790',
                },
                thin: {
                    md: '490',
                    xl: '670',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 11,
            name: 'Гавайская',
            desc: 'Ветчина, ананасы, моцарелла, томатный соус',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '430',
                    md: '640',
                    xl: '830',
                },
                thin: {
                    md: '530',
                    xl: '720',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4749ca7de7e247daa69a685714f06aa3_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 12,
            name: 'Диабло',
            desc: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '490',
                    md: '720',
                    xl: '960',
                },
                thin: {
                    md: '620',
                    xl: '860',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c7a83e078b44156a7ad774389ed7713_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 13,
            name: 'Додо',
            desc: 'Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '500',
                    md: '730',
                    xl: '980',
                },
                thin: {
                    md: '620',
                    xl: '860',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0d5410630b5c4f9eba6e8607423a587a_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 14,
            name: 'Сырный цыпленок',
            desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '410',
                    md: '610',
                    xl: '850',
                },
                thin: {
                    md: '510',
                    xl: '750',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/36785e0eea834174bf358ac2682aea4d_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 15,
            name: 'Цыпленок ранч',
            desc: 'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '440',
                    md: '660',
                    xl: '910',
                },
                thin: {
                    md: '550',
                    xl: '790',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0665a05313b1431588acec0ecfac0888_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 16,
            name: 'Мясная',
            desc: 'Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, томатный соус',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '410',
                    md: '600',
                    xl: '800',
                },
                thin: {
                    md: '490',
                    xl: '680',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b10dd95184eb49d39a739d75b8cbfeaf_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 17,
            name: 'Аррива!',
            desc: 'Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '390',
                    md: '590',
                    xl: '800',
                },
                thin: {
                    md: '480',
                    xl: '690',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a2407468a4094e498d258f65bffa4c46_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 18,
            name: 'Четыре сезона',
            desc: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '440',
                    md: '640',
                    xl: '860',
                },
                thin: {
                    md: '530',
                    xl: '740',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/78e7d6286b3c4b4b9882e9422b8bdf01_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 19,
            name: 'Чизбургер-пицца',
            desc: 'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '430',
                    md: '660',
                    xl: '900',
                },
                thin: {
                    md: '560',
                    xl: '790',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/40c9e7c8c01d4b29a816f2fd65d5bb60_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 20,
            name: 'Колбаски барбекю',
            desc: 'Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '330',
                    md: '480',
                    xl: '630',
                },
                thin: {
                    md: '390',
                    xl: '530',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/20734006e66d427fb2cbb8fbb595b21e_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 21,
            name: 'Фристайло',
            desc: 'Томаты, сладкий перец, красный лук, соус песто, митболы, моцарелла, томатный соус',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '400',
                    md: '590',
                    xl: '780',
                },
                thin: {
                    md: '500',
                    xl: '680',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/67040d5b9c3a42e2a0deb93cca61f1ac_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 22,
            name: 'Овощи и грибы',
            desc: 'Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла, томатный соус, итальянские травы',
            price: {
                sm: '435',
                md: '649',
                xl: '849',
            },
            weight: {
                trad: {
                    sm: '460',
                    md: '680',
                    xl: '920',
                },
                thin: {
                    md: '570',
                    xl: '800',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cf22475052d34b41b7f00792aa73dca4_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 23,
            name: 'Четыре сыра',
            desc: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '380',
                    md: '550',
                    xl: '740',
                },
                thin: {
                    md: '450',
                    xl: '630',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1130292c8ffb4c34bb0a20619e65efb3_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 24,
            name: 'Цыпленок барбекю',
            desc: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, томатный соус',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '450',
                    md: '660',
                    xl: '880',
                },
                thin: {
                    md: '550',
                    xl: '770',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6efc2093bc244329918b9b44dc960852_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 25,
            name: 'Двойная пепперони',
            desc: 'Двойная порция пикантной пепперони, увеличенная порция моцареллы, томатный соус',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '420',
                    md: '630',
                    xl: '780',
                },
                thin: {
                    md: '500',
                    xl: '670',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/052c40e826264c6c8853cef189c8d34f_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 26,
            name: 'Супермясная',
            desc: 'Пикантная пепперони, цыпленок, острая чоризо, бекон, митболы, моцарелла, томатный соус',
            price: {
                sm: '545',
                md: '849',
                xl: '999',
            },
            weight: {
                trad: {
                    sm: '440',
                    md: '640',
                    xl: '860',
                },
                thin: {
                    md: '530',
                    xl: '740',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/51025107de954c6e93034b2fd6931d22_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 27,
            name: 'Пицца-пирог',
            desc: 'Ананасы, брусника, сгущенное молоко',
            price: {
                sm: '375',
                md: '549',
                xl: '729',
            },
            weight: {
                trad: {
                    sm: '340',
                    md: '520',
                    xl: '720',
                },
                thin: {
                    md: '420',
                    xl: '600',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg',
        },
        {
            type: 'pizza',
            id: 28,
            name: 'Нежный лосось',
            desc: 'Лосось, томаты, соус песто, моцарелла, соус альфредо',
            price: {
                sm: '595',
                md: '899',
                xl: '1049',
            },
            weight: {
                trad: {
                    sm: '430',
                    md: '650',
                    xl: '880',
                },
                thin: {
                    md: '540',
                    xl: '760',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/eb5e42dee16e4440873e3cb6b78c4a1f_292x292.jpeg',
        },
        {
            type: 'pizza',
            id: 29,
            name: 'Мексиканская',
            desc: 'Цыпленок, острый перец халапеньо, соус сальса, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
            price: {
                sm: '495',
                md: '749',
                xl: '879',
            },
            weight: {
                trad: {
                    sm: '480',
                    md: '710',
                    xl: '960',
                },
                thin: {
                    md: '600',
                    xl: '840',
                }
            },
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/186dfa8511434e5eae09fc109b5a8498_292x292.jpeg',
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
        {
            type: 'combo',
            id: 35,
            name: '4 Додстера',
            desc: '4 любых Додстера на выбор: Острый или Классический',
            price: '569',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/1cc271cd4c4749cda25ac52dc8b3fb6a_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 36,
            name: '3 пиццы',
            desc: '3 пиццы 30 см на любой вкус. Для компании из 5–10 человек. Выбор пицц ограничен.',
            price: '1 639',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/e2fa3c8c82e349439435ba1767366a70_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 37,
            name: '5 пицц',
            desc: '5 пицц 30 см на любой вкус. Для компании из 10–15 человек. Выбор пицц ограничен.',
            price: '2 499',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fb3318babb334371bbc642f383064f67_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 38,
            name: '7 пицц',
            desc: '7 пицц 30 см на любой вкус. Для компании из 15–20 человек. Выбор пицц ограничен.',
            price: '3 399',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/25ee1c3b802e4b21879161e695527864_292x292.webp',
            weight: ''
        },
        {
            type: 'combo',
            id: 39,
            name: '10 пицц',
            desc: '10 пицц 30 см на любой вкус. Для компании из 20–30 человек. Выбор пицц ограничен.',
            price: '4 799',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/e476da580f9b4e32bcefd2c97c836e7a_292x292.webp',
            weight: ''
        }
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
        {
            type: 'snack',
            id: 45,
            name: 'Мясной Стартер',
            desc: 'Горячая закуска с митболами, томатами, моцареллой и пикантным соусом бургер в тонкой пшеничной лепешке',
            price: '169',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/75a7802027924187b8b1b534bd23c56d_292x292.jpeg',
            weight: '180 г',
        },
        {
            type: 'snack',
            id: 46,
            name: 'Ланчбокс с куриными крыльями',
            desc: 'Горячий сытный обед из куриных крылышек со специями и ароматом копчения, картофеля из печи с итальянскими травами и соуса барбекю',
            price: '329',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b583f7299d8c4e4fa313f65ef72e7449_292x292.jpeg',
            weight: '290 г',
        },
        {
            type: 'snack',
            id: 47,
            name: 'Ланчбокс с куриными кусочками',
            desc: 'Горячий сытный обед из нежных куриных кусочков, картофеля из печи с итальянскими травами и сырного соуса',
            price: '329',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/33bbbcfd262e4084a1e0671160da55bb_292x292.jpeg',
            weight: '240 г',
        },
        {
            type: 'snack',
            id: 48,
            name: 'Картофель из печи',
            desc: 'Ароматный запеченный картофель с итальянскими травами. Большая порция',
            price: '199',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e3eeee00e41c4b2cb4f3f5f2fc0f504e_292x292.jpeg',
            weight: '160 г',
        },
        {
            type: 'snack',
            id: 49,
            name: 'Куриные крылья',
            desc: 'Куриные крылышки со специями и ароматом копчения. Большая порция',
            price: '369',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/80a7715ede17489db4010ce3c5741efa_292x292.jpeg',
            weight: '340 г',
        },
        {
            type: 'snack',
            id: 50,
            name: 'Паста Карбонара',
            desc: 'Самая популярная паста с беконом, томатами, сырами чеддер, пармезан и моцарелла, соусом альфредо, итальянскими травами и чесноком',
            price: '299',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/289ceaa7249640b0b5a109b908b07cd6_292x292.jpeg',
            weight: '320 г',
        },
        {
            type: 'snack',
            id: 51,
            name: 'Паста Цыпленок и грибы',
            desc: 'Паста, цыпленок, шампиньоны, соус ранч, моцарелла, итальянские травы',
            price: '299',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d7383d431e504fc4ba1a70bdb256c974_292x292.jpeg',
            weight: '240 г',
        },
        {
            type: 'snack',
            id: 52,
            name: 'Соус Цезарь',
            desc: '',
            price: '30',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Snacks/ru-RU/f376fc2a-3574-4798-a4fe-475501b3a126.jpg',
            weight: '1 шт',
        },
        {
            type: 'snack',
            id: 53,
            name: 'Картофельные оладьи, 8 шт',
            desc: 'Хрустящие снаружи и нежные внутри оладьи из картофеля в панировке, запекаются в печи',
            price: '229 г',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ba96144e178b4cc7a0ba213989b9ac92_292x292.jpeg',
            weight: '190',
        },
        {
            type: 'snack',
            id: 54,
            name: 'Салат Цезарь',
            desc: 'Сочный цыпленок, хрустящие листья салата айсберг, томаты черри, сыры чеддер и пармезан, пшеничные гренки, итальянские травы, соус цезарь',
            price: '249',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0e40a10713204a34991fd45d757f9b68_292x292.jpeg',
            weight: '210 г',
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
        {
            type: 'desert',
            id: 60,
            name: 'Чизкейк Нью-Йорк',
            desc: 'Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк.',
            price: '149',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5ffff27c9c2d488eb6cec35c27ebff9a_292x292.jpeg',
            weight: '100 г',
        },
        {
            type: 'desert',
            id: 61,
            name: 'Пончики Тройной шоколад и Клубничный',
            desc: 'Такие разные, но вместе. Один пончик с шоколадной начинкой и посыпкой, а другой с клубничной начинкой внутри и яркой посыпкой снаружи',
            price: '229',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3664b90773914229ace5ed1b32ae8324_292x292.jpeg',
            weight: '139 г',
        },
        {
            type: 'desert',
            id: 62,
            name: '2 Клубничных пончика',
            desc: 'Самый яркий дуэт. Два пончика с клубничной начинкой и разноцветной посыпкой',
            price: '229',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e168f60e82014ac8947d7b8bf8a53eaf_292x292.jpeg',
            weight: '140 г',
        },
        {
            type: 'desert',
            id: 63,
            name: '2 Пончика Тройной шоколад',
            desc: 'Этот пончик такой шоколадный, что хочется попробовать дважды. Два пончика с шоколадной начинкой и посыпкой.',
            price: '229',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1fdcd3f7405742dbbb02d006d8f75a2b_292x292.jpeg',
            weight: '138 г',
        },
        {
            type: 'desert',
            id: 64,
            name: '2 Кукиса Три шоколада',
            desc: 'С одной стороны, кукис — это хорошо, а с другой — два еще лучше. Сочетают в себе темный, бельгийский молочный и белый шоколад',
            price: '219',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/884ba2a04ee241f597d5cce725f632f9_292x292.jpeg',
            weight: '150 г',
        },
        {
            type: 'desert',
            id: 65,
            name: '2 Маффина Три шоколада',
            desc: 'Основное блюдо заканчивается, начинаются маффины с начинкой на шоколадной основе с кубиками белого и молочного шоколада',
            price: '219',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/286c416400454ee4997b47981bc1fa1f_292x292.jpeg',
            weight: '240 г',
        },
        {
            type: 'desert',
            id: 66,
            name: 'Фонданы',
            desc: 'Четверо из пяти гостей говорят «Oh la la!», когда едят этот французский десерт с хрустящей корочкой и топленой шоколадной начинкой.',
            price: '319',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b2b30bbbddb74ee9ba926b49697fae01_292x292.jpeg',
            weight: '2 шт'
        },
        {
            type: 'desert',
            id: 67,
            name: 'Бруслетики, 16 шт',
            desc: 'Может ли брусника быть сладкой, а сгущенное молоко кисленьким? Конечно, да. В бруслетиках закрутился яркий микс вкусов.',
            price: '225',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6eacb241458547c68a570d86954568aa_292x292.jpeg',
            weight: '270 г',
        },
        {
            type: 'desert',
            id: 68,
            name: 'Рулетики с корицей, 16 шт',
            desc: 'Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром.',
            price: '225',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ef501f49a9154be6be5a4faba03d9b76_292x292.jpeg',
            weight: '220 г',
        },
        {
            type: 'desert',
            id: 69,
            name: 'Сырники с малиновым вареньем',
            desc: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство, 4 шт.',
            price: '319',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5f21db048a124b6db5462f0dd21df57f_292x292.jpeg',
            weight: '260 г',
        },
        {
            type: 'desert',
            id: 70,
            name: 'Смородиновый молочный коктейль',
            desc: 'Напиток на основе молока и пломбира с замороженными ягодами черной смородины',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1c812c42f84a40b59225d55b8936282f_292x292.jpeg',
            weight: '0.3 л'
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
        {
            type: 'drink',
            id: 76,
            name: 'Fanta',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/39ec292094ab4fa2b241acc85d1680c0_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 77,
            name: 'Schweppes bitter lemon',
            desc: '',
            weight: '0.33 л',
            price: '89',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/8a299824e6fa4fbfaf1ef66c24721603_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 78,
            name: 'FuzeTea Черный с лимоном и лемонграссом',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/33936f037f744ed181d79e43e1cab6a4_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 79,
            name: 'FuzeTea Зеленый с манго и ромашкой',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b168d90a451146379878297f41977eb4_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 80,
            name: 'FuzeTea Улун малина и мята',
            desc: '',
            weight: '0.5 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9f657613f1344eef92d411898bc43109_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 81,
            name: 'BonAqua, негазированная ',
            desc: '',
            weight: '0.5 л',
            price: '79',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cf50b7be24e34a5880d5c35f8dd7ef4f_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 82,
            name: 'Апельсиновый сок Rich',
            desc: '',
            weight: '1 л',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/8f9732813db14164b2bae8cb6031d838_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 83,
            name: 'Яблочный сок Rich',
            desc: '',
            weight: '1 л',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6ae400e88f154d289886cd15c01c1da1_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 84,
            name: 'Вишневый нектар Rich',
            desc: '',
            weight: '1 л',
            price: '179',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7515e819ea624b8784f418a67bdb33fe_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 85,
            name: 'Малиновый пунш',
            desc: 'Согревающий напиток на основе пюре малины и черной смородины',
            weight: '0.3 л',
            price: '125',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/62351c0aad164dff9ccc4d798c652eaa_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 86,
            name: 'Какао с маршмеллоу',
            desc: 'Горячий какао с молоком, молочной пенкой и ванильным маршмеллоу #поворотныймомент',
            weight: '0.3 л',
            price: '125',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6598f883172948848216234fb2b47a38_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 87,
            name: 'Кофе Американо',
            desc: 'Горячий напиток на основе эспрессо #поворотныймомент',
            weight: '0.4 л',
            price: '95',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/bc87655534d44acebcbbffab2ee0b822_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 88,
            name: 'Кофе Ванильный капучино',
            desc: 'Горячий напиток на основе эспрессо со вспененным молоком и сиропом со вкусом ванили #поворотныймомент',
            weight: '0.3 л',
            price: '155',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d6bf3f54833241ca98dfe922a6469ad9_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 89,
            name: 'Кофе Карамельный капучино',
            desc: 'Горячий напиток на основе эспрессо со вспененным молоком и сиропом со вкусом карамели #поворотныймомент',
            weight: '0.3 л',
            price: '155',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e0f4c057497a4189b9ef3260bcdaadd7_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 90,
            name: 'Кофе Капучино',
            desc: 'Горячий напиток на основе эспрессо со вспененным молоком #поворотныймомент',
            weight: '0.4 л',
            price: '145',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5972d1b78fec44b4a3fae17019c269cf_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 91,
            name: 'Кофе Ореховый латте',
            desc: 'Горячий напиток на основе эспрессо с увеличенной порцией молока и сиропом со вкусом фундука #поворотныймомент',
            weight: '0.3 л',
            price: '155',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/17a0ea9b6f03429abf525d2d3fe6ab74_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 92,
            name: 'Кофе Латте',
            desc: 'Горячий напиток на основе эспрессо с увеличенной порцией молока #поворотныймомент',
            weight: '0.4 л',
            price: '145',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/870e47d7c0c6409eb3208d1e1f39d7fc_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 93,
            name: 'Морс Клюква',
            desc: '',
            weight: '0,45 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/98e21a144e0b42428f7cacf157d516d1_292x292.jpeg'
        },
        {
            type: 'drink',
            id: 94,
            name: 'Морс Черная смородина',
            desc: '',
            weight: '0,45 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/412d499c-1bf7-4a9a-9249-000ae686d301.jpg'
        },
        {
            type: 'drink',
            id: 95,
            name: 'Морс Вишня',
            desc: '',
            weight: '0,45 л',
            price: '119',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/202f25da-7b3a-4a07-b77f-bc36f8194a16.jpg'
        },
        {
            type: 'drink',
            id: 96,
            name: 'Пунш Спайси Оранж',
            desc: 'Согревающий пряный напиток с мякотью апельсина, соком лайма, имбирем, корицей, бадьяном, кориандром и гвоздикой #поворотныймомент',
            weight: '0.3 л',
            price: '125',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/66de12cc104549a5ba3420c5a0052c77_292x292.jpeg'
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