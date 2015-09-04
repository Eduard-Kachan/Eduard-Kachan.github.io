(function(){
    "use strict";

    resources.load([
        'assets/img/tiles.png'
    ]);

    resources.onReady(init);

    function init() {
        var tiles = SpriteSheet(resources.get('assets/img/tiles.png'), 500, 300, 50, 50);

        var game = new GameQQLianliankan(10, 50, tiles);
        createPuzzle(game);

        // Time variable
        var givenTime = 60 * 2;
        var startTime = Date.now();
        var elapsedTime = 0;

        var seconds = document.getElementsByClassName('seconds')[0];
        elapsedTime = Date.now() - startTime;
        seconds.innerHTML = givenTime - Math.floor(elapsedTime / 1000);

        // Message that pop up letting use if they lost or won
        var message = document.getElementsByClassName('message')[0];

        // Play, Pause, Restart button
        var playPauseRestart = document.getElementsByClassName('playPauseRestartBtn')[0];
        playPauseRestart.addEventListener("click", function(){
            if(game.isWon || game.isLost){
                // Reset time
                elapsedTime = 0;
                startTime = Date.now();
                // Clean all nodes
                // Reset needed values
                game.restart();
                // Create a new puzzle
                createPuzzle(game);
                // Message
                message.innerHTML = '';
                playPauseRestart.innerHTML = 'pause';
                // Unpause the game
                game.isPaused = false;
                game.c.style.opacity = 1;
            }else if(game.isPaused){
                game.isPaused = false;
                playPauseRestart.innerHTML = "pause";
                game.c.style.opacity = 1;
            }else if(!game.isPaused){
                game.isPaused = true;
                playPauseRestart.innerHTML = "play";
                game.c.style.opacity = 0.3;
            }
        }, false);

        // Add time button
        var addTime = document.getElementsByClassName('timeBtn')[0];
        addTime.addEventListener("click", function(){
            if(game.isPaused) return;
            startTime += 1000*10;
        }, false);

        // Unused show hint button
        //var showHint = document.getElementsByClassName('hintBtn')[0];
        //showHint.addEventListener("click", function(){
        //    if(game.isPaused) return;
        //
        //}, false);


        animate();
        function animate() {
            game.draw();

            // Loosing condition, running out of time
            if(givenTime - Math.floor(elapsedTime / 1000) <= 0){
                game.isLost = true;
                game.isPaused = true;
            }

            // If game id pause reserve the time
            if(game.isPaused){
                startTime = Date.now() - elapsedTime;
                game.c.style.opacity = 0.3;
            }else{
                elapsedTime = Date.now() - startTime;
                seconds.innerHTML = givenTime - Math.floor(elapsedTime / 1000);
            }

            if(game.isWon){
                message.innerHTML = 'you won!';
                game.c.style.opacity = 0.3;
                playPauseRestart.innerHTML = 'play again';
            }

            if(game.isLost){
                message.innerHTML = 'out of time ;_;';
                game.c.style.opacity = 0.3;
                playPauseRestart.innerHTML = 'play again';
            }

            requestAnimationFrame(animate);
        }
    }
})();
