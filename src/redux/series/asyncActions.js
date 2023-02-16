import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchSeriesItems = createAsyncThunk(
    'series/fetchSeriesItems', async () => {
        const res = [{ title: '3Series', to: 'series/3' }, { title: '5Series', to: 'series/5' }, { title: 'XSeries', to: 'series/X' }, { title: 'MSeries', to: 'series/M' }]
        return res
    }
)
export const fetchSeriesItem = createAsyncThunk(
    'series/fetchSeriesItem', async (param) => {
        let res
        // Вместо этого должен быть запрос который по параметру отправляет запрос и отдает нам ответ :)))
        switch (param) {
            case '3':
                res = [
                    {
                        title: 'BMW 3 series Sedan',
                        fuelType: ['Gas', 'Diesel', 'Hybrid'],
                        tuning: 'none',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKDP10tLhu1XzWVo7puMLWFmdkAj5DOPEt6kZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUnNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVs7Wh1DMztIBReqVYDafv3ijmztYRSY3c67aftxdIfcw1RSfWQxlT%25VxdSeZelEuzWQdjcjm13aeZQ6K67CXRjcZwBOcSrx6Kc%252gpF4WwBKupUmIFe%252B3ibVcIjup2XHhG4v63iprJqYDGwXHi4Tmtj9%25rJHFl7frou4TJIs8NSL3FlTv0PSayXIslGAM9HCrv0s9ODoZE4GA0ogY9lNF9OALUdP%25kIogOybQCsnvLUgChZE85GybUEqcbA89ChbNmKhzPoEqhk7BXyMLNmqn12UDDyk7m5VpFxYCn178zijvtE5V1PaH6LfN8zVMRJ4DSkPazDxTi3dnMRaYWzREQ5DxRteajcZ8YWxfjRLUcPteWS6xHSKMfjedwWJABDS6jQ%25eT62Ydw6Zuj8eptQ%25wc36PcifZu%25KXwM2HSc3uBr05YJdKX324APlTQBrXpFOgilZ24riIgUdscpF4HvUba0KiIFJGb5QABHvIT9h8UO2JGvloqZ5gpT9GsLmYZUilo90y7ZvbHsLoAC1RchJ0yLOEVu%25qTACygNzIgmlOECUkg3o7sgNEbnUX110UkNh5byyVAbnkq8hrzzOh5nmPnKFagq857M5oTRUmP81D8Lhxb7MPVYPbsWh1DMztMjUeqVYDafD62jmztYRSYn367aftxdEXKw1RSfWQNpB%25VxdSeZkF4uzHdIy4cShtN9QH2YIDzf6EjnWROv',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgoRual384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAan%25Il38Te0VywMESunCl9yJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58AtrQ%25r9St8W8zWunbVqogqaYHJl3ilUj7dcRScHHafMbnMdQgayJGy58g5rQ%25r9oi2W8zWubFHqogqaJ%25Fl3ilUQ4jcRScH86oMbnMdoIJyJGy53LUrQ%25r9RX9W8zWubxIqogqaFH8l3ilUjJJcRScH7o9MbnMd03RyJGy5BzRrQ%25r9SaFW8zWunJHqogqaGQFl3ilU%2575cRScHz08MbnMdgmKyJGy5i8KrQ%25r9SBRW8zWunCjqogqaG4zl3ilU%253acRScHzDYMbnMdeBSyJGy5mSBrQ%25r9sKJW8zWuKbGqogqaDJEl3ilUCQDcRScH4%25oMbnMdeziyJGy5mgQrQ%25r98KGW8zWuoYEqogqa3Jul3ilURQUcRScHb8%25MbnMdJgSyJGy5Qi2rQ%25r98ijW8zWuo86qogqa3NQl3ilURK0cRScHbZuMbnMdJfiyJGy55oarQ%25r993DW8zWuu3HqogqaaU4l3ilUEu9cRScHFBBMbnMdjYKyJGy57qErQ%25r9019W8zWuBA7qogqaYVGl3ilU4dQcRScHem8MbnMdmogyJR0aWAyFnPWyMb3dnqbgyFntBoJltJ0ab6'
                    },
                    {
                        title: 'BMW 3 series Touring',
                        fuelType: ['Gas', 'Diesel', 'Hybrid'],
                        tuning: 'none',
                        novelty: false,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JWl10tLhu1XzWVo7puMLWFmdkAj5DOPHtFpZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giASNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVysWh1DMzt4i%25eqVYDafvOjjmztYRSFtZ67aftxdRTJw1RSfWQWTC%25VxdSeZelhuzWQdjcjm13aeZQ6KAZfXRjcZwBO24rx6Kc%252gUD4WwBKupU1ZFe%252B3ibvPIjup2XHhDMv63iprJqYrGwXHi4Tmtj9%25rJHFl7frou4TJIs8NSL3FlTv0PldyXIslGAM52Crv0s9ODGTE4GA0ogY%25ZNF9OALUdylkIogOybQC5nvLUgChZU05GybUEqcbV89ChbNmK3LPoEqhk7BraMLNmqn124YDyk7m5VpebYCn178zijvtE5V1PaH6LfN8zVMRJ4DSkPazDxTQAdnMRaYWlH8Q5DxRtesJrZ8YWxfjRWkcPteWS6xwBKMfjedwWChBDS6jQ%25eTQ2Ydw6ZujlgptQ%25wc36s%25ifZu%25KXwM6HSc3uBr%25DBJdKX324uYiTQBrXpFOPflZ24riIgD0scpF4HvUbJ0KiIFJGbhZABHvIT9hq2O2JGvloqmWgpT9GsLmMKUilo90y7DqbHsLoAC1BMhJ0yLOEVSBqTACygNzBomlOECUkae27sgNEbnRrX10UkNh5bryVAbnkq8h4zzOh5nmPq4aagq857M5HfRUmP81D8Ihxb7MPVYPpGWh1DMztMC0eqVYDafDE7jmztYRSYwh67aftxdt%25iw1RSfWQf8r%25VxdSeZk42uzWQdjcn633aeZQ6K5JiXRjcZwB8Gvrxlc9Nv2Z7d5yKlHS9fxQun%25P6ebo',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgBRG9l384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAanjNl38Te0VywMESuv8LQyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58EErQ%25r9tdSW8zWunfCqogqaFjHl3ilUUupcRScHJzuMbnMdQgtyJGy58g5rQ%25r9REUW8zWubGEqogqaJoDl3ilUQI8cRScH8NuMbnMdoPayJGy53LSrQ%25r9RX9W8zWubxIqogqaFH8l3ilUj7ocRScH78IMbnMd0%253yJGy5BOUrQ%25r9SbUW8zWunJEqogqaGjdl3ilU%257QcRScHzesMbnMdg7oyJGy5i0BrQ%25r9SDUW8zWunCjqogqaG4zl3ilU%253acRScHzN3MbnMdgCKyJGy5i4FrQ%25r9sEGW8zWuKGEqogqaDC8l3ilUCQzcRScH48jMbnMdeo4yJGy5mgRrQ%25r9sinW8zWuKSoqogqa3Czl3ilURFjcRScHb8UMbnMdJodyJGy5Q3MrQ%25r98RiW8zWuon%25qogqa3GIl3ilURGBcRScHbR2MbnMdJ13yJGy5Q4ErQ%25r98XHW8zWuuRHqogqaab4l3ilUUHecRScHFe8MbnMdj5KyJGy57HUrQ%25r90FFW8zWuBj4qogqaY2al3ilUEtBcRScHFpzMbnMdm9oyJGy5sRKrQ%25r9KDRW8zWuDbnqoQEdcNq0zxcqW8JuzM8nq0z6Fboy6oEd82'
                    },
                    {
                        title: 'BMW M3 Sedan',
                        fuelType: ['Gas'],
                        tuning: 'M',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jUi10tLhu1XzWVo7puMLWFmdkAj5DOPitppZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUFNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV0GWh1DMztifjeqVYDafHAPjmztYRSJyR67aftxdIXCw1RSfWQvC0%25VxdSeZGjNuzWQdjc9m93aeZQ6KojSXRjcZwBL7rrx6Kc%252NKd4WwBKupkm1Fe%252B3in0VIjup2XH50nv63iprJ8kKGwXHi4TpEP9%25rJHFlieFou4TJIsNxyL3FlTv0k1wyXIslGAnVNCrv0s9OGQJE4GA0og9TTNF9OALUouykIVODQPbAusKfgVmlDTI0Ccy2oGjY',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgKRJ9l384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAan%25Wl38Te0VywMESu10%25tyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58OUrQ%25r9RnYW8zWubtJqogqaJh%25l3ilUjdocRScH7QQMbnMd03RyJGy5BglrQ%25r9YgbW8zWuEfCqogqaGjdl3ilU%2540cRScHzmBMbnMdgl7yJGy5i4arQ%25r9sR2W8zWuKSGqogqa3EFl3ilUR%25gcRScHbz1MbnMdd8uyJGy558arQ%25r99p5W8JYHltW7%25XlWrQb9%25cQSW7%25IER8MI8YHQA'
                    },
                ]
                break;
            case '5':
                res = [
                    {
                        title: 'BMW 5 series Sedan',
                        fuelType: ['Gas', 'Diesel', 'Hybrid'],
                        tuning: 'none',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf7t8l10tLhu1XzWVo7puMLWFmdkAj5DOPFtp8Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZ5NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVyqWh1DMztIVCeqVYDafHRAjmztYRSJdw67aftxdTlkw1RSfWQlUY%25VxdSeZs3EuzWQdjc0kN3aeZQ6KokgXRjcZwBLnWrx6Kc%252yu84WwBKupC31Fe%252B3iE2TIjup2XHNy6v63iprJ8yaGwXHi4TPFR9%25rJHFlMaxou4TJIsDRzL3FlTv0YiyyXIslGAt5VCrv0s9OfCTE4GA0ogSxZNF9OALUdnqkIogOybQ55nvLUgChZS15GybUEqcdx89ChbNmU2PPoEqhk7bSEMLNmqn1hdmDyk7m5VqQpYCn178zm9MtE5V1PaZlqfN8zVMRcvySkPazDxKBsdnMRaYWB4cQ5DxRte2FNZ8YWxfjpwucPteWS6i9vKMfjedwHsNBDS6jQ%25J0p2Ydw6ZuQhpptvwsbT365emO%25v4WsxtjKqc1QSE0',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBg3RJWl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAanbvl38Te0VywMESu6IHQyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58EDrQ%25r9SgsW8zWubJjqogqaJ%25Fl3ilUQ3CcRScH86oMbnMdoIayJGy53LUrQ%25r9Y33W8zWuER4qogqaFQ8l3ilUj80cRScH705MbnMd0ocyJGy5iuErQ%25r9SbFW8zWunDjqogqaGCbl3ilU%25becRScHz8fMbnMdg43yJGy5iJUrQ%25r9S1aW8zWunAEqogqaGsJl3ilU%25KBcRScH4dmMbnMdeo2yJGy5m3erQ%25r9sR2W8zWuKSoqogqa3bdl3ilUR4gcRScHb8%25MbnMdJgAyJGy5QinrQ%25r985RW8zWuo8Vqogqa3s7l3ilURKjcRScHHdmMb37ur1MESxgYXMb3dnqbgyFntBoJltJ0ab6'
                    },
                    {
                        title: 'BMW M5 Sedan',
                        fuelType: ['Gas', 'Diesel'],
                        tuning: 'M',
                        novelty: false,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jsd10tLhu1XzWVo7puMLWFmdkAj5DOPHtFhZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gS8NNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYp%254Wh1DMztINweqVYDafaOPjmztYRSRg367aftxdTQ%25w1RSfWQlsy%25VxdSeZsbtuzWQdjc0kN3aeZQ6KoInXRjcZwBLnUrx6Kc%252yu84WwBKupC31Fe%252B3iEaEIjup2XH5Mmv63iprJ84KGwXHi4TPFo9%25rJHFlMaxou4TJIsDpLL3FlTv0YbDyXIslGAtyJCrv0s9OfwTE4GA0ogSxZNF9OALUdtmkIogOybAh5nvLUgChOYC5GybUEqgtb89ChbNmUfKPoEqhk7bI5MLNmqn1SSbDyk7m5Vd49YCn178zQZ8tE5V1PaZcMfN8zVMRcKlSkPazDxKrCdnMRaYWBjwQ5DxRte2vFZ8YWxfjpTCcPteWS6ilBKMfjedwHVHBDS6jQ%25dnt2Ydw6ZuQ5eptQ%25wc3Z8KifG%250hlXw8j7guGFe0Wf6BmKVZdNA',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgBRGDl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAaGH4l38Te0VywMESu10WkyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny5330rQ%25r9SvfW8zWu3fJqogqaRkGl3ilUQzjcRScH8R%25MbnMdo13yJGy53LUrQ%25r9YaJW8zWuERRqogqaFQ8l3ilUj80cRScH7%25WMbnMdg88yJGy5iRarQ%25r9SbYW8zWunDjqogqaGR4l3ilU%25WFcRScHzCoMbnMdgV3yJGy5iJUrQ%25r9SeRW8zWuKGEqogqaDJ%25l3ilUCQDcRScH486MbnMdezJyJGy5QuRrQ%25r98KGW8zWuobGqogqa3Jul3ilURQGcRScHbziMbnMdJHoyJGy5QJvrQ%25r98eFW8zWuomEqogqa3VGl3ilUUvmcRScHHwoMbnMddVHyJR0aWAyFnhiExyJR5GlJirjGNY3QcNQBUJ1'
                    },
                ]
                break;
            case 'X':
                res = [
                    {
                        title: 'BMW X3',
                        fuelType: ['Gas', 'Diesel', 'Hybrid'],
                        tuning: 'none',
                        novelty: false,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKIl10tLhu1XzWVo7puMLWFmdkAj5DOPEtEKZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g37TNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpi4Wh1DMztIVqeqVYDafaiojmztYRSJ3667aftxdTWgw1RSfWQlO%25%25VxdSeZsNEuzWQdjc0ka3aeZQ6KAneXRjcZwBLv5rx6Kc%252y5b4WwBKupC3PFe%252B3iELSIjup2XHN3Kv63iprJ8yYGwXHi4TPFB9%25rJHFlMIxou4TJIsDvyL3FlTv0YliyXIslGAtsbCrv0s9OfeFE4GA0ogSTqNF9OALUdlkkIogOybQ%257nvLUgChZu85GybUEqcaX89ChbNmKRIPoEqhk7BS6MLNmqn12MbDyk7m5VpKbYCn178ziBwtE5V1Pa7ZSfN8zVMR1zySkPazDxVBDdnMRaYWz2MQ5DxRteapxZ8YWxfjRi0cPteWS6xkQKMfjedwHbRBDS6jQ%25JNp2Ydw6ZuTlZptQ%25wc3lsqifZu%25KXsy8HSc3uBr0NCJdKX324AbMTQBrXpFOhslZ24riIpzsscC4bVgvrt3RmFCoub%25cXJaHWpBPh',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgoRnIl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAab4dl38Te0VywMESunCYQyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny53J0rQ%25r9SgyW8zWu3ndqogqaJH4l3ilUQ80cRScH8emMbnMdoPayJGy53LMrQ%25r9RXNW8zWuEUQqogqaFbbl3ilUj8ocRScH78IMbnMd0%253yJGy5iubrQ%25r9SbUW8zWunJjqogqaGQFl3ilU%2575cRScHz08MbnMdgmKyJGy5i83rQ%25r9SoDW8zWunYbqogqaGEFl3ilU%25e0cRScHzmiMbnMdgokyJGy5ieRrQ%25r9SeUW8zWunm7qogqaDHFl3ilUC7gcRScH48gMbnMdeo2yJGy5m3erQ%25r9sR2W8zWuKSoqogqa3bdl3ilURFjcRScHb8gMbnMdJozyJGy5QiErQ%25r98QwW8zWuomjqogqa3sFl3ilUUHecRoj9y6cYiXzBLcRoHSWRzMES208bq2b7uRI',
                    },
                    {
                        title: 'BMW iX3',
                        fuelType: ['Hybrid'],
                        tuning: 'none',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JiN10tLhu1XzWVo7puMLWFmdkAj5DOPMtExZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gSZWNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpzsWh1DMzti08eqVYDafHLojmztYRSJyR67aftxdIXCw1RSfWQvC0%25VxdSeZGheuzWQdjc9ef3aeZQ6KCInXRjcZwBEnmrx6Kc%252Nu74WwBKupk3IFe%252B3in2ZIjup2XH5psv63iprJ8V%25GwXHi4TPBA9%25rJHFlM2oou4TJIsDxgL3FlTv0YWCyXIslGAtqHCrv0s9Ofm6E4GA0ogS73NF9OALUdMRkIogOybQfsnvLUgChZS95GybUEqcdx89ChbNmKizPoEqhk7bqvMLNmqn1hrJDyk7m5VqQ5YCn178zmZntE5V1Pa7cVfN8zVMR1L7SkPazDxVytdnMRaYWB2YQ5DxRte2OVZ8YWxfjpyKcPteWS6iHdKMfjedwHJUBDS6jQ%25J9k2Ydw6ZuTyoptQ%25wc3lO5ifZu%25KXsgJHSc3uBr0W0JdKX324BVwTQBrXpF2zllZ24riIpuuscpF4Hvia00KiIFJGzHlABHvIT9Te1O2kvmRhoId4eVGkCrmX2FsWl6JiY7',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgnRnKl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAaGbbl38Te0VywMESuv8V4yJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny53RErQ%25r9R2bW8zWubxdqogqaJh%25l3ilUjdocRScH7QQMbnMd0ViyJGy5BzRrQ%25r9SaJW8zWunRjqogqaGQ7l3ilU%258jcRScHz09MbnMdgBoyJGy5isDrQ%25r9SoRW8zWun3CqogqaGEJl3ilU%25FjcRScHzm9MbnMdgsYyJGy5iKnrQ%25r9SRwW8zWunmHqogqaGsel3ilU%25KBcRScHzZ8MbnMdeBSyJGy5msbrQ%25r9sRnW8zWuKbIqogqaDJKl3ilUCG8cRScH4%25bMbnMdJoiyJGy5QoarQ%25r98BYW8zWuob9qogqa3Jnl3ilUR%250cRScHbRfMbnMdJCYyJGy5Q4BrQ%25r98vSW8zWuuRHqogqaab4l3ilUUb5cRScHHdmMbnMdg%25JyJGy58LlrQbBUq2rjGTSFhrQb9%25cQSW7%25IER8MI8YHQA'
                    },
                    {
                        title: 'BMW X3 M',
                        fuelType: ['Gas'],
                        tuning: 'M',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfyn1y10tLhu1XzWVo7puMLWFmdkAj5DOPFtItZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gAjiNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVOWWh1DMztIAzeqVYDafaOPjmztYRSRg%2567aftxdTWgw1RSfWQluq%25VxdSeZs3EuzWQdjc0ka3aeZQ6KoInXRjcZwBLnUrx6Kc%252yu84WwBKupCzCFe%252B3iEz3Ijup2XHNarv63iprJ8yYGwXHi4TPFB9%25rJHFlMIxou4TJIsDTpL3FlTv0YlUyXIslGAtW4Crv0s9OfJEE4GA0ogS6kNF9OALUd1%25kIogOybQVrnvLUgChZYW5GybUEqczZ89ChbNmK8gPoEqhk7B%25tMLNmqn12cjDyk7m5VqdtYCn178zm1otE5V1Pa7RLfN8zVMR1xdSkPazDxVBDdnMRaYWz2MQ5DxRteapxZ8YWxfjRi0cPteWS6xkQKMfjedwHHXBDS6jQ%25Jhx2Ydw6ZuTNPptQ%25wc3lnHifZu%25KXs0KHSc3uBr0A7JdKX324AEMTQBrXpFOnNlZ24riIgqYscpF4HvUmA0KiIFJGb%25bABHvIT9JWeO2JGvloT44gpT9GsLleUUilo90yscJbHsLoAC0KGhJ0yLOEABUqTMya6VNLB9uWCM5GavToU%25gXAsQR',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBg3R9%25l384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAatCtl38Te0VywMESuD%25F3yJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58UKrQ%25r9SpnW8zWu3fJqogqaRkIl3ilUQ80cRScH8NiMbnMdoIayJGy53LMrQ%25r9YaJW8zWuERRqogqaFQ8l3ilUjGrcRScH7wgMbnMd0VHyJGy5iubrQ%25r9SbUW8zWunJjqogqaGjdl3ilU%257QcRScHzesMbnMdgQsyJGy5i0BrQ%25r9SDFW8zWunC%25qogqaGJOl3ilU%25WFcRScHzCoMbnMdgbOyJGy5i4FrQ%25r9saYW8zWuKF%25qogqaD%25zl3ilUCzjcRScH48gMbnMdeo2yJGy5m3erQ%25r9sR2W8zWuKSoqogqa3HJl3ilURJ5cRScHbeiMbnMdJ70yJGy5Q3SrQ%25r98RiW8zWuonjqogqa3oOl3ilURK0cRScHbD7MbnMdJfgyJGy55obrQ%25r99oUW8zWuuaCqogqaakel3ilUUv8cRScHHwbMb37ur1MESxgYXMb3dnqbgyFntBoJltJ0ab6'
                    },
                ]
                break
            case 'M':
                res = [
                    {
                        title: 'BMW M3 Sedan',
                        fuelType: ['Gas'],
                        tuning: 'M',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jUi10tLhu1XzWVo7puMLWFmdkAj5DOPitppZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUFNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV0GWh1DMztifjeqVYDafHAPjmztYRSJyR67aftxdIXCw1RSfWQvC0%25VxdSeZGjNuzWQdjc9m93aeZQ6KojSXRjcZwBL7rrx6Kc%252NKd4WwBKupkm1Fe%252B3in0VIjup2XH50nv63iprJ8kKGwXHi4TpEP9%25rJHFlieFou4TJIsNxyL3FlTv0k1wyXIslGAnVNCrv0s9OGQJE4GA0og9TTNF9OALUouykIVODQPbAusKfgVmlDTI0Ccy2oGjY',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgKRJ9l384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAan%25Wl38Te0VywMESu10%25tyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58OUrQ%25r9RnYW8zWubtJqogqaJh%25l3ilUjdocRScH7QQMbnMd03RyJGy5BglrQ%25r9YgbW8zWuEfCqogqaGjdl3ilU%2540cRScHzmBMbnMdgl7yJGy5i4arQ%25r9sR2W8zWuKSGqogqa3EFl3ilUR%25gcRScHbz1MbnMdd8uyJGy558arQ%25r99p5W8JYHltW7%25XlWrQb9%25cQSW7%25IER8MI8YHQA'
                    },
                    {
                        title: 'BMW M5 Sedan',
                        fuelType: ['Gas', 'Diesel'],
                        tuning: 'M',
                        novelty: false,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jsd10tLhu1XzWVo7puMLWFmdkAj5DOPHtFhZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gS8NNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYp%254Wh1DMztINweqVYDafaOPjmztYRSRg367aftxdTQ%25w1RSfWQlsy%25VxdSeZsbtuzWQdjc0kN3aeZQ6KoInXRjcZwBLnUrx6Kc%252yu84WwBKupC31Fe%252B3iEaEIjup2XH5Mmv63iprJ84KGwXHi4TPFo9%25rJHFlMaxou4TJIsDpLL3FlTv0YbDyXIslGAtyJCrv0s9OfwTE4GA0ogSxZNF9OALUdtmkIogOybAh5nvLUgChOYC5GybUEqgtb89ChbNmUfKPoEqhk7bI5MLNmqn1SSbDyk7m5Vd49YCn178zQZ8tE5V1PaZcMfN8zVMRcKlSkPazDxKrCdnMRaYWBjwQ5DxRte2vFZ8YWxfjpTCcPteWS6ilBKMfjedwHVHBDS6jQ%25dnt2Ydw6ZuQ5eptQ%25wc3Z8KifG%250hlXw8j7guGFe0Wf6BmKVZdNA',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgBRGDl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAaGH4l38Te0VywMESu10WkyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny5330rQ%25r9SvfW8zWu3fJqogqaRkGl3ilUQzjcRScH8R%25MbnMdo13yJGy53LUrQ%25r9YaJW8zWuERRqogqaFQ8l3ilUj80cRScH7%25WMbnMdg88yJGy5iRarQ%25r9SbYW8zWunDjqogqaGR4l3ilU%25WFcRScHzCoMbnMdgV3yJGy5iJUrQ%25r9SeRW8zWuKGEqogqaDJ%25l3ilUCQDcRScH486MbnMdezJyJGy5QuRrQ%25r98KGW8zWuobGqogqa3Jul3ilURQGcRScHbziMbnMdJHoyJGy5QJvrQ%25r98eFW8zWuomEqogqa3VGl3ilUUvmcRScHHwoMbnMddVHyJR0aWAyFnhiExyJR5GlJirjGNY3QcNQBUJ1'
                    },
                    {
                        title: 'BMW X3 M',
                        fuelType: ['Gas'],
                        tuning: 'M',
                        novelty: true,
                        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfyn1y10tLhu1XzWVo7puMLWFmdkAj5DOPFtItZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gAjiNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVOWWh1DMztIAzeqVYDafaOPjmztYRSRg%2567aftxdTWgw1RSfWQluq%25VxdSeZs3EuzWQdjc0ka3aeZQ6KoInXRjcZwBLnUrx6Kc%252yu84WwBKupCzCFe%252B3iEz3Ijup2XHNarv63iprJ8yYGwXHi4TPFB9%25rJHFlMIxou4TJIsDTpL3FlTv0YlUyXIslGAtW4Crv0s9OfJEE4GA0ogS6kNF9OALUd1%25kIogOybQVrnvLUgChZYW5GybUEqczZ89ChbNmK8gPoEqhk7B%25tMLNmqn12cjDyk7m5VqdtYCn178zm1otE5V1Pa7RLfN8zVMR1xdSkPazDxVBDdnMRaYWz2MQ5DxRteapxZ8YWxfjRi0cPteWS6xkQKMfjedwHHXBDS6jQ%25Jhx2Ydw6ZuTNPptQ%25wc3lnHifZu%25KXs0KHSc3uBr0A7JdKX324AEMTQBrXpFOnNlZ24riIgqYscpF4HvUmA0KiIFJGb%25bABHvIT9JWeO2JGvloT44gpT9GsLleUUilo90yscJbHsLoAC0KGhJ0yLOEABUqTMya6VNLB9uWCM5GavToU%25gXAsQR',
                        subimage: 'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBg3R9%25l384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAatCtl38Te0VywMESuD%25F3yJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58UKrQ%25r9SpnW8zWu3fJqogqaRkIl3ilUQ80cRScH8NiMbnMdoIayJGy53LMrQ%25r9YaJW8zWuERRqogqaFQ8l3ilUjGrcRScH7wgMbnMd0VHyJGy5iubrQ%25r9SbUW8zWunJjqogqaGjdl3ilU%257QcRScHzesMbnMdgQsyJGy5i0BrQ%25r9SDFW8zWunC%25qogqaGJOl3ilU%25WFcRScHzCoMbnMdgbOyJGy5i4FrQ%25r9saYW8zWuKF%25qogqaD%25zl3ilUCzjcRScH48gMbnMdeo2yJGy5m3erQ%25r9sR2W8zWuKSoqogqa3HJl3ilURJ5cRScHbeiMbnMdJ70yJGy5Q3SrQ%25r98RiW8zWuonjqogqa3oOl3ilURK0cRScHbD7MbnMdJfgyJGy55obrQ%25r99oUW8zWuuaCqogqaakel3ilUUv8cRScHHwbMb37ur1MESxgYXMb3dnqbgyFntBoJltJ0ab6'
                    },
                ]
                break;
            default:
                break;
        }
        return res
    }
)




