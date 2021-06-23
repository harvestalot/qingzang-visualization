# -*- coding: utf-8 -*-
"""
Created on Tue Apr 17 11:14:26 2019

@author: Ju
"""
import cgi
print("Content-Type:text/html;charset=utf-8")
import numpy as np
from pandas import read_csv
from sklearn.manifold import MDS
from sklearn.metrics import pairwise_distances

def getData(Month,way):    #####读取数据
    if Month==str(0):
        df = read_csv('./data/2017.csv',sep=',',header=0, index_col=0,encoding='utf-8')
    else:
        df = read_csv('./data/2017'+ Month +'.csv',sep=',',header=0, index_col=0,encoding='utf-8')
    if way == 'in':
        df = df.T#转置   
    #####同一省份数据相加：行求和、列求和
    province_flow = []
    for i in range(len(province_list)):
        province_flow.append([])
        temp_arr = np.zeros(df.shape[1])
        for city in city_list[i]:
            for index, row in df.iterrows():#index为行名，row为每一行值
                if index == city:
                    temp_arr = temp_arr + np.array(row)
                    break
        province_flow[i] = temp_arr
    province_temp = np.array(province_flow)
    province_flow = province_temp.T
    province_result = []
    for i in range(len(province_list)):
        province_result.append([])
        temp_arr = np.zeros(len(province_list))
        for city in city_list[i]:
            j = 0
            for index, row in df.iterrows():
                if index == city:
                    temp_arr = temp_arr + province_flow[j]
                    break
                j = j + 1
        province_result[i] = temp_arr
    province_temp = np.array(province_result)
    province_result = province_temp.T
    return province_result     
        
def Cosine(Arr):
    D = 1-pairwise_distances(Arr, metric="cosine")
    return D

form=cgi.FieldStorage()
Month = form.getvalue('Month')
way = form.getvalue('way')
Distance = form.getvalue('distance')
#Region = '02'
#Month = '0'
#way = 'in'
#Distance = 'long'

province_list = ["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","拉萨","昌都","山南","日喀则","那曲","阿里","林芝","陕西","甘肃","西宁","海东","海北","黄南州","海南州","果洛","玉树州","海西州","宁夏","新疆","台湾","香港","澳门"]
city_list = [["北京"],["天津"],["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布"],["沈阳","大连","鞍山","抚顺","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],["长春","吉林","四平","辽源","通化","白山","松原","白城","延边"],["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"],["上海"],["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"],["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"],["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","六安","亳州","池州","宣城"],["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"],["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"],["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"],["武汉","黄石","十堰","宜昌","襄阳","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施州","仙桃","潜江","天门","神农架"],["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"],["广州","韶关","深圳","珠海","汕头","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],["海口","三亚","三沙","五指山","琼海","儋州","文昌","万宁","东方","定安县","屯昌县","澄迈县","临高县","白沙","昌江","乐东","陵水","保亭","琼中"],["重庆"],["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","甘孜","凉山"],["贵阳","六盘水","遵义","安顺","毕节","铜仁","黔西南","黔东南","黔南"],["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","红河","文山","西双版纳","大理","德宏","怒江","迪庆"],["拉萨"],["昌都"],["山南"],["日喀则"],["那曲"],["阿里"],["林芝"],["西安","铜川","宝鸡","咸阳","渭南","延安","榆林","安康","商洛"],["兰州","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏","甘南"],["西宁"],["海东"],["海北"],["黄南州"],["海南州"],["果洛"],["玉树州"],["海西州"],["银川","石嘴山","吴忠","固原","中卫"],["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉","博州","巴州","阿克苏","克州","喀什","和田","伊犁","塔城","阿勒泰","石河子","阿拉尔","图木舒克","五家渠"],["台湾"],["香港"],["澳门"]]
city_item =["拉萨","昌都","山南","日喀则","那曲","阿里","林芝","西宁","海东","海北","黄南州","海南州","果洛","玉树州","海西州"]
Arr = getData(str(Month),str(way))
Arr = Arr.tolist()
Arr2 = []
i = 0
for province in province_list:
    if province in city_item:
        Arr2.append(Arr[i])
    i = i + 1
Arr2 = np.array(Arr2)
Arr_new = Arr2.T

Arr_new1 = []
Arr_new2 = []
i = 0

if Distance =="short":
    for province in province_list:
        if province in city_item:
            Arr_new2.append(Arr_new[i])
        i = i + 1
    Arr_new2 = np.array(Arr_new2)
    Arr_new2 = Arr_new2.T#city-city
    
    D = Cosine(Arr_new2)
    D = D.tolist()
    mds = MDS(2)
    mds.fit(D)
    X = mds.fit_transform(D)
    X = X.tolist()
    T = []
    for i in range(len(X)):
        temp ={'x':X[i][0],'y':X[i][1],'name':city_item[i]}
        T.append(temp)  
    print(T)
else:
    for province in province_list:
        if province not in city_item:
            Arr_new1.append(Arr_new[i])
        i = i + 1
    Arr_new1 = np.array(Arr_new1)
    Arr_new1 = Arr_new1.T#city-province
    
    D = Cosine(Arr_new1)
    D = D.tolist()
    mds = MDS(2)
    mds.fit(D)
    X = mds.fit_transform(D)
    X = X.tolist()
    T = []
    for i in range(len(X)):
        temp ={'x':X[i][0],'y':X[i][1],'name':city_item[i]}
        T.append(temp)  
    print(T)

















