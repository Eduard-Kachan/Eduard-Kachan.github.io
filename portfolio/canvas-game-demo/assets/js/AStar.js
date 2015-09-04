(function(){
    "use strict";

    var openList = [];
    var closedList = [];
    var grid = null;
    var endGridNode = null;
    var returnPathArray = [];
    function AStar(start, finish, gameGrid){
        openList = [];
        closedList = [];
        returnPathArray = [];
        grid = gameGrid;
        endGridNode = finish;


        createNode(grid[start.x][start.y], false);
        return loop();
    }

    function loop(){
        // Get lowest F
        // Remove node from Open List

        // All options tested, no possible way to reach the target
        if(openList.length == 0){
            return false;
        }

        var node = openList.splice(0, 1)[0];

        // Push lowest F to Closed List
        closedList.push(node);

        if(node.h == 1){
            // The path to hte target has been found
            closedList.push({
                parent:node,
                original: endGridNode
            });

            return getOriginalNode(returnPath([closedList[closedList.length - 1]]));
        }else{
            // Add adjacent nodes to Open List
            // Ignore non traversable nodes

            // Lower
            parentToNode(
                (node.original.y + 1 >= 0 && node.original.y + 1 <= grid[node.original.x].length - 1),
                node.original.x,
                node.original.y + 1,
                node);
            // Upper
            parentToNode(
                (node.original.y - 1 >= 0 && node.original.y - 1 <= grid[node.original.x].length - 1),
                node.original.x,
                node.original.y - 1,
                node);
            // Left
            parentToNode(
                (node.original.x + 1 >= 0 && node.original.x + 1 <= grid.length - 1),
                node.original.x + 1,
                node.original.y,
                node);
            // Light
            parentToNode(
                (node.original.x - 1 >= 0 && node.original.x - 1 <= grid.length - 1),
                node.original.x - 1,
                node.original.y,
                node);

            return loop();
        }



    }

    function parentToNode(angle, x, y, parentNode){
        var nodeOnOpenList = null;
        if(angle && isTraversable(x, y)){
            nodeOnOpenList = isNodeOnOpenList(x, y);
            if(nodeOnOpenList){
                // If node is on open list check if path from it is easier
                if(isMovementCostLower(parentNode, nodeOnOpenList))
                    moveNodeParent(parentNode, nodeOnOpenList);
            }else{
                createNode(grid[x][y], parentNode);
            }
        }
    }

    function isTraversable(x, y){
        if(!grid[x][y].traversable){
            return false;
        }

        for(var i = 0; i < closedList.length; i++){
            if(closedList[i].original.x == x && closedList[i].original.y == y){
                return false;
            }
        }

        return true;
    }

    function isNodeOnOpenList(x, y){
            for(var i = 0; i < openList.length; i++){
            if(openList[i].original.x == x && openList[i].original.y == y){
                return openList[i];
            }
        }

        return false;
    }

    function isMovementCostLower(nodeA, nodeB){
        // Take g value of current node
        // Add movement cost to node
        // Is value lower
        return (nodeA.g + 1 < nodeB.g);
    }

    function moveNodeParent(nodeA, nodeB){
        nodeB.parent = nodeA;
    }

    function createNode(gridNode, parent){
        var node = {
            parent: parent,
            original: gridNode,
            h:undefined,
            g:undefined,
            f:undefined
        };

        // Calculate H, G, and F
        node.g = node.parent ? node.parent.g + 1 : 0;
        node.h = calculateHeuristic(node);
        node.f = node.g + node.h;

        addNodeToOpenList(node);
    }

    function calculateHeuristic(node){
        // Calculate x
        var x = 0;
        if(node.original.x > endGridNode.x){
            x = node.original.x - endGridNode.x;
        }else if(endGridNode.x > node.original.x){
            x = endGridNode.x - node.original.x;
        }else{
            x = 0;
        }

        // Calculate y
        var y = 0;
        if(node.original.y > endGridNode.y){
            y = node.original.y - endGridNode.y;
        }else if(endGridNode.y > node.original.y){
            y = endGridNode.y - node.original.y;
        }else{
            y = 0;
        }

        return x + y;
    }

    function addNodeToOpenList(node){
        if(openList.length === 0) openList.push(node);

        for(var i = 0; i <= openList.length; i++){
            if(node.f < openList[i]){
                openList.splice(i, 0, node);
                return;
            }
        }

        openList.push(node);
    }

    function returnPath(returnPathArray){
        if(returnPathArray[0].parent == false){
            return returnPathArray;
        } else{
            returnPathArray.splice(0, 0, returnPathArray[0].parent);
            return returnPath(returnPathArray);
        }
    }

    function getOriginalNode(returnPath){
        var originalPathArray = [];

        for(var i = 0; i < returnPath.length; i++){
            originalPathArray.push(returnPath[i].original);
        }

        return originalPathArray
    }

    window.AStar = AStar;
})();