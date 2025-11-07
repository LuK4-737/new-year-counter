// $(document).ready(function() {
//     // სამიზნე თარიღი შეცვლილია 2026 წლის 1 იანვრამდე
//     var targetDate = new Date('January 1, 2026 00:00:00');
//     var now = new Date();

//     // დარჩენილი დრო წამებში
//     var remainingTime = Math.floor((targetDate - now) / 1000);

//     // FlipClock-ის კონფიგურაცია
//     var clock = $('#clock').FlipClock(remainingTime, {
//         clockFace: 'DailyCounter',
//         countdown: true,            
//         language: 'en',           
//     });

//     clock.start();

//     // დროის შემოწმება ყოველ წამს
//     var timeInterval = setInterval(function() {
//         var time = clock.getTime();
//         if (time.time <= 0) {
//             clearInterval(timeInterval);
//             $('#header').text("Happy New Year!!!");
//             $('#info').text("Countdown starts again tomorrow!");
//         }
//     }, 1000);
// });




$(document).ready(function() {
    // Set the target date for countdown
    var targetDate = new Date('January 1, 2026 00:00:00');
    var now = new Date();

    // Time remaining in seconds
    var remainingTime = Math.floor((targetDate - now) / 1000);

    // Initialize FlipClock
    var clock = $('#clock').FlipClock(remainingTime, {
        clockFace: 'DailyCounter',
        countdown: true,            
        language: 'en',            
    });

    clock.start();

    // Time check every second
    var timeInterval = setInterval(function() {
        var time = clock.getTime();
        if (time.time <= 0) {
            clearInterval(timeInterval);
            $('#header').text("Happy New Year!!!");
            $('#info').text("Countdown starts again tomorrow!");
        }
    }, 1000);

    // Handle the play button
    $('#play-music-btn').click(function() {
        var audio = $('#background-music')[0];
        audio.play();
        $(this).hide();  // Hide the play button once clicked
    });

    // Adjust volume based on user input
    $('#volume').on('input', function() {
        var volume = $(this).val();
        $('#background-music')[0].volume = volume;
    });
});



