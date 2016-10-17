var arr = [
    1,
    false,
    {
        name: 'Rafael',
        address: 'Teste addr'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];


console.log(arr);
arr[3](arr[2].name);
