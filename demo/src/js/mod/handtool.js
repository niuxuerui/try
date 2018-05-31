define(["jquery", "handlebars"], function($, hand) {

    function render(data, $source, $target, isRefresh) {
        var source = $source.html(); //1.

        var template = hand.compile(source); //2.


        hand.registerHelper("add2", function(index) {
            return index + 2;
        })

        hand.registerHelper("limit", function(index) {
            if (index == 0) {
                return { "hehe": "竟然还有这种用法" }
            } else {
                return false
            }
        })




        var html = template(data); //3.
        if (isRefresh) {
            $target.html(html);
        } else {
            $target.append(html)
        }

    }

    return render;
});