"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_maps_1 = require("react-native-maps");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var map_marker_png_1 = require("../images/map-marker.png");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var api_1 = require("../services/api");
function OrphanageDetails() {
    var route = native_1.useRoute();
    var _a = react_1.useState(), orphanage = _a[0], setOrphanage = _a[1];
    var params = route.params;
    react_1.useEffect(function () {
        api_1["default"].get("orphanages/" + params.id).then(function (response) {
            setOrphanage(response.data);
        });
    }, [params.id]);
    if (!orphanage) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, { style: styles.description }, "Carregando ...")));
    }
    function handleOpenGoogleMapRoutes() {
        console.log('Chega ao mapa');
        react_native_1.Linking.openURL("https://www.google.com/maps/dir/?api=1&destination=" + (orphanage === null || orphanage === void 0 ? void 0 : orphanage.latitude) + "," + (orphanage === null || orphanage === void 0 ? void 0 : orphanage.longitude));
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.imagesContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, pagingEnabled: true }, orphanage.images.map(function (image) {
                return (react_1["default"].createElement(react_native_1.Image, { key: image.id, style: styles.image, source: { uri: image.url } }));
            }))),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailsContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, orphanage.name),
            react_1["default"].createElement(react_native_1.Text, { style: styles.description }, orphanage.about),
            react_1["default"].createElement(react_native_1.View, { style: styles.mapContainer },
                react_1["default"].createElement(react_native_maps_1["default"], { initialRegion: {
                        latitude: orphanage.latitude,
                        longitude: orphanage.longitude,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008
                    }, zoomEnabled: false, pitchEnabled: false, scrollEnabled: false, rotateEnabled: false, style: styles.mapStyle },
                    react_1["default"].createElement(react_native_maps_1.Marker, { icon: map_marker_png_1["default"], coordinate: {
                            latitude: orphanage.latitude,
                            longitude: orphanage.longitude
                        } })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleOpenGoogleMapRoutes, style: styles.routesContainer },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.routesText }, "Ver rotas no Google Maps"))),
            react_1["default"].createElement(react_native_1.View, { style: styles.separator }),
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Instru\u00E7\u00F5es para visita"),
            react_1["default"].createElement(react_native_1.Text, { style: styles.description }, orphanage.instructions),
            react_1["default"].createElement(react_native_1.View, { style: styles.scheduleContainer },
                react_1["default"].createElement(react_native_1.View, { style: [styles.scheduleItem, styles.scheduleItemBlue] },
                    react_1["default"].createElement(vector_icons_1.Feather, { name: "clock", size: 40, color: "#2AB5D1" }),
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.scheduleText, styles.scheduleTextBlue] },
                        "Segunda \u00E0 Sexta ",
                        orphanage.opening_hours)),
                orphanage.opening_on_weekends ? (react_1["default"].createElement(react_native_1.View, { style: [styles.scheduleItem, styles.scheduleItemGreen] },
                    react_1["default"].createElement(vector_icons_1.Feather, { name: "info", size: 40, color: "#39CC83" }),
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.scheduleText, styles.scheduleTextGreen] }, "Atendemos fim de semana"))) : (react_1["default"].createElement(react_native_1.View, { style: [styles.scheduleItem, styles.scheduleItemRed] },
                    react_1["default"].createElement(vector_icons_1.Feather, { name: "info", size: 40, color: "#FF669D" }),
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.scheduleText, styles.scheduleTextRed] }, "N\u00E3o Atendemos fim de semana")))),
            react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles.contactButton, onPress: function () { } },
                react_1["default"].createElement(vector_icons_1.FontAwesome, { name: "whatsapp", size: 24, color: "#FFF" }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.contactButtonText }, "Entrar em contato")))));
}
exports["default"] = OrphanageDetails;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    imagesContainer: {
        height: 240
    },
    image: {
        width: react_native_1.Dimensions.get('window').width,
        height: 240,
        resizeMode: 'cover'
    },
    detailsContainer: {
        padding: 24
    },
    title: {
        color: '#4D6F80',
        fontSize: 30,
        fontFamily: 'Nunito_700Bold'
    },
    description: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#5c8599',
        lineHeight: 24,
        marginTop: 16
    },
    mapContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#B3DAE2',
        marginTop: 40,
        backgroundColor: '#E6F7FB'
    },
    mapStyle: {
        width: '100%',
        height: 150
    },
    routesContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    routesText: {
        fontFamily: 'Nunito_700Bold',
        color: '#0089a5'
    },
    separator: {
        height: 0.8,
        width: '100%',
        backgroundColor: '#D3E2E6',
        marginVertical: 40
    },
    scheduleContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scheduleItem: {
        width: '48%',
        padding: 20
    },
    scheduleItemBlue: {
        backgroundColor: '#E6F7FB',
        borderWidth: 1,
        borderColor: '#B3DAE2',
        borderRadius: 20
    },
    scheduleItemGreen: {
        backgroundColor: '#EDFFF6',
        borderWidth: 1,
        borderColor: '#A1E9C5',
        borderRadius: 20
    },
    scheduleItemRed: {
        backgroundColor: '#FEF6F9',
        borderWidth: 1,
        borderColor: '#FFBCD4',
        borderRadius: 20
    },
    scheduleText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20
    },
    scheduleTextBlue: {
        color: '#5C8599'
    },
    scheduleTextGreen: {
        color: '#37C77F'
    },
    scheduleTextRed: {
        color: '#FF669D'
    },
    contactButton: {
        backgroundColor: '#3CDC8C',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40
    },
    contactButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16
    }
});
