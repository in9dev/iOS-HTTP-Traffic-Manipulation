/**
 * example_mod.js
 * Purpose: Intercepts and modifies a JSON response body.
 * Usage: Map this script to a URL rule in your proxy client.
 */

// 1. Capture the response body
let body = $response.body;

try {
    // 2. Parse the JSON body into an object
    let data = JSON.parse(body);

    // 3. Modify the data (Example: Unlocking features or changing values)
    // Always check if the path exists to avoid runtime errors
    if (data && data.status === "success") {
        data.user_level = "premium"; // Promoting user status
        data.debug_info = "Modified by proxy script"; // Adding metadata
    }

    // 4. Return the modified object back to the client
    $done({ body: JSON.stringify(data) });

} catch (e) {
    // 5. If something goes wrong, return the original response
    console.log("Error parsing JSON: " + e);
    $done({}); 
}