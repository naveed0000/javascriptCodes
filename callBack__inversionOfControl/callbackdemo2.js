function fun(x, fn) {
    for(let i = 0; i < x; i++){
        console.log(x);
    }

    fn(100);
}

fun(10, function exec(num) {
    console.log(typeof(num));
})