(function ($) {

    $.pluginManager.extend('showTimestamp', {
        init: init,

        remove: remove
    });

    function init() {
        var $container = this.eq(0);

        $container.delegate('>input', 'click', function (e) {
            e.stopPropagation();

            var $button = $(this),
                $span = $button.next('span');

            $span.html(+new Date());
        });

        return this;
    }

    function remove() {
        var $container = this.eq(0);

        $container.find('span').html('');
        $container.undelegate();

        return this;
    }

} (jQuery));