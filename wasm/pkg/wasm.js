
import * as wasm from "./wasm_bg.wasm.js";
import { __wbg_set_wasm } from "./wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./wasm_bg.js";

wasm.__wbindgen_start();
