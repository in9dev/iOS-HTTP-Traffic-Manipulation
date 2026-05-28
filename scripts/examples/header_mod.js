/**
 * header_mod.js
 * Purpose: Manipulates request headers (e.g., User-Agent or Auth tokens).
 * Usage: Map this script to a request rule.
 */

// 1. Access the request headers
let headers = $request.headers;

// 2. Modify specific headers
// Example: Spoofing the User-Agent to appear as a different device
headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)";

// Example: Injecting a custom header for API debugging
headers["X-Debug-Mode"] = "enabled";

// 3. Send the modified headers to the server
$done({ headers: headers });