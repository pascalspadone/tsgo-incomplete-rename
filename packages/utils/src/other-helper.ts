import { formatMessage } from "./helper";

export function greet(name: string): string {
  return formatMessage(`Hello, ${name}!`);
}
