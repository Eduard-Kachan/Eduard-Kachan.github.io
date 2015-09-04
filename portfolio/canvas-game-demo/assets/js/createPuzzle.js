(function(){
    "use strict";

    var game = null;
    var size = 0;
    var availableNodes = [];
    function createPuzzle(gameObject){
        // Reset global variables
        availableNodes = [];
        game = gameObject;
        size = gameObject.grid.length * gameObject.grid[0].length/2;

        // Get all nodes into one array
        for(var x = 0; x < game.grid.length; x++){
            for(var y = 0; y < game.grid[x].length; y++){
                availableNodes.push(game.grid[x][y]);
            }
        }

        for(var i = 0; i < size; i++){
            createNodePare(i);
        }
    }

    function getRandomNode(){
        return availableNodes[Math.floor(Math.random()*availableNodes.length)];
    }

    function createNodePare(color){
        var nodeA = setNode(getRandomNode(), color);
        setNodeOnEmpty(nodeA, color);
    }

    function setNode(node, color){
        node.setAsPuzzleNode(game.spriteSheet[color]);
        availableNodes.splice(availableNodes.indexOf(node), 1);
        return node;
    }

    function setNodeOnEmpty(node, color, i){
        // "i" is to restrict doubling and create diversity
        i = i || 0;
        i++;

        // Get adjacent nodes
        var adjacent = getAdjacent(node);

        // If adjacent no nodes available
        if(adjacent.nodes.length === 0){
            var randomEmptyNode = adjacent.empty[Math.floor(Math.random()*adjacent.empty.length)];
            setNode(randomEmptyNode, color);
        }
        else{
            // If available

            // Choose any random one
            var anyAdjacent = adjacent.nodes.concat(adjacent.empty);
            anyAdjacent = anyAdjacent[Math.floor(Math.random()*anyAdjacent.length)];

            // Get adjacent Node
            var randomAdjacentNode = adjacent.nodes[Math.floor(Math.random()*adjacent.nodes.length)];

            if(isEmpty(anyAdjacent) && i > 7){
                setNode(anyAdjacent, color);
            }else{
                setNodeOnEmpty(randomAdjacentNode, color, i);
            }

        }
    }

    function getAdjacent(node){
        var empty = [];
        var nodes = [];

        if(isDown(node)){
            if(!isCoordEmpty(node.x, node.y + 1)){
                nodes.push(game.grid[node.x][node.y + 1]);
            }else{
                empty.push(game.grid[node.x][node.y + 1]);
            }
        }

        if(isUp(node)){
            if(!isCoordEmpty(node.x, node.y - 1)){
                nodes.push(game.grid[node.x][node.y - 1]);
            }else{
                empty.push(game.grid[node.x][node.y - 1]);
            }
        }

        if(isLeft(node)){
            if(!isCoordEmpty(node.x + 1, node.y)){
                nodes.push(game.grid[node.x + 1][node.y]);
            }else{
                empty.push(game.grid[node.x + 1][node.y]);
            }
        }

        if(isRight(node)){
            if(!isCoordEmpty(node.x - 1, node.y)){
                nodes.push(game.grid[node.x - 1][node.y]);
            }else{
                empty.push(game.grid[node.x - 1][node.y]);
            }
        }

        return {
            empty: empty,
            nodes: nodes
        };
    }

    function isDown(node){
        return node.y + 1 >= 0 && node.y + 1 <= game.grid[node.x].length - 1;
    }

    function isUp(node){
        return node.y - 1 >= 0 && node.y - 1 <= game.grid[node.x].length - 1;
    }

    function isLeft(node){
        return node.x + 1 >= 0 && node.x + 1 < game.grid.length;
    }

    function isRight(node){
        return node.x - 1 >= 0 && node.x - 1 < game.grid.length - 1;
    }

    function isEmpty(node){
        return node.empty;
    }

    function isCoordEmpty(x, y){
        return isEmpty(game.grid[x][y])
    }




    window.createPuzzle = createPuzzle;
})();