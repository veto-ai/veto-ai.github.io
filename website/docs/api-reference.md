# Veto API Reference: Institutional Integration Guide

This guide provides the technical specifications for integrating Veto’s Identity & Integrity layer into enterprise treasury systems, custody platforms, and payment orchestrators.

## Protocol Foundations

Veto operates as a **Shadow-Security Oracle**. It does not hold funds; instead, it provides a cryptographically verifiable "Clear-to-Settle" signal for high-value B2B transactions.

---

## 1. Authentication & Security

Veto utilizes a dual-layer security model to protect institutional endpoints.

### Authentication Methods
*   **Bearer Auth**: JWT-based session tokens for interactive dashboard actions.
*   **API Key (X-API-Key)**: HMCA-signed headers for server-to-server (M2M) communication.

### Content Integrity
All sensitive write operations require the **`X-Veto-Signature`** header—a custom HMAC-SHA256 hash of the request body and timestamp to prevent replay attacks.

---

## 2. Identity Attestation (`/attestation`)

Anchors a hexadecimal wallet address to a verified Corporate Domain (DNS).

### Generate Challenge
`POST /attestation/challenge`

Creates an attestation intent. The response contains the **DNS Root of Trust** payload.

**Request:**
```json
{
  "domain": "acme-global.com",
  "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18",
  "chain": "ethereum"
}
```

**Enterprise-Grade Response:**
```json
{
  "attestationId": "att_v92834j",
  "status": "CHALLENGE_ISSUED",
  "verificationPayload": {
    "dns": {
      "type": "TXT",
      "path": "_veto-auth.acme-global.com",
      "value": "veto-proof=7a6f8b9c2d...",
      "dnssecRequired": true
    },
    "wellKnown": {
      "url": "https://acme-global.com/.well-known/veto.json",
      "content": {
        "address": "0x742d...",
        "claimId": "att_v92834j"
      }
    }
  },
  "expiresAt": "2025-10-15T12:00:00Z"
}
```

---

## 3. Bilateral Consensus Handshake (`/payment-intent`)

The core protocol for preventing **Invoice Hijacking** and **Address Mutation**.

### Create Payment Intent
`POST /payment-intent`

Signals a transaction intent to a verified counterparty.

**Request:**
```json
{
  "recipientDomain": "vendor.xyz",
  "recipientWallet": "0x987...",
  "amount": 1250000.00,
  "currency": "USDC",
  "memo": "Batch-098-RawMaterials"
}
```

### Handshake Confirmation (The "Consent" Payload)
`POST /payment-intent/:id/confirm`

The recipient validates the intent via their custody interface and provides an **EIP-712 Signature**. This signature acts as a **Pre-Settlement Receipt**.

**Request:**
```json
{
  "recipientSignature": "0x... (EIP-712 Typed Signature)",
  "v": 27,
  "r": "0x...",
  "s": "0x..."
}
```

---

## 4. Institutional Risk Engine (`/scan`)

Performs real-time AML/Sanctions screening before the final settlement execution.

### Target Scan
`POST /scan/wallet`

**Response:**
```json
{
  "riskScore": 12,
  "status": "CLEAR",
  "signals": {
    "sanctionsMatch": false,
    "highRiskExchange": false,
    "mixerProximity": 0,
    "identityMatch": "VERIFIED_VENDOR"
  },
  "auditToken": "v-proof-99238..."
}
```

---

## 5. Webhooks & Event Streams

Veto supports event-driven workflows for automated Treasury Management Systems (TMS).

### Supported Events:
*   `attestation.verified`: Emitted when a new vendor identity is anchored.
*   `handshake.confirmed`: Emitted when a counterparty signs a payment intent.
*   `scan.alert`: High-priority alert for high-risk wallet interactions.
*   `registry.updated`: Signal for local cache invalidation of the verified list.

---

## Privacy & Security Considerations (Institutional FAQ)

### Q: Does Veto introduce a Web2 dependency via DNS?
**A:** DNS/DNSSEC acts as the **Discovery Layer**. Settlement finality is guarded by **EIP-712 (Web3)**. A DNS hijack cannot trigger a payment because the intruder lacks the counterparty's private keys required for the Handshake Confirmation.

### Q: How do you prevent Public Registry Leakage?
**A:** Veto supports **Stealth Attestations**. Organizations can choose to hide their wallet-domain mappings from the public API, making them queryable only by authenticated peers with a valid **Handshake Token**.

### Q: What is the plan for Privacy-Preserving Proofs?
**A:** Our roadmap includes **ZK-Proofs for DNSSEC Path Validation**, allowing institutions to prove domain control to the Veto Oracle without exposing the underlying TXT records or IP infrastructure to the network.
