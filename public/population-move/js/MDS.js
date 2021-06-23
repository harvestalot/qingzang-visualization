var MDS_data;
function Distancechoose(){
    MyMds();
    $("#MDS_DIV").css('display','block');
}
function disapp(){
    $("#MDS_DIV").css('display','none');
}
function MyMds(){
    file_number = $("#Month option:selected").val();
    flow_way = $("#flow_in_out option:selected").val();
    distance = $("#long_short option:selected").val();
    if (distance!='MDS'){
        url = "../python3.py?Month=" + file_number+ "&way=" + flow_way+ "&distance=" + distance;
        AllHttp = LookGetXmlHttpObject(stateChanged);
        AllHttp.open("GET", url, true);
        AllHttp.send(null);
    }
}

function stateChanged() {
    if (AllHttp.readyState == 4 || AllHttp.readyState == "complete") {
        console.log(JSON.parse(JSON.stringify(AllHttp.responseText)));
        // MDS_data = eval('(' + AllHttp.responseText + ')').encode('utf-8');
        MDS_data = JSON.stringify(AllHttp.responseText);
        if (distance=='long'){
            $("#MDS_DIV2").css('display','none');
            $("#MDS_DIV1").css('display','block');
            var chart = Highcharts.chart('MDS_DIV1', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                //height:'50%',
                backgroundColor:'rgb(255,255,255)',
                plotBackgroundColor:'rgb(240,240,240)',////绘图区颜色
                plotBorderWidth:1,//绘图区边框宽度
                plotBorderColor:'rgb(0,0,0)'//绘图区边框颜色
            },
            xAxis: {
                plotLines:[{
                    color:'black',            //线的颜色，定义为红色
                    dashStyle:'Solid',//标示线的样式，默认是solid（实线），这里定义为长虚线
                    value:0,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                    width:1                 //标示线的宽度，2px
                }],
                title:{
                    text:'Dimension1',
                    style:{
                        fontSize: '15px',
                        fontFamily: "Times New Roman",
                        color: 'blcak'
                    }
                },
                lineWidth :0,//X轴
                lineColor:'rgb(0,0,0)',//X轴颜色
                tickWidth:1,//刻度线宽度
                tickColor:'rgb(0,0,0)',//刻度线颜色
                gridLineWidth:'0px'
            },
            yAxis: {
                plotLines:[{
                        color:'black',            //线的颜色，定义为红色
                        dashStyle:'Solid',//标示线的样式，默认是solid（实线），这里定义为长虚线
                        value:0,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                        width:1                 //标示线的宽度，2px
                }],
                title:{
                    text:'Dimension2',
                    style:{
                        fontSize: '15px',
                        fontFamily: "Times New Roman",
                        color: 'blcak'
                    }
                },
                lineWidth :0,//Y轴
                lineColor:'rgb(0,0,0)',//Y轴颜色
                tickWidth:1,//刻度线宽度
                tickColor:'rgb(0,0,0)',//刻度线颜色
                gridLineWidth:'0px'//隐藏网格线
            },
            credits: {enabled: false},//删除logo
            series: [{
                name: null,
                color: 'rgba(31,119,180)',//点的颜色
                marker: {radius: 2},//点的尺寸
                data: MDS_data//数据
            }],
            title: {
                text: '远程',
                style:{
                    fontSize: '20px',
                    fontFamily: "Times New Roman"
                }
                
            },
            legend: {enabled: false},
            plotOptions: {
                scatter: {
                    tooltip: {
                        headerFormat: null,
                        pointFormat: '{point.name}'
                    }
                },
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        useHTML: true,
                        style:{
                            color: "black",
                            fontFamily: "宋体",
                            fontSize: '20px'
                        }
                    },
                    events: {
                        click: function(e) {
                            click_province = e.point.name;
                            file_number = $("#Month option:selected").val();
                            flow_way = $("#flow_in_out option:selected").val();
                            Month_flow_Choose(file_number,click_province,flow_way);
                        }
                    }
                }
            },
        });
        }
        else{
            $("#MDS_DIV1").css('display','none');
            $("#MDS_DIV2").css('display','block');
            var chart = Highcharts.chart('MDS_DIV2', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                //height:'50%',
                backgroundColor:'rgb(255,255,255)',
                plotBackgroundColor:'rgb(240,240,240)',////绘图区颜色
                plotBorderWidth:1,//绘图区边框宽度
                plotBorderColor:'rgb(0,0,0)'//绘图区边框颜色
            },
            xAxis: {
                plotLines:[{
                    color:'black',            //线的颜色，定义为红色
                    dashStyle:'Solid',//标示线的样式，默认是solid（实线），这里定义为长虚线
                    value:0,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                    width:1                 //标示线的宽度，2px
                }],
                title:{
                    text:'Dimension1',
                    style:{
                        fontSize: '20px',
                        fontFamily: "Times New Roman",
                        color: 'blcak'
                    }
                },
                lineWidth :0,//X轴
                lineColor:'rgb(0,0,0)',//X轴颜色
                tickWidth:1,//刻度线宽度
                tickColor:'rgb(0,0,0)',//刻度线颜色
                gridLineWidth:'0px'
            },
            yAxis: {
            plotLines:[{
                    color:'black',            //线的颜色，定义为红色
                    dashStyle:'Solid',//标示线的样式，默认是solid（实线），这里定义为长虚线
                    value:0,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                    width:1                 //标示线的宽度，2px
                }],
                title:{
                    text:'Dimension2',
                    style:{
                        fontSize: '20px',
                        fontFamily: "Times New Roman",
                        color: 'blcak'
                    }
                },
                lineWidth :0,//Y轴
                lineColor:'rgb(0,0,0)',//Y轴颜色
                tickWidth:1,//刻度线宽度
                tickColor:'rgb(0,0,0)',//刻度线颜色
                gridLineWidth:'0px'//隐藏网格线
            },
            credits: {enabled: false},//删除logo
            series: [{
                name: null,
                color: 'rgba(31,119,180)',//点的颜色
                marker: {radius: 2},//点的尺寸
                data: MDS_data//数据
            }],
            title: {
                text: '近程',
                style:{
                    fontSize: '20px',
                    fontFamily: "Times New Roman"
                }
                
            },
            legend: {enabled: false},
            plotOptions: {
                scatter: {
                    tooltip: {
                        headerFormat: null,
                        pointFormat: '{point.name}'
                    }
                },
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        useHTML: true,
                        style:{
                            color: "rgb(0,0,0)",
                            fontFamily: "宋体",
                            fontSize: '20px'
                        }
                    },
                    events: {
                        click: function(e) {
                            click_province = e.point.name;
                            file_number = $("#Month option:selected").val();
                            flow_way = $("#flow_in_out option:selected").val();
                            Month_flow_Choose(file_number,click_province,flow_way);
                        }
                    }
                }
            },
        });
        }

    }
}

function LookGetXmlHttpObject(handler) {
    var objXmlHttp = null;
    if (navigator.userAgent.indexOf("Opera") >= 0) {
        alert("This example doesn't work in Opera");
        return;
    }
    if (navigator.userAgent.indexOf("MSIE") >= 0) {
        var strName = "Msxml2.OriginHttp";
        if (navigator.appVersion.indexOf("MSIE 5.5") >= 0) {
            strName = "Microsoft.OriginHttp";
        }
        try {
            objXmlHttp = new ActiveXObject(strName);
            objXmlHttp.onreadystatechange = handler;
            return objXmlHttp;
        } catch (e) {
            alert("Error. Scripting for ActiveX might be disabled");
            return;
        }
    }
    if (navigator.userAgent.indexOf("Mozilla") >= 0) {
        objXmlHttp = new XMLHttpRequest();
        objXmlHttp.onload = handler;
        objXmlHttp.onerror = handler;
        return objXmlHttp;
    }
}