$(function () {
    $('.code').on('click', function (e) {
        e.preventDefault();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(document).on('keyup', function (e) {
    if (e.key === "Escape") {
        $('#toast').toast('hide');
    }
});