    module.exports = function toReadable  (number) {
        var a = ['','one','two','three','four', 'five','six','seven','eight','nine'];
        var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
        var c = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
        let array = number.toString().split("");
        arr = array.map(x => parseInt(x));
        if (arr.length ===1 && arr[0]===0 ){
            return 'zero';
        }
        if (arr.length ===1 ){
        return a[arr[0]];
        }
        if (arr.length ===2 && arr[0] === 1){
        return c[arr[1]];
        }
        if (arr.length ===2 && arr[1] === 0){
            return b[arr[0]];
            }
        if (arr.length ===2 && arr[0] !== 1){
        return b[arr[0]] +' '+ a[arr[1]];
        }
        if (arr.length === 3 && arr[1]=== 0 && arr[2]=== 0){
            return a[arr[0]]  +' ' + 'hundred';
        }
        if (arr.length === 3 && arr[1]!== 1 && arr[2]=== 0){
            return a[arr[0]]  +' ' +  'hundred'+' ' +b[arr[1]];
        }
        if (arr.length === 3 && arr[1] === 0){
            return a[arr[0]] +' ' + 'hundred' +' '+  a[arr[2]];
        }
        if (arr.length === 3 && arr[1]!== 1){
        return a[arr[0]]  +' ' +  'hundred'+' ' +b[arr[1]] +' '+ a[arr[2]];
        }
        if (arr.length === 3 && arr[1] === 1){
            return a[arr[0]] +' ' + 'hundred'+' ' +c[arr[2]];
        }
        if (arr.length === 4 && arr[2]!== 1 && arr[1] === 0){
            return a[arr[0]] +' ' + 'thousand' +' ' +b[arr[2]] +' '+ a[arr[3]];
        }
        if (arr.length === 4 && arr[2]!== 1 && arr[1]!== 0){
            return a[arr[0]] +' ' + 'thousand'  +' '+ a[arr[1]] + 'hundred'+' ' +b[arr[2]] +' '+ a[arr[3]];
        }
        if (arr.length === 4 && arr[2]=== 1 && arr[1] !== 0 ){
            return a[arr[0]] +' ' + 'thousand' +' '+ a[arr[1]] + 'hundred'+' ' +c[arr[3]];
        }
        if (arr.length === 4 && arr[2]=== 1 && arr[1] === 0 ){
            return a[arr[0]] +' ' + 'thousand' + ' ' +c[arr[3]];
        }
    }
