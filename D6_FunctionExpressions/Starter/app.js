greet();

function greet() {
  console.log('hi');
}

var anonymousGreet = function () {
  console.log("hi");
}

anonymousGreet();

function log(a) {
  console.log(a);
}

log(3);
log('rafael');
log({
  greeting: "hi!"
});

log(function(){
  console.log("hi");
});

function run(a) {
  a();
}

run(function(){
  console.log("hi! function");
});
