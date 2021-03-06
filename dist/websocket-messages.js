"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENumStatistics = exports.ESupportedServerMessageTypes = exports.ESupportedClientMessageTypes = void 0;
var ESupportedClientMessageTypes;
(function (ESupportedClientMessageTypes) {
    ESupportedClientMessageTypes["Statistic"] = "statistic";
    ESupportedClientMessageTypes["RequestSharing"] = "requestSharing";
    ESupportedClientMessageTypes["StopObserving"] = "stopObserving";
    ESupportedClientMessageTypes["StopSharing"] = "stopSharing";
    ESupportedClientMessageTypes["Message"] = "message";
    ESupportedClientMessageTypes["Connected"] = "connected";
    ESupportedClientMessageTypes["Offer"] = "offer";
    ESupportedClientMessageTypes["Answer"] = "answer";
    ESupportedClientMessageTypes["Candidate"] = "candidate";
    ESupportedClientMessageTypes["Me"] = "me";
})(ESupportedClientMessageTypes = exports.ESupportedClientMessageTypes || (exports.ESupportedClientMessageTypes = {}));
var ESupportedServerMessageTypes;
(function (ESupportedServerMessageTypes) {
    ESupportedServerMessageTypes["Statistic"] = "statistic";
    ESupportedServerMessageTypes["Command"] = "command";
    ESupportedServerMessageTypes["Leave"] = "leave";
    ESupportedServerMessageTypes["ConnectedList"] = "connectedList";
    ESupportedServerMessageTypes["Connected"] = "connected";
    ESupportedServerMessageTypes["Message"] = "message";
    ESupportedServerMessageTypes["Offer"] = "offer";
    ESupportedServerMessageTypes["Answer"] = "answer";
    ESupportedServerMessageTypes["Candidate"] = "candidate";
    ESupportedServerMessageTypes["Me"] = "me";
})(ESupportedServerMessageTypes = exports.ESupportedServerMessageTypes || (exports.ESupportedServerMessageTypes = {}));
var ENumStatistics;
(function (ENumStatistics) {
    ENumStatistics["events"] = "e";
    ENumStatistics["method"] = "m";
    ENumStatistics["routing"] = "r";
    ENumStatistics["params"] = "p";
    ENumStatistics["error"] = "er";
    ENumStatistics["config"] = "c";
})(ENumStatistics = exports.ENumStatistics || (exports.ENumStatistics = {}));
