const path = `//${__HOST__}:${__PORT__}/js/`;
if (location.protocol === 'https:' || location.search.indexOf('protocol=https') !== -1) {
  __webpack_public_path__ = `https:${path}`;
} else {
  __webpack_public_path__ = `http:${path}`;
}
