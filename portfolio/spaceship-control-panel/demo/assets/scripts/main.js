// Wait for DOM to Load
jQuery(function($) {

    //var tl = new TimelineMax();
    var dotContainer = $('.cadets');
    var socket = io();
    var cycleInterval = null;
    var idleTimer = null;
    var randomThree;
    var designerData = [];
    var developerData = [];

    var studentData = [
        {"id":"5","studentName":"Dylon Alkerton","title":"Designer","position":"Designer","image":"1"},
        {"id":"2","studentName":"Jesse \"Batman\" Sinfield","title":"Developer","position":"Front-End Developer","image":"2"},
        {"id":"16","studentName":"Stefano Lombardo","title":"Designer","position":"Interactive Designer","image":"3"},
        {"id":"10","studentName":"Dustin Gamble","title":"Designer","position":"Interactive Designer","image":"4"},
        {"id":"1","studentName":"Ariel Gelbard","title":"Developer","position":"Mobile Developer","image":"5"},
        {"id":"17","studentName":"Hemachandra Dewamuni","title":"Developer","position":"Front-End Developer","image":"6"},
        {"id":"18","studentName":"Fatemah Manji","title":"Designer","position":"Interactive Designer","image":"7"},
        {"id":"19","studentName":"Tanya Grimes","title":"Developer","position":"Full Stack Developer","image":"8"},
        {"id":"3","studentName":"Andres Hernandez","title":"Designer","position":"Interactive Designer","image":"9"},
        {"id":"20","studentName":"Emmanuel Amponsah","title":"Designer","position":"Front-End Developer","image":"10"},
        {"id":"4","studentName":"Emerson Stewart","title":"Developer","position":"iOS Developer","image":"11"},
        {"id":"12","studentName":"Elicia Durtnall","title":"Designer","position":"UX Designer","image":"12"},
        {"id":"15","studentName":"Eduard Kachan","title":"Developer","position":"Front-End Developer","image":"13"},
        {"id":"7","studentName":"James McGaghey","title":"Developer","position":"Web Developer","image":"14"},
        {"id":"14","studentName":"Tristan Darwent","title":"Developer","position":"Interactive Developer","image":"16"},
        {"id":"8","studentName":"Leah de Vries","title":"Designer","position":"Interactive Designer","image":"17"},
        {"id":"13","studentName":"Moin Patel","title":"Designer","position":"Interactive Designer","image":"18"},
        {"id":"9","studentName":"Will Du","title":"Designer","position":"Interactive Designer","image":"20"},
        {"id":"21","studentName":"Katelyn Chrissikos","title":"Designer","position":"Designer","image":"21"},
        {"id":"11","studentName":"Lana Milley","title":"Designer","position":"Interactive Designer","image":"22"},
        {"id":"6","studentName":"Priscilla Cunningham","title":"Designer","position":"Designer","image":"23"}
    ];



    // create arrays for designers and developers
    for(var i = 0; i < studentData.length; i++) {

        // to accommodate hybrids
        switch (studentData[i].title.toUpperCase()) {
            case 'DEVELOPER':
                developerData.push(studentData[i]);
                break;
            case 'DESIGNER':
                designerData.push(studentData[i]);
                break;
            default:
                developerData.push(studentData[i]);
                designerData.push(studentData[i]);
        }

    }

    // listen for event connected to pass all data
    socket.on('showAll', function(){

        //console.log(data.results);

        getRandomStudents();

        clearAndReset();

    });

    // listen for event connected to pass developer data
    socket.on('showDev', function(){

        //console.log(data.results);

        getRandomDevelopers();

        clearAndReset();

    });

    // listen for event connected to pass designer data
    socket.on('showDes', function(){

        //console.log(data.results);

        getRandomDesigners();

        clearAndReset();

    });


    // initial declaration to start cycling through all students
    // set up interval to randomly display images that can be paused/canceled on button click
    cycleInterval = setInterval( function() {

        getRandomStudents();

    }, 10000);


    function resetInterval() {

        // set up interval to randomly display images that can be paused/canceled on button click
        cycleInterval = setInterval( function() {

            getRandomStudents();

            //console.log('off');

            socket.emit('stopBlinking', 'off');

        }, 10000);

    }

    // generates three students by id randomly
    function generateRandomPositions(filter) {

        var dataLength;
        randomThree = [];

        switch (filter) {

            case 2:
                dataLength = developerData.length;
                break;
            case 3:
                dataLength = designerData.length;
                break;
            case 1: default:
            dataLength = studentData.length;
        }

        while ( randomThree.length < 3 ){

            //CHANGE TO PROPER NUMBER INSTEAD OF 21
            var randomNumber = Math.floor( Math.random() * dataLength );
            var found = false;

            for ( var i = 0; i < randomThree.length; i++ ){
                if ( randomThree[i] == randomNumber ) {
                    found = true;
                    break;
                }
            }

            if ( !found )
                randomThree[randomThree.length] = randomNumber;
        }

        //console.log(randomThree);

        return randomThree;
    }

    function getRandomStudents() {
        randomThree = generateRandomPositions(1);
        randomStudents = [];

        // get a promise of info retrieved from database query of all students
        // promise = queryAll(randomThree);
        // showPromisedData(promise);

        for(var i = 0; i < studentData.length; i++) {
            for (var j = 0; j < randomThree.length; j++) {
                if(i === randomThree[j]) {
                    randomStudents.push(studentData[i]);
                }
            }
        }

        showData(randomStudents);
    }
    getRandomStudents()
    function getRandomDevelopers() {
        randomThree = generateRandomPositions(2);
        randomDevelopers = [];

        // get a promise of info retrieved from database query of all students
        // promise = queryAll(randomThree);
        // showPromisedData(promise);

        for(var i = 0; i < developerData.length; i++) {
            for (var j = 0; j < randomThree.length; j++) {
                if(i === randomThree[j]) {
                    randomDevelopers.push(developerData[i]);
                }
            }
        }

        showData(randomDevelopers);
    }

    function getRandomDesigners() {
        randomThree = generateRandomPositions(3);
        randomDesigners = [];

        // get a promise of info retrieved from database query of all students
        // promise = queryAll(randomThree);
        // showPromisedData(promise);

        for(var i = 0; i < designerData.length; i++) {
            for (var j = 0; j < randomThree.length; j++) {
                if(i === randomThree[j]) {
                    randomDesigners.push(designerData[i]);
                }
            }
        }

        showData(randomDesigners);
    }

    function clearAndReset() {

        // kill all intervals and timers
        if ( cycleInterval != null )
            clearInterval(cycleInterval);

        if ( idleTimer != null )
            clearTimeout(idleTimer);

        // set timer to start cycleInterval
        idleTimer = setTimeout( function() {
            resetInterval();
        }, 10000);

    }

    //// calls to database to retrieve info on three randomly selected students
    //function queryAll(data) {
    //
    //    // ajax call that makes request and returns a promise
    //    return $.ajax({
    //        url: '/',
    //        type: 'get',
    //        data: data
    //    });
    //
    //}

    //// displays data from promise with animation
    //function showPromisedData(promise) {
    //
    //    // http://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success
    //
    //    promise.success(function(data) {
    //
    //        var i = 0;
    //        var tempData = randomThree;
    //
    //        // REPLACE WITH ACTUAL DATA
    //
    //        // display new image for each box
    //        $('.cadets img').each(function() {
    //
    //            $(this).attr('src', '/assets/images/students/blogPhoto-' + tempData[i] + '.jpg');
    //            i ++;
    //        });
    //
    //        animateStudents();
    //
    //    });
    //
    //}

    // displays data from button click with animation
    function showData(data) {


        $('section').removeClass('slideIn').addClass('slideOut');
        window.setTimeout(function(){

            $('section').each(function(index, element) {

                $('img', this).attr('src', 'assets/images/students/' + data[index].image + '.png');

                $('h1', this).html(data[index].studentName);
                $('h2', this).html(data[index].position);

                $('.yellow_1', this).attr('style', 'animation-duration: ' + (1 + Math.random()) + 's');
                $('.yellow_2', this).attr('style', 'animation-duration: ' + (1 + Math.random()) + 's');
                $('.red_1', this).attr('style', 'animation-duration: ' + (2 + Math.random() * 2) + 's');
                $('.red_2', this).attr('style', 'animation-duration: ' + (2 + Math.random() * 2) + 's');

                console.log(data[index].studentName + ': ' + data[index].title);
                $(this).removeClass('slideOut').addClass('slideIn');
            });
        }, 1400);


        //animateStudents();

    }

    // animates in student slides
    function animateStudents() {

        // animation of boxes
        TweenMax.staggerFrom('section', 0.5, {
            opacity: 0,
            y: 200
        }, 0.2);

    }

    //// creates particle animation FIX THIS
    //function getParticlesAnimation() {
    //
    //    //var particlesTimeline = new TimelineLite();
    //    var particlesTimeline = new TimelineMax({ repeat: -1 });
    //    var i = 200;
    //    var radius = $( document ).width() * 0.5;
    //    var centerX= $( document ).width() * 0.5;
    //    var centerY = $( document ).height() * 0.5;
    //    var dots = [];
    //    var rawDots = [];
    //
    //    while (--i > -1) {
    //        var angle = Math.random() * Math.PI * 2;
    //        var insertionTime = i * 0.015;
    //
    //        dot = document.createElement('img');
    //        dot.src = '/assets/images/dot.png';
    //        dot.id = 'dot' + i;
    //        dotContainer.append(dot);
    //        dot.style.cssText = 'position:absolute; left:' + centerX + 'px; top:' + centerY + 'px; width:1px; height:1px;';
    //
    //
    //        particlesTimeline.from(dot, 0.05, {opacity:0, immediateRender:true}, insertionTime);
    //
    //        particlesTimeline.to(dot, .7, {left:Math.cos(angle) * radius + centerX,
    //            top:Math.sin(angle) * radius + centerY,
    //            width:22,
    //            height:22,
    //            //repeat: -1,
    //            ease:Cubic.easeIn
    //        }, insertionTime);
    //
    //    }
    //    return particlesTimeline;
    //}


    // tl.add( getParticlesAnimation()) //add the first particle timeline
    // tl.add( getParticlesAnimation(), 2.5) //add the second particle timeline at a time of 2.5 seconds

    //////////////////////
    //BACKGROUND STARS//
    //////////////////////

    var starColors = ['White', 'LightBlue', 'LightYellow'];

    for (var i = 0; i < 666; i++){
        var width = Math.random()*2+1;
        var duration = Math.random()*10+10;
        var delay = Math.random()*5+5;
        var color = Math.floor(Math.random()*3);
        $('.stars').append( '<div' +
            ' class="star"' +
            ' style="' +
                'width:' + width + 'px;' +
                'height:' + width + 'px;' +
                'top:' + Math.random()*100 + '%;' +
                'left:' + Math.random()*100 + '%;' +
                'background:' + starColors[color] +
                'animation-delay:' + delay + 's;' +
                'animation-duration:' + duration + 's;' +
            '">' +
        '</div>');
    }




});