# Best Practices & Security

To ensure stability and security, follow these guidelines when writing proxy scripts.

## Performance
* **Keep Scripts Lean:** Avoid heavy processing or synchronous blocking operations. Proxy scripts run for every matching request; slow code will introduce latency.
* **Regex Efficiency:** Use specific URL matches rather than broad wildcards to ensure the proxy only executes scripts when necessary.

## Security
* **Data Sanitization:** Never log raw authentication tokens or sensitive user data (PII) to the proxy console or external files.
* **Scope Limitation:** Only enable MITM on the specific hostnames you are actively testing.

## Error Handling
Always wrap your JSON parsing in `try...catch` blocks.
```javascript
try {
    let obj = JSON.parse($response.body);
    // ... logic ...
} catch (e) {
    // Return original body if parsing fails
    $done({});
}
```

### 4. `README.md` (The complete file)
```markdown
# iOS Network Interception & API Debugging

A collection of methodologies and script templates for intercepting and manipulating HTTP/HTTPS traffic on iOS.

## Overview
This repository provides a framework for debugging API interactions and testing application behavior by modifying network requests and responses in real-time.

## Directory Structure
- `/scripts`: JavaScript templates for body and header modification.
- `/docs`: Detailed documentation on workflow, setup, and security.

## Ethical Disclaimer
This project is for **educational and research purposes only**. Do not use these techniques to bypass security controls or violate Terms of Service. Always test within authorized environments.

## Resources
- [Egern Documentation](https://egern.app/)
- [Shadowrocket Guide](https://shadowrocket.com/)
- [Surge Scripting Manual](https://manual.nssurge.com/)

---
*Maintained as a reference for network troubleshooting and API development.*