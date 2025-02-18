var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_24GLAPrecinctResults_1 = new ol.format.GeoJSON();
var features_24GLAPrecinctResults_1 = format_24GLAPrecinctResults_1.readFeatures(json_24GLAPrecinctResults_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24GLAPrecinctResults_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24GLAPrecinctResults_1.addFeatures(features_24GLAPrecinctResults_1);
var lyr_24GLAPrecinctResults_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24GLAPrecinctResults_1, 
                style: style_24GLAPrecinctResults_1,
                popuplayertitle: '24G LA Precinct Results',
                interactive: true,
    title: '24G LA Precinct Results<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_11.png" /> 0 - 0<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/24GLAPrecinctResults_1_21.png" /> -1 - -0.45<br />' });
var format_24GVenturaPrecinctResults24GVenturaResults_2 = new ol.format.GeoJSON();
var features_24GVenturaPrecinctResults24GVenturaResults_2 = format_24GVenturaPrecinctResults24GVenturaResults_2.readFeatures(json_24GVenturaPrecinctResults24GVenturaResults_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24GVenturaPrecinctResults24GVenturaResults_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24GVenturaPrecinctResults24GVenturaResults_2.addFeatures(features_24GVenturaPrecinctResults24GVenturaResults_2);
var lyr_24GVenturaPrecinctResults24GVenturaResults_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24GVenturaPrecinctResults24GVenturaResults_2, 
                style: style_24GVenturaPrecinctResults24GVenturaResults_2,
                popuplayertitle: '24G Ventura Precinct Results 24G Ventura Results',
                interactive: true,
    title: '24G Ventura Precinct Results 24G Ventura Results<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_11.png" /> 0 - 0<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/24GVenturaPrecinctResults24GVenturaResults_2_21.png" /> -1 - -0.45<br />' });
var format_24GSanBernardinoPrecinctResults_3 = new ol.format.GeoJSON();
var features_24GSanBernardinoPrecinctResults_3 = format_24GSanBernardinoPrecinctResults_3.readFeatures(json_24GSanBernardinoPrecinctResults_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24GSanBernardinoPrecinctResults_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24GSanBernardinoPrecinctResults_3.addFeatures(features_24GSanBernardinoPrecinctResults_3);
var lyr_24GSanBernardinoPrecinctResults_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24GSanBernardinoPrecinctResults_3, 
                style: style_24GSanBernardinoPrecinctResults_3,
                popuplayertitle: '24G San Bernardino Precinct Results',
                interactive: true,
    title: '24G San Bernardino Precinct Results<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_11.png" /> 0 - 0<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/24GSanBernardinoPrecinctResults_3_21.png" /> -1 - -0.45<br />' });
var format_24GRiversidePrecinctResults_4 = new ol.format.GeoJSON();
var features_24GRiversidePrecinctResults_4 = format_24GRiversidePrecinctResults_4.readFeatures(json_24GRiversidePrecinctResults_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24GRiversidePrecinctResults_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24GRiversidePrecinctResults_4.addFeatures(features_24GRiversidePrecinctResults_4);
var lyr_24GRiversidePrecinctResults_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24GRiversidePrecinctResults_4, 
                style: style_24GRiversidePrecinctResults_4,
                popuplayertitle: '24G Riverside Precinct Results',
                interactive: true,
    title: '24G Riverside Precinct Results<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_11.png" /> 0 - 0<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/24GRiversidePrecinctResults_4_21.png" /> -1 - -0.45<br />' });
var format_24GOCPrecinctResults_5 = new ol.format.GeoJSON();
var features_24GOCPrecinctResults_5 = format_24GOCPrecinctResults_5.readFeatures(json_24GOCPrecinctResults_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24GOCPrecinctResults_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24GOCPrecinctResults_5.addFeatures(features_24GOCPrecinctResults_5);
var lyr_24GOCPrecinctResults_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24GOCPrecinctResults_5, 
                style: style_24GOCPrecinctResults_5,
                popuplayertitle: '24G OC Precinct Results',
                interactive: true,
    title: '24G OC Precinct Results<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_11.png" /> 0 - 0<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/24GOCPrecinctResults_5_21.png" /> -1 - -0.45<br />' });
var format_24GSanDiegoPrecinctResults_6 = new ol.format.GeoJSON();
var features_24GSanDiegoPrecinctResults_6 = format_24GSanDiegoPrecinctResults_6.readFeatures(json_24GSanDiegoPrecinctResults_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24GSanDiegoPrecinctResults_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24GSanDiegoPrecinctResults_6.addFeatures(features_24GSanDiegoPrecinctResults_6);
var lyr_24GSanDiegoPrecinctResults_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24GSanDiegoPrecinctResults_6, 
                style: style_24GSanDiegoPrecinctResults_6,
                popuplayertitle: '24G San Diego Precinct Results',
                interactive: true,
    title: '24G San Diego Precinct Results<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_11.png" /> 0 - 0<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/24GSanDiegoPrecinctResults_6_21.png" /> -1 - -0.45<br />' });
var format_SoCalCDBoundaries_7 = new ol.format.GeoJSON();
var features_SoCalCDBoundaries_7 = format_SoCalCDBoundaries_7.readFeatures(json_SoCalCDBoundaries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoCalCDBoundaries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoCalCDBoundaries_7.addFeatures(features_SoCalCDBoundaries_7);
var lyr_SoCalCDBoundaries_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoCalCDBoundaries_7, 
                style: style_SoCalCDBoundaries_7,
                popuplayertitle: 'SoCal CD Boundaries',
                interactive: false,
                title: '<img src="styles/legend/SoCalCDBoundaries_7.png" /> SoCal CD Boundaries'
            });
var format_SoCalCountiesShape_8 = new ol.format.GeoJSON();
var features_SoCalCountiesShape_8 = format_SoCalCountiesShape_8.readFeatures(json_SoCalCountiesShape_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoCalCountiesShape_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoCalCountiesShape_8.addFeatures(features_SoCalCountiesShape_8);
var lyr_SoCalCountiesShape_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoCalCountiesShape_8, 
                style: style_SoCalCountiesShape_8,
                popuplayertitle: 'SoCal Counties Shape',
                interactive: false,
                title: '<img src="styles/legend/SoCalCountiesShape_8.png" /> SoCal Counties Shape'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_24GLAPrecinctResults_1.setVisible(true);lyr_24GVenturaPrecinctResults24GVenturaResults_2.setVisible(true);lyr_24GSanBernardinoPrecinctResults_3.setVisible(true);lyr_24GRiversidePrecinctResults_4.setVisible(true);lyr_24GOCPrecinctResults_5.setVisible(true);lyr_24GSanDiegoPrecinctResults_6.setVisible(true);lyr_SoCalCDBoundaries_7.setVisible(true);lyr_SoCalCountiesShape_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_24GLAPrecinctResults_1,lyr_24GVenturaPrecinctResults24GVenturaResults_2,lyr_24GSanBernardinoPrecinctResults_3,lyr_24GRiversidePrecinctResults_4,lyr_24GOCPrecinctResults_5,lyr_24GSanDiegoPrecinctResults_6,lyr_SoCalCDBoundaries_7,lyr_SoCalCountiesShape_8];
lyr_24GLAPrecinctResults_1.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'Neighbhood': 'Neighbhood', 'House Dist': 'House Dist', 'Total Vote': 'Total Vote', 'House Dem': 'House Dem', 'House Rep': 'House Rep', 'Pres Dem': 'Pres Dem', 'Pres Rep': 'Pres Rep', 'Prz Margin': 'Prz Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Black%': 'Black%', });
lyr_24GVenturaPrecinctResults24GVenturaResults_2.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'House Dist': 'House Dist', 'Total Vote': 'Total Vote', 'House Dem': 'House Dem', 'House Rep': 'House Rep', 'Pres Dem': 'Pres Dem', 'Rep Pres': 'Rep Pres', 'Prz Margin': 'Prz Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Black%': 'Black%', });
lyr_24GSanBernardinoPrecinctResults_3.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'House Dist': 'House Dist', 'House Dem': 'House Dem', 'House Rep': 'House Rep', 'Pres Dem': 'Pres Dem', 'Pres Rep': 'Pres Rep', 'Prz Margin': 'Prz Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Black%': 'Black%', });
lyr_24GRiversidePrecinctResults_4.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'House Dist': 'House Dist', 'Total Vote': 'Total Vote', 'House Dem': 'House Dem', 'House Rep': 'House Rep', 'Pres Dem': 'Pres Dem', 'Pres Rep': 'Pres Rep', 'Prz Margin': 'Prz Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Black%': 'Black%', });
lyr_24GOCPrecinctResults_5.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'House Dist': 'House Dist', 'Total Vote': 'Total Vote', 'House Dem': 'House Dem', 'House Rep': 'House Rep', 'Pres Dem': 'Pres Dem', 'Pres Rep': 'Pres Rep', 'Prz Margin': 'Prz Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Top API Na': 'Top API Na', 'Black%': 'Black%', });
lyr_24GSanDiegoPrecinctResults_6.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'Neighbhood': 'Neighbhood', 'House Dist': 'House Dist', 'Total Vote': 'Total Vote', 'House Dem': 'House Dem', 'House Rep': 'House Rep', 'Pres Dem': 'Pres Dem', 'Pres Rep': 'Pres Rep', 'Prz Margin': 'Prz Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Black%': 'Black%', });
lyr_SoCalCDBoundaries_7.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'DISTRICT': 'DISTRICT', 'MEMBERS': 'MEMBERS', 'LOCKED': 'LOCKED', 'NAME': 'NAME', 'POPULATION': 'POPULATION', 'CVAP_19': 'CVAP_19', 'HSP_CVAP_1': 'HSP_CVAP_1', 'DOJ_NH_BLK': 'DOJ_NH_BLK', 'DOJ_NH_ASN': 'DOJ_NH_ASN', 'NH_WHT_CVA': 'NH_WHT_CVA', 'IDEAL_VALU': 'IDEAL_VALU', 'DEVIATION': 'DEVIATION', 'F_DEVIATIO': 'F_DEVIATIO', 'MULTIPLE_F': 'MULTIPLE_F', 'F_CVAP_19': 'F_CVAP_19', 'F_HSP_CVAP': 'F_HSP_CVAP', 'F_DOJ_NH_B': 'F_DOJ_NH_B', 'F_DOJ_NH_A': 'F_DOJ_NH_A', 'F_NH_WHT_C': 'F_NH_WHT_C', 'DISTRICT_L': 'DISTRICT_L', 'DISTRICT_N': 'DISTRICT_N', });
lyr_SoCalCountiesShape_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY_NAM': 'COUNTY_NAM', 'COUNTY_ABB': 'COUNTY_ABB', 'COUNTY_NUM': 'COUNTY_NUM', 'COUNTY_COD': 'COUNTY_COD', 'COUNTY_FIP': 'COUNTY_FIP', 'ISLAND': 'ISLAND', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_24GLAPrecinctResults_1.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'Neighbhood': 'TextEdit', 'House Dist': 'TextEdit', 'Total Vote': 'TextEdit', 'House Dem': 'TextEdit', 'House Rep': 'TextEdit', 'Pres Dem': 'TextEdit', 'Pres Rep': 'TextEdit', 'Prz Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Black%': 'Range', });
lyr_24GVenturaPrecinctResults24GVenturaResults_2.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'House Dist': 'TextEdit', 'Total Vote': 'TextEdit', 'House Dem': 'TextEdit', 'House Rep': 'TextEdit', 'Pres Dem': 'TextEdit', 'Rep Pres': 'TextEdit', 'Prz Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Black%': 'Range', });
lyr_24GSanBernardinoPrecinctResults_3.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'House Dist': 'TextEdit', 'House Dem': 'TextEdit', 'House Rep': 'TextEdit', 'Pres Dem': 'TextEdit', 'Pres Rep': 'TextEdit', 'Prz Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Black%': 'Range', });
lyr_24GRiversidePrecinctResults_4.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'House Dist': 'TextEdit', 'Total Vote': 'TextEdit', 'House Dem': 'TextEdit', 'House Rep': 'TextEdit', 'Pres Dem': 'TextEdit', 'Pres Rep': 'TextEdit', 'Prz Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Black%': 'Range', });
lyr_24GOCPrecinctResults_5.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'House Dist': 'TextEdit', 'Total Vote': 'TextEdit', 'House Dem': 'TextEdit', 'House Rep': 'TextEdit', 'Pres Dem': 'TextEdit', 'Pres Rep': 'TextEdit', 'Prz Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Top API Na': 'TextEdit', 'Black%': 'Range', });
lyr_24GSanDiegoPrecinctResults_6.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'Neighbhood': 'TextEdit', 'House Dist': 'TextEdit', 'Total Vote': 'TextEdit', 'House Dem': 'TextEdit', 'House Rep': 'TextEdit', 'Pres Dem': 'TextEdit', 'Pres Rep': 'TextEdit', 'Prz Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Black%': 'Range', });
lyr_SoCalCDBoundaries_7.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'DISTRICT': 'TextEdit', 'MEMBERS': 'TextEdit', 'LOCKED': 'TextEdit', 'NAME': 'TextEdit', 'POPULATION': 'TextEdit', 'CVAP_19': 'TextEdit', 'HSP_CVAP_1': 'TextEdit', 'DOJ_NH_BLK': 'TextEdit', 'DOJ_NH_ASN': 'TextEdit', 'NH_WHT_CVA': 'TextEdit', 'IDEAL_VALU': 'TextEdit', 'DEVIATION': 'TextEdit', 'F_DEVIATIO': 'TextEdit', 'MULTIPLE_F': 'TextEdit', 'F_CVAP_19': 'TextEdit', 'F_HSP_CVAP': 'TextEdit', 'F_DOJ_NH_B': 'TextEdit', 'F_DOJ_NH_A': 'TextEdit', 'F_NH_WHT_C': 'TextEdit', 'DISTRICT_L': 'TextEdit', 'DISTRICT_N': 'TextEdit', });
lyr_SoCalCountiesShape_8.set('fieldImages', {'OBJECTID': 'Range', 'COUNTY_NAM': 'TextEdit', 'COUNTY_ABB': 'TextEdit', 'COUNTY_NUM': 'Range', 'COUNTY_COD': 'TextEdit', 'COUNTY_FIP': 'TextEdit', 'ISLAND': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_24GLAPrecinctResults_1.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'Neighbhood': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'Total Vote': 'inline label - always visible', 'House Dem': 'inline label - always visible', 'House Rep': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Pres Rep': 'inline label - always visible', 'Prz Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_24GVenturaPrecinctResults24GVenturaResults_2.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'Total Vote': 'inline label - always visible', 'House Dem': 'inline label - always visible', 'House Rep': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Rep Pres': 'inline label - always visible', 'Prz Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_24GSanBernardinoPrecinctResults_3.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'House Dem': 'inline label - always visible', 'House Rep': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Pres Rep': 'inline label - always visible', 'Prz Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_24GRiversidePrecinctResults_4.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'Total Vote': 'inline label - always visible', 'House Dem': 'inline label - always visible', 'House Rep': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Pres Rep': 'inline label - always visible', 'Prz Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_24GOCPrecinctResults_5.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'Total Vote': 'inline label - always visible', 'House Dem': 'inline label - always visible', 'House Rep': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Pres Rep': 'inline label - always visible', 'Prz Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Top API Na': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_24GSanDiegoPrecinctResults_6.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'Neighbhood': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'Total Vote': 'inline label - always visible', 'House Dem': 'inline label - always visible', 'House Rep': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Pres Rep': 'inline label - always visible', 'Prz Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_SoCalCDBoundaries_7.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'DISTRICT': 'no label', 'MEMBERS': 'no label', 'LOCKED': 'no label', 'NAME': 'no label', 'POPULATION': 'no label', 'CVAP_19': 'no label', 'HSP_CVAP_1': 'no label', 'DOJ_NH_BLK': 'no label', 'DOJ_NH_ASN': 'no label', 'NH_WHT_CVA': 'no label', 'IDEAL_VALU': 'no label', 'DEVIATION': 'no label', 'F_DEVIATIO': 'no label', 'MULTIPLE_F': 'no label', 'F_CVAP_19': 'no label', 'F_HSP_CVAP': 'no label', 'F_DOJ_NH_B': 'no label', 'F_DOJ_NH_A': 'no label', 'F_NH_WHT_C': 'no label', 'DISTRICT_L': 'no label', 'DISTRICT_N': 'no label', });
lyr_SoCalCountiesShape_8.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY_NAM': 'no label', 'COUNTY_ABB': 'no label', 'COUNTY_NUM': 'no label', 'COUNTY_COD': 'no label', 'COUNTY_FIP': 'no label', 'ISLAND': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SoCalCountiesShape_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});