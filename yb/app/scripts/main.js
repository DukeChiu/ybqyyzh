function choose(obj) {
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
    '           <div class="d6">\n' +
    '             <img src="./images/易查询.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">易查询</h></br></br>\n' +
    '                 石大易查询是由网络中心提供接口,石大易班</br>\n' +
    '                 发展中心技术部进行二次开发，为学生提供:</br>\n' +
    '                 空教室查询、成绩查询和课表查询的轻应用。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ysh[0] = '<a href="http://yb.upc.edu.cn/project/ShowTime/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/生活查询.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">生活查询</h></br></br>\n' +
    '                 生活查询是用来为学生提供基本查询的静态网页，现在能够</br>\n' +
    '                 查询荟萃和玉兰水房的开放时间，以及图书馆大门和各个书</br>\n' +
    '                 库的开放时间，还可以查询图书馆五楼机房的开放时间。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ysh[1] = '<a href="http://yb.upc.edu.cn/project/tongxunlu/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/通讯录.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">通讯录</h></br></br>\n' +
    '                 通讯录包括了各个办公处，各个值班室，各级组织，各个院</br>\n' +
    '                 部的各个专业及其辅导员的联系方式。可以通过此通讯录查</br>\n' +
    '                 询到校内几乎所有地方的电话，同时，也在不断添加完善。\n' +
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
    '           <div class="d6">\n' +
    '             <img src="./images/舌尖上的石大.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">舌尖上的石大</h></br></br>\n' +
    '                 一款专为石大学子吃饭准备的轻应用，根据新品，价格，口</br>\n' +
    '                 味，餐厅进行分类。还可以评论打分，选出自己最喜欢的菜</br>\n' +
    '                 品。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ysh[3] = '<a href="http://yb.upc.edu.cn/welcome/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/迎新系统.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">迎新系统</h></br></br>\n' +
    '                 新生入学有特别多的疑问和需要查询的东西，</br>\n' +
    '                 帮助新生解答疑问和查询，更好的融入学校生活。</br>\n' +
    '                 \n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[0] = '<a href="http://yb.upc.edu.cn:8080/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易抽奖.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">易抽奖</h></br></br>' +
    '                 易抽奖能在线创建抽奖，能自主设置奖项，设置开始和结束时间，填</br>\n' +
    '                 写奖项设定，设置各个奖项的中奖率，即可方便快捷的进行抽奖。</br>\n' +
    '                 极大的方便了学校各级组织举办活动，在线抽奖省时省力省材料。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[1] = '<a href="http://yb.upc.edu.cn:8082/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易签到.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2" >易签到</h></br></br>' +
    '                 易签到是为了一些活动、会议参与人数较多时方便签到的轻应用。通</br>\n' +
    '                 过创建一个活动，参与者扫描生成的二维码即代表签到完成。发布</br>\n' +
    '                 者可以查看签到者姓名，时间等。线上签到极大方便了会议统计。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[2] = '<a href="http://yb.upc.edu.cn/project/ballot/#/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易抽签.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">易抽签</h></br></br>\n' +
    '                 易抽签是为了解决抽签问题设置的在线抽签。可以设置</br>\n' +
    '                 人数，截止时间创建抽签，生成二维码扫描后，即可得</br>\n' +
    '                 知所抽签的数字。解决了一些活动分配任务问题。\n\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[3] = '<a href="http://yb.upc.edu.cn/project/borrowmaterial/#!/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/物资借用.png" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">物资借用</h></br></br>\n' +
    '                 物资借用是为易班会议室，桌凳，易班熊套装等物资借用</br>\n' +
    '                 的系统。学生可以通过此系统查看物资剩余并凭学生证进</br>\n' +
    '                 行线上预约，改变了以往去现场借用造成的统计麻烦。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[4] = '<a href="http://f.yiban.cn/iframe/error?error=e002" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/辅导员评价系统.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">辅导员评价系统</h></br>\n' +
    '                 </br>\n' +
    '                 形成监督机制，提高辅导员工作效率</br>\n' +
    '                 \n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ygj[5] = '<a href="" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易查询.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">备忘录</h></br></br>\n' +
    '                 备忘清单即备忘提醒，清晰规划，有趣的界面使完成计</br>\n' +
    '                 划变成一件有趣的事。对事情的记录，最大的特点是，</br>\n' +
    '                 把你做的事情的和未做的事情很清楚的显示出来。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ybz[0] = '<a href="http://yb.upc.edu.cn/project/ybjieshao/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易班使用指南.png" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">易班使用指南</h></br></br>\n' +
    '                 易班使用指南即为解决使用易班遇到的问题。不能认证，如</br>\n' +
    '                 何更换手手机号...等等，还有对轻博客，微社区，投票功能</br>\n' +
    '                 一系列功能的介绍，有了它，再也不用担心不会使用易班了。\n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ybz[1] = '<a href="http://yb.upc.edu.cn/project/yitext/#/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易文档.png" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">易文档</h></br></br>\n' +
    '                 此文档包括易班介绍，易班注册流程，和主要由易班</br>\n' +
    '                 技术部开发的一些轻应用，如易查询，生活查询等。</br>\n' +
    '                 \n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
ybz[2] = '<a href="https://o.yiban.cn/" class="a">\n' +
    '           <div class="d6">\n' +
    '             <img src="./images/易班开放平台.jpg" class="icon">\n' +
    '             <div class="d7">\n' +
    '               <p class="p2">\n' +
    '                 <h class="h2">易班开放平台</h></br></br>\n' +
    '                 易班给开发者的各种文档说明，帮助开</br>\n' +
    '                 发者更好的借助易班平台进行开发。</br>\n' +
    '                 \n' +
    '               </p>\n' +
    '             </div>\n' +
    '           </div>\n' +
    '         </a>\n' +
    '       </div>';
lshd[0] = ysh[3];
