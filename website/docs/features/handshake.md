# Two-Party Handshake (Payment Intents)

In traditional banking, "Push" payments are irreversible. In B2B crypto, this is extremely dangerous. Veto introduces the **Two-Party Handshake** protocol via Payment Intents.

## The Handshake Workflow

Instead of a "Send and Hope" approach, Veto creates a temporary consensus bridge:

1.  **Sender Creates Intent**: The buyer specifies the amount, recipient domain, and target wallet.
2.  **Veto Validates**: The system immediately checks if the wallet matches the domain's verified identity.
3.  **Recipient Confirms**: The vendor receives a notification and must cryptographically **confirm** that they are expecting this payment and the wallet/amount are correct.
4.  **Green Light**: Once both parties agree, the transaction is marked as "READY FOR SETTLEMENT" in the audit log.

## Why use Handshakes?
*   **Zero Mis-clicks**: Eliminates the "Wrong Wallet" error.
*   **Dispute Prevention**: Both parties sign off on the terms before funds move.
*   **Regulatory Armor**: Provides a clear paper trail of intent, proving the transaction wasn't accidental or for money laundering.
