var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'ถนนบางกะปิ',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> ถนนบางกะปิ'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'รั้วบางกะปิ',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> รั้วบางกะปิ'
            });
var format_Landmaek_2 = new ol.format.GeoJSON();
var features_Landmaek_2 = format_Landmaek_2.readFeatures(json_Landmaek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmaek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmaek_2.addFeatures(features_Landmaek_2);
var lyr_Landmaek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landmaek_2, 
                style: style_Landmaek_2,
                popuplayertitle: 'Landmaekบางกะปิ',
                interactive: true,
                title: '<img src="styles/legend/Landmaek_2.png" /> Landmaekบางกะปิ'
            });
var format_Centerline_3 = new ol.format.GeoJSON();
var features_Centerline_3 = format_Centerline_3.readFeatures(json_Centerline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centerline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centerline_3.addFeatures(features_Centerline_3);
var lyr_Centerline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centerline_3, 
                style: style_Centerline_3,
                popuplayertitle: 'Centerlineบางกะปิ',
                interactive: true,
                title: '<img src="styles/legend/Centerline_3.png" /> Centerlineบางกะปิ'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'บ้านบางกะปิ',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> บ้านบางกะปิ'
            });
var format_EA_5 = new ol.format.GeoJSON();
var features_EA_5 = format_EA_5.readFeatures(json_EA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EA_5.addFeatures(features_EA_5);
var lyr_EA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EA_5, 
                style: style_EA_5,
                popuplayertitle: 'EAแขวงหัวหมาก',
                interactive: true,
                title: '<img src="styles/legend/EA_5.png" /> EAแขวงหัวหมาก'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr_Landmaek_2.setVisible(true);lyr_Centerline_3.setVisible(true);lyr__4.setVisible(true);lyr_EA_5.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr_Landmaek_2,lyr_Centerline_3,lyr__4,lyr_EA_5];
lyr__0.set('fieldAliases', {'LBSTATUS': 'LBSTATUS', 'SUBTYPECOD': 'SUBTYPECOD', 'LEN': 'LEN', });
lyr__1.set('fieldAliases', {'LBSTATUS': 'LBSTATUS', 'SUBTYPECOD': 'SUBTYPECOD', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Landmaek_2.set('fieldAliases', {'LBSTATUS': 'LBSTATUS', 'NAME': 'NAME', 'ROAD_NAME': 'ROAD_NAME', 'SUBGROUP': 'SUBGROUP', 'SUBTYPECOD': 'SUBTYPECOD', });
lyr_Centerline_3.set('fieldAliases', {'LBSTATUS': 'LBSTATUS', 'NAME': 'NAME', 'SUBTYPECOD': 'SUBTYPECOD', 'LEN': 'LEN', });
lyr__4.set('fieldAliases', {'BLDG_NEW': 'BLDG_NEW', 'เลขที่_EA': 'เลขที่_EA', 'BUILDING_N': 'BUILDING_N', 'HOUSE_NO_1': 'HOUSE_NO_1', 'TUM_NAME': 'TUM_NAME', 'AMP_NAME': 'AMP_NAME', 'BUL_TAG': 'BUL_TAG', 'HOUSE_ID': 'HOUSE_ID', 'LBSTATUS': 'LBSTATUS', 'TEL': 'TEL', 'AREA': 'AREA', 'LEN': 'LEN', });
lyr_EA_5.set('fieldAliases', {'id': 'id', 'fig_id': 'fig_id', 'ea_code_14': 'ea_code_14', 'ea_type': 'ea_type', 'com_name': 'com_name', 'tam_name': 'tam_name', 'dis_name': 'dis_name', 'pro_name': 'pro_name', 'ea_remark': 'ea_remark', 'muni_name': 'muni_name', 'upd_date': 'upd_date', 'year': 'year', 'old_ea_ref': 'old_ea_ref', 'moo': 'moo', 'hh_num': 'hh_num', 'map_status': 'map_status', 'EA4': 'EA4', });
lyr__0.set('fieldImages', {'LBSTATUS': 'TextEdit', 'SUBTYPECOD': 'TextEdit', 'LEN': 'TextEdit', });
lyr__1.set('fieldImages', {'LBSTATUS': 'TextEdit', 'SUBTYPECOD': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Landmaek_2.set('fieldImages', {'LBSTATUS': 'TextEdit', 'NAME': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'SUBGROUP': 'Range', 'SUBTYPECOD': 'TextEdit', });
lyr_Centerline_3.set('fieldImages', {'LBSTATUS': 'TextEdit', 'NAME': 'TextEdit', 'SUBTYPECOD': 'TextEdit', 'LEN': 'TextEdit', });
lyr__4.set('fieldImages', {'BLDG_NEW': 'Range', 'เลขที่_EA': 'TextEdit', 'BUILDING_N': 'TextEdit', 'HOUSE_NO_1': 'TextEdit', 'TUM_NAME': 'TextEdit', 'AMP_NAME': 'TextEdit', 'BUL_TAG': 'TextEdit', 'HOUSE_ID': 'TextEdit', 'LBSTATUS': 'TextEdit', 'TEL': 'TextEdit', 'AREA': 'TextEdit', 'LEN': 'TextEdit', });
lyr_EA_5.set('fieldImages', {'id': 'TextEdit', 'fig_id': 'TextEdit', 'ea_code_14': 'TextEdit', 'ea_type': 'TextEdit', 'com_name': 'TextEdit', 'tam_name': 'TextEdit', 'dis_name': 'TextEdit', 'pro_name': 'TextEdit', 'ea_remark': 'TextEdit', 'muni_name': 'TextEdit', 'upd_date': 'DateTime', 'year': 'TextEdit', 'old_ea_ref': 'TextEdit', 'moo': 'TextEdit', 'hh_num': 'TextEdit', 'map_status': 'TextEdit', 'EA4': 'TextEdit', });
lyr__0.set('fieldLabels', {'LBSTATUS': 'no label', 'SUBTYPECOD': 'no label', 'LEN': 'no label', });
lyr__1.set('fieldLabels', {'LBSTATUS': 'no label', 'SUBTYPECOD': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Landmaek_2.set('fieldLabels', {'LBSTATUS': 'hidden field', 'NAME': 'inline label - always visible', 'ROAD_NAME': 'hidden field', 'SUBGROUP': 'hidden field', 'SUBTYPECOD': 'hidden field', });
lyr_Centerline_3.set('fieldLabels', {'LBSTATUS': 'hidden field', 'NAME': 'inline label - always visible', 'SUBTYPECOD': 'hidden field', 'LEN': 'hidden field', });
lyr__4.set('fieldLabels', {'BLDG_NEW': 'hidden field', 'เลขที่_EA': 'hidden field', 'BUILDING_N': 'no label', 'HOUSE_NO_1': 'no label', 'TUM_NAME': 'hidden field', 'AMP_NAME': 'hidden field', 'BUL_TAG': 'hidden field', 'HOUSE_ID': 'hidden field', 'LBSTATUS': 'hidden field', 'TEL': 'hidden field', 'AREA': 'hidden field', 'LEN': 'hidden field', });
lyr_EA_5.set('fieldLabels', {'id': 'hidden field', 'fig_id': 'hidden field', 'ea_code_14': 'hidden field', 'ea_type': 'hidden field', 'com_name': 'hidden field', 'tam_name': 'inline label - always visible', 'dis_name': 'inline label - always visible', 'pro_name': 'hidden field', 'ea_remark': 'hidden field', 'muni_name': 'hidden field', 'upd_date': 'hidden field', 'year': 'hidden field', 'old_ea_ref': 'hidden field', 'moo': 'hidden field', 'hh_num': 'hidden field', 'map_status': 'hidden field', 'EA4': 'inline label - always visible', });
lyr_EA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});