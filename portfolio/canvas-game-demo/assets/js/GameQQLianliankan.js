(function(){
    "use strict";

    function GameQQLianliankan(gridSize, squareSize, spriteSheet){
        this.spriteSheet = spriteSheet;
        this.isPaused = true;
        this.isWon = false;
        this.isLost = false;
        this.c = document.getElementById('QQLianliankan');
        this.ctx = this.c.getContext('2d');
        this.gridSize = gridSize;
        this.squareSize = squareSize;
        this.grid = [];
        this.clickedDouble = [];
        this.path = [];
        this.scoreCount = 0;
        this.init();
    }

    GameQQLianliankan.prototype = {
        init: function(){
            this.c.width = this.squareSize * this.gridSize;
            this.c.height = this.squareSize * this.gridSize;

            // Crating the nodes / tiles
            for(var x = 0; x < this.gridSize; x++){
                this.grid.push([]);
                for(var y = 0; y < this.gridSize; y++){
                    this.grid[x][y] = new Node(x, y, this.squareSize, this.squareSize);
                }
            }

            var self = this;
            this.c.addEventListener('click', function(e) {
                if(self.isPaused) return;
                self.canvasClicked(e);
            }, false);
        },
        canvasClicked: function(e){
            var clickPosition = this.coordsToGrid(e.layerX, e.layerY);

            if(this.grid[clickPosition.x][clickPosition.y].empty) return;

            if(this.clickedDouble.length === 0){
                // If none saved, add one
                this.clickedDouble.push(this.grid[clickPosition.x][clickPosition.y]);
            }else if(this.clickedDouble.length === 1){
                // If two nodes are not the same node
                if(this.clickedDouble[0] != this.grid[clickPosition.x][clickPosition.y]){
                    // Add node
                    this.clickedDouble.push(this.grid[clickPosition.x][clickPosition.y]);
                    // Are nodes the same
                    if(this.compareNodes(this.clickedDouble[0], this.clickedDouble[1])){
                        // Are nodes adjacent to each other;
                        if(this.areNodesAdjacent(this.clickedDouble[0], this.clickedDouble[1])){
                            this.removeClickedTiles([this.clickedDouble[0], this.clickedDouble[1]]);
                        }else{
                            // Use the A* to check nodes
                            var aStarPath = AStar(this.clickedDouble[0], this.clickedDouble[1], this.grid);
                            if(aStarPath){
                                this.removeClickedTiles(aStarPath);
                            }else{
                                this.clickedDouble = [];
                            }
                        }
                    }else{
                        this.clickedDouble = [];
                    }
                }else{
                    this.clickedDouble = [];
                }
            }

            console.log(this.clickedDouble);
        },
        checkForEndGame: function(){
            if(this.scoreCount == this.gridSize * this.gridSize){
                this.isWon = true;
                this.isPaused = true;
            }
        },
        addScore: function(){
            this.scoreCount += 2;
        },
        removeClickedTiles: function(path){
            this.path = path;
            var self = this;
            setTimeout(function(){
                self.path = [];
                self.clickedDouble[0].setAsEmpty(self.spriteSheet[51]);
                self.clickedDouble[1].setAsEmpty(self.spriteSheet[51]);
                self.clickedDouble = [];
                self.addScore();
                self.checkForEndGame();
            },200);
        },
        areNodesAdjacent:function(nodeA, nodeB){
            //compering node b to node a

            if(nodeA.x == nodeB.x && nodeA.y == nodeB.y - 1) return true; // Up
            if(nodeA.x == nodeB.x && nodeA.y == nodeB.y + 1) return true; // Down
            if(nodeA.x == nodeB.x - 1 && nodeA.y == nodeB.y) return true; // Right
            if(nodeA.x == nodeB.x + 1 && nodeA.y == nodeB.y) return true; // Left

            return false;
        },
        compareNodes: function(nodeA, nodeB){
            return (nodeA.image.imgID == nodeB.image.imgID);
        },
        coordsToGrid: function(eX,eY){
            // Turn clicked position into row and column number

            var x;
            var y;

            for(var i = 0; i <= this.gridSize; i++){
                if(this.squareSize * i > eX){
                    x = i-1;
                    break;
                }
            }

            for(i = 0; i <= this.gridSize; i++){
                if(this.squareSize * this.gridSize - this.squareSize * i < eY){
                    y = this.gridSize - i;
                    break;
                }
            }

            return {
                x:x,
                y:y
            }
        },
        drawGrid: function(){
            for(var x = 0; x < this.gridSize; x++){
                for(var y = 0; y < this.gridSize; y++){
                    this.drawNode(x, y);
                }
            }
        },
        drawNode:function(x, y){
            var node = this.grid[x][y];
            this.ctx.drawImage(
                node.image.img,
                node.image.sx,
                node.image.sy,
                node.image.sw,
                node.image.sh,
                node.rect.x,
                node.rect.y,
                node.rect.w,
                node.rect.h);
        },
        drawPath: function(){
            for(var i = 0; i < this.path.length - 1; i++){
                this.ctx.beginPath();
                this.ctx.moveTo(this.path[i].rect.x + this.path[i].rect.w/2, this.path[i].rect.y + this.path[i].rect.h/2);
                this.ctx.lineTo(this.path[i + 1].rect.x + this.path[i + 1].rect.w/2, this.path[i + 1].rect.y + this.path[i + 1].rect.h/2);
                this.ctx.stroke();
            }
        },
        drawClicked: function(){
            var selectedImg = this.spriteSheet[52];
            for(var i = 0; i < this.clickedDouble.length; i++){
                this.ctx.drawImage(
                    selectedImg.img,
                    selectedImg.sx,
                    selectedImg.sy,
                    selectedImg.sw,
                    selectedImg.sh,
                    this.clickedDouble[i].rect.x,
                    this.clickedDouble[i].rect.y,
                    this.clickedDouble[i].rect.w,
                    this.clickedDouble[i].rect.h);
            }
        },
        restart: function(){
            for(var x = 0; x < this.gridSize; x++){
                for(var y = 0; y < this.gridSize; y++){
                    this.grid[x][y].setAsEmpty(this.spriteSheet[51]);
                }
            }

            this.isLost = false;
            this.isWon = false;

            this.clickedDouble = [];

            this.path = [];

            this.scoreCount = 0;
        },
        //showHint: function(){
        //
        //    var self = this;
        //
        //    findSolution();
        //    function findSolution(){
        //        //get random node
        //        var randomTile = self.grid[Math.floor(Math.random()*self.gridSize)][Math.floor(Math.random()*self.gridSize)];
        //
        //        if(randomTile.empty) return findSolution;
        //
        //
        //
        //        //are any adjecent nodes available?
        //
        //        //any open adjecent spots?
        //        //use atan to find one
        //    }
        //},
        draw: function(){
            this.ctx.clearRect(0, 0, this.c.width, this.c.height);
            this.drawPath();
            this.drawClicked();
            this.drawGrid();

        }
    };

    window.GameQQLianliankan = GameQQLianliankan;
})();