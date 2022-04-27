export var ESupportedClientMessageTypes;
(function (ESupportedClientMessageTypes) {
    ESupportedClientMessageTypes["Statistic"] = "statistic";
    ESupportedClientMessageTypes["RequestSharing"] = "requestSharing";
    ESupportedClientMessageTypes["StopObserving"] = "stopObserving";
    ESupportedClientMessageTypes["StopSharing"] = "stopSharing";
    ESupportedClientMessageTypes["Message"] = "message";
    ESupportedClientMessageTypes["Connected"] = "connected";
})(ESupportedClientMessageTypes || (ESupportedClientMessageTypes = {}));
export var ESupportedServerMessageTypes;
(function (ESupportedServerMessageTypes) {
    ESupportedServerMessageTypes["Statistic"] = "statistic";
    ESupportedServerMessageTypes["Command"] = "command";
    ESupportedServerMessageTypes["Leave"] = "leave";
    ESupportedServerMessageTypes["ConnectedList"] = "connectedList";
    ESupportedServerMessageTypes["Connected"] = "connected";
    ESupportedServerMessageTypes["Message"] = "message";
})(ESupportedServerMessageTypes || (ESupportedServerMessageTypes = {}));
export var ENumStatistics;
(function (ENumStatistics) {
    ENumStatistics["events"] = "e";
    ENumStatistics["method"] = "m";
    ENumStatistics["routing"] = "r";
    ENumStatistics["params"] = "p";
    ENumStatistics["error"] = "er";
    ENumStatistics["config"] = "c";
})(ENumStatistics || (ENumStatistics = {}));
