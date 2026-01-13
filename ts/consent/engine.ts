import { parseScope } from "../scopes/parser";

export type Decision =
  | { result: "GRANT_FAST" }
  | { result: "GRANT_LOGGED" }
  | { result: "REQUIRE_APPROVAL" }
  | { result: "REQUIRE_PROOF" }
  | { result: "DENY"; reason: string };

export function evaluateHandshake(
  requestedScopes: string[],
  trustProfile: Set<string>,
  cachedGrants: Set<string>,
  proofsPresent: boolean
): Decision {

  for (const s of requestedScopes) {
    const scope = parseScope(s);
    if (scope.modifiers["DENIED"]) {
      return { result: "DENY", reason: "Explicit deny modifier" };
    }
  }

  if (requestedScopes.every(s => cachedGrants.has(s))) {
    return { result: "GRANT_FAST" };
  }

  if (requestedScopes.every(s => trustProfile.has(s))) {
    return { result: "GRANT_FAST" };
  }

  if (requestedScopes.some(s => s.includes("PAYMENTS") || s.includes("PII"))) {
    return { result: "REQUIRE_APPROVAL" };
  }

  if (!proofsPresent) {
    return { result: "REQUIRE_PROOF" };
  }

  return { result: "GRANT_LOGGED" };
}