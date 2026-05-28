// request_body_mod.js
let body = $request.body;

try {
    let obj = JSON.parse(body);
    
    // Modify outbound data
    // obj.variable = "new value"; // Example modification
    
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    // If not JSON, return original
    $done({});
}