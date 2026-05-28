// response_body_mod.js
let body = $response.body;

try {
    let obj = JSON.parse(body);
    
    // Modify fields
    // obj.variable = "new value"; // Example modification
    
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    // If not JSON, return original
    $done({});
}