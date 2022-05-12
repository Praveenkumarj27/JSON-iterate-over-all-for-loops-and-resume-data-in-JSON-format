var json = [{
    "name" : "Praveenkumar", 
    "gender": "male",
    "age" : "23"
},
{
    "name" : "bharathi", 
    "gender": "female",
    "age" : "25"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.gender);
    console.log(obj.age)

}
//for Each
json.forEach(function(obj) { console.log(obj.name); });

//for In
for (var key in json) {
  console.log(json[key].gender);
}

//for Of
let text = "";
for (let x of json) {
    console.log(x.age);
}

