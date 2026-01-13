import Ajv from "ajv";
import schema from "./handshake.schema.json";

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

export function validateHandshakeEnvelope(envelope: unknown) {
  const valid = validate(envelope);
  if (!valid) {
    throw new Error(
      "Invalid HandshakeEnvelope: " +
      JSON.stringify(validate.errors, null, 2)
    );
  }
  return true;
}