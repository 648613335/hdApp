/// <reference path="jquery-1.8.2.js" />

var z = /^[1-9]\d*$/;

$(function () {
    ios_android();
    GetSize();
    //返回上一页
    $(".main-header-title-left").click(function () {
        javascript: history.back(-1);
    });
    $(".register_input").focus(function () {
        $(".main_header_style").css("position", "absolute");
    });
    $(".register_input").blur(function () {
        $(".main_header_style").css("position", "fixed");
    });

})
function GetSize() {
    var width = $("body").outerWidth();
    //width > 640 ? width = 640 : null;
    //width < 320 ? width = 320 : null;
    $('html').css({ 'font-size': (width * (62.5 / 320)) + '%' });
}
//判断 ios 还是 android
function ios_android() {
    var isiOS = navigator.userAgent.match("iPad") || navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPod"),
        isAndroid = navigator.userAgent.match("Android"),
        isDesktop = !isiOS && !isAndroid;
    if (isiOS) {

    } else {
        //首页 header 购物车 数量
        $(".cartnumber span").css({ "line-height": "1.5rem", "font-size": "0.9rem" });
        //选择租期
        $(".product-popup-date ul li").css({ "line-height": "3rem" });
    }
}

//------------    注册页面 ↓   -------------------------------------------------------
function index_foot_tab_click() {

}

//------------    注册页面 ↑   -------------------------------------------------------
//------------    注册页面 ↓   -------------------------------------------------------
//注册点击 check
function check_click(e) {
    var text = "register_on";
    if ($(e).attr("src").indexOf("register_on") > 0) {
        text = "register";
        $(".register_but").css({ "background-color": "#b1b1b1" });
    } else {
        $(".register_but").css({ "background-color": "#ff5614" });
    }
    $(e).attr("src", 'resource/img/' + text + '.png');
} 

//验证码等待时间
function code_click() {
    $(".code_but").attr("onclick", "");
    var s = 60;
    var setIntervalM = setInterval(function () {
        s = s - 1;
        $(".code_but").val(s + "秒");
        if (s <= 0) {
            clearInterval(setIntervalM);
            $(".code_but").val("获取验证码");
        }
    }, 1000);
}

//------------    注册页面 ↑   -------------------------------------------------------
//------------    订单列表 ↓   -------------------------------------------------------

//订单状态查询点击事件
function order_tab_click(e) {
    $("#order_tab ul li").attr("data-style","");
    $(e).attr("data-style", "color");
}

//------------    订单列表 ↑   -------------------------------------------------------
//------------    产品详情 ↓   -------------------------------------------------------

//头部切换
function product_tab_click(e) {
    $("#product_nav ul li").attr("data-style", "");
    $(".product_img,.product_info,.product_specifications,.product-recommend").css("display", "none");
    $(e).attr("data-style", "bottom");
    $("." + $(e).attr("data-class")).css({ "display": "block" });
    if ($(e).attr("data-class") == "product_info") {
        $(".main-header-a").css("height","5.6rem");
    } else {
        $(".main-header-a").css("height", "6.5rem");
    }
}
//选择租期弹窗
function product_leaseterm() {
    $(".product_mask,.product_popup").css({ "display": "block" });
}
//收藏
function product_collection(e) {
    if ($(e).find("img").attr("src").indexOf("shou_on") >0) {
        $(e).find("img").attr("src", "resource/img/shou.png");
    } else {
        $(e).find("img").attr("src", "resource/img/shou_on.png");
    }
}
//数量选择
function product_number(e) {
    var number = $(e).parent().children("li[data-style=number]");
    if ($(e).text() == "-" && parseInt(number.text()) != 0) {
        number.text(parseInt(number.text()) - 1);
    } else if ($(e).text() == "+") {
        number.text(parseInt(number.text()) + 1);
    }
}
//点击 遮罩层阴影 隐藏租期弹窗
function product_mask_click() {
    $(".product_mask,.product_popup").css({ "display": "none" });
}
//租期选择
function product_data_click(e) {
    $("#product_data ul li").css({ "background-color": "", "color": "#656565" });
    $(e).css({ "background-color": "#ff5614","color":"white" });
}
//确定
function product_save() {
    $(".product_mask,.product_popup").css({ "display": "none" });
}
//------------    产品详情 ↑   -------------------------------------------------------
//------------    收货地址 ↓   -------------------------------------------------------

//收货地址默认值
function address_default(e) {
    if ($(e).attr("src").indexOf("switch_on") > 0) {
        $(e).attr("src", "resource/img/switch.png")
    } else {
        $(e).attr("src", "resource/img/switch_on.png")
    }
}

//------------    收货地址 ↑   -------------------------------------------------------
//------------    充值 ↓   -------------------------------------------------------

//充值弹窗
function window_open(e) {
    $("#main_mask").css("display", "block");
    $("#"+e).css("display","block");
}
function window_close(e) {
    $("#main_mask").css("display", "none");
    $("#"+e).css("display", "none");
}
//------------    充值 ↑   -------------------------------------------------------
//------------    搜索 ↓   -------------------------------------------------------

//关注
function follow_click(e) {
    if ($(e).attr("src").indexOf("follow_on") > 0) {
        $(e).attr("src", "resource/img/follow.png")
    } else {
        $(e).attr("src", "resource/img/follow_on.png")
    }
}
//------------    搜索 ↑   -------------------------------------------------------
//------------    优惠券 ↓   -------------------------------------------------------

//优惠券 tab 点击
function coupon_tab_click(e) {
    $("#coupon_nav label").attr("data-style", "");
    $(e).attr("data-style", "yes");
}
//------------    优惠券 ↑   -------------------------------------------------------

//------------    确认订单 ↓   -------------------------------------------------------
//优惠券选择
function confirm_coupon_click() {
    if ($("#confirm_coupon_img").attr("src").indexOf("prod_g") > 0) {
        $("#confirm_coupon_img").attr("src", "resource/img/prod_j.png");
        $("#confirm_coupon").css({ "display": "none" });
    } else {
        $("#confirm_coupon_img").attr("src", "resource/img/prod_g.png");
        $("#confirm_coupon").css({ "display": "block" });
    }
}
//勾选
function confirm_coupon_check(e) {
    if ($(e).attr("src").indexOf("select_on") > 0) {
        $(".confirm_coupon_check").attr("src", "resource/img/select.png")
    } else {
        $(".confirm_coupon_check").attr("src", "resource/img/select.png")
        $(e).attr("src", "resource/img/select_on.png");
    }
}
//------------    确认订单 ↑   -------------------------------------------------------


//------------    购物车 ↓   -------------------------------------------------------
//编辑
function shopCart_right_click(e) {
    if ($(e).text() == "编辑") {
        $(e).text("完成");
        $("#shopcart_foot_but").val("删除");
        $(".shopcart_list_del").css("display", "block");
        $("#shopcart_foot_price").css("display","none");
    } else {
        $(e).text("编辑");
        $("#shopcart_foot_but").val("去结算");
        $(".shopcart_list_del").css("display", "none");
        $("#shopcart_foot_price").css("display", "block");
    }
}
//父节点 点击 判断子节点
function shop_checkall_click(e) {
    if ($(e).attr("src").indexOf("select_on") > 0) {
        $(".shop_checkall,.shop_check").attr("src", "resource/img/select.png");
    } else {
        $(".shop_checkall,.shop_check").attr("src", "resource/img/select_on.png");
    }
}
//子节点 点击 判断 父节点
function shop_checkchild_click(e) {
    $(e).attr("src").indexOf("select_on") > 0 ? $(e).attr("src", "resource/img/select.png") : $(e).attr("src", "resource/img/select_on.png");
    var count =0
    for (var i = 0; i < $(".shop_check").length; i++) {
        if ($(".shop_check").eq(i).attr("src").indexOf("select_on") < 0) {
            count ++;
        }
    }
    if (count == 0) {
        $(".shop_checkall").attr("src", "resource/img/select_on.png");
    } else {
        $(".shop_checkall").attr("src", "resource/img/select.png");
    }
}
//------------    购物车 ↑   -------------------------------------------------------

//------------    我的 ↓   -------------------------------------------------------
//会员效验
function my_switch_click(e) {
    if ($(e).attr("src").indexOf("switch_on") <=0) {
        $(e).attr("src", "resource/img/switch_on.png");
        window_open('recharge');

        //显示 我的账户资产
        $(".my_assets_dis").css("display", "table-row");

    } else {
        $(e).attr("src", "resource/img/switch.png");

        $(".my_assets_dis").css("display", "none");
    }
}

//我的 状态选择
function my_tab_click(e) {
    $("#my_tab tr td[data-a=a]").css("color", "#323232");
    $(e).css("color", "#ff5614");
}

//推荐码
function my_recommendCode_click(e) {
    if ($("#my_recommendCode_p").attr("src").indexOf("prod_j") > 0) {
        $("#my_recommendCode").css("display", "table-row");
        $("#my_recommendCode_p").attr("src", "resource/img/prod_g.png");
    } else {
        $("#my_recommendCode").css("display", "none");
        $("#my_recommendCode_p").attr("src", "resource/img/prod_j.png");
    }
}
//------------    我的 ↑   -------------------------------------------------------