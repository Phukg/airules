# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in airules:

1. **Do NOT** open a public issue
2. Email: [contact your GitHub user](https://github.com/tang-vu)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact

You will receive a response within 48 hours.

## Security Practices

- airules does not collect or transmit any telemetry data
- All file operations are local — no network calls except update check (npm registry)
- No secrets, tokens, or credentials are ever written to output files
- User input from `.airules.yml` is validated via Zod schema before processing
