  var paints=[
    {color:'red'},
    {color:'blue'},
    {color:'yello'}
  ];
  var arrays = paints.map(function(obj){
    return obj.color;
  });
  console.log(arrays);