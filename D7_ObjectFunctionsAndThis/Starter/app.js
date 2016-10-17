console.log(this);

function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);
}

a();
console.log(newvariable);
b();







var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        self.name = 'updated c object';
        console.log(self);

        var setName = function(newName) {
            self.name = newName;
        };

        setName( 'Updated Again! the c object.' );

        console.log(self);
    }
}

c.log();
