import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTuningItems = createAsyncThunk(
    'tuning/fetchTuningItems', async () => {
        const res = [
            {
                id: 0,
                selected: false,
                title: 'Front grille BMW M Pefomance M3(F80)',
                price: '350',
                discount: '10',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/51712352813-340x230.jpg',
                code: '51712352813',
                about: `Стандартну хромовану решітку можна замінити на чорну глянсову решітку. Ефектні подвійні декоративні стійки забезпечують оригінальний вигляд M Performance.
Для чорних декоративних решіток BMW M Performance характерні подвійні декоративні стійки та глянсове чорне декоративне кільце. Вони надають простий спосіб персоналізувати автомобіль і зробити передню частину автомобіля ще більш спортивною.
Типовий логотип BMW M у відповідних кольорах привертає додаткову увагу.
Надійна якість: декоративна решітка виготовлена ​​з ударостійкого пластику.
Декоративні решітки мають ту саму геометрію, що й серійні решітки, тому їх можна легко замінити.
Решітки M Performance підходять лише для автомобілів без системи нічного бачення з функцією розпізнавання осіб (S6UKA).
`,
            },
            {
                id: 1,
                selected: false,
                title: 'Selector lever BMW M Perfomance',
                price: '190',
                discount: '0',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/61315A40306-340x230.jpg',
                code: '61315A40306',
                about: `Важіль перемикання передач: ергономічна форма важеля та її спеціальний матеріал забезпечують динамічне, спортивне водіння. Важіль селектора M Performance з алькантарою, металевий значок M прикріплений у верхній частині як особлива ізюминка.
Відчутна спортивність:  спортивний матеріал Алькантара забезпечує особливе зчеплення та покращує салон автомобіля не тільки візуально, але й на дотик.
Матеріал: Алькантара - високоякісний матеріал, який використовується в гонках, передає спортивність і сучасність.`,
            },
            {
                id: 2,
                selected: false,
                title: 'Decorate element M Perfomance',
                price: '380',
                discount: '40',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/51142447017-340x230.jpg',
                code: '51142447017',
                about: `Спортивність у всьому: декорування M Performance Frozen Black (чорно-сірий матовий) надає автомобілю особливого індивідуального та динамічного характеру. Розташування підкреслює типові конструктивні особливості та пропорції автомобіля.`,
            },
            {
                id: 3,
                selected: false,
                title: 'Key case M Perfomance',
                price: '70',
                discount: '10',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/A0192234-340x230.jpg',
                code: 'A0192234',
                about: `Корпус ключа вражає своєю матеріальною сумішшю вуглецю і алькантари. Ключ надійно з'єднаний з корпусом гвинтом із внутрішнім шестигранником M синього кольору. Позачасова елегантність, технічна продуманість і чітке твердження для автоспорту.`,
            },
            {
                id: 1,
                selected: false,
                title: 'Selector lever BMW M Perfomance',
                price: '190',
                discount: '0',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/61315A40306-340x230.jpg',
                code: '61315A40306',
                about: `Важіль перемикання передач: ергономічна форма важеля та її спеціальний матеріал забезпечують динамічне, спортивне водіння. Важіль селектора M Performance з алькантарою, металевий значок M прикріплений у верхній частині як особлива ізюминка.
Відчутна спортивність:  спортивний матеріал Алькантара забезпечує особливе зчеплення та покращує салон автомобіля не тільки візуально, але й на дотик.
Матеріал: Алькантара - високоякісний матеріал, який використовується в гонках, передає спортивність і сучасність.`,
            },
            {
                id: 0,
                selected: false,
                title: 'Front grille BMW M Pefomance M3(F80)',
                price: '350',
                discount: '10',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/51712352813-340x230.jpg',
                code: '51712352813',
                about: `Стандартну хромовану решітку можна замінити на чорну глянсову решітку. Ефектні подвійні декоративні стійки забезпечують оригінальний вигляд M Performance.
Для чорних декоративних решіток BMW M Performance характерні подвійні декоративні стійки та глянсове чорне декоративне кільце. Вони надають простий спосіб персоналізувати автомобіль і зробити передню частину автомобіля ще більш спортивною.
Типовий логотип BMW M у відповідних кольорах привертає додаткову увагу.
Надійна якість: декоративна решітка виготовлена ​​з ударостійкого пластику.
Декоративні решітки мають ту саму геометрію, що й серійні решітки, тому їх можна легко замінити.
Решітки M Performance підходять лише для автомобілів без системи нічного бачення з функцією розпізнавання осіб (S6UKA).
`,
            },
            {
                id: 3,
                selected: false,
                title: 'Key case M Perfomance',
                price: '70',
                discount: '10',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/A0192234-340x230.jpg',
                code: 'A0192234',
                about: `Корпус ключа вражає своєю матеріальною сумішшю вуглецю і алькантари. Ключ надійно з'єднаний з корпусом гвинтом із внутрішнім шестигранником M синього кольору. Позачасова елегантність, технічна продуманість і чітке твердження для автоспорту.`,
            },
            {
                id: 2,
                selected: false,
                title: 'Decorate element M Perfomance',
                price: '380',
                discount: '40',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/51142447017-340x230.jpg',
                code: '51142447017',
                about: `Спортивність у всьому: декорування M Performance Frozen Black (чорно-сірий матовий) надає автомобілю особливого індивідуального та динамічного характеру. Розташування підкреслює типові конструктивні особливості та пропорції автомобіля.`,
            },
            {
                id: 2,
                selected: false,
                title: 'Decorate element M Perfomance',
                price: '380',
                discount: '40',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/51142447017-340x230.jpg',
                code: '51142447017',
                about: `Спортивність у всьому: декорування M Performance Frozen Black (чорно-сірий матовий) надає автомобілю особливого індивідуального та динамічного характеру. Розташування підкреслює типові конструктивні особливості та пропорції автомобіля.`,
            },
            {
                id: 3,
                selected: false,
                title: 'Key case M Perfomance',
                price: '70',
                discount: '10',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/A0192234-340x230.jpg',
                code: 'A0192234',
                about: `Корпус ключа вражає своєю матеріальною сумішшю вуглецю і алькантари. Ключ надійно з'єднаний з корпусом гвинтом із внутрішнім шестигранником M синього кольору. Позачасова елегантність, технічна продуманість і чітке твердження для автоспорту.`,
            },
            {
                id: 0,
                selected: false,
                title: 'Front grille BMW M Pefomance M3(F80)',
                price: '350',
                discount: '10',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/51712352813-340x230.jpg',
                code: '51712352813',
                about: `Стандартну хромовану решітку можна замінити на чорну глянсову решітку. Ефектні подвійні декоративні стійки забезпечують оригінальний вигляд M Performance.
Для чорних декоративних решіток BMW M Performance характерні подвійні декоративні стійки та глянсове чорне декоративне кільце. Вони надають простий спосіб персоналізувати автомобіль і зробити передню частину автомобіля ще більш спортивною.
Типовий логотип BMW M у відповідних кольорах привертає додаткову увагу.
Надійна якість: декоративна решітка виготовлена ​​з ударостійкого пластику.
Декоративні решітки мають ту саму геометрію, що й серійні решітки, тому їх можна легко замінити.
Решітки M Performance підходять лише для автомобілів без системи нічного бачення з функцією розпізнавання осіб (S6UKA).
`,
            },
            {
                id: 1,
                selected: false,
                title: 'Selector lever BMW M Perfomance',
                price: '190',
                discount: '0',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/61315A40306-340x230.jpg',
                code: '61315A40306',
                about: `Важіль перемикання передач: ергономічна форма важеля та її спеціальний матеріал забезпечують динамічне, спортивне водіння. Важіль селектора M Performance з алькантарою, металевий значок M прикріплений у верхній частині як особлива ізюминка.
Відчутна спортивність:  спортивний матеріал Алькантара забезпечує особливе зчеплення та покращує салон автомобіля не тільки візуально, але й на дотик.
Матеріал: Алькантара - високоякісний матеріал, який використовується в гонках, передає спортивність і сучасність.`,
            },
            {
                id: 1,
                selected: false,
                title: 'Selector lever BMW M Perfomance',
                price: '190',
                discount: '0',
                image: 'https://shop.bmw.ua/image/cache/catalog/Autoaccessories/61315A40306-340x230.jpg',
                code: '61315A40306',
                about: `Важіль перемикання передач: ергономічна форма важеля та її спеціальний матеріал забезпечують динамічне, спортивне водіння. Важіль селектора M Performance з алькантарою, металевий значок M прикріплений у верхній частині як особлива ізюминка.
Відчутна спортивність:  спортивний матеріал Алькантара забезпечує особливе зчеплення та покращує салон автомобіля не тільки візуально, але й на дотик.
Матеріал: Алькантара - високоякісний матеріал, який використовується в гонках, передає спортивність і сучасність.`,
            },
        ]
        return res
    }
)