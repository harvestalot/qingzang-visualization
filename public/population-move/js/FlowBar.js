function Bartest(params_name,out_value_province,out_value_city,file_number,flow_min,flow_max){
    Bardata = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            res.push([data[i].name,data[i].value]);
    }return res;};
    if(flow_way=='out'){
        flow = '流出';
    }
    else{
        flow = '流入';
    }
    bartext = '2017年'+ file_number +'月'+ params_name + flow+'数据';
    if(file_number=='0'){
        bartext = '2017年'+ params_name + flow+'数据';
    }
if($("#area option:selected").val()=='01'){
    $("#b1").css('display','block');
    $("#b2").css('display','none');
    var chart = Highcharts.chart('b1', {
        chart: {
            type: 'bar',
            backgroundColor:'#1b1b1b'//画布背景色
        },
        plotOptions:{
            bar:{borderColor:""}//删除柱子边框
        },
        title: {
            text: bartext,
            style: { 
                color: '#fff', //字体颜色 
                fontSize: "18px", //字体大小 
                //fontWeight: 'bold' 
            }
        },
        xAxis: {
            type: 'category',
            gridLineColor:'rgb(159,162,164)',
            color:'rgb(159,162,164)',
            tickWidth:1,//去掉刻度
            labels:{
                style:{
                    color:'#fff'//字体颜色
                }
            }
        },
        yAxis: {
            min:flow_min,
            max:flow_max,
            title: {text: flow_way+'数量'},
            gridLineColor:'rgb(159,162,164)',

        },
        credits: { enabled: false},
        legend: {
            enabled: false
        },
        series: [{
            name:'流动数量',
            data:Bardata(out_value_province.sort(function (a, b) {return b.value - a.value;})),
            colorByPoint: true,
        }]
    });
}
else{
    h1 = out_value_province.length;
    h2 = out_value_city.length;
    h = h1 + h2;
    h1 = h1/h * 100+'%';
    h2 = h2/h * 100+'%';
    $("#b1").css('display','none');
    $("#b2").css('display','block');
    var chart1 = Highcharts.chart('bar1', {
        chart: {
            type: 'bar',
            backgroundColor:'#1b1b1b'//画布背景色
        },
        plotOptions:{
            bar:{borderColor:""}//删除柱子边框
        },
        title: {
            text: bartext+'(远程)',
            style: { 
                color: '#fff', //字体颜色 
                fontSize: "14px", //字体大小 
                //fontWeight: 'bold' 
            }
        },
        xAxis: {
            type: 'category',
            gridLineColor:'rgb(159,162,164)',
            color:'rgb(159,162,164)',
            tickWidth:1,//去掉刻度
            labels:{
                style:{
                    color:'#fff'//字体颜色
                }
            }
        },
        yAxis: {
            min:flow_min,
            max:flow_max,
            title: {text: flow_way+'数量'},
            gridLineColor:'rgb(159,162,164)',

        },
        credits: { enabled: false},
        legend: {
            enabled: false
        },
        series: [{
            name:'流动数量',
            data:Bardata(out_value_province.sort(function (a, b) {return b.value - a.value;})),
            colorByPoint: true,
        }]
    });
    var chart2 = Highcharts.chart('bar2', {
        chart: {
            type: 'bar',
            backgroundColor:'#1b1b1b'//画布背景色
        },
        plotOptions:{
            bar:{borderColor:""}//删除柱子边框
        },
        title: {
            text: bartext+'(近程)',
            style: { 
                color: '#fff', //字体颜色 
                fontSize: "14px", //字体大小 
                //fontWeight: 'bold' 
            }
        },
        xAxis: {
            type: 'category',
            gridLineColor:'rgb(159,162,164)',
            color:'rgb(159,162,164)',
            tickWidth:1,//去掉刻度
            labels:{
                style:{
                    color:'#fff'//字体颜色
                }
            }
        },
        yAxis: {
            min:flow_min,
            max:flow_max,
            title: {text: flow_way+'数量'},
            gridLineColor:'rgb(159,162,164)',

        },
        credits: { enabled: false},
        legend: {
            enabled: false
        },
        series: [{
            name:'流动数量',
            data:Bardata(out_value_city.sort(function (a, b) {return b.value - a.value;})),
            colorByPoint: true,
        }]
    });
}
}