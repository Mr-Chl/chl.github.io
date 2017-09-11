　　

function num(){
    var x=1;
    return function(){
       x++
       console.log(x)
    }
}

var c=num()

c()
c()
