
function setCookie(name, value) {
    /*  
    *--------------- setCookie(name,value) -----------------  
    * setCookie(name,value)  
    * 功能:设置得变量name的值  
    * 参数:name,字符串;value,字符串.  
    * 实例:setCookie('username','baobao')  
    *--------------- setCookie(name,value) -----------------  
    */
    var Days = 30; //此 cookie 将被保存 30 天  
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    //location.href = "treemain.html"; //接收页面.  
}
function getCookie(name) {
    /*  
    *--------------- getCookie(name) -----------------  
    * getCookie(name)  
    * 功能:取得变量name的值  
    * 参数:name,字符串.  
    * 实例:alert(getCookie("baobao"));  
    *--------------- getCookie(name) -----------------  
    */
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;
}
function Onpost(url,sdata,btn) {

    var json = null;
    axios({
        url: url,
        method: "post",
        data: sdata,
        headers: {
            "Content-type": "application/json",
        }
 }).then(res=> {
        this.msg = res.data;
        json = this.msg;
        btn(json);
    });
    return json;
}
function Onpost1(url, sdata,token, btn) {

    var json = "Null";
    axios({
        url: url,
        method: "post",
        data: sdata,
        headers: {
            "Content-type": "application/json",
            token:token
        }
    }).then(res=> {
        this.msg = res.data;
        json = this.msg;
        btn(json);
    });
    return json;
}
function Onput1(url, sdata, token, btn) {

    var json = "Null";
    axios({
        url: url,
        method: "put",
        data: sdata,
        headers: {
            "Content-type": "application/json",
            token: token
        }
    }).then(res=> {
        this.msg = res.data;
        json = this.msg;
        btn(json);
    });
    return json;
}


function Onget(url, token, btn) {

    var json = "Null";
    axios({
        url: url,
        method: "get",
        data: {
        },
        headers: {
            "Content-type": "application/json",
            token: token
        }
    }).then(res=> {
        this.msg = res.data;
        json = this.msg;
        btn(json);
    });
    return json;
}

function Onget1(url,btn) {

    var json = "Null";
    axios({
        url: url,
        method: "get",
        data: {
        },

        //headers: {
        // //"Content-type": "application/json",
        //"Access-Control-Allow-Origin": "*"
        //}
    }).then(res=> {
        this.msg = res.data;
        json = this.msg;
        btn(json);
    });
    //return json;
}

 function timestampToTime (timestamp) {
    var date = new Date(timestamp);
    fmt='yyyy-MM-dd hh:mm';
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  };
  for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
      }
  }
  return fmt;
}


// function getNumber1(origin, n) {
//         var target;
//         var origin1 = origin.toString();
//         if (origin1.indexOf(".") != -1) // true)
//         {
//             var t = origin1.split(".");
//             if (t[1].length <= n) {
//                 var ss="" ;
//                 for (var i = 0; i < n - t[1].length; i++) {
//                     origin1 += "0";
//                 }
//                 target = origin1;

//             } else {
//                 var tar = t[0];
//                 var tar1 = t[1].substring(n, n + 1);

//                 if (tar1 >= 5) {
//                     var t = Number(t[1].substring(0, n)) + 1;
//                     target = tar + "." + t;
//                 } else {
//                     target = t[0] + "." + t[1].substring(0, n)
//                 }
//             }

//         }
//         else {
//             var bu="";
//             for (var i = 0; i < n; i++) {
//                 bu += "0";
//             }
//             target = origin + "." + bu;

//         }
       
//         return target;
// }

function getNumber2(origin) {

    var target;
    var origin1 = origin.toString();
    if (origin1.indexOf(".") != -1) // true)
    {

       target=origin1


    }
    else {
        
        target = origin + "." + "0";

    }

    return target;
}

function Zero() {
    document.getElementById("yacha1").value="";
    document.getElementById("yacha2").value = "";
    document.getElementById("qiya1").value = "";
    document.getElementById("qiya2").value = "";
    document.getElementById("freq11").value = "";
    document.getElementById("freq12").value = "";
    document.getElementById("freq21").value = "";
    document.getElementById("freq22").value = "";
    document.getElementById("wen1").value = "";
    document.getElementById("wen2").value = "";
}

function onlynum(text) {
    if (isNaN(+text)) {
        alert('输入参数错误');
      //  window.location = "set.html";

    }
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


function Tu1(etemp, ztemp, time,id,name1,name2) {
    var dom1 = document.getElementById(id);
    dom1.style.height = "280px";
   
    var resizeWorldMapContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        dom1.style.width =  document.getElementById(id).clientWidth*1 + 'px'; //设置容器高宽

    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom1);
    var app = {};
    option = null;
    option = {
        title: {
            text: "温度变化趋势图",
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            name: "时间",
            nameGap: 30,
            nameLocation: "center",
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: time
        },
        yAxis: {
            type: 'value',
            name: '温度值',
            //max: 60,
            //min:0,
            axisLabel: {
                formatter: '{value}℃' 
            }
        },
        series: [
            {
                name: name1+'温度',
                type: 'line',
                data: etemp
            },
            {
                name: name2+'温度',
                type: 'line',
                data: ztemp
            }
        
        ]
    };
  
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.resize();
    }
}

    function Tu2(rs, vb, time,id) {
        var dom1 = document.getElementById(id);
        dom1.style.height = "280px"
        var resizeWorldMapContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            dom1.style.width = document.getElementById(id).clientWidth * 1 + 'px'; //设置容器高宽

        };
        resizeWorldMapContainer();
        var myChart = echarts.init(dom1);
        var app = {};
        option = null;
        option = {
            title: {
                text: "电池电量、信号强度变化趋势图",
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                name: "时间",
                nameGap: 30,
                nameLocation: "center",
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: time
            },
            yAxis: {
                type: 'value',
                name: '数值(%)',
                max: 100,
                min:0,
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            series: [
                {
                    name: '电池电量',
                    type: 'line',
                    data: vb
                },
                {
                    name: '信号强度',
                    type: 'line',
                    data: rs
                }

            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
            myChart.resize();
        }
    }

function Tu3(qiya,yacha,time,id) {
    var dom1 = document.getElementById(id);
    
    dom1.style.height = "280px"
    var resizeWorldMapContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        dom1.style.width = document.getElementById(id).clientWidth *1+ 'px'; //设置容器高宽

    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom1);
    var app = {};
    option = null;
    option = {
        title: {
            text: "气压、进出口压差变化趋势图",
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            name: "时间",
            nameGap: 30,
            nameLocation: "center",
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: time
        },
        yAxis: {
            type: 'value',
            name: '压力值',
            //max: 60,
            //min: 0,
            axisLabel: {
                formatter: '{value}pa'
            }
        },
        series: [
            {
                name: '压差(Kpa)',
                type: 'line',
                data: yacha
            },
            {
                name: '气压(Mpa)',
                type: 'line',
                data: qiya
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.resize();
    }
}
   function Tu4(wendu,time,id) {
    var dom1 = document.getElementById(id);
    dom1.style.height = "280px"
    var resizeWorldMapContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        dom1.style.width = document.getElementById(id).clientWidth *1 + 'px' //设置容器高宽

    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom1);
    var app = {};
    option = null;
    option = {
        title: {
            text: "除尘箱体温度变化趋势图",
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            name: "时间",
            nameGap: 30,
            nameLocation: "center",
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: time
        },
        yAxis: {
            type: 'value',
            name: '温度值',
            //max: 60,
            //min: 0,
            axisLabel: {
                formatter: '{value}℃'
            }
        },
        series: [
            {
                name: '温度(℃)',
                type: 'line',
                data: wendu
            },
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.resize();
    }
}
 function Tu5( pinlv1, pinlv2,time,id) {
    var dom1 = document.getElementById(id);
    dom1.style.height = "280px"
    var resizeWorldMapContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        dom1.style.width = document.getElementById(id).clientWidth * 1 + 'px'; //设置容器高宽

    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom1);
    var app = {};
    option = null;
    option = {
        title: {
            text: "输灰机频率、卸灰机频率变化趋势图",
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            name: "时间",
            nameGap: 30,
            nameLocation: "center",
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: time
        },
        yAxis: {
            type: 'value',
            name: '数值',
            //max: 100,
            //min: 0,
            axisLabel: {
                formatter: '{value}HZ',
            }
        },
        series: [
            {
                name: '输灰机频率(Hz)',
                type: 'line',
                data: pinlv1
            },
            {
                name: '卸灰机频率(Hz)',
                type: 'line',
                data: pinlv2
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.resize();
    }
} 

function N(n)
{
	var now=new Date();
	var date=new Date(now.getTime()-n*24*3600*1000);
	var year=date.getFullYear();
	var month=date.getMonth()+1>9?date.getMonth()+1:"0"+(date.getMonth()+1);
	var day=date.getDate()>9?date.getDate():"0"+date.getDate();
	var date=year+"-"+month+"-"+day;
	return date;
}

function getNumber1(num,n){   
    var f = parseFloat(num);
    if(isNaN(f)){
        return false;
    }   
    f = Math.round(num*Math.pow(10, n))/Math.pow(10, n); // n 幂   
    var s = f.toString();
    var rs = s.indexOf('.');
    //判定如果是整数，增加小数点再补0
    if(rs < 0){
        rs = s.length;
        s += '.'; 
    }
    while(s.length <= rs + n){
        s += '0';
    }
    return s;
} 
function getExplorer() {  
    var explorer = window.navigator.userAgent ;  
    //ie  
    if (explorer.indexOf("MSIE") >= 0) {
            return 'ie';
        }
        //firefox  
        else if (explorer.indexOf("Firefox") >= 0) {
            return 'Firefox';
        }
        //Chrome  
        else if (explorer.indexOf("Chrome") >= 0) {
            return 'Chrome';
        }
        //Opera  
        else if (explorer.indexOf("Opera") >= 0) {
            return 'Opera';
        }
        //Safari  
        else if (explorer.indexOf("Safari") >= 0) {
            return 'Safari';
        }
    }
function method5 (tableid) {
     
        if (getExplorer() == 'ie') {
            var curTbl = document.getElementById(tableid);
            var oXL = new ActiveXObject("Excel.Application");
            var oWB = oXL.Workbooks.Add();
            var xlsheet = oWB.Worksheets(1);
            var sel = document.body.createTextRange();
            sel.moveToElementText(curTbl);
            sel.select();
            sel.execCommand("Copy");
            xlsheet.Paste();
            oXL.Visible = true;

            try {
                var fname = oXL.Application.GetSaveAsFilename("Excel.xls",
                        "Excel Spreadsheets (*.xls), *.xls");
            } catch (e) {
                print("Nested catch caught " + e);
            } finally {
                oWB.SaveAs(fname);
                oWB.Close(savechanges = false);
                oXL.Quit();
                oXL = null;
                idTmr = window.setInterval("Cleanup();", 1);
            }

        } 
        else {
            tableToExcel(tableid);
            
        }
        return "ok";
    }
    function  Cleanup() {
        window.clearInterval(idTmr);
        CollectGarbage();
    }
   var  tableToExcel=  (function() {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html><head><meta charset="UTF-8"></head><body><table  border="1">{table}</table></body></html>', base64 = function(
                s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        }, format = function(s, c) {
            return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
            })
        }
        return function(table, name) {
            if (!table.nodeType)
                table = document.getElementById(table)
            var ctx = {
                worksheet : name || 'Worksheet',
                table : table.innerHTML
            }
            window.location.href = uri + base64(format(template, ctx))
        }
    })()
