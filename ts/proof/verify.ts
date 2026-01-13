import crypto from "crypto";

export function verifyAttestation(
  payload: string,
  signature: string,
  publicKey: string
): boolean {
  const verify = crypto.createVerify("SHA256");
  verify.update(payload);
  verify.end();
  return verify.verify(publicKey, signature, "base64");
}