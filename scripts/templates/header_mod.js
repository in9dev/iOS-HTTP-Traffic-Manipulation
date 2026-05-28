// header_mod.js
let headers = $request.headers;

// Modify existing headers
headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)";

// Add new custom headers
headers["X-Custom-Debug-Token"] = "ABC-123-XYZ";

// Remove a header if necessary
delete headers["Proxy-Connection"];

$done({ headers: headers });