var admins=[
    {id:1,admin:'true'},
    {id:2,admin:'true'},
    {id:3,admin:'true'},
    {id:3,admin:'false'},
    {id:4,admin:'true'}
];
var array=admins.filter(function(obj){
return obj.admin==='true';
});
console.log(array);