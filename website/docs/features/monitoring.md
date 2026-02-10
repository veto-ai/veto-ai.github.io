# Always-On Shield (Monitoring)

Identity verification isn't a "One-and-Done" process. Security is a continuous state. Veto’s **Always-On Shield** provides background monitoring for all your verified counterparts.

## Continuous Monitoring

Once you add a vendor to your watchlist, Veto performs periodic background checks (every 1-2 hours) on:

*   **DNS Integrity**: We detect if the vendor's DNS record (and thus their wallet attestation) has been modified or removed.
*   **SSL Expiry**: We alert you if a vendor's web security is failing, which could signal a server compromise.
*   **Domain Reputation**: We monitor for "Domain Expiry" or redirection to malicious IPs.
*   **Whisteblower Signals**: Aggregates community "Trust Signals" if other companies flag a wallet as compromised.

## Real-Time Webhooks
If a monitor detects a failure, Veto can fire a **Webhook** to your system, allowing you to automatically pause all scheduled payments to that vendor until the issue is investigated.
