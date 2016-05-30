function FingerprintAuthentication() {
}

FingerprintAuthentication.prototype.show = function (params, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "FingerprintAuthentication",  // Java Class
        "authenticate", // action
        [ // Array of arguments to pass to the Java class
            {
                clientId: params.clientId,
                clientSecret: params.clientSecret
            }
        ]
    );
}

FingerprintAuthentication.prototype.isAvailable = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "FingerprintAuthentication",  // Java Class
        "availability", // action
        [{}]
    );
}

FingerprintAuthentication = new FingerprintAuthentication();
module.exports = FingerprintAuthentication;