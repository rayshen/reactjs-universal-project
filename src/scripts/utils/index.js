export const qsParams = (() => {
    let qs = location.search;
    if (!qs && location.hash) {
        let p = location.hash.indexOf('?');
        qs = location.hash.substr(p);
    }
    if (!qs) return {};
    if (qs[0] === '?') qs = qs.slice(1);
    let pairs = qs.split('&');
    if (!pairs || pairs.length === 0) return {};
    return pairs.reduce((params, p) => {
        let idx = p.indexOf('=');
        if (p.slice(0, idx) === '_k') return params;
        if (idx > 0) {
            params[p.slice(0, idx)] = decodeURIComponent(p.slice(idx + 1));
        }
        return params;
    }, {});
})();