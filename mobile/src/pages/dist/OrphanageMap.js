"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var map_marker_png_1 = require("../images/map-marker.png");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var api_1 = require("../services/api");
function OrphanageMap() {
    var _a = react_1.useState([]), orphanages = _a[0], setOrphanages = _a[1];
    var navigation = native_1.useNavigation();
    native_1.useFocusEffect(function () {
        api_1["default"].get('orphanages').then(function (response) {
            setOrphanages(response.data);
        });
    });
    function handleNavigateOrphanageDetails(id) {
        navigation.navigate('OrphanageDetails', { id: id });
    }
    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectMapPosition');
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_maps_1["default"], { provider: react_native_maps_1.PROVIDER_GOOGLE, style: styles.map, initialRegion: {
                latitude: -22.950778,
                longitude: -43.0931879,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
            } }, orphanages.map(function (orphanage) {
            console.log(orphanage.name);
            return (react_1["default"].createElement(react_native_maps_1.Marker, { key: orphanage.id, icon: map_marker_png_1["default"], calloutAnchor: {
                    x: 2.7,
                    y: 0.8
                }, coordinate: {
                    latitude: orphanage.latitude,
                    longitude: orphanage.longitude
                } },
                react_1["default"].createElement(react_native_maps_1.Callout, { tooltip: true, onPress: function () { return handleNavigateOrphanageDetails(orphanage.id); } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.calloutContainer },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.calloutText }, orphanage.name)))));
        })),
        react_1["default"].createElement(react_native_1.View, { style: styles.footer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.footerText },
                orphanages.length,
                " orfanatos encontrados "),
            react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles.createrOrphanahgeButton, onPress: handleNavigateToCreateOrphanage },
                react_1["default"].createElement(vector_icons_1.Feather, { name: "plus", size: 20, color: "#fff" })))));
}
exports["default"] = OrphanageMap;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: react_native_1.Dimensions.get('window').width,
        height: react_native_1.Dimensions.get('window').height
    },
    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center'
    },
    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3
    },
    footerText: {
        color: '#8f17b3',
        fontFamily: 'Nunito_700Bold'
    },
    createrOrphanahgeButton: {
        width: 56,
        height: 6,
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
