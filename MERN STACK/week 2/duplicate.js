var array=[1,2,3,4,4,5,5,6,6,6,6,6,6,6];
var tota=array.filter(function(element,index,self ){
    return self.indexOf(element)===index;
})
console.log(tota);
