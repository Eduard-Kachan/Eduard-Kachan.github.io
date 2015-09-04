(function(){
    "use strict";

    function Node(x, y, width, height){
        this.x = x;
        this.y = y;
        this.rect = {
            x: width * x,
            y: height * y,
            w: width,
            h: height
        };
        this.traversable = true;
        this.image = null;
        this.empty = true;
        //this.moveTo = [];
        //this.time = 0;
        //this.endTime = 0;
        //
        //var self = this;
        //animate();
        //function animate(){
        //    self.time = 1 - (self.endTime - Date.now())/1000;
        //    if(self.moveTo.length > 0) self.move(self.moveTo[0]);
        //    requestAnimationFrame(animate);
        //}
    }

    Node.prototype = {
        setAsPuzzleNode: function(image){
            this.empty = false;
            this.image = image;
            this.traversable = false;
        },
        setAsEmpty: function(image){
            this.empty = true;
            this.image = image;
            this.traversable = true;
        }
        //animateMoveTo: function(array){
        //    this.moveTo = array;
        //    this.endTime = Date.now() + 1000;
        //},
        //move: function(position) {
        //    if(this.time >= 1){
        //        this.time = 1;
        //
        //        //remove the first item
        //        this.moveTo.splice(0,1);
        //
        //        //if items still remain, reset time
        //    }
        //
        //    var x = position.x - position.x * this.time;
        //    var y = position.y - position.y * this.time;
        //
        //    this.rect.x = x;
        //    this.rect.y = y;
        //}
    };

    window.Node = Node;
})();