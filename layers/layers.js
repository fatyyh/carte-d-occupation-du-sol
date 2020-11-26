var wms_layers = [];

var format_Gabes2001f_0 = new ol.format.GeoJSON();
var features_Gabes2001f_0 = format_Gabes2001f_0.readFeatures(json_Gabes2001f_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gabes2001f_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gabes2001f_0.addFeatures(features_Gabes2001f_0);
var lyr_Gabes2001f_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gabes2001f_0, 
                style: style_Gabes2001f_0,
                interactive: true,
    title: 'Gabes 2001 f<br />\
    <img src="styles/legend/Gabes2001f_0_0.png" /> agric [Maroon] 19 points<br />\
    <img src="styles/legend/Gabes2001f_0_1.png" /> mer [Red] 2876 points<br />\
    <img src="styles/legend/Gabes2001f_0_2.png" /> oasis [Green] 292 points<br />\
    <img src="styles/legend/Gabes2001f_0_3.png" /> sable cot [Yellow] 12 points<br />\
    <img src="styles/legend/Gabes2001f_0_4.png" /> sol nu [Cyan] 61 points<br />\
    <img src="styles/legend/Gabes2001f_0_5.png" /> zon cot [Blue] 359 points<br />\
    <img src="styles/legend/Gabes2001f_0_6.png" /> zone urbaine [Magenta] 57 points<br />\
    <img src="styles/legend/Gabes2001f_0_7.png" /> <br />'
        });

lyr_Gabes2001f_0.setVisible(true);
var layersList = [lyr_Gabes2001f_0];
lyr_Gabes2001f_0.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_Gabes2001f_0.set('fieldImages', {'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_Gabes2001f_0.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_Gabes2001f_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});