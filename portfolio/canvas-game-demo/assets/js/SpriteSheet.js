(function(){
    "use strict";

    function SpriteSheet(img, width, height, tileWidth, tileHeight){
        var images = [];

        var horizontal = width / tileWidth;
        var vertical = height / tileHeight;

        for(var i = 0; i < vertical; i++){
            for(var j = 0; j < horizontal; j++){
                images.push({
                    imgID: img + images.length,
                    img: img,
                    sx: j * tileWidth,
                    sy: i * tileHeight,
                    sw: tileWidth,
                    sh: tileHeight
                });
            }
        }

        return images;
    }

    window.SpriteSheet = SpriteSheet;
})();