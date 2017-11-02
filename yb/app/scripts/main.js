var obj_ = '1';

function load() {

    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    document.addEventListener('touchend', touch, false);
    var endx;
    var startx;
    var starty;
    var endy;
    var x;
    var y;

    function touch(event) {
        var event = event || window.event;
        var oInp = document.getElementById(obj_);
        switch (event.type) {
            case 'touchstart':
                startx = parseInt(event.touches[0].clientX);
                starty = parseInt(event.touches[0].clientY);
                //oInp.innerHTML = (obj_++);
                break;
            case 'touchend':
                endx = parseInt(event.changedTouches[0].clientX);
                var change = parseInt(endx - startx);
                //oInp.innerHTML = obj_-(-1);
                if (-change > 0.4 * screen.width && obj_ < '5') {
                    obj_ -= -1;
                    oInp = document.getElementById(obj_);
                    choose(oInp);
                    //document.getElementById('1').innerHTML='no error';
                }
                if (change > 0.4 * screen.width && obj_ > '1') {
                    obj_ -= 1;
                    oInp = document.getElementById(obj_);
                    choose(oInp);
                }
                break;
            case 'touchmove':
                var cx = parseInt(event.touches[0].clientX - startx);
                var cy = parseInt(event.touches[0].clientY - starty);
                x = cx > 0 ? cx : -cx;
                y = cy > 0 ? cy : -cy;
                if (y < x)
                    event.preventDefault();
                break;
        }

    }
}

function choose(obj) {
    obj_ = obj.id;
    $('div').removeClass('d2_after');
    $(obj).addClass('d2_after');
    if (obj.id == '1') {
        var x = document.getElementById('m');
        var str = '';
        for (var i = 0; i < 1; ++i)
            str += yxx[i];
        x.innerHTML = str;
    }
    if (obj.id == '2') {
        var x = document.getElementById('m');
        var str = '';
        for (var i = 0; i < 4; ++i)
            str += ysh[i];
        x.innerHTML = str;
    }
    if (obj.id == '3') {
        var x = document.getElementById('m');
        var str = '';
        for (var i = 0; i < 6; ++i)
            str += ygj[i];
        x.innerHTML = str;
    }
    if (obj.id == '4') {
        var x = document.getElementById('m');
        var str = '';
        for (var i = 0; i < 3; ++i)
            str += ybz[i];
        x.innerHTML = str;
    }
    if (obj.id == '5') {
        var x = document.getElementById('m');
        var str = '';
        for (var i = 0; i < 1; ++i)
            str += lshd[i];
        x.innerHTML = str;
    }
}
var after = '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
var yxx = new Array();
var ysh = new Array();
var ygj = new Array();
var ybz = new Array();
var lshd = new Array();
yxx[0] = '<a href="https://oauth.yiban.cn/code/html?client_id=f41ab16a3604b2bc&redirect_uri=http://f.yiban.cn/iapp33017" class="a">\n' +
    '       <div class="d6 d61">\n' +
    '        <div class="d9 d91"><img src="./images/查询.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易查询</h></br></br>\n' +
    '             易查询由网络中心提供接口，易班</br>\n' +
    '             发展中心技术部进行二次开发，可</br>\n' +
    '             提供:空教室、成绩和课表的查询。\n' +
    '           </p>\n' +
    '           </div>\n' +
    '       </div>\n' +
    '       </a>';
ysh[0] = '<a href="http://yb.upc.edu.cn/project/ShowTime/" class="a">\n' +
    '<div class="d6 d61">\n' +
    '        <div class="d9 d91"><img src="./images/生活.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">生活查询</h></br></br>\n' +
    '             生活查询为学生提供基本查询，现可查</br>\n' +
    '             询：水房开放时间、图书馆大门和各个</br>\n' +
    '             书库以及图书馆五楼机房的开放时间。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ysh[1] = '<a href="http://yb.upc.edu.cn/project/tongxunlu/" class="a">\n' +
    '<div class="d6 d62">\n' +
    '        <div class="d9 d92"><img src="./images/通讯录.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">通讯录</h></br></br>\n' +
    '             通讯录包括了各个办公处、值班室、</br>\n' +
    '             院部和各级组织以及各专业辅导员的</br>\n' +
    '             联系方式，并在不断地添加完善中。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
/*ysh[2] = "<a href=\"\" class=\"a\">\n" +
    "           <div class=\"d6\">\n" +
    "             <img src=\"./images/通讯录.jpg\" class=\"icon\">\n" +
    "             <div class=\"d7\">\n" +
    "               <p class=\"p3\">\n" +
    "                 <h class=\"h1\">失物招领</h></br>\n" +
    "                 石大易招领专门用来丢失物品的招领，可以寻找物品也可以寻</br>\n" +
    "                 找主人。作为招领平台，信息齐全，方便简单，丢失东西，捡到</br>\n" +
    "                 得更加容易。这一平台与校学生会生活部结合，极大方便了石。\n" +
    "               </p>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "         </a>\n" +
    "       </div>";*/
ysh[2] = '<a href="http://yb.upc.edu.cn/project/deliciousfood/" class="a">\n' +
    '<div class="d6 d63">\n' +
    '        <div class="d9 d93"><img src="./images/舌尖石大.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">舌尖上的石大</h></br></br>\n' +
    '             一款专为石大学子吃饭准备的轻应</br>\n' +
    '             用，根据特点进行多种分类类。还</br>\n' +
    '             可评论打分，选择自己喜欢的菜品。\n' +
    '           </p>\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ysh[3] = '<a href="http://yb.upc.edu.cn/welcome/" class="a">\n' +
    '<div class="d6 d64">\n' +
    '        <div class="d9 d94"><img src="./images/迎新.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">迎新系统</h></br></br>\n' +
    '             迎新系统在新同学入学时提供各种必</br>\n' +
    '             要查询，和生活建议以及学校情况介</br>\n' +
    '             绍，以方便大一同学尽快融入生活。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[0] = '<a href="http://yb.upc.edu.cn:8080/" class="a">\n' +
    '<div class="d6 d61">\n' +
    '        <div class="d9 d91"><img src="./images/抽奖.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易抽奖</h></br></br>\n' +
    '             易抽奖能够在线设置抽奖，设置抽奖</br>\n' +
    '             时间、奖项和各奖项中奖率，方便快</br>\n' +
    '             捷。极大便利了各组织活动的开展。\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[1] = '<a href="http://yb.upc.edu.cn:8082/" class="a">\n' +
    '<div class="d6 d62">\n' +
    '        <div class="d9 d92"><img src="./images/签到.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易签到</h></br></br>\n' +
    '             易签到是为了方便一些参与人数较多</br>\n' +
    '             的活动、会议的签到，通过扫描二维</br>\n' +
    '             码，能为组织者提供了极大的便捷。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[2] = '<a href="http://yb.upc.edu.cn/project/ballot/#/" class="a">\n' +
    '<div class="d6 d63">\n' +
    '        <div class="d9 d93"><img src="./images/抽签.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易抽签</h></br></br>\n' +
    '             易抽签可提供线上抽签，能够设置抽</br>\n' +
    '             签人数，通过扫描二维码，过程透明</br>\n' +
    '             公正，作为解决实际问题的得力工具。\n' +
    '             </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[3] = '<a href="http://yb.upc.edu.cn/project/borrowmaterial/#!/" class="a">\n' +
    '<div class="d6 d64">\n' +
    '        <div class="d9 d94"><img src="./images/物资.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">物资借用</h></br></br>\n' +
    '             物资借用为同学们提供借用易班会议</br>\n' +
    '             室、桌凳、易班熊套装的渠道，凭学</br>\n' +
    '             生证借用，方便了诸多活动的开展。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[4] = '<a href="http://f.yiban.cn/iframe/error?error=e002" class="a">\n' +
    '<div class="d6 d65">\n' +
    '        <div class="d9 d95"><img src="./images/辅导员.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">辅导员评价系统</h></br></br>\n' +
    '             辅导员评价系统是易班为学生开辟的</br>\n' +
    '             对辅导员工作做出评价的通道，通过</br>\n' +
    '             该系统，可对辅导员工作更好的了解。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[5] = '<a href="http://f.yiban.cn/iframe/error?error=e002" class="a">\n' +
    '<div class="d6 d61">\n' +
    '        <div class="d9 d91"><img src="./images/失物招领.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">备忘录</h></br></br>\n' +
    '             备忘清单即备忘提醒，清晰规划，可记</br>\n' +
    '             录自己为计划和打算，应用能够清楚的</br>\n' +
    '             划分出完成和未完成的事并显示出来。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ybz[0] = '<a href="http://yb.upc.edu.cn/project/ybjieshao/" class="a">\n' +
    '<div class="d6 d61">\n' +
    '        <div class="d9 d91"><img src="./images/使用指南.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易班使用指南</h></br></br>\n' +
    '             易班使用指南能解决在易班使用过程中</br>\n' +
    '             遇到的常见问题，并对一些相关功能做</br>\n' +
    '             处介绍，能方便大家更好的使用易班。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ybz[1] = '<a href="http://yb.upc.edu.cn/project/yitext/#/" class="a">\n' +
    '<div class="d6 d62">\n' +
    '        <div class="d9 d92"><img src="./images/文档.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易文档</h></br></br>\n' +
    '             易文档包括易班介绍、易班注册流</br>\n' +
    '             程和主要由易班技术部开发的一些</br>\n' +
    '             轻应用，如易查询、生活查询等。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ybz[2] = '<a href="https://o.yiban.cn/" class="a">\n' +
    '<div class="d6 d63">\n' +
    '        <div class="d9 d93"><img src="./images/开放平台.png" class="icon"></div>\n' +
    '         <div class="d7">\n' +
    '           <p class="p1">\n' +
    '             <h class="h1">易班开放平台</h></br></br>\n' +
    '             易班开放平台主要针对开发者提供帮</br>\n' +
    '             助，提供一些接口和平台使用说明，</br>\n' +
    '             能让开发者更好的使用和借助易班。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
lshd[0] = ysh[3];