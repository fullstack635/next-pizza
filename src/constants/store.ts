interface store {
    pizza: Pizza[];
    combo: Product[];
    snacks: Product[];
    drinks: Product[];
    deserts: Product[];
}

interface Pizza {
    id: number;
    name: string;
    desc: string;
    pic: string;
    pricesm: string;
    pricemd: string;
    pricexl: string;
}

interface Product {
    id: number;
    name: string;
    desc: string;
    pic: string;
    price: string;
}

export const pseudostore: store = {
    pizza: [
        {
            id: 1,
            name: 'Сырная',
            desc: 'Моцарелла, сыры чеддер и пармезан, соус альфредо',
            pricesm: '245',
            pricemd: '479',
            pricexl: '629',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c71cd53e50746279f7aa0f59c7ec50f_292x292.jpeg',
        },
        {
            id: 2,
            name: 'Пепперони фреш',
            desc: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
            pricesm: '245',
            pricemd: '479',
            pricexl: '629',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg',
        },
        {
            id: 3,
            name: 'Песто',
            desc: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_292x292.jpeg',
        },
        {
            id: 4,
            name: 'Ветчина и сыр',
            desc: 'Ветчина, моцарелла, соус альфредо',
            pricesm: '315',
            pricemd: '479',
            pricexl: '629',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg',
        },
        {
            id: 5,
            name: 'Карбонара',
            desc: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_292x292.jpeg',
        },
        {
            id: 6,
            name: 'Двойной цыпленок',
            desc: 'Цыпленок, моцарелла, соус альфредо',
            pricesm: '245',
            pricemd: '479',
            pricexl: '629',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_292x292.jpeg',
        },
        {
            id: 7,
            name: 'Додо Микс',
            desc: 'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
            pricesm: '545',
            pricemd: '849',
            pricexl: '999',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
        },
        {
            id: 8,
            name: 'Пепперони',
            desc: 'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/80af1cf2138447b4a9afc30df6af712c_292x292.jpeg',
        },
        {
            id: 9,
            name: 'Маргарита',
            desc: 'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
            pricesm: '375',
            pricemd: '549',
            pricexl: '729',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6b61691078454b3793cdbfbbaa15cf58_292x292.jpeg',
        },
        {
            id: 10,
            name: 'Ветчина и грибы',
            desc: 'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус',
            pricesm: '375',
            pricemd: '549',
            pricexl: '729',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg',
        },
        {
            id: 11,
            name: 'Гавайская',
            desc: 'Ветчина, ананасы, моцарелла, томатный соус',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4749ca7de7e247daa69a685714f06aa3_292x292.jpeg',
        },
        {
            id: 12,
            name: 'Диабло',
            desc: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c7a83e078b44156a7ad774389ed7713_292x292.jpeg',
        },
        {
            id: 13,
            name: 'Додо',
            desc: 'Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0d5410630b5c4f9eba6e8607423a587a_292x292.jpeg',
        },
        {
            id: 14,
            name: 'Сырный цыпленок',
            desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/36785e0eea834174bf358ac2682aea4d_292x292.jpeg',
        },
        {
            id: 15,
            name: 'Цыпленок ранч',
            desc: 'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0665a05313b1431588acec0ecfac0888_292x292.jpeg',
        },
        {
            id: 16,
            name: 'Мясная',
            desc: 'Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, томатный соус',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b10dd95184eb49d39a739d75b8cbfeaf_292x292.jpeg',
        },
        {
            id: 17,
            name: 'Аррива!',
            desc: 'Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a2407468a4094e498d258f65bffa4c46_292x292.jpeg',
        },
        {
            id: 18,
            name: 'Четыре сезона',
            desc: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/78e7d6286b3c4b4b9882e9422b8bdf01_292x292.jpeg',
        },
        {
            id: 19,
            name: 'Чизбургер-пицца',
            desc: 'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/40c9e7c8c01d4b29a816f2fd65d5bb60_292x292.jpeg',
        },
        {
            id: 20,
            name: 'Колбаски барбекю',
            desc: 'Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/20734006e66d427fb2cbb8fbb595b21e_292x292.jpeg',
        },
        {
            id: 21,
            name: 'Фристайло',
            desc: 'Томаты, сладкий перец, красный лук, соус песто, митболы, моцарелла, томатный соус',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/67040d5b9c3a42e2a0deb93cca61f1ac_292x292.jpeg',
        },
        {
            id: 22,
            name: 'Овощи и грибы',
            desc: 'Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла, томатный соус, итальянские травы',
            pricesm: '435',
            pricemd: '649',
            pricexl: '849',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cf22475052d34b41b7f00792aa73dca4_292x292.jpeg',
        },
        {
            id: 23,
            name: 'Четыре сыра',
            desc: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1130292c8ffb4c34bb0a20619e65efb3_292x292.jpeg',
        },
        {
            id: 24,
            name: 'Цыпленок барбекю',
            desc: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, томатный соус',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6efc2093bc244329918b9b44dc960852_292x292.jpeg',
        },
        {
            id: 25,
            name: 'Двойная пепперони',
            desc: 'Двойная порция пикантной пепперони, увеличенная порция моцареллы, томатный соус',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/052c40e826264c6c8853cef189c8d34f_292x292.jpeg',
        },
        {
            id: 26,
            name: 'Супермясная',
            desc: 'Пикантная пепперони, цыпленок, острая чоризо, бекон, митболы, моцарелла, томатный соус',
            pricesm: '545',
            pricemd: '849',
            pricexl: '999',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/51025107de954c6e93034b2fd6931d22_292x292.jpeg',
        },
        {
            id: 27,
            name: 'Пицца-пирог',
            desc: 'Ананасы, брусника, сгущенное молоко',
            pricesm: '375',
            pricemd: '549',
            pricexl: '729',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg',
        },
        {
            id: 28,
            name: 'Нежный лосось',
            desc: 'Лосось, томаты, соус песто, моцарелла, соус альфредо',
            pricesm: '595',
            pricemd: '899',
            pricexl: '1049',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/eb5e42dee16e4440873e3cb6b78c4a1f_292x292.jpeg',
        },
        {
            id: 29,
            name: 'Мексиканская',
            desc: 'Цыпленок, острый перец халапеньо, соус сальса, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
            pricesm: '495',
            pricemd: '749',
            pricexl: '879',
            pic: 'https://dodopizza-a.akamaihd.net/static/Img/Products/186dfa8511434e5eae09fc109b5a8498_292x292.jpeg',
        },
    ],
    combo: [

    ],
    snacks: [

    ],
    deserts: [

    ],
    drinks: [
        {
            id: 100,
            name: 'Coca-Cola Zero',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 101,
            name: 'Coca-Cola',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 102,
            name: 'Coca-Cola Lime',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 103,
            name: 'Coca-Cola Vanilla',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 104,
            name: 'Sprite',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 105,
            name: 'Fanta',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 106,
            name: 'Schweppes bitter lemon',
            desc: '0.33 л',
            price: '89 ₽',
            pic: ''
        },
        {
            id: 107,
            name: 'FuzeTea Черный с лимоном и лемонграссом',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 108,
            name: 'FuzeTea Зеленый с манго и ромашкой',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 109,
            name: 'FuzeTea Улун малина и мята',
            desc: '0.5 л',
            price: '119 ₽',
            pic: ''
        },
        {
            id: 110,
            name: 'BonAqua, негазированная ',
            desc: '0.5 л',
            price: '79 ₽',
            pic: ''
        },
        {
            id: 111,
            name: 'Апельсиновый сок Rich',
            desc: '1 л',
            price: '179 ₽',
            pic: ''
        },
        {
            id: 112,
            name: 'Яблочный сок Rich',
            desc: '1 л',
            price: '179 ₽',
            pic: ''
        },
        {
            id: 113,
            name: 'Вишневый нектар Rich',
            desc: '1 л',
            price: '179 ₽',
            pic: ''
        },
    ]
}