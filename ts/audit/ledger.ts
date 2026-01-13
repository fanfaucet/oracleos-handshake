import crypto from "crypto";

export interface AuditEntry {
  timestamp: string;
  sessionId: string;
  decision: string;
  prevHash: string;
  hash: string;
}

export function createAuditEntry(
  sessionId: string,
  decision: string,
  prevHash: string
): AuditEntry {

  const timestamp = new Date().toISOString();
  const payload = `${timestamp}|${sessionId}|${decision}|${prevHash}`;

  const hash = crypto
    .createHash("sha256")
    .update(payload)
    .digest("hex");

  return { timestamp, sessionId, decision, prevHash, hash };
}