#!/bin/bash

#@@@ code to make sure we are in the correct working directory
# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Change to the script's directory
cd "$SCRIPT_DIR"
#@@@

wasm-pack build
wasm2js pkg/wasm_bg.wasm -o pkg/wasm_bg.wasm.js
sed -i 's/wasm_bg.wasm/wasm_bg.wasm.js/' pkg/wasm.js