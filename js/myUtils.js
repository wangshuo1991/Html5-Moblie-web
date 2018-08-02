/**
 * Created by wangshuo on 2018/5/15.
 */

"use strict";


window.onload = function () {
// 根据手机屏幕，调整html的font-size，以便达到手机屏幕适配
    ~function () {

        var designWidth = 320, deviceWidth = document.documentElement.clientWidth, scaleRatio = deviceWidth / designWidth;
        document.documentElement.style.fontSize = scaleRatio * 100 + "px";
        /* console.log(deviceWidth);
         console.log(scaleRatio);*/
    }();


// 首页 图片加载
    var menu_box = document.getElementById("menu_box");
    /*    console.log(menuBox);*/
    var menus = menu_box.getElementsByTagName("a");
    ~function () {

        // 添加 8 个快捷菜单按钮
        var str = "", txtArr = ["账户信息", "体检预约", "查看报告", "家属预约", "注意事项", "服务时间", "帮助说明", "安全退出"];
        for (var i = 0, len = menus.length; i < len; i++) {
            str = "<div></div><p>" + txtArr[i] + "</p>";
            menus[i].innerHTML = str;
        }

        var divs = menu_box.getElementsByTagName("div");

        for (var j = 0, divLen = divs.length; j < divLen; j++) {
            var imgDiv = divs[j];
            imgDiv.style.background = "url(images/0" + j + ".png) no-repeat center center";
            imgDiv.style.backgroundSize = "contain";
            /*console.log(imgDiv);*/
        }

    }();





};






