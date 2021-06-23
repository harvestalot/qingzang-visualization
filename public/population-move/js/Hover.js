function Month_flow_Hover(file_number,click_province,flow_way){
	open_csv = 'data/' + '2017'+ file_number + '.csv';
	if(file_number=="0"){
		open_csv = 'data/' + '2017'+ '.csv';
	}
	$.ajax({
      url: open_csv,
      dataType: 'text',
	  success: function (data) {
          allRows = data.split(/\r?\n|\r/);
			city_flow = [];
			click_index = province_name.indexOf(click_province);
			click_city = city_name[click_index];
		if(flow_way=='流出'){
			for(var i=0;i<click_city.length;i++){
			    for(var j = 0; j < allRows.length;j++){
                    rowCells = allRows[j].split(',');  
	                if (rowCells[0] == click_city[i]){
						city_flow.push(allRows[j]); 
                        break;
					}
                }
			}
			row_length = city_flow.length;
			column_length = city_flow[0].split(',').length;
			out_flow = []
			for(var i=1;i<column_length;i++){
			    count = 0;
			    for(var j=0;j<row_length;j++){
				    count = count + Number(city_flow[j].split(',')[i]);
				}
				out_flow.push(count);
			}
			province_out = [];
			for(q=0;q<city_name.length;q++){
				out_index = [];
			    out_count = 0;
				for(var j=0;j<city_name[q].length;j++){
				    out_index.push(allRows[0].split(',').indexOf(city_name[q][j])-1);
				}
			    for(var p=0;p<out_index.length;p++){
			        out_count = out_count + Number(out_flow[out_index[p]]);
				}
				province_out.push(out_count);
			}
			//test.markLine.data=[];
			//out_value = [];
			out_value_province = [];
			out_value_city = [];
			out_value_XZ =0 ;
			out_value_QH =0 ;
			temp_array = []
			for(var i=0;i<province_name.length;i++){
				if(province_out[i]>0){
			        out_json = [{name:click_province}, {name:province_name[i],value:province_out[i]}];
			        test.markLine.data.push(out_json);
				    if(QX_name.length!=0){
					    if(QX_name.indexOf(province_name[i])>-1){
						    out_value_city.push({name:province_name[i],value:province_out[i]});
					         if(XZ_name.indexOf(province_name[i])>-1){
								out_value_XZ = out_value_XZ + province_out[i]
							}
							else{
								out_value_QH = out_value_QH + province_out[i]
							}
						}
					    else{
					        out_value_province.push({name:province_name[i],value:province_out[i]});
					    }
				    }
					else{
						out_value_province.push({name:province_name[i],value:province_out[i]});
					}
					out_value.push({name:province_name[i],value:province_out[i]});
					temp_array.push(province_out[i]);
				}
			}
			if(out_value_XZ>0){
				out_value_province.push({name:'西藏',value:out_value_XZ});
			}
			if(out_value_QH>0){
				out_value_province.push({name:'青海',value:out_value_QH});
			}
			//flow_max = Math.trunc(Math.max.apply(null,temp_array));
			//flow_min = Math.trunc(Math.min.apply(null,temp_array));
			//Bartest(click_province,out_value_province,out_value_city,file_number,flow_min,flow_max);
			//myoption.series[0].markPoint.data =[];
			myoption.series[0].markPoint.data = out_value;
			//myoption.dataRange.max = flow_max;
			//myoption.dataRange.min = flow_min;
		}
        if(flow_way=='流入'){
			allColumn = [];
			for(var i=0;i<allRows[0].split(',').length;i++){
				allColumn.push([]);
			}
			for(var i=0;i<allRows[0].split(',').length;i++){
			    for(var j=0;j<allRows.length;j++)
					allColumn[i][j] = allRows[j].split(',')[i];
			}
			allRows =[];
			for(var i=0;i<allColumn.length;i++){
				allRows.push(String(allColumn[i]));
			}
			for(var i=0;i<click_city.length;i++){
			    for(var j = 0; j < allRows.length;j++){
                    rowCells = allRows[j].split(',');  
	                if (rowCells[0] == click_city[i]){
						city_flow.push(allRows[j]); 
                        break;
					}
                }
			}
			row_length = city_flow.length;
			column_length = city_flow[0].split(',').length;
			in_flow = []
			for(var i=1;i<column_length;i++){
			    count = 0;
			    for(var j=0;j<row_length;j++){
				    count = count + Number(city_flow[j].split(',')[i]);
				}
				in_flow.push(count);
			}
			province_in = [];
			for(q=0;q<city_name.length;q++){
				in_index = [];
			    in_count = 0;
				for(var j=0;j<city_name[q].length;j++){
				    in_index.push(allRows[0].split(',').indexOf(city_name[q][j])-1);
				}
			    for(var p=0;p<in_index.length;p++){
			        in_count = in_count + Number(in_flow[in_index[p]]);
				}
				province_in.push(in_count);
			}
			test.markLine.data=[];
			in_value= [];
			in_value_province = [];
			in_value_city = [];
			in_value_XZ =0 ;
			in_value_QH =0 ;
			temp_array = [];
			for(var i=0;i<province_name.length;i++){
				if(province_in[i]>0){
			        in_json = [{name:province_name[i]}, {name:click_province,value:province_in[i]}];
			        test.markLine.data.push(in_json);
				    if(QX_name.length!=0){
					    if(QX_name.indexOf(province_name[i])>-1){
						    in_value_city.push({name:province_name[i],value:province_in[i]});
					        if(XZ_name.indexOf(province_name[i])>-1){
								in_value_XZ = in_value_XZ + province_in[i]
							}
							else{
								in_value_QH = in_value_QH + province_in[i]
							}
						}
					    else{
					        in_value_province.push({name:province_name[i],value:province_in[i]});
					    }
				    }
					else{
						in_value_province.push({name:province_name[i],value:province_in[i]});
					}
					in_value.push({name:province_name[i],value:province_in[i]});
					temp_array.push(province_in[i]);
				}
			}
			if(in_value_XZ>0){
				in_value_province.push({name:'西藏',value:in_value_XZ});
					}
			if(in_value_QH>0){
				in_value_province.push({name:'青海',value:in_value_QH});
			}
			flow_max = Math.trunc(Math.max.apply(null,temp_array));
			flow_min = Math.trunc(Math.min.apply(null,temp_array));
			Bartest(click_province,in_value_province,in_value_city,file_number,flow_min,flow_max);
			myoption.series[0].markPoint.data =[];
			myoption.series[0].markPoint.data = in_value;
			myoption.dataRange.max = flow_max;
			myoption.dataRange.min = flow_min;
		}
			//myoption.series.pop();
			myoption.series.push(test);
			myChart.setOption(myoption,true);
      }
    });
}
