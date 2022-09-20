/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function initializeSettings(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function initializeMint(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number): void;
export function initializeVault(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): void;
export function withdrawalRequest(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number): void;
export function approveWithdrawalEver(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function approveWithdrawalEverByOwner(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function approveWithdrawalSol(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): void;
export function approveWithdrawalSolByOwner(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): void;
export function withdrawalEver(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function withdrawalSol(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function cancelWithdrawalSol(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number): void;
export function fillWithdrawalSol(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number): void;
export function depositEver(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number): void;
export function depositSol(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number): void;
export function voteForWithdrawRequest(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function changeGuardian(a: number, b: number, c: number, d: number, e: number): void;
export function changeWithdrawalManager(a: number, b: number, c: number, d: number, e: number): void;
export function changeBounty(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function changeDepositLimit(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function changeWithdrawalLimits(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): void;
export function enableEmergency(a: number, b: number, c: number): void;
export function enableEmergencyByOwner(a: number, b: number, c: number): void;
export function disableEmergency(a: number, b: number, c: number): void;
export function enableTokenEmergency(a: number, b: number, c: number, d: number, e: number): void;
export function enableTokenEmergencyByOwner(a: number, b: number, c: number, d: number, e: number): void;
export function disableTokenEmergency(a: number, b: number, c: number, d: number, e: number): void;
export function unpackSettings(a: number, b: number, c: number): void;
export function unpackTokenSettings(a: number, b: number, c: number): void;
export function unpackWithdrawal(a: number, b: number, c: number): void;
export function unpackDeposit(a: number, b: number, c: number): void;
export function getProposalAddress(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number): void;
export function __wbg_instructions_free(a: number): void;
export function instructions_constructor(): number;
export function instructions_push(a: number, b: number): void;
export function __wbg_pubkey_free(a: number): void;
export function init(): void;
export function pubkey_constructor(a: number, b: number): void;
export function pubkey_toString(a: number, b: number): void;
export function pubkey_isOnCurve(a: number): number;
export function pubkey_equals(a: number, b: number): number;
export function pubkey_toBytes(a: number, b: number): void;
export function pubkey_createWithSeed(a: number, b: number, c: number, d: number, e: number): void;
export function pubkey_createProgramAddress(a: number, b: number, c: number, d: number): void;
export function pubkey_findProgramAddress(a: number, b: number, c: number, d: number): void;
export function __wbg_instruction_free(a: number): void;
export function hash_constructor(a: number, b: number): void;
export function hash_toString(a: number, b: number): void;
export function hash_equals(a: number, b: number): number;
export function hash_toBytes(a: number, b: number): void;
export function __wbg_hash_free(a: number): void;
export function __wbg_message_free(a: number): void;
export function __wbg_get_message_recent_blockhash(a: number): number;
export function __wbg_set_message_recent_blockhash(a: number, b: number): void;
export function systeminstruction_createAccount(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_createAccountWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number): number;
export function systeminstruction_assign(a: number, b: number): number;
export function systeminstruction_assignWithSeed(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_transfer(a: number, b: number, c: number, d: number): number;
export function systeminstruction_transferWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function systeminstruction_allocate(a: number, b: number, c: number): number;
export function systeminstruction_allocateWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_createNonceAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_advanceNonceAccount(a: number, b: number): number;
export function systeminstruction_withdrawNonceAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_authorizeNonceAccount(a: number, b: number, c: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
