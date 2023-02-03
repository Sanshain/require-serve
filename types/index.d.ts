export namespace options {
    const port: number;
    const root: string;
    const live: boolean;
}
export const defaultRoot: "./public";
export const encoding: "utf-8";
export const eventSource: "/create-serve";
export const clients: any[];
export function start(startOptions?: {}): void;
export function update(): void;
declare namespace _default {
    export { start };
    export { update };
}
export default _default;
import { error } from "./utils/index.js";
import { log } from "./utils/index.js";
export { error, log };
