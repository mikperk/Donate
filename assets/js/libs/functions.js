function loadPage(page, controller, callback) {
    blockScreen();

    $('#jas-content').load('index.php?route=' + controller, function() {
        setPage(page);
        callback();

        // set active menu item
        $('.nav li').removeClass('active');
        $('.nav li#' + page).addClass('active');

        $('.left-side').append('<div style="position: absolute; margin-top: 10px; font-size: 10px; text-transform: uppercase;">Autorius: <a href="http://justas.asmanavicius.lt" target="_blank">Justas Ašmanavičius</a></div>');

        $("html, body").animate({ scrollTop: 0 }, "slow");

        unblockScreen();
    });
}

function loadView(view) {
    $.getScript('assets/js/views/' + view + '.view.js');
}

function getPage() {
    var page = window.location.hash;
    page = page.replace('#', '');

    return page;
}

function getPageByKey(key) {
    if (getPage() == key) return true;

    return false;
}

function setPage(page) {
    window.location.hash = page;
}

function logout() {
    $.post('index.php', { logout: true }, function(response) {
        if (response.success)
            loadView('login');
    });
}

function loadCaptcha(key) {
    Recaptcha.create(key,
        "captcha", {
            theme: "custom",
            callback: Recaptcha.focus_response_field
        }
    );
}

function formatMessage(message, type) {
    return '<div class="alert alert-' + type + '">' + message + '</div>';
}

function blockScreen() {
    $.blockUI({
        message: '<span style="font-size: 30px;"></span>',
        overlayCSS:  {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'pointer'
        },
        css: {
            padding:        0,
            margin:         0,
            width:          '30%',
            top:            '40%',
            left:           '35%',
            textAlign:      'center',
            color:          '#000',
            border:         'none',
            backgroundColor:'transparent',
            cursor:         'pointer'
        },
    });
}
function unblockScreen() {
    $.unblockUI();
}

function setLanguage(code) {
    blockScreen();

    $.post('index.php', { set_language: true, language: code }, function(response) {
        if (response.success) {
            window.location.reload();
        }
    });
}

(function($){
  $.isBlank = function(obj){
    return(!obj || $.trim(obj) === "");
  };
})(jQuery);

jQuery.fn.center = function (element) {
    this.css("top", Math.max(0, (($(element).height() - $(this).outerHeight()) / 2) +
                                                $(element).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(element).width() - $(this).outerWidth()) / 2) +
                                                $(element).scrollLeft()) + "px");
    return this;
}
