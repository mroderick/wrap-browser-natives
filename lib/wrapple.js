var root = typeof self !== 'undefined' ? self : global;
var names = [];

export default function wrap(name) {
    if (names.indexOf(name) === -1) {
        names.push(name);
        wrap[name] = function () {
            return root[name];
        };
    }

    return wrap[name].call();
}

wrap.reset = function reset() {
    names.forEach(function (name) {
        delete wrap[name];
    });
    names = [];
};
