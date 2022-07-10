function betterThanAverage(a, b) {
    var sum = 0;
    var med = 0;

    for(var i = 0; i < a.length; i++){
        sum += a[i]  
    };

    med = sum / a.length
    
    if(b >= med){
        return true
    }
    
    else{
        return false
    };
  };