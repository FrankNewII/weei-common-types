"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENumStatistics = exports.EWebsocketMessageTypes = void 0;
var EWebsocketMessageTypes;
(function (EWebsocketMessageTypes) {
    EWebsocketMessageTypes["Command"] = "command";
    EWebsocketMessageTypes["Leave"] = "leave";
    EWebsocketMessageTypes["Enter"] = "enter";
    EWebsocketMessageTypes["ConnectedList"] = "connectedList";
    EWebsocketMessageTypes["Message"] = "message";
    EWebsocketMessageTypes["Connected"] = "connected";
    EWebsocketMessageTypes["Offer"] = "offer";
    EWebsocketMessageTypes["RenegotiationOffer"] = "renegotiationOffer";
    EWebsocketMessageTypes["Answer"] = "answer";
    EWebsocketMessageTypes["RenegotiationAnswer"] = "renegotiationAnswer";
    EWebsocketMessageTypes["Candidate"] = "candidate";
    EWebsocketMessageTypes["Me"] = "me";
    EWebsocketMessageTypes["IAm"] = "iAm";
})(EWebsocketMessageTypes = exports.EWebsocketMessageTypes || (exports.EWebsocketMessageTypes = {}));
var ENumStatistics;
(function (ENumStatistics) {
    ENumStatistics["events"] = "e";
    ENumStatistics["method"] = "m";
    ENumStatistics["routing"] = "r";
    ENumStatistics["params"] = "p";
    ENumStatistics["error"] = "er";
    ENumStatistics["config"] = "c";
})(ENumStatistics = exports.ENumStatistics || (exports.ENumStatistics = {}));
