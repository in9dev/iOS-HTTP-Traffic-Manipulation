# Network Interception Workflow

This document explains how traffic is intercepted, modified, and forwarded using a rule-based proxy engine.

## The Packet Lifecycle
1. **Client Request:** The iOS application initiates an HTTP/HTTPS request.
2. **Proxy Interception:** The proxy client intercepts the request before it leaves the device.
3. **Request Modification (Optional):** If a `request_body_mod.js` or `header_mod.js` script is mapped to the URL, the proxy modifies the request parameters or headers.
4. **Server Communication:** The modified request is sent to the target server.
5. **Response Interception:** The server sends a response, which is intercepted by the proxy.
6. **Response Modification (Optional):** If a `response_body_mod.js` script is mapped, the proxy modifies the JSON body.
7. **Client Delivery:** The final (modified) response is delivered to the iOS application.

---
> [!NOTE]
> All modifications occur in real-time. The application remains unaware that the traffic was intercepted or altered.