 
function createObj (co) {
    let obj = {};
        for (let i = 0; i < co.length; i++) {
        obj[co[i].name] = co[i].value;
    };
    
    return obj;
};
 // {overflow: "hidden", cursor: "pointer"}

 let arr=[
     {name: "overflow", value: "hidden"}, 
     {name: "cursor", value: "pointer"}
]

console.log (createObj(arr));