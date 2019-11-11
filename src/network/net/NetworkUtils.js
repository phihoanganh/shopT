import Const from "../../global/const"
import Utils from '../../global/utils'

export default Object.freeze({
    get: function (header, url, body, callback) {
        if (body != null) {
            var esc = encodeURIComponent;
            var query = Object.keys(body)
                .map(k => esc(k) + '=' + esc(body[k]))
                .join('&');
            url += "?" + query;
        }
        callAPI(header, url, null, 'GET', callback)
    },
    getparam: function (header, url, body, callback) {
        if (body != null) {
            var esc = encodeURIComponent;
            var query = Object.keys(body)
                .map(k => '/' + esc(body[k]))
                .join('&');
            url += query;
        }
        console.log(url)
        callAPI(header, url, null, 'GET', callback);
    },
    post: function (header, url, body, callback) {
        callAPI(header, url, body, 'POST', callback);
    },
    put: function (header, url, body, callback) {
        callAPI(header, url, body, 'PUT', callback);
    },
    delete: function (header, url, body, callback) {
        callAPI(header, url, body, 'DELETE', callback);
    },
    uploadFile: function (header, url, body, formData, callback) {
        if (body != null) {
            var esc = encodeURIComponent;
            var query = Object.keys(body)
                .map(k => esc(k) + '=' + esc(body[k]))
                .join('&');
            url += "?" + query;
        }
        console.log(url)
        uploadFile(header, url, formData, callback);
    },
    getWtToken: function (header, url, body, callback) {
        if (body != null) {
            var esc = encodeURIComponent;
            var query = Object.keys(body)
                .map(k => esc(k) + '=' + esc(body[k]))
                .join('&');
            url += "?" + query;
        }
        callAPIWtToken(header, url, null, 'GET', callback)
    },
    getparamWtToken: function (header, url, body, callback) {
        if (body != null) {
            var esc = encodeURIComponent;
            var query = Object.keys(body)
                .map(k => '/' + esc(body[k]))
                .join('&');
            url += query;
        }
        callAPIWtToken(header, url, null, 'GET', callback);
    },
    postWtToken: function (header, url, body, callback) {
        callAPIWtToken(header, url, body, 'POST', callback);
    },
    putWtToken: function (header, url, body, callback) {
        callAPIWtToken(header, url, body, 'PUT', callback);
    },
    deleteWtToken: function (header, url, body, callback) {
        callAPIWtToken(header, url, body, 'DELETE', callback);
    }
});

function callAPI(header, url, body, method, callback) {
    Utils.getValueByKey(Const.ACCESS_TOKEN_STORE_ID).then((result) => {
        console.log(result);
        fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'JWT-TOKEN': result,
                ...header
            },
            body: body ? JSON.stringify(body) : null
        }).then((response) => new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                ok: response.ok,
                json,
            })))
        ).then((responseJson) => {
            callback(Const.SUCCESS, responseJson);
        }).catch((error) => {
            callback(Const.FAILURE, error);
        });
    });
}

function callAPIWtToken(header, url, body, method, callback) {
    fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header
        },
        body: body ? JSON.stringify(body) : null
    }).then((response) => new Promise((resolve) => response.json()
        .then((json) => resolve({
            status: response.status,
            ok: response.ok,
            json,
        })))
    ).then((responseJson) => {
        callback(Const.SUCCESS, responseJson);
    }).catch((error) => {
        callback(Const.FAILURE, error);
    });
}
function uploadFile(header, url, formData, callback) {
    Utils.getValueByKey(Const.ACCESS_TOKEN_STORE_ID).then((result) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'JWT-TOKEN': result,
                ...header
            },
            body: formData
        }).then((response) => new Promise((resolve) => resolve({
            status: response.status,
            ok: response.ok,
            response,
        }))
        ).then((responseJson) => {
            callback(Const.SUCCESS, responseJson);
        }).catch((error) => {
            callback(Const.FAILURE, error);
        });
    });
}