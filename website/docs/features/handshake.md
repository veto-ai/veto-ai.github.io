# Bilateral Consensus Handshake

The **Bilateral Consensus Handshake** is the cornerstone of the Veto Safety Stack. It introduces a critical layer of **Pre-Settlement Finality**, ensuring that high-value stablecoin transfers are only executed once both participants have cryptographically validated the intent, amount, and destination.

## The Problem: The "Point-of-No-Return" Default

Blockchain transactions are immutable by design. Once a transfer is broadcast, it cannot be reversed. In a B2B environment, the standard process (Copy-Paste -> Click Send) is prone to:
*   **Address Mutation**: Malware that swaps addresses in the clipboard.
*   **Intent Mismatch**: Disputes over exchange rates or transaction fees *after* settlement.
*   **Execution Errors**: Accidental transfers to the wrong network or smart contract.

## The Solution: A Cryptographic Barrier

Veto transforms a unilateral "Send" action into a bilateral "Consensus" event.

### The Protocol Flow

1.  **Intent Generation (Sender)**: The sender initiates a handshake, defining the precise parameters: Counterparty Domain, Wallet Address, Asset Type, and Amount.
2.  **Out-of-Band Notification (Receiver)**: The counterparty receives a secure notification through the Veto Enterprise API or Managed Interface.
3.  **Validation & Counter-Signing (Receiver)**: The receiver validates that the parameters match their internal records and signs the intent using an EIP-712 typed signature.
4.  **Consensus Verification (Sender)**: The sender’s treasury system verifies the receiver's signature against the Veto Identity Registry.
5.  **Atomic Execution**: Only upon successful consensus is the on-chain transaction authorized for execution.

## Institutional Advantages

*   **Irreputable Proof of Intent**: Eliminates "I didn't receive it" disputes by anchoring every transaction to a signed bilateral agreement.
*   **Operational Risk Elimination**: Prevents the $100M+ losses annually attributed to fat-finger errors and address-swapping malware.
*   **Dynamic Rate Locking**: For cross-border settlements, the handshake allows both parties to lock in an exchange rate or fee structure that remains valid for the duration of the consensus window.
*   **Immutable Audit Logs**: Generates a cryptographically signed trail that satisfies internal audit and external regulatory requirements for "Know Your Transaction" (KYT).
