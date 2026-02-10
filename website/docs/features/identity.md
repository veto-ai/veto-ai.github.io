# Cryptographic Identity Attestation

The core of Veto is the **Identity Engine**, which bridges the gap between traditional web identities (Domains) and blockchain identities (Wallets).

## How it Works

Veto uses a multi-method attestation process to verify that a specific organization owns a specific wallet address.

### 1. DNS-to-Wallet Bridge
Businesses add a specific `_veto` TXT record to their DNS settings. Veto’s engine performs a global DNS query to verify this record, creating a cryptographic link between `acme-corp.com` and `0x742d...`.

### 2. .well-known Verification
As a fallback or secondary proof, Veto checks for a signed identity manifest at `https://domain.com/.well-known/veto.json`. This ensures proof of control over the web server infrastructure.

### 3. EIP-712 Typed Signing
To prevent "Identity Spoofing," vendors sign a Veto Challenge using their private key. This proves they actually control the wallet they are claiming to own.

## The Identity Registry

Once verified, vendors are added to the **Veto Global Registry**. 
*   **Trust Scores**: Based on domain age, DNSSEC status, and history of clean transactions.
*   **Trust Graph**: Cross-company verification signals that strengthen the vendor's reputation over time.
