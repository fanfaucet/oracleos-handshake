import { validateHandshakeEnvelope } from "../ts/handshake/validator";
import { evaluateHandshake } from "../ts/consent/engine";
import { createAuditEntry } from "../ts/audit/ledger";

export function processHandshake(envelope: any, state: any) {

  validateHandshakeEnvelope(envelope);

  const decision = evaluateHandshake(
    envelope.requestedScopes,
    state.trustProfile,
    state.cachedGrants,
    state.proofsPresent
  );

  const audit = createAuditEntry(
    envelope.sessionId,
    decision.result,
    state.lastAuditHash
  );

  return { decision, audit };
}