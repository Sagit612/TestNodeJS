module.exports = (x,y,callback) =>{
    if (x <= 0 || y <= 0)
    // call setTimeout() function
        setTimeout(()=> 
            // callback() function here is a first parameter of the outer function 
            // callback() function has two functions passed inside 
            callback(new Error(("Rectangle dimensions should be greater than zero: l = " + x + ", and b = " + y),
                null), 
            2000)
        )
    else
        setTimeout(() =>
            // callback() function here is a first parameter of the outer function 
            // callback() function has two functions passed inside 
            callback(null, {
                    perimeter: () => (2*(x+y)),
                    area: () => (x*y)
                }
                // this {} is the anonymous object having two properties (perimeter and area) 
                // key here is the same as the function, and value is the logic of the key
                ),
            2000)
}
