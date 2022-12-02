/** @typedef { import('estree').BaseNode} BaseNode */
/** @typedef {{
    skip: () => void;
    remove: () => void;
    replace: (node: BaseNode) => void;
    insertBefore: (node: BaseNode) => void;
    insertAfter: (node: BaseNode) => void;
}} WalkerContext */
export class WalkerBase {
    /** @type {boolean} */
    should_skip: boolean;
    /** @type {boolean} */
    should_remove: boolean;
    /** @type {BaseNode | null} */
    replacement: BaseNode | null;
    /** @type {BaseNode | null} */
    insertedBefore: BaseNode | null;
    /** @type {BaseNode | null} */
    insertedAfter: BaseNode | null;
    /** @type {WalkerContext} */
    context: WalkerContext;
    /**
     *
     * @param {any} parent
     * @param {string} prop
     * @param {number} index
     * @param {BaseNode} node
     */
    replace(parent: any, prop: string, index: number, node: import("estree").BaseNode): void;
    /**
     *
     * @param {any} parent
     * @param {string} prop
     * @param {number} index
     */
    remove(parent: any, prop: string, index: number): void;
    /**
     *
     * @param {any} parent
     * @param {string} prop
     * @param {number} index
     * @param {BaseNode} node
     */
    insertBefore(parent: any, prop: string, index: number, node: import("estree").BaseNode): void;
    /**
     *
     * @param {any} parent
     * @param {string} prop
     * @param {number} index
     * @param {BaseNode} node
     */
    insertAfter(parent: any, prop: string, index: number, node: import("estree").BaseNode): void;
}
export type BaseNode = import("estree").BaseNode;
export type WalkerContext = {
    skip: () => void;
    remove: () => void;
    replace: (node: import("estree").BaseNode) => void;
    insertBefore: (node: import("estree").BaseNode) => void;
    insertAfter: (node: import("estree").BaseNode) => void;
};
