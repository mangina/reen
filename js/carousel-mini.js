$(document).ready(function(){

    var t = setInterval(function(){
        $(".latest-works__carousel-items .latest-works__carousel-block").eq(-1).clone().prependTo(".latest-works__carousel-items");
        $(".latest-works__carousel-items").css({"left":"-222px"});
        $(".latest-works__carousel-items").animate({left: "0px"}, 200);
        $(".latest-works__carousel-items .latest-works__carousel-block").eq(-1).remove();
    },5000);

    $(".latest-works__carousel__button-right").click(function(){
        $(".latest-works__carousel-items").animate({left: "-222px"}, 200);
        setTimeout(function () {
            $(".latest-works__carousel-items .latest-works__carousel-block").eq(0).clone().appendTo(".latest-works__carousel-items");
            $(".latest-works__carousel-items .latest-works__carousel-block").eq(0).remove();
            $(".latest-works__carousel-items").css({"left":"0px"});
        }, 200);
    });

    $(".latest-works__carousel__button-left").click(function(){
        $(".latest-works__carousel-items .latest-works__carousel-block").eq(-1).clone().prependTo(".latest-works__carousel-items");
        $(".latest-works__carousel-items").css({"left":"-222px"});
        $(".latest-works__carousel-items").animate({left: "0px"}, 200);
        $(".latest-works__carousel-items .latest-works__carousel-block").eq(-1).remove();
    });

    $(".latest-works__carousel-wrapper").hover(
        function(){
            clearInterval(t);
        },function(){
            var t = setInterval(function(){
                $(".latest-works__carousel-items .latest-works__carousel-block").eq(-1).clone().prependTo(".latest-works__carousel-items");
                $(".latest-works__carousel-items").css({"left":"-222px"});
                $(".latest-works__carousel-items").animate({left: "0px"}, 200);
                $(".latest-works__carousel-items .latest-works__carousel-block").eq(-1).remove();
            },5000);
        });




});