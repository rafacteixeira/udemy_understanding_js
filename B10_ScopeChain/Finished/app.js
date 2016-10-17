function a() {
    var myVar = 2;
    function b() {
        var myVar = 3;
        console.log(myVar);
    }

	b();
}

var myVar = 1;
a();
