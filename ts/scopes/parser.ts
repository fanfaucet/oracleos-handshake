export interface Scope {
  resource: string;
  action: string;
  qualifier?: string;
  modifiers: Record<string, string | boolean>;
}

const SCOPE_REGEX =
  /^(?<res>[A-Z_]+)\.(?<act>[A-Z_]+)(:(?<qual>[^()]+))?(\((?<mod>.+)\))?$/;

export function parseScope(input: string): Scope {
  const match = input.match(SCOPE_REGEX);
  if (!match?.groups) throw new Error(`Invalid scope: ${input}`);

  const mods: Record<string, string | boolean> = {};
  if (match.groups.mod) {
    match.groups.mod.split(",").forEach(pair => {
      const [k, v] = pair.split(":");
      mods[k.trim()] = v ? v.trim() : true;
    });
  }

  return {
    resource: match.groups.res,
    action: match.groups.act,
    qualifier: match.groups.qual,
    modifiers: mods
  };
}