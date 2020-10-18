"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_maps_1 = require("react-native-maps");
var map_marker_png_1 = require("../../images/map-marker.png");
function SelectMapPosition() {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState({ latitude: 0, longitude: 0 }), position = _a[0], setPosition = _a[1];
    function handleNextStep() {
        navigation.navigate('OrphanageData', { position: position });
    }
    function handleSelectMapPosition(event) {
        setPosition(event.nativeEvent.coordinate);
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_maps_1["default"], { initialRegion: {
                latitude: -27.2092052,
                longitude: -49.6401092,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
            }, style: styles.mapStyle, onPress: handleSelectMapPosition }, position.latitude !== 0 && (react_1["default"].createElement(react_native_maps_1.Marker, { icon: map_marker_png_1["default"], coordinate: { latitude: position.latitude, longitude: position.longitude } }))),
        position.latitude !== 0 && (react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles.nextButton, onPress: handleNextStep },
            react_1["default"].createElement(react_native_1.Text, { style: styles.nextButtonText }, "Pr\u00F3ximo")))));
}
exports["default"] = SelectMapPosition;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    mapStyle: {
        width: react_native_1.Dimensions.get('window').width,
        height: react_native_1.Dimensions.get('window').height
    },
    nextButton: {
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 40
    },
    nextButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#FFF'
    }
});
