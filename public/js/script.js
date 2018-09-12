! function(e) {
    e(document).ready(function() {
        e("ul.dropdown-menu [data-toggle=dropdown]").on("click", function(t) {
            t.preventDefault(), t.stopPropagation(), e(this).parent().siblings().removeClass("open"), e(this).parent().toggleClass("open")
        }), e("#build_desc, #test_desc, #document_desc, #share_desc").hide(), e("#one_design_img").show(), e(".map-container map area").mouseover(function() {
            var t = e(this).attr("href"),
                o = e(this).attr("id");
            e("#" + o + "_img").show().siblings(".hmapimg").hide(), e(" " + t + " ").show().siblings("section").hide()
        });
        var t = location.pathname;
        e(".nav li a").each(function() {
            var o = e(this);
            o.attr("href") == t && o.addClass("active")
        })
    })
}(jQuery), jQuery.gdprcookie.init({
    title: "",
    message: "We use cookies to make interactions with our websites and services easy and meaningful, to better understand how they are used and to tailor advertising. You can read more and make your cookie choices <a href='https://forum.raml.org/privacy'>here</a>. By continuing to use this site you are giving us your consent to do this.",
    submessage: "Please uncheck the cookies you don't like.",
    delay: 600,
    expires: 1,
    acceptBtnLabel: "X"
});