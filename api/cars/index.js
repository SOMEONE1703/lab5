let cars = [];

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.method=== 'GET'){
        context.res = data;
    }
    if (req.method==='POST'){
        cars.push(req.body);
        context.res=req.body;
    }
    
    context.res = {
        body:"invalid method"
    };
}