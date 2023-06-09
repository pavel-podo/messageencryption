//let alf = `\\'!"#$%&()*+,-./0123456789:;<=>? @ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя`
export const codeFunctions = () => {
    function textToArr(alf, text) {

        let arr = [];
        let fullArr = [];
        for (let i = 0; i < text.length; i++) {
            let simbol = text[i];
            let nSimbol = alf.indexOf(simbol);
            arr.push(nSimbol);
            fullArr.push({ s: simbol, n: nSimbol });
        }
        return arr;
    }
    function arrToText(arr, alf) {
        let str = "";
        arr.forEach((element) => {
            str = str + alf[element];
        });
        return str;
    }
    String.prototype.codeText = function (key, alphabet) {
        const textSimArray = textToArr(alphabet, this)
        const keySimArray = textToArr(alphabet, key)
        let i = -1,
            long = alphabet.length;
        let retArr = textSimArray.map((e) => {
            i++;
            i > keySimArray.length - 1 ? (i = 0) : false;

            let result = (e + keySimArray[i]) % long;
            return result;
        });

        return arrToText(retArr, alphabet);
    }
    String.prototype.deCodeText = function (key, alphabet) {
        const textSimArray = textToArr(alphabet, this)
        const keySimArray = textToArr(alphabet, key)
        let i = -1;
        let long = alphabet.length;
        let result = textSimArray.map((e) => {
            i++;
            i == keySimArray.length ? (i = 0) : false;
            //(l + t - k) % l
            let r = long + e - keySimArray[i];
            if (r >= long) {
                r = r % long;
            } else {
                false;
            }
            return r;
        });
        return arrToText(result, alphabet);
    }
    String.prototype.changeSymbols = function (str) {
        let result = false
        for (let i = 0; i < this.length; i++) {
            if (!str.includes(this[i])) {
                result = this[i]
                break
            }
        }
        return result
    }
    
    String.prototype.getTheme = () => {
        return [
            {
                title: 'Standart',
                header_color: '#4699A4',
                second_color: 'white',
                bg_color: '#E2EEF0',
                btn_color: '#037A8B',
                font_color: 'white',
                second_font_color: '#4699A4',
            },
            {
                title: 'Grey',
                header_color: '#1e1e1e',
                bg_color: '#323232',
                btn_color: '#ffad46',
                font_color: '#fefefe',
                second_color: '#e5e5e5',
                second_font_color: '#ffad46',
            },
            {
                title: 'Pink',
                header_color: '#dd72a0',
                bg_color: '#f6f6f6',
                btn_color: '#7c86c3',
                font_color: '#edeae1',
                second_color: '#e5e5e5',
                second_font_color: '#dd72a0',
            },

            {
                title: 'Orange',
                header_color: '#df6227',
                bg_color: '#fa8934',
                btn_color: '#8f3113',
                font_color: '#ffffff',
                second_color: '#dd6327',
                second_font_color: '#ffffff',
            },
            {
                title: 'test',
                header_color: '#df6227',
                bg_color: '#40d5c8',
                btn_color: '#d7d4b4',
                font_color: '#d8a5a8',
                second_color: '#a9d9b4',
                second_font_color: '#d8a5a8',
            },
        ]
    }
    //String.prototype.checkLength = function()


    //если сивол есть кодирую 
    //если нет сообщени про ошибку 

    /*
let cT = 'hello'.codeText('key', alf)
let dcT = cT.deCodeText('key', alf)

    */
}
