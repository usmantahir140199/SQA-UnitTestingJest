/*
function fetchData(){
    return "Hello";
}
*/

function fetchData(data){
    return data('Hello');
}
/*
function fetchData(data){
    return data;
}
*/
module.exports = fetchData;