import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCar = createAsyncThunk(
    'car/fetchCar', async (param) => {
        let res
        // Вместо этого должен быть запрос который по параметру отправляет запрос и отдает нам ответ :)))
        // + обязательно сделал бы файл http и instance для моего запроса.
        console.log(param)
        switch (param) {
            case '3seriesSedan':
                res = {
                    background: 'https://www.bmw.ua/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1651158468431.jpg',
                    consumption: '8.3-1.3l/100km',
                    text: 'The new BMW 3 Series Sedan provides outstanding driving dynamics and comprehensive, technologically advanced driver support in a new sporty design.',
                    textList: ['The M Sport suspension is equipped with stiff springs and shock absorbers to increase the dynamics and maneuverability of the car', 'The reversing assistant and other intelligent driver assistance systems provide optimal comfort in any situation', 'Driver-oriented cockpit with the innovative BMW Curved Display.'],
                    textDynamic: 'Experience pronounced driving dynamics with high comfort thanks to perfectly matched suspension components and powerful engines:',
                    textDynamicList: ['Engines from 90 to 275 kW (122 to 374 hp) for inspiring sporty driving pleasure', 'M Sport suspension for especially sporty and dynamic characteristics'],
                    carDesign: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_220249867/tabs/multicontenttab_copy/items/smallteaser/image.transform/smallteaser/image.1662547649662.jpg',
                            title: 'Design of the front part.',
                            text: 'The design of the front end is defined by the elegant LED headlights, which stand out thanks to their inverted L-shaped position and focused edging. Large hexagonal air intakes in combination with an expressive radiator grille with double slats give the car a confident look.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_220249867/tabs/multicontenttab_copy/items/smallteaser_945953604/image.transform/smallteaser/image.1667379439504.jpg',
                            title: 'Side part design.',
                            text: 'Thanks to the long wheelbase, short overhangs and compact proportions, the BMW 3 Series Sedan looks particularly dynamic in profile. The downward line of the roof and optional 19-inch wheels emphasize the elegance of the car.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_220249867/tabs/multicontenttab_copy/items/smallteaser_226432793/image.transform/smallteaser/image.1667379541344.jpg',
                            title: 'Back design.',
                            text: 'The expressive bumper gives the BMW 3 Series Sedan a particularly athletic look. Vertical reflectors and wide exhaust pipes with chrome elements of the M Sport package reinforce this impression. A large diffuser between the exhaust pipes completes the sporty and dynamic look.'
                        }
                    ],
                    interiorDesign: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_277355641/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1667383061706.jpg',
                            title: 'Modern cockpit',
                            text: 'Thanks to the reduced number of controls, the dashboard looks neat and modern. The thin frameless curved BMW Curved Display with modern touch controls is distinguished by high convenience.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_277355641/tabs/multicontenttab/items/smallteaser_1739856479/image.transform/smallteaser/image.1662547650088.jpg',
                            title: 'Central console with a new selector lever.',
                            text: 'The central console creates the feeling of a real sports cockpit. Various controls are concentrated here, including the iDrive touch display. The gear selector lever of a modern shape fits perfectly into a modern and neat interior.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_277355641/tabs/multicontenttab/items/smallteaser_1978580745/image.transform/smallteaser/image.1662547650130.jpg',
                            title: 'Sensatec upholstered seats.',
                            text: 'Easy-to-maintain Sensatec upholstery impresses with its high quality and tactile properties that resemble natural leather. The perforation gives the upholstery a sporty and elegant look and contributes to high comfort even during long trips.'
                        }
                    ],
                    dynamic: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_579530813/tabs/multicontenttab/items/smallteaser_1335057156/image.transform/smallteaser/image.1662547650375.jpg',
                            title: 'In-line 6-cylinder gasoline engine M TwinPower Turbo.',
                            text: 'The M TwinPower Turbo in-line 6-cylinder petrol engine combines power and efficiency for maximum driving pleasure. The expressive sound of the engine is amazing. Innovations such as Double VANOS, Valvetronic, high-precision injection and a two-flow turbocharger make it possible to extract the maximum level of energy from the engine with minimum fuel consumption.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_579530813/tabs/multicontenttab/items/smallteaser_187832263/image.transform/smallteaser/image.1662547650415.jpg',
                            title: 'Steering with electric amplifier.',
                            text: 'Electric power steering increases comfort and safety. This facilitates maneuvering and guarantees stability at high speeds.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_579530813/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1662547650456.jpg',
                            title: '4-cylinder TwinPower Turbo gasoline engine.',
                            text: 'The in-line 4-cylinder gasoline engine M TwinPower Turbo gives great driving pleasure. Even at low revs, you will feel a confident set of power and a sensitive response of the car. The power unit combines economy, low toxicity of emissions and quiet, smooth operation in any situation.'
                        }
                    ]
                    ,
                    specifications: [
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-mb-technical-mediumteaser.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1652174627784.jpg',
                        {
                            text: '135 (184)/5 000-6 500',
                            title: 'Engine power in kW (hp):'
                        },
                        {
                            text: '5,8',
                            title: 'Acceleration from 0 to 100 km / h in seconds:'
                        },
                        {
                            text: '2,5',
                            title: 'Fuel consumption in l/100 km (combined cycle):'
                        },
                        {
                            text: '57',
                            title: 'CO2 emissions in g/km:'
                        },
                    ],
                    accessories: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_23331920/tabs/multicontenttab_copy_1650528310/items/smallteaser/image.transform/smallteaser/image.1669220333066.jpg',
                            title: 'Rear bike rack BMW Pro 2.0',
                            text: 'The light but strong BMW Pro 2.0 rear bike rack can support up to 60 kg. Extremely easy to use, it can transport two bikes or e-scooters (it can be expanded to accommodate three bikes). The tilt function ensures easy access to the luggage compartment at any time.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_23331920/tabs/multicontenttab_copy_1650528310/items/smallteaser_1507100958/image.transform/smallteaser/image.1669220466138.jpg',
                            title: 'Luggage box BMW 520 in Black/Titanium Silver color.',
                            text: 'The modern black luggage box with titanium silver side panels has a volume of 520 liters and is compatible with all BMW roof rack systems. Because it opens from both sides and has a triple central lock on each side, it is easy to load and lock to prevent theft.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_23331920/tabs/multicontenttab_copy_1650528310/items/smallteaser_801676017/image.transform/smallteaser/image.1669220507594.jpg',
                            title: 'BMW all-weather front mats.',
                            text: 'Elegant and hard-wearing BMW all-weather floor mats in a perfect shape with a raised edge protect the front legroom from moisture and dirt. They are made in black with a high-quality stainless steel insert.'
                        }
                    ]
                }
                break;
            case '3seriesTouring':
                res = {
                    background: 'https://www.bmw.ua/content/dam/bmw/common/all-models/3-series/touring/2022/highlights/bmw-3-series-touring-onepager-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1652199490852.jpg',
                    consumption: '8.8-1.4/100km',
                    text: 'With a luggage compartment of up to 500 liters, the new BMW 3 Series Touring combines the flexibility and everyday convenience of the BMW Touring with modern technology and full communication, while maintaining dynamic performance at a high level:',
                    textList: ['Innovative management using modern technologies', 'The reversing assistant and other intelligent driver assistance systems provide optimal comfort in any situation', 'Driver-oriented cockpit with the innovative BMW Curved Display.'],
                    textDynamic: 'Thanks to perfectly matched suspension components and powerful engines, the new BMW 3 Series Touring offers absolute driving pleasure at its best:',
                    textDynamicList: ['Engines from 90 to 275 kW (122 to 374 hp) for inspiring sporty driving pleasure', 'Powerful acceleration from 0 to 100 km/h in just 4.6 seconds', 'M Sport suspension for especially sporty and dynamic characteristics'],
                    carDesign: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_220249867/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1662544880392.jpg',
                            title: 'Design of the front part.',
                            text: 'Вузькі світлодіодні фари, що виділяються завдяки їхньому перевернутому L-подібному розміщенню, створюють особливо динамічний зовнішній вигляд. Великі шестигранні повітрозабірники та вертикальні повітряні завіси Air Curtains, в поєднанні з широкою решіткою радіатора, підсилюють ефект динамічної ширини, який справляє новий BMW 3 серії Touring.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_220249867/tabs/multicontenttab/items/smallteaser_945953604/image.transform/smallteaser/image.1662544880430.jpg',
                            title: 'Side part design.',
                            text: 'Знакові елементи дизайну, такі як довга колісна база, короткі звіси та динамічний вигин Хофмайстера відповідають за виключно атлетичний вигляд нового BMW 3 серії Touring при погляді збоку. Кут повітрозабірників та обидва бампери захоплюють динамічністю та характерно продовжуються уздовж краю за переднім колесом.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_220249867/tabs/multicontenttab/items/smallteaser_226432793/image.transform/smallteaser/image.1662544880468.jpg',
                            title: 'Back design.',
                            text: 'Вигляд задньої частини нового BMW 3 серії Touring виділяється чистотою стилю. Тонкі напівкруглі вигини на яскравих атлетичних колісних арках підкреслюють динамічну та міцну позицію.'
                        }
                    ],
                    interiorDesign: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_277355641/tabs/multicontenttab_copy/items/smallteaser/image.transform/smallteaser/image.1662544880656.jpg',
                            title: 'Modern cockpit',
                            text: 'Thanks to the reduced number of controls, the dashboard looks neat and modern. The thin frameless curved BMW Curved Display with modern touch controls is distinguished by high convenience.',

                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_277355641/tabs/multicontenttab_copy/items/smallteaser_1739856479/image.transform/smallteaser/image.1662544880694.jpg',
                            title: 'Central console with a new selector lever.',
                            text: 'The central console creates the feeling of a real sports cockpit. Various controls are concentrated here, including the iDrive touch display. The gear selector lever of a modern shape fits perfectly into a modern and neat interior.'

                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_277355641/tabs/multicontenttab_copy/items/smallteaser_1978580745/image.transform/smallteaser/image.1662544880731.jpg',
                            title: 'Sensatec upholstered seats.',
                            text: 'Easy-to-maintain Sensatec upholstery impresses with its high quality and tactile properties that resemble natural leather. The perforation gives the upholstery a sporty and elegant look and contributes to high comfort even during long trips.'
                        }
                    ],
                    dynamic: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_579530813/tabs/multicontenttab/items/smallteaser_1335057156/image.transform/smallteaser/image.1662547650375.jpg',
                            title: 'In-line 6-cylinder gasoline engine M TwinPower Turbo.',
                            text: 'The M TwinPower Turbo in-line 6-cylinder petrol engine combines power and efficiency for maximum driving pleasure. The expressive sound of the engine is amazing. Innovations such as Double VANOS, Valvetronic, high-precision injection and a two-flow turbocharger make it possible to extract the maximum level of energy from the engine with minimum fuel consumption.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_579530813/tabs/multicontenttab/items/smallteaser_187832263/image.transform/smallteaser/image.1662544881178.jpg',
                            title: 'Steering with electric amplifier.',
                            text: 'Electric power steering increases comfort and safety. This facilitates maneuvering and guarantees stability at high speeds.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_579530813/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1662547650456.jpg',
                            title: '4-cylinder TwinPower Turbo gasoline engine.',
                            text: 'The in-line 4-cylinder gasoline engine M TwinPower Turbo gives great driving pleasure. Even at low revs, you will feel a confident set of power and a sensitive response of the car. The power unit combines economy, low toxicity of emissions and quiet, smooth operation in any situation.'
                        }
                    ],
                    specifications: [
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/3-series/touring/2022/highlights/bmw-3-series-touring-technical-mb-mediumteaser.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1652199558503.jpg',
                        {
                            text: '115 (156)/4 500-6 500',
                            title: 'Engine power in kW (hp):'
                        },
                        {
                            text: '8,8',
                            title: 'Acceleration from 0 to 100 km / h in seconds:'
                        },
                        {
                            text: '-',
                            title: 'Fuel consumption in l/100 km (combined cycle):'
                        },
                        {
                            text: '157',
                            title: 'CO2 emissions in g/km:'
                        },
                    ],
                    accessories: [
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_23331920/tabs/multicontenttab_copy/items/smallteaser/image.transform/smallteaser/image.1669994478676.jpg',
                            title: 'Rear bike rack BMW Pro 2.0',
                            text: 'The light but strong BMW Pro 2.0 rear bike rack can support up to 60 kg. Extremely easy to use, it can transport two bikes or e-scooters (it can be expanded to accommodate three bikes). The tilt function ensures easy access to the luggage compartment at any time.',
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/touring/2022/bmw-3-series-touring-highlights/jcr:content/par/multicontent_23331920/tabs/multicontenttab_copy/items/smallteaser_1507100958/image.transform/smallteaser/image.1669994351699.jpg',
                            title: 'Luggage box BMW 520 in Black/Titanium Silver color.',
                            text: 'The modern black luggage box with titanium silver side panels has a volume of 520 liters and is compatible with all BMW roof rack systems. Because it opens from both sides and has a triple central lock on each side, it is easy to load and lock to prevent theft.'
                        },
                        {
                            photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent_23331920/tabs/multicontenttab_copy_1650528310/items/smallteaser_801676017/image.transform/smallteaser/image.1669220507594.jpg',
                            title: 'BMW all-weather front mats.',
                            text: 'Elegant and hard-wearing BMW all-weather floor mats in a perfect shape with a raised edge protect the front legroom from moisture and dirt. They are made in black with a high-quality stainless steel insert.'
                        }
                    ]
                }
                break;
            case 'M3Sedan':
                res = {
                    background: 'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1669329589435.jpg',
                    horsepower: 'Up to 510 hp (375 kW)',
                    text: `The BMW M3 Sedan cars combine powerful proportions and a distinctive four-door design with the sporty appearance typical of the M series. The flagship model of this series is the BMW M3 Competition Sedan with an impressive 510 hp. and 650 Nm of torque. The car, equipped with a powerful M TwinPower Turbo engine with an 8-speed M Steptronic gearbox with Drivelogic function, optional M xDrive* all-wheel drive, an active M differential and numerous technologies used in motorsport, guarantees maximum driving dynamics - both in everyday use and and on the race track. BMW M3 Sedan develops 480 hp. and 550 Nm of torque. The combination of rear-wheel drive and the optimally enlarged manual 6-speed M gearbox provides a dynamic driving style and allows you to get maximum driving pleasure`,
                    about: {
                        background: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jUi10tLhu1XzWVo7puMLWFmdkAj5DOPitppZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUFNF1VgxNJ0%25lJfVZ8XJaFBVKLB9MEWO5GalL7GqGAG6dCrv0s9OagNE4GA0ogRwlNF9OALUxKLkIogOybfMBnvLUgChSB65GybUEqdNp89ChbNmQFQPoEqhk7ZNUMLNmqn1cIDDyk7m5Vp7bYCn178ziFvtE5V1PaH6GfN8zVMRJ6HSkPazDxTi7dnMRaYWz2lQ5DxRteaEtZ8YWxfjpyKcPteWS6ivnKMfjedwHGpBDS6jQ%25dhx2Ydw6ZuQWWptQ%25wc3Z8KifG%250hlXw8j7guGFe0Wf6BmKVZENPw',
                        text: 'Maximum driving dynamics with rear-wheel drive and manual transmission.',
                        list: [
                            'High-performance in-line 6-cylinder gasoline engine M TwinPower Turbo with a capacity of 480 hp.',
                            'M manual gearbox with quick and precise shifting.',
                            'Sporty rear-wheel drive for maximum driving pleasure.',
                            '353 kW (480 hp), 550 Nm, 0-100 km/h in 4.2 s',
                        ],
                    },
                    features: {
                        background: 'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-mc-product-highlights-m3-sedan-hero-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1653397315301.jpg',
                        dynamic: [
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_3f54/tabs/multicontenttab_8838/items/smallteaser_9e90/image.transform/smallteaser/image.1662546606624.jpg',
                                title: 'In-line 6-cylinder gasoline engine M TwinPower Turbo',
                                text: 'The M TwinPower Turbo in-line 6-cylinder petrol engine has outstanding dynamic characteristics and an engine sound characteristic of M series cars. Twin Mono-Scroll turbochargers, high-precision direct injection, adaptive valve and camshaft control deliver outstanding performance.',
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_4ed2/tabs/multicontenttab_8838/items/smallteaser_fc1e/image.transform/smallteaser/image.1662546607390.jpg',
                                title: 'M manual gearbox and rear-wheel drive.',
                                text: 'The manual 6-speed M transmission provides extraordinary sporty driving characteristics. It has a smooth ride and provides quick and extremely precise gear changes. With the right transmission, you can use all the power of the engine as efficiently as possible.',
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_4ed2/tabs/multicontenttab_8838/items/smallteaser_ed9a/image.transform/smallteaser/image.1662546607432.jpg',
                                title: 'Special suspension M.',
                                text: 'The special M suspension combines a reliable, light but rigid structure, optimized geometry with a wide track and an active M differential. The quick reaction and response of the steering wheel and suspension ensure perfect driving. With the M setting, you can adjust the performance as needed.',
                            },

                        ],
                        design: [
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_4ed2/tabs/multicontenttab_c4c2_1058371308/items/smallteaser_fc71/image.transform/smallteaser/image.1662546607511.jpg',
                                title: '19-/20-inch 825 M twin-spoke forged wheels in Bicolour Black with mixed-size tyres.',
                                text: '19-/20-inch 825M twin-spoke forged wheels in Bicolour Black with multi-size tires, brushed rim/rim, front disc size 9.5J x 19 with 275/35 R19 tire, rear disc size 10.5J x 20 with tire 285/30 R20.'
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_4ed2/tabs/multicontenttab_c4c2_1058371308/items/smallteaser_45ae/image.transform/smallteaser/image.1662546607551.jpg',
                                title: 'Chrome nozzles on the exhaust pipes.',
                                text: 'Two pairs of dual BMW M3 sedan tailpipes in high-gloss black protrude clearly from the diffuser. At the same time, the elegant chrome nozzles together with the distinctive slats on the diffuser create a sporty presence on the road.'
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_4ed2/tabs/multicontenttab_c4c2_1058371308/items/smallteaser_e55d/image.transform/smallteaser/image.1662546607590.jpg',
                                title: 'M Sport seats.',
                                text: 'The adjustable M Sport seats with a bucket profile and partially integrated head restraints provide excellent lateral support for you and your front passenger. In addition, the width of the back can be adjusted individually. Their special design with illuminated M3 logo emphasizes the sporty capabilities of the car.'
                            },

                        ]
                    },
                    impression: [
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-gallery-impressions-m3-sedan-01-mobile.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649169769824.jpg',
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-gallery-impressions-m3-sedan-02-mobile.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649169764065.jpg',
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-gallery-impressions-m3-sedan-04_mobile.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1653397426376.jpg',
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-gallery-impressions-m3-sedan-03-mobile.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649169769509.jpg',
                    ],
                    technologies: {
                        background: 'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-m-sedan-mc-product-highlights-hero-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1653462746102.jpg',
                        panel: [
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_f19e_co/tabs/multicontenttab_8838/items/smallteaser_9e90/image.transform/smallteaser/image.1662546608721.jpg',
                                title: 'M Drive.',
                                text: 'M Drive allows you to set, adjust and save your preferred DSC mode, engine, shock absorber, steering and braking characteristics, as well as gear shifting. It is activated via the red M Drive buttons on the M leather steering wheel.',
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_f19e_co/tabs/multicontenttab_8838/items/smallteaser_fc1e/image.transform/smallteaser/image.1662546608760.jpg',
                                title: 'Instrument panel M.',
                                text: `The M instrument panel offers a particularly precise and concise display of driving data in the SPORT and TRACK modes. That way, some values like boost pressure or tire pressure and temperature will always be in the driver's field of vision, even on the race track.Control and adjustment is carried out using the M MODE button`,
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_f19e_co/tabs/multicontenttab_8838/items/smallteaser_ed9a/image.transform/smallteaser/image.1662546608799.jpg',
                                title: 'BMW Live Cockpit Professional',
                                text: '',
                            },
                        ],
                        helpSystem: [
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_f19e_co/tabs/multicontenttab_6d72/items/smallteaser_57eb/image.transform/smallteaser/image.1662546608878.jpg',
                                title: 'Driving assistant Professional.',
                                text: 'Driving Assistant Professional offers optimal comfort and safety in critical or constant traffic situations. In addition to the contents of the Driving Assistant package, there are also Advanced Steering and Lane Control Assist, Lane Change and Emergency Stop Assist, and Lane Keeping Assist with Active Side Collision Protection.',
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_f19e_co/tabs/multicontenttab_6d72/items/smallteaser_6451/image.transform/smallteaser/image.1662546608918.jpg',
                                title: 'Parking Assistant Plus.',
                                text: 'Parking Assistant Plus makes parking and maneuvering the car easier. It has a Surround View system that includes a top view, a panoramic view, a remote 3D view, as well as a parking assist system, an emergency braking function Active Park Distance Control, a parking assistant with longitudinal and transverse guidance and a reverse assistant.',
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_f19e_co/tabs/multicontenttab_6d72/items/smallteaser_c491/image.transform/smallteaser/image.1662546608958.jpg',
                                title: 'M Drive Professional.',
                                text: 'M Drive Professional is the perfect companion for trips with an extra dose of adrenaline. The M TRACK mode and the ten-stage M Traction Control system provide individual handling, the M Drift Analyzer records drift angles and duration, and the M Laptimer helps you complete the perfect lap.',
                            }
                        ]
                    },
                    specifications: [
                        'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-technical-data-sketch1.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1669329727006.jpg',
                        {
                            text: '375 (510)/6 250',
                            title: 'Engine power in kW (hp) per 1/min:'
                        },
                        {
                            text: '650/2 750-5 500',
                            title: 'Maximum torque in Nm per 1/min:'
                        },
                        {
                            text: '3,9',
                            title: 'Acceleration from 0 to 100 in seconds:'
                        },
                        {
                            text: '9,6',
                            title: 'Fuel consumption in l/100 km (combined cycle):'
                        },
                    ],
                    tuning: {
                        background: 'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m3-sedan/2022/highlights/bmw-3-series-sedan-m-automobiles-mc-m-performance-parts-hero-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1669329589059.jpg',
                        items: [
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_dc01/tabs/multicontenttab_8838/items/smallteaser_9e90/image.transform/smallteaser/image.1666190389296.jpg',
                                title: 'M Performance carbon fiber front splitter.',
                                text: `A strong statement: The M Performance front splitter, made entirely of carbon fiber, uniquely emphasizes the car's masculine appearance.A unique racing look for those who refuse to compromise.`
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_dc01/tabs/multicontenttab_8838/items/smallteaser_fc1e/image.transform/smallteaser/image.1666190359636.jpg',
                                title: '20-/21-inch M Performance Cross-Spoke 1000 M forged wheels in Frozen Gold Bronze.',
                                text: 'High-quality 20-/21-inch M Performance Cross-Spoke 1000 M in Gold Bronze.'
                            },
                            {
                                photo: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/m-series/m3-sedan/2022/bmw-3-series-sedan-m-automobiles-overview/jcr:content/par/multicontent_dc01/tabs/multicontenttab_8838/items/smallteaser_ed9a/image.transform/smallteaser/image.1666190447233.jpg',
                                title: 'M Performance muffler, titanium.',
                                text: 'A pleasure for the ears: The M Performance muffler fascinates with its uncompromising motorsport sound. The muffler and sports exhaust module are made entirely of racing-grade titanium.'
                            },
                        ]
                    }
                }
                break
            default:
                break;
        }
        return res
    }

)