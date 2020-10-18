"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var native_1 = require("@react-navigation/native");
var react_2 = require("react");
var ImagePicker = require("expo-image-picker");
var api_1 = require("../../services/api");
function OrphanageData() {
    var _a = react_2.useState(''), nome = _a[0], setNome = _a[1];
    var _b = react_2.useState(''), about = _b[0], setAbout = _b[1];
    var _c = react_2.useState(''), instructions = _c[0], setInstructions = _c[1];
    var _d = react_2.useState(''), opening_hours = _d[0], setOpeningHours = _d[1];
    var _e = react_2.useState(true), opening_on_weekends = _e[0], setOpeningOnWeekends = _e[1];
    var _f = react_2.useState([]), images = _f[0], setImages = _f[1];
    var navigation = native_1.useNavigation();
    var route = native_1.useRoute();
    var params = route.params;
    function handleCreateOrphanage() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, latitude, longitude, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.position, latitude = _a.latitude, longitude = _a.longitude;
                        console.log({
                            nome: nome,
                            latitude: latitude,
                            longitude: longitude,
                            about: about,
                            instructions: instructions,
                            opening_hours: opening_hours,
                            opening_on_weekends: opening_on_weekends
                        });
                        data = new FormData();
                        data.append('name', nome);
                        data.append('about', about);
                        data.append('latitude', String(latitude));
                        data.append('longitude', String(longitude));
                        data.append('instructions', instructions);
                        data.append('name', name);
                        data.append('opening_hours', opening_hours);
                        data.append('opening_on_weekends', String(opening_on_weekends));
                        images.forEach(function (image, index) {
                            data.append('images', {
                                name: "image_" + index + ".jpg",
                                type: 'image/jpg',
                                uri: image
                            });
                        });
                        return [4 /*yield*/, api_1["default"].post('orphanages', data)];
                    case 1:
                        _b.sent();
                        navigation.navigate('OrphanageMap');
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleSelectImages() {
        return __awaiter(this, void 0, void 0, function () {
            var status, result, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ImagePicker.requestCameraRollPermissionsAsync()];
                    case 1:
                        status = (_a.sent()).status;
                        if (status !== 'granted') {
                            alert('Eita, PORRRRRAAAAAAA');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, ImagePicker.launchImageLibraryAsync({
                                allowsEditing: true,
                                quality: 1,
                                mediaTypes: ImagePicker.MediaTypeOptions.Images
                            })];
                    case 2:
                        result = _a.sent();
                        if (result.cancelled) {
                            return [2 /*return*/];
                        }
                        image = result.uri;
                        setImages(__spreadArrays(images, [image]));
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: styles.container, contentContainerStyle: { padding: 24 } },
        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Dados"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Nome"),
        react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, value: nome, onChangeText: setNome }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Sobre"),
        react_1["default"].createElement(react_native_1.TextInput, { style: [styles.input, { height: 110 }], multiline: true, value: about, onChangeText: setAbout }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Whatsapp"),
        react_1["default"].createElement(react_native_1.TextInput, { style: styles.input }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Fotos"),
        react_1["default"].createElement(react_native_1.View, { style: styles.uploadedImagesContainer }, images.map(function (image) {
            return (react_1["default"].createElement(react_native_1.Image, { key: image, source: { uri: image }, style: styles.uploadedImage }));
        })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.imagesInput, onPress: handleSelectImages },
            react_1["default"].createElement(vector_icons_1.Feather, { name: "plus", size: 24, color: "#15B6D6" })),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Visita\u00E7\u00E3o"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Instru\u00E7\u00F5es"),
        react_1["default"].createElement(react_native_1.TextInput, { style: [styles.input, { height: 110 }], multiline: true, value: instructions, onChangeText: setInstructions }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Horario de visitas"),
        react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, value: opening_hours, onChangeText: setOpeningHours }),
        react_1["default"].createElement(react_native_1.View, { style: styles.switchContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Atende final de semana?"),
            react_1["default"].createElement(react_native_1.Switch, { thumbColor: "#fff", trackColor: { "false": '#ccc', "true": '#39CC83' }, value: opening_on_weekends, onValueChange: setOpeningOnWeekends })),
        react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles.nextButton, onPress: handleCreateOrphanage },
            react_1["default"].createElement(react_native_1.Text, { style: styles.nextButtonText }, "Cadastrar"))));
}
exports["default"] = OrphanageData;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: '#5c8599',
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6'
    },
    label: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_600SemiBold',
        marginBottom: 8
    },
    comment: {
        fontSize: 11,
        color: '#8fa7b3'
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top'
    },
    uploadedImagesContainer: {
        flexDirection: 'row'
    },
    uploadedImage: {
        width: 64,
        height: 64,
        borderRadius: 20,
        marginBottom: 32,
        marginRight: 8
    },
    imagesInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderStyle: 'dashed',
        borderColor: '#96D2F0',
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    nextButton: {
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 32
    },
    nextButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#FFF'
    }
});
