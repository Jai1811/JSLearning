function checkDay(numberDay){
    let day;
    switch(numberDay){
    case 0 : 
    day= "Sunday"
        break;
    case 1 :
    day ="Monday"
        break;     
    default :
        break;    
    }
    console.log("datatype of day is",typeof(day))
    return day;
}

console.log(checkDay(1))
