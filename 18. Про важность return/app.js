const usdCurr = 27;
const discount = 0.8;


function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount)
}

// promotion(convert(500,usdCurr));

const res = (convert(500, usdCurr));
promotion(res);

function test() {
    for (let i = 0; i < 5; i++){
        console.log(i);
        if(i ===3) return
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing()=== undefined);