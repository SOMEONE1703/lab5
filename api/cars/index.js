const cars = require('./cars.json');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.method=== 'GET'){
        context.res = cars;
    }
    if (req.method==='POST'){
        cars.push(req.body);
        context.res=req.body;
    }
    
    context.res = {
        body:"invalid method"
    };
}