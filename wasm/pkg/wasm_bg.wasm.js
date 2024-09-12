import * as $_wasm_bg_js from './wasm_bg.js';

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1048576, "L2hvbWUvbHVxdWUvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jb25zb2xlX2Vycm9yX3BhbmljX2hvb2stMC4xLjcvc3JjL2xpYi5ycwAAAAAQAGoAAACVAAAADgAAAAEAAAAAAAAAAQAAAAIAAAADAAAABAAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAlAAQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVsecgAEAA4AAAAL3J1c3RjLzliMDA5NTZlNTYwMDliYWIyYWExNWQ3YmZmMTA5MTY1OTllM2Q2ZDYvbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5ycwgBEABMAAAAlQAAADIAAABIZWxsbywgd2FzbSEFAAAADAAAAAQAAAAGAAAABwAAAAgAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5AAkAAAAAAAAAAQAAAAoAAAAvcnVzdGMvOWIwMDk1NmU1NjAwOWJhYjJhYTE1ZDdiZmYxMDkxNjU5OWUzZDZkNi9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMA0AEQAEsAAAD6CQAADgAAAEVycm9yCgpTdGFjazoKCgoKAAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5QAIQACQAAAAvcnVzdGMvOWIwMDk1NmU1NjAwOWJhYjJhYTE1ZDdiZmYxMDkxNjU5OWUzZDZkNi9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzbAIQAEwAAADnAQAACQAAAGNhbm5vdCBhY2Nlc3MgYSBUaHJlYWQgTG9jYWwgU3RvcmFnZSB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgZGVzdHJ1Y3Rpb24AAAsAAAAAAAAAAQAAAAwAAAAvcnVzdGMvOWIwMDk1NmU1NjAwOWJhYjJhYTE1ZDdiZmYxMDkxNjU5OWUzZDZkNi9saWJyYXJ5L3N0ZC9zcmMvdGhyZWFkL2xvY2FsLnJzACADEABPAAAABAEAABoAAAANAAAAEAAAAAwAAAAEAAAAEQAAABIAAAATAAAAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuNi9zcmMvZGxtYWxsb2MucnNhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA+PSBzaXplICsgbWluX292ZXJoZWFkAJwDEAApAAAAqAQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAACcAxAAKQAAAK4EAAANAAAAQWNjZXNzRXJyb3JtZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkAAAATwQQABUAAABkBBAADQAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5yc4QEEAAYAAAAYgEAAAkAAABjYW5ub3QgbW9kaWZ5IHRoZSBwYW5pYyBob29rIGZyb20gYSBwYW5pY2tpbmcgdGhyZWFkrAQQADQAAABsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJz6AQQABwAAACHAAAACQAAAOgEEAAcAAAAhAIAAB4AAAAQAAAADAAAAAQAAAAUAAAAFQAAAAgAAAAEAAAAFgAAABUAAAAIAAAABAAAABcAAAAYAAAAGQAAABAAAAAEAAAAGgAAABsAAAAcAAAAAAAAAAEAAAAdAAAAY2FwYWNpdHkgb3ZlcmZsb3cAAAB8BRAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnOYBRAAHAAAABkAAAAFAAAAOmNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWXEBRAAAAAAAMQFEAABAAAAxAUQAAEAAABwYW5pY2tlZCBhdCA6CgAAIQAAAAAAAAABAAAAIgAAADogAADEBRAAAAAAACgGEAACAAAAfSB9MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTk=");
}
function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var buffer = new ArrayBuffer(1114112);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var $_wasm_bg_js = imports["./wasm_bg.js"];
 var fimport$0 = $_wasm_bg_js.__wbg_alert_e63a4c41bbd7a3e9;
 var fimport$1 = $_wasm_bg_js.__wbg_new_abda76e883ba8a5f;
 var fimport$2 = $_wasm_bg_js.__wbg_stack_658279fe44541cf6;
 var fimport$3 = $_wasm_bg_js.__wbg_error_f851667af71bcfc6;
 var fimport$4 = $_wasm_bg_js.__wbindgen_object_drop_ref;
 var global$0 = 1048576;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0, i64toi32_i32$1 = 0, $8_1 = 0, $29_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $332 = 0, $399 = 0, $802 = 0, $890 = 0, $1073 = 0, $253 = 0, $587 = 0, $10_1 = 0, $10$hi = 0, $752 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $8_1 = global$0 - 16 | 0;
  global$0 = $8_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         if ($0_1 >>> 0 >= 245 >>> 0) {
          if ($0_1 >>> 0 >= -65587 >>> 0) {
           break label$1
          }
          $0_1 = $0_1 + 11 | 0;
          $5_1 = $0_1 & -8 | 0;
          $9_1 = HEAP32[1050848 >> 2] | 0;
          if (!$9_1) {
           break label$4
          }
          $3_1 = 0 - $5_1 | 0;
          label$9 : {
           $29_1 = 0;
           if ($5_1 >>> 0 < 256 >>> 0) {
            break label$9
           }
           $29_1 = 31;
           if ($5_1 >>> 0 > 16777215 >>> 0) {
            break label$9
           }
           $0_1 = Math_clz32($0_1 >>> 8 | 0);
           $29_1 = ((($5_1 >>> (6 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
          }
          $7_1 = $29_1;
          $2_1 = HEAP32[(($7_1 << 2 | 0) + 1050436 | 0) >> 2] | 0;
          if (!$2_1) {
           $0_1 = 0;
           break label$7;
          }
          $0_1 = 0;
          $4_1 = $5_1 << (($7_1 | 0) != (31 | 0) ? 25 - ($7_1 >>> 1 | 0) | 0 : 0) | 0;
          label$11 : while (1) {
           label$12 : {
            $6_1 = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -8 | 0;
            if ($6_1 >>> 0 < $5_1 >>> 0) {
             break label$12
            }
            $6_1 = $6_1 - $5_1 | 0;
            if ($6_1 >>> 0 >= $3_1 >>> 0) {
             break label$12
            }
            $1_1 = $2_1;
            $3_1 = $6_1;
            if ($3_1) {
             break label$12
            }
            $3_1 = 0;
            $0_1 = $1_1;
            break label$6;
           }
           $6_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
           $2_1 = HEAP32[(($2_1 + (($4_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
           $0_1 = $6_1 ? (($6_1 | 0) != ($2_1 | 0) ? $6_1 : $0_1) : $0_1;
           $4_1 = $4_1 << 1 | 0;
           if ($2_1) {
            continue label$11
           }
           break label$11;
          };
          break label$7;
         }
         $2_1 = HEAP32[1050844 >> 2] | 0;
         $5_1 = $0_1 >>> 0 < 11 >>> 0 ? 16 : ($0_1 + 11 | 0) & 504 | 0;
         $0_1 = $5_1 >>> 3 | 0;
         $1_1 = $2_1 >>> $0_1 | 0;
         if ($1_1 & 3 | 0) {
          label$14 : {
           $1_1 = (($1_1 ^ -1 | 0) & 1 | 0) + $0_1 | 0;
           $0_1 = $1_1 << 3 | 0;
           $4_1 = $0_1 + 1050580 | 0;
           $0_1 = HEAP32[($0_1 + 1050588 | 0) >> 2] | 0;
           $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
           if (($4_1 | 0) != ($3_1 | 0)) {
            HEAP32[($3_1 + 12 | 0) >> 2] = $4_1;
            HEAP32[($4_1 + 8 | 0) >> 2] = $3_1;
            break label$14;
           }
           (wasm2js_i32$0 = 1050844, wasm2js_i32$1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $1_1 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
          }
          $3_1 = $0_1 + 8 | 0;
          $1_1 = $1_1 << 3 | 0;
          HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 3 | 0;
          $0_1 = $0_1 + $1_1 | 0;
          HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
          break label$1;
         }
         if ($5_1 >>> 0 <= (HEAP32[1050852 >> 2] | 0) >>> 0) {
          break label$4
         }
         label$16 : {
          label$17 : {
           if (!$1_1) {
            $0_1 = HEAP32[1050848 >> 2] | 0;
            if (!$0_1) {
             break label$4
            }
            $1_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 1050436 | 0) >> 2] | 0;
            $3_1 = ((HEAP32[($1_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $5_1 | 0;
            $2_1 = $1_1;
            label$19 : while (1) {
             label$20 : {
              $0_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
              if ($0_1) {
               break label$20
              }
              $0_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
              if ($0_1) {
               break label$20
              }
              $7_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
              label$21 : {
               label$22 : {
                $0_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
                if (($2_1 | 0) == ($0_1 | 0)) {
                 $0_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
                 $1_1 = HEAP32[($2_1 + ($0_1 ? 20 : 16) | 0) >> 2] | 0;
                 if ($1_1) {
                  break label$22
                 }
                 $0_1 = 0;
                 break label$21;
                }
                $1_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
                HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
                HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
                break label$21;
               }
               $4_1 = $0_1 ? $2_1 + 20 | 0 : $2_1 + 16 | 0;
               label$24 : while (1) {
                $6_1 = $4_1;
                $0_1 = $1_1;
                $1_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
                $4_1 = $1_1 ? $0_1 + 20 | 0 : $0_1 + 16 | 0;
                $1_1 = HEAP32[($0_1 + ($1_1 ? 20 : 16) | 0) >> 2] | 0;
                if ($1_1) {
                 continue label$24
                }
                break label$24;
               };
               HEAP32[$6_1 >> 2] = 0;
              }
              if (!$7_1) {
               break label$16
              }
              $1_1 = ((HEAP32[($2_1 + 28 | 0) >> 2] | 0) << 2 | 0) + 1050436 | 0;
              if (($2_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
               HEAP32[($7_1 + ((HEAP32[($7_1 + 16 | 0) >> 2] | 0 | 0) == ($2_1 | 0) ? 16 : 20) | 0) >> 2] = $0_1;
               if (!$0_1) {
                break label$16
               }
               break label$17;
              }
              HEAP32[$1_1 >> 2] = $0_1;
              if ($0_1) {
               break label$17
              }
              (wasm2js_i32$0 = 1050848, wasm2js_i32$1 = (HEAP32[1050848 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($2_1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
              break label$16;
             }
             $1_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $5_1 | 0;
             $253 = $1_1;
             $1_1 = $1_1 >>> 0 < $3_1 >>> 0;
             $3_1 = $1_1 ? $253 : $3_1;
             $2_1 = $1_1 ? $0_1 : $2_1;
             $1_1 = $0_1;
             continue label$19;
            };
           }
           label$26 : {
            $4_1 = 2 << $0_1 | 0;
            $1_1 = __wasm_ctz_i32(($4_1 | (0 - $4_1 | 0) | 0) & ($1_1 << $0_1 | 0) | 0 | 0) | 0;
            $0_1 = $1_1 << 3 | 0;
            $4_1 = $0_1 + 1050580 | 0;
            $0_1 = HEAP32[($0_1 + 1050588 | 0) >> 2] | 0;
            $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
            if (($4_1 | 0) != ($3_1 | 0)) {
             HEAP32[($3_1 + 12 | 0) >> 2] = $4_1;
             HEAP32[($4_1 + 8 | 0) >> 2] = $3_1;
             break label$26;
            }
            (wasm2js_i32$0 = 1050844, wasm2js_i32$1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $1_1 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
           }
           HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
           $6_1 = $0_1 + $5_1 | 0;
           $1_1 = $1_1 << 3 | 0;
           $4_1 = $1_1 - $5_1 | 0;
           HEAP32[($6_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
           HEAP32[($0_1 + $1_1 | 0) >> 2] = $4_1;
           $3_1 = HEAP32[1050852 >> 2] | 0;
           if ($3_1) {
            $1_1 = ($3_1 & -8 | 0) + 1050580 | 0;
            $2_1 = HEAP32[1050860 >> 2] | 0;
            label$29 : {
             $5_1 = HEAP32[1050844 >> 2] | 0;
             $3_1 = 1 << ($3_1 >>> 3 | 0) | 0;
             if (!($5_1 & $3_1 | 0)) {
              HEAP32[1050844 >> 2] = $3_1 | $5_1 | 0;
              $332 = $1_1;
              break label$29;
             }
             $332 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
            }
            $3_1 = $332;
            HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
            HEAP32[($3_1 + 12 | 0) >> 2] = $2_1;
            HEAP32[($2_1 + 12 | 0) >> 2] = $1_1;
            HEAP32[($2_1 + 8 | 0) >> 2] = $3_1;
           }
           $3_1 = $0_1 + 8 | 0;
           HEAP32[1050860 >> 2] = $6_1;
           HEAP32[1050852 >> 2] = $4_1;
           break label$1;
          }
          HEAP32[($0_1 + 24 | 0) >> 2] = $7_1;
          $1_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
          if ($1_1) {
           HEAP32[($0_1 + 16 | 0) >> 2] = $1_1;
           HEAP32[($1_1 + 24 | 0) >> 2] = $0_1;
          }
          $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
          if (!$1_1) {
           break label$16
          }
          HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
          HEAP32[($1_1 + 24 | 0) >> 2] = $0_1;
         }
         label$32 : {
          label$33 : {
           if ($3_1 >>> 0 >= 16 >>> 0) {
            HEAP32[($2_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
            $4_1 = $2_1 + $5_1 | 0;
            HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
            HEAP32[($3_1 + $4_1 | 0) >> 2] = $3_1;
            $6_1 = HEAP32[1050852 >> 2] | 0;
            if (!$6_1) {
             break label$33
            }
            $0_1 = ($6_1 & -8 | 0) + 1050580 | 0;
            $1_1 = HEAP32[1050860 >> 2] | 0;
            label$35 : {
             $5_1 = HEAP32[1050844 >> 2] | 0;
             $6_1 = 1 << ($6_1 >>> 3 | 0) | 0;
             if (!($5_1 & $6_1 | 0)) {
              HEAP32[1050844 >> 2] = $5_1 | $6_1 | 0;
              $399 = $0_1;
              break label$35;
             }
             $399 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
            }
            $6_1 = $399;
            HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
            HEAP32[($6_1 + 12 | 0) >> 2] = $1_1;
            HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
            HEAP32[($1_1 + 8 | 0) >> 2] = $6_1;
            break label$33;
           }
           $0_1 = $3_1 + $5_1 | 0;
           HEAP32[($2_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
           $0_1 = $0_1 + $2_1 | 0;
           HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
           break label$32;
          }
          HEAP32[1050860 >> 2] = $4_1;
          HEAP32[1050852 >> 2] = $3_1;
         }
         $3_1 = $2_1 + 8 | 0;
         break label$1;
        }
        if (!($0_1 | $1_1 | 0)) {
         $1_1 = 0;
         $0_1 = 2 << $7_1 | 0;
         $0_1 = ($0_1 | (0 - $0_1 | 0) | 0) & $9_1 | 0;
         if (!$0_1) {
          break label$4
         }
         $0_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 1050436 | 0) >> 2] | 0;
        }
        if (!$0_1) {
         break label$5
        }
       }
       label$38 : while (1) {
        $4_1 = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0;
        $6_1 = $4_1 - $5_1 | 0;
        $7_1 = $6_1 >>> 0 < $3_1 >>> 0;
        $9_1 = $7_1 ? $0_1 : $1_1;
        $2_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
        if (!$2_1) {
         $2_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0
        }
        $0_1 = $4_1 >>> 0 < $5_1 >>> 0;
        $1_1 = $0_1 ? $1_1 : $9_1;
        $3_1 = $0_1 ? $3_1 : $7_1 ? $6_1 : $3_1;
        $0_1 = $2_1;
        if ($0_1) {
         continue label$38
        }
        break label$38;
       };
      }
      if (!$1_1) {
       break label$4
      }
      $0_1 = HEAP32[1050852 >> 2] | 0;
      if ($5_1 >>> 0 <= $0_1 >>> 0 & $3_1 >>> 0 >= ($0_1 - $5_1 | 0) >>> 0 | 0) {
       break label$4
      }
      $7_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      label$40 : {
       label$41 : {
        $0_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
        if (($1_1 | 0) == ($0_1 | 0)) {
         $0_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
         $2_1 = HEAP32[($1_1 + ($0_1 ? 20 : 16) | 0) >> 2] | 0;
         if ($2_1) {
          break label$41
         }
         $0_1 = 0;
         break label$40;
        }
        $2_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
        HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
        HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
        break label$40;
       }
       $4_1 = $0_1 ? $1_1 + 20 | 0 : $1_1 + 16 | 0;
       label$43 : while (1) {
        $6_1 = $4_1;
        $0_1 = $2_1;
        $2_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
        $4_1 = $2_1 ? $0_1 + 20 | 0 : $0_1 + 16 | 0;
        $2_1 = HEAP32[($0_1 + ($2_1 ? 20 : 16) | 0) >> 2] | 0;
        if ($2_1) {
         continue label$43
        }
        break label$43;
       };
       HEAP32[$6_1 >> 2] = 0;
      }
      if (!$7_1) {
       break label$2
      }
      $2_1 = ((HEAP32[($1_1 + 28 | 0) >> 2] | 0) << 2 | 0) + 1050436 | 0;
      if (($1_1 | 0) != (HEAP32[$2_1 >> 2] | 0 | 0)) {
       HEAP32[($7_1 + ((HEAP32[($7_1 + 16 | 0) >> 2] | 0 | 0) == ($1_1 | 0) ? 16 : 20) | 0) >> 2] = $0_1;
       if (!$0_1) {
        break label$2
       }
       break label$3;
      }
      HEAP32[$2_1 >> 2] = $0_1;
      if ($0_1) {
       break label$3
      }
      (wasm2js_i32$0 = 1050848, wasm2js_i32$1 = (HEAP32[1050848 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($1_1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      break label$2;
     }
     label$45 : {
      label$46 : {
       label$47 : {
        label$48 : {
         label$49 : {
          $1_1 = HEAP32[1050852 >> 2] | 0;
          if ($5_1 >>> 0 > $1_1 >>> 0) {
           $0_1 = HEAP32[1050856 >> 2] | 0;
           if ($5_1 >>> 0 >= $0_1 >>> 0) {
            $2_1 = ($5_1 + 65583 | 0) & -65536 | 0;
            $0_1 = __wasm_memory_grow($2_1 >>> 16 | 0 | 0);
            $1_1 = $8_1 + 4 | 0;
            HEAP32[($1_1 + 8 | 0) >> 2] = 0;
            $587 = $2_1 & -65536 | 0;
            $2_1 = ($0_1 | 0) == (-1 | 0);
            HEAP32[($1_1 + 4 | 0) >> 2] = $2_1 ? 0 : $587;
            HEAP32[$1_1 >> 2] = $2_1 ? 0 : $0_1 << 16 | 0;
            $1_1 = HEAP32[($8_1 + 4 | 0) >> 2] | 0;
            if (!$1_1) {
             $3_1 = 0;
             break label$1;
            }
            $6_1 = HEAP32[($8_1 + 12 | 0) >> 2] | 0;
            $3_1 = HEAP32[($8_1 + 8 | 0) >> 2] | 0;
            $0_1 = $3_1 + (HEAP32[1050868 >> 2] | 0) | 0;
            HEAP32[1050868 >> 2] = $0_1;
            $2_1 = HEAP32[1050872 >> 2] | 0;
            HEAP32[1050872 >> 2] = $0_1 >>> 0 < $2_1 >>> 0 ? $2_1 : $0_1;
            label$53 : {
             label$54 : {
              $2_1 = HEAP32[1050864 >> 2] | 0;
              if ($2_1) {
               $0_1 = 1050564;
               label$56 : while (1) {
                $4_1 = HEAP32[$0_1 >> 2] | 0;
                $7_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
                if (($1_1 | 0) == ($4_1 + $7_1 | 0 | 0)) {
                 break label$54
                }
                $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if ($0_1) {
                 continue label$56
                }
                break label$56;
               };
               break label$53;
              }
              $0_1 = HEAP32[1050880 >> 2] | 0;
              if (!($0_1 >>> 0 <= $1_1 >>> 0 ? $0_1 : 0)) {
               HEAP32[1050880 >> 2] = $1_1
              }
              HEAP32[1050884 >> 2] = 4095;
              HEAP32[1050576 >> 2] = $6_1;
              HEAP32[1050568 >> 2] = $3_1;
              HEAP32[1050564 >> 2] = $1_1;
              HEAP32[1050592 >> 2] = 1050580;
              HEAP32[1050600 >> 2] = 1050588;
              HEAP32[1050588 >> 2] = 1050580;
              HEAP32[1050608 >> 2] = 1050596;
              HEAP32[1050596 >> 2] = 1050588;
              HEAP32[1050616 >> 2] = 1050604;
              HEAP32[1050604 >> 2] = 1050596;
              HEAP32[1050624 >> 2] = 1050612;
              HEAP32[1050612 >> 2] = 1050604;
              HEAP32[1050632 >> 2] = 1050620;
              HEAP32[1050620 >> 2] = 1050612;
              HEAP32[1050640 >> 2] = 1050628;
              HEAP32[1050628 >> 2] = 1050620;
              HEAP32[1050648 >> 2] = 1050636;
              HEAP32[1050636 >> 2] = 1050628;
              HEAP32[1050656 >> 2] = 1050644;
              HEAP32[1050644 >> 2] = 1050636;
              HEAP32[1050652 >> 2] = 1050644;
              HEAP32[1050664 >> 2] = 1050652;
              HEAP32[1050660 >> 2] = 1050652;
              HEAP32[1050672 >> 2] = 1050660;
              HEAP32[1050668 >> 2] = 1050660;
              HEAP32[1050680 >> 2] = 1050668;
              HEAP32[1050676 >> 2] = 1050668;
              HEAP32[1050688 >> 2] = 1050676;
              HEAP32[1050684 >> 2] = 1050676;
              HEAP32[1050696 >> 2] = 1050684;
              HEAP32[1050692 >> 2] = 1050684;
              HEAP32[1050704 >> 2] = 1050692;
              HEAP32[1050700 >> 2] = 1050692;
              HEAP32[1050712 >> 2] = 1050700;
              HEAP32[1050708 >> 2] = 1050700;
              HEAP32[1050720 >> 2] = 1050708;
              HEAP32[1050728 >> 2] = 1050716;
              HEAP32[1050716 >> 2] = 1050708;
              HEAP32[1050736 >> 2] = 1050724;
              HEAP32[1050724 >> 2] = 1050716;
              HEAP32[1050744 >> 2] = 1050732;
              HEAP32[1050732 >> 2] = 1050724;
              HEAP32[1050752 >> 2] = 1050740;
              HEAP32[1050740 >> 2] = 1050732;
              HEAP32[1050760 >> 2] = 1050748;
              HEAP32[1050748 >> 2] = 1050740;
              HEAP32[1050768 >> 2] = 1050756;
              HEAP32[1050756 >> 2] = 1050748;
              HEAP32[1050776 >> 2] = 1050764;
              HEAP32[1050764 >> 2] = 1050756;
              HEAP32[1050784 >> 2] = 1050772;
              HEAP32[1050772 >> 2] = 1050764;
              HEAP32[1050792 >> 2] = 1050780;
              HEAP32[1050780 >> 2] = 1050772;
              HEAP32[1050800 >> 2] = 1050788;
              HEAP32[1050788 >> 2] = 1050780;
              HEAP32[1050808 >> 2] = 1050796;
              HEAP32[1050796 >> 2] = 1050788;
              HEAP32[1050816 >> 2] = 1050804;
              HEAP32[1050804 >> 2] = 1050796;
              HEAP32[1050824 >> 2] = 1050812;
              HEAP32[1050812 >> 2] = 1050804;
              HEAP32[1050832 >> 2] = 1050820;
              HEAP32[1050820 >> 2] = 1050812;
              HEAP32[1050840 >> 2] = 1050828;
              HEAP32[1050828 >> 2] = 1050820;
              $0_1 = ($1_1 + 15 | 0) & -8 | 0;
              $2_1 = $0_1 - 8 | 0;
              HEAP32[1050864 >> 2] = $2_1;
              HEAP32[1050836 >> 2] = 1050828;
              $4_1 = $3_1 - 40 | 0;
              $0_1 = ($4_1 + ($1_1 - $0_1 | 0) | 0) + 8 | 0;
              HEAP32[1050856 >> 2] = $0_1;
              HEAP32[($2_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
              HEAP32[(($1_1 + $4_1 | 0) + 4 | 0) >> 2] = 40;
              HEAP32[1050876 >> 2] = 2097152;
              break label$45;
             }
             if ($2_1 >>> 0 < $4_1 >>> 0 | $1_1 >>> 0 <= $2_1 >>> 0 | 0) {
              break label$53
             }
             $4_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
             if ($4_1 & 1 | 0) {
              break label$53
             }
             if (($4_1 >>> 1 | 0 | 0) == ($6_1 | 0)) {
              break label$49
             }
            }
            $0_1 = HEAP32[1050880 >> 2] | 0;
            HEAP32[1050880 >> 2] = $0_1 >>> 0 < $1_1 >>> 0 ? $0_1 : $1_1;
            $4_1 = $1_1 + $3_1 | 0;
            $0_1 = 1050564;
            label$58 : {
             label$59 : {
              label$60 : while (1) {
               if (($4_1 | 0) != (HEAP32[$0_1 >> 2] | 0 | 0)) {
                $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if ($0_1) {
                 continue label$60
                }
                break label$59;
               }
               break label$60;
              };
              $7_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
              if ($7_1 & 1 | 0) {
               break label$59
              }
              if (($7_1 >>> 1 | 0 | 0) == ($6_1 | 0)) {
               break label$58
              }
             }
             $0_1 = 1050564;
             label$62 : while (1) {
              label$63 : {
               $4_1 = HEAP32[$0_1 >> 2] | 0;
               if ($2_1 >>> 0 >= $4_1 >>> 0) {
                $7_1 = $4_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0;
                if ($7_1 >>> 0 > $2_1 >>> 0) {
                 break label$63
                }
               }
               $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
               continue label$62;
              }
              break label$62;
             };
             $0_1 = ($1_1 + 15 | 0) & -8 | 0;
             $4_1 = $0_1 - 8 | 0;
             HEAP32[1050864 >> 2] = $4_1;
             $9_1 = $3_1 - 40 | 0;
             $0_1 = ($9_1 + ($1_1 - $0_1 | 0) | 0) + 8 | 0;
             HEAP32[1050856 >> 2] = $0_1;
             HEAP32[($4_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
             HEAP32[(($1_1 + $9_1 | 0) + 4 | 0) >> 2] = 40;
             HEAP32[1050876 >> 2] = 2097152;
             $0_1 = (($7_1 - 32 | 0) & -8 | 0) - 8 | 0;
             $4_1 = $0_1 >>> 0 < ($2_1 + 16 | 0) >>> 0 ? $2_1 : $0_1;
             HEAP32[($4_1 + 4 | 0) >> 2] = 27;
             i64toi32_i32$2 = 1050564;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $10_1 = i64toi32_i32$0;
             $10$hi = i64toi32_i32$1;
             i64toi32_i32$2 = 1050572;
             i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $752 = i64toi32_i32$1;
             i64toi32_i32$1 = $4_1 + 16 | 0;
             HEAP32[i64toi32_i32$1 >> 2] = $752;
             HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $10$hi;
             i64toi32_i32$1 = $4_1;
             HEAP32[($4_1 + 8 | 0) >> 2] = $10_1;
             HEAP32[($4_1 + 12 | 0) >> 2] = i64toi32_i32$0;
             HEAP32[1050576 >> 2] = $6_1;
             HEAP32[1050568 >> 2] = $3_1;
             HEAP32[1050564 >> 2] = $1_1;
             HEAP32[1050572 >> 2] = $4_1 + 8 | 0;
             $0_1 = $4_1 + 28 | 0;
             label$65 : while (1) {
              HEAP32[$0_1 >> 2] = 7;
              $0_1 = $0_1 + 4 | 0;
              if ($0_1 >>> 0 < $7_1 >>> 0) {
               continue label$65
              }
              break label$65;
             };
             if (($2_1 | 0) == ($4_1 | 0)) {
              break label$45
             }
             HEAP32[($4_1 + 4 | 0) >> 2] = (HEAP32[($4_1 + 4 | 0) >> 2] | 0) & -2 | 0;
             $0_1 = $4_1 - $2_1 | 0;
             HEAP32[($2_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
             HEAP32[$4_1 >> 2] = $0_1;
             if ($0_1 >>> 0 >= 256 >>> 0) {
              $7($2_1 | 0, $0_1 | 0);
              break label$45;
             }
             $1_1 = ($0_1 & -8 | 0) + 1050580 | 0;
             label$67 : {
              $4_1 = HEAP32[1050844 >> 2] | 0;
              $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
              if (!($4_1 & $0_1 | 0)) {
               HEAP32[1050844 >> 2] = $0_1 | $4_1 | 0;
               $802 = $1_1;
               break label$67;
              }
              $802 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
             }
             $0_1 = $802;
             HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
             HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
             HEAP32[($2_1 + 12 | 0) >> 2] = $1_1;
             HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
             break label$45;
            }
            HEAP32[$0_1 >> 2] = $1_1;
            HEAP32[($0_1 + 4 | 0) >> 2] = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0;
            $2_1 = (($1_1 + 15 | 0) & -8 | 0) - 8 | 0;
            HEAP32[($2_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
            $3_1 = (($4_1 + 15 | 0) & -8 | 0) - 8 | 0;
            $0_1 = $2_1 + $5_1 | 0;
            $5_1 = $3_1 - $0_1 | 0;
            if (($3_1 | 0) == (HEAP32[1050864 >> 2] | 0 | 0)) {
             break label$48
            }
            if (($3_1 | 0) == (HEAP32[1050860 >> 2] | 0 | 0)) {
             break label$47
            }
            $1_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
            if (($1_1 & 3 | 0 | 0) == (1 | 0)) {
             $1_1 = $1_1 & -8 | 0;
             $5($3_1 | 0, $1_1 | 0);
             $5_1 = $1_1 + $5_1 | 0;
             $3_1 = $1_1 + $3_1 | 0;
             $1_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
            }
            HEAP32[($3_1 + 4 | 0) >> 2] = $1_1 & -2 | 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
            HEAP32[($0_1 + $5_1 | 0) >> 2] = $5_1;
            if ($5_1 >>> 0 >= 256 >>> 0) {
             $7($0_1 | 0, $5_1 | 0);
             break label$46;
            }
            $1_1 = ($5_1 & -8 | 0) + 1050580 | 0;
            label$71 : {
             $4_1 = HEAP32[1050844 >> 2] | 0;
             $3_1 = 1 << ($5_1 >>> 3 | 0) | 0;
             if (!($4_1 & $3_1 | 0)) {
              HEAP32[1050844 >> 2] = $3_1 | $4_1 | 0;
              $890 = $1_1;
              break label$71;
             }
             $890 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
            }
            $4_1 = $890;
            HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
            HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
            HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
            HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
            break label$46;
           }
           $1_1 = $0_1 - $5_1 | 0;
           HEAP32[1050856 >> 2] = $1_1;
           $0_1 = HEAP32[1050864 >> 2] | 0;
           $2_1 = $0_1 + $5_1 | 0;
           HEAP32[1050864 >> 2] = $2_1;
           HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
           HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
           $3_1 = $0_1 + 8 | 0;
           break label$1;
          }
          $0_1 = HEAP32[1050860 >> 2] | 0;
          label$73 : {
           $2_1 = $1_1 - $5_1 | 0;
           if ($2_1 >>> 0 <= 15 >>> 0) {
            HEAP32[1050860 >> 2] = 0;
            HEAP32[1050852 >> 2] = 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 3 | 0;
            $1_1 = $0_1 + $1_1 | 0;
            HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 1 | 0;
            break label$73;
           }
           HEAP32[1050852 >> 2] = $2_1;
           $4_1 = $0_1 + $5_1 | 0;
           HEAP32[1050860 >> 2] = $4_1;
           HEAP32[($4_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
           HEAP32[($0_1 + $1_1 | 0) >> 2] = $2_1;
           HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
          }
          $3_1 = $0_1 + 8 | 0;
          break label$1;
         }
         HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 + $7_1 | 0;
         $0_1 = HEAP32[1050864 >> 2] | 0;
         $1_1 = ($0_1 + 15 | 0) & -8 | 0;
         $2_1 = $1_1 - 8 | 0;
         HEAP32[1050864 >> 2] = $2_1;
         $4_1 = (HEAP32[1050856 >> 2] | 0) + $3_1 | 0;
         $1_1 = ($4_1 + ($0_1 - $1_1 | 0) | 0) + 8 | 0;
         HEAP32[1050856 >> 2] = $1_1;
         HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
         HEAP32[(($0_1 + $4_1 | 0) + 4 | 0) >> 2] = 40;
         HEAP32[1050876 >> 2] = 2097152;
         break label$45;
        }
        HEAP32[1050864 >> 2] = $0_1;
        $1_1 = (HEAP32[1050856 >> 2] | 0) + $5_1 | 0;
        HEAP32[1050856 >> 2] = $1_1;
        HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
        break label$46;
       }
       HEAP32[1050860 >> 2] = $0_1;
       $1_1 = (HEAP32[1050852 >> 2] | 0) + $5_1 | 0;
       HEAP32[1050852 >> 2] = $1_1;
       HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
       HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
      }
      $3_1 = $2_1 + 8 | 0;
      break label$1;
     }
     $3_1 = 0;
     $0_1 = HEAP32[1050856 >> 2] | 0;
     if ($0_1 >>> 0 <= $5_1 >>> 0) {
      break label$1
     }
     $1_1 = $0_1 - $5_1 | 0;
     HEAP32[1050856 >> 2] = $1_1;
     $0_1 = HEAP32[1050864 >> 2] | 0;
     $2_1 = $0_1 + $5_1 | 0;
     HEAP32[1050864 >> 2] = $2_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
     $3_1 = $0_1 + 8 | 0;
     break label$1;
    }
    HEAP32[($0_1 + 24 | 0) >> 2] = $7_1;
    $2_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
    if ($2_1) {
     HEAP32[($0_1 + 16 | 0) >> 2] = $2_1;
     HEAP32[($2_1 + 24 | 0) >> 2] = $0_1;
    }
    $2_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (!$2_1) {
     break label$2
    }
    HEAP32[($0_1 + 20 | 0) >> 2] = $2_1;
    HEAP32[($2_1 + 24 | 0) >> 2] = $0_1;
   }
   label$76 : {
    if ($3_1 >>> 0 >= 16 >>> 0) {
     HEAP32[($1_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
     $0_1 = $1_1 + $5_1 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
     HEAP32[($0_1 + $3_1 | 0) >> 2] = $3_1;
     if ($3_1 >>> 0 >= 256 >>> 0) {
      $7($0_1 | 0, $3_1 | 0);
      break label$76;
     }
     $2_1 = ($3_1 & -8 | 0) + 1050580 | 0;
     label$79 : {
      $4_1 = HEAP32[1050844 >> 2] | 0;
      $3_1 = 1 << ($3_1 >>> 3 | 0) | 0;
      if (!($4_1 & $3_1 | 0)) {
       HEAP32[1050844 >> 2] = $3_1 | $4_1 | 0;
       $1073 = $2_1;
       break label$79;
      }
      $1073 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
     }
     $4_1 = $1073;
     HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
     HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
     break label$76;
    }
    $0_1 = $3_1 + $5_1 | 0;
    HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
    $0_1 = $0_1 + $1_1 | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
   }
   $3_1 = $1_1 + 8 | 0;
  }
  global$0 = $8_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $1($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $170 = 0, $59 = 0;
  $1_1 = $0_1 - 8 | 0;
  $3_1 = HEAP32[($0_1 - 4 | 0) >> 2] | 0;
  $0_1 = $3_1 & -8 | 0;
  $2_1 = $1_1 + $0_1 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($3_1 & 1 | 0) {
       break label$4
      }
      if (!($3_1 & 2 | 0)) {
       break label$3
      }
      $3_1 = HEAP32[$1_1 >> 2] | 0;
      $0_1 = $3_1 + $0_1 | 0;
      $1_1 = $1_1 - $3_1 | 0;
      if (($1_1 | 0) == (HEAP32[1050860 >> 2] | 0 | 0)) {
       if (((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & 3 | 0 | 0) != (3 | 0)) {
        break label$4
       }
       HEAP32[1050852 >> 2] = $0_1;
       HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -2 | 0;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[$2_1 >> 2] = $0_1;
       return;
      }
      $5($1_1 | 0, $3_1 | 0);
     }
     label$6 : {
      label$7 : {
       $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
       if (!($3_1 & 2 | 0)) {
        if (($2_1 | 0) == (HEAP32[1050864 >> 2] | 0 | 0)) {
         break label$6
        }
        if (($2_1 | 0) == (HEAP32[1050860 >> 2] | 0 | 0)) {
         break label$1
        }
        $59 = $2_1;
        $2_1 = $3_1 & -8 | 0;
        $5($59 | 0, $2_1 | 0);
        $0_1 = $0_1 + $2_1 | 0;
        HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
        HEAP32[($0_1 + $1_1 | 0) >> 2] = $0_1;
        if (($1_1 | 0) != (HEAP32[1050860 >> 2] | 0 | 0)) {
         break label$7
        }
        HEAP32[1050852 >> 2] = $0_1;
        return;
       }
       HEAP32[($2_1 + 4 | 0) >> 2] = $3_1 & -2 | 0;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[($0_1 + $1_1 | 0) >> 2] = $0_1;
      }
      if ($0_1 >>> 0 < 256 >>> 0) {
       break label$2
      }
      $7($1_1 | 0, $0_1 | 0);
      $1_1 = 0;
      $0_1 = (HEAP32[1050884 >> 2] | 0) - 1 | 0;
      HEAP32[1050884 >> 2] = $0_1;
      if ($0_1) {
       break label$3
      }
      $0_1 = HEAP32[1050572 >> 2] | 0;
      if ($0_1) {
       label$10 : while (1) {
        $1_1 = $1_1 + 1 | 0;
        $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
        if ($0_1) {
         continue label$10
        }
        break label$10;
       }
      }
      HEAP32[1050884 >> 2] = $1_1 >>> 0 <= 4095 >>> 0 ? 4095 : $1_1;
      return;
     }
     HEAP32[1050864 >> 2] = $1_1;
     $0_1 = (HEAP32[1050856 >> 2] | 0) + $0_1 | 0;
     HEAP32[1050856 >> 2] = $0_1;
     HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
     if ((HEAP32[1050860 >> 2] | 0 | 0) == ($1_1 | 0)) {
      HEAP32[1050852 >> 2] = 0;
      HEAP32[1050860 >> 2] = 0;
     }
     $3_1 = HEAP32[1050876 >> 2] | 0;
     if ($0_1 >>> 0 <= $3_1 >>> 0) {
      break label$3
     }
     $2_1 = HEAP32[1050864 >> 2] | 0;
     if (!$2_1) {
      break label$3
     }
     $1_1 = 0;
     label$12 : {
      $4_1 = HEAP32[1050856 >> 2] | 0;
      if ($4_1 >>> 0 < 41 >>> 0) {
       break label$12
      }
      $0_1 = 1050564;
      label$13 : while (1) {
       $5_1 = HEAP32[$0_1 >> 2] | 0;
       if ($2_1 >>> 0 >= $5_1 >>> 0) {
        if (($5_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0) >>> 0 > $2_1 >>> 0) {
         break label$12
        }
       }
       $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
       if ($0_1) {
        continue label$13
       }
       break label$13;
      };
     }
     $0_1 = HEAP32[1050572 >> 2] | 0;
     if ($0_1) {
      label$16 : while (1) {
       $1_1 = $1_1 + 1 | 0;
       $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
       if ($0_1) {
        continue label$16
       }
       break label$16;
      }
     }
     HEAP32[1050884 >> 2] = $1_1 >>> 0 <= 4095 >>> 0 ? 4095 : $1_1;
     if ($3_1 >>> 0 >= $4_1 >>> 0) {
      break label$3
     }
     HEAP32[1050876 >> 2] = -1;
    }
    return;
   }
   $2_1 = ($0_1 & -8 | 0) + 1050580 | 0;
   label$17 : {
    $3_1 = HEAP32[1050844 >> 2] | 0;
    $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
    if (!($3_1 & $0_1 | 0)) {
     HEAP32[1050844 >> 2] = $0_1 | $3_1 | 0;
     $170 = $2_1;
     break label$17;
    }
    $170 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
   }
   $0_1 = $170;
   HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
   return;
  }
  HEAP32[1050860 >> 2] = $1_1;
  $0_1 = (HEAP32[1050852 >> 2] | 0) + $0_1 | 0;
  HEAP32[1050852 >> 2] = $0_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
  HEAP32[($0_1 + $1_1 | 0) >> 2] = $0_1;
 }
 
 function $2($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $10_1 = 0, $9_1 = 0, $12_1 = 0, $194 = 0, $11_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  HEAP8[($3_1 + 44 | 0) >> 0] = 3;
  HEAP32[($3_1 + 28 | 0) >> 2] = 32;
  HEAP32[($3_1 + 40 | 0) >> 2] = 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 32 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $10_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
      if (!$10_1) {
       $0_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
       if (!$0_1) {
        break label$4
       }
       $1_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
       $5_1 = $0_1 << 3 | 0;
       $7_1 = (($0_1 - 1 | 0) & 536870911 | 0) + 1 | 0;
       $0_1 = HEAP32[$2_1 >> 2] | 0;
       label$6 : while (1) {
        $4_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
        if ($4_1) {
         if (FUNCTION_TABLE[HEAP32[((HEAP32[($3_1 + 36 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($3_1 + 32 | 0) >> 2] | 0, HEAP32[$0_1 >> 2] | 0, $4_1) | 0) {
          break label$3
         }
        }
        if (FUNCTION_TABLE[HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0](HEAP32[$1_1 >> 2] | 0, $3_1 + 12 | 0) | 0) {
         break label$3
        }
        $1_1 = $1_1 + 8 | 0;
        $0_1 = $0_1 + 8 | 0;
        $5_1 = $5_1 - 8 | 0;
        if ($5_1) {
         continue label$6
        }
        break label$6;
       };
       break label$4;
      }
      $0_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
      if (!$0_1) {
       break label$4
      }
      $11_1 = $0_1 << 5 | 0;
      $7_1 = (($0_1 - 1 | 0) & 134217727 | 0) + 1 | 0;
      $8_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
      $0_1 = HEAP32[$2_1 >> 2] | 0;
      label$8 : while (1) {
       $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
       if ($1_1) {
        if (FUNCTION_TABLE[HEAP32[((HEAP32[($3_1 + 36 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($3_1 + 32 | 0) >> 2] | 0, HEAP32[$0_1 >> 2] | 0, $1_1) | 0) {
         break label$3
        }
       }
       $1_1 = $5_1 + $10_1 | 0;
       HEAP32[($3_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
       HEAP8[($3_1 + 44 | 0) >> 0] = HEAPU8[($1_1 + 28 | 0) >> 0] | 0;
       HEAP32[($3_1 + 40 | 0) >> 2] = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
       $4_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
       $9_1 = 0;
       $6_1 = 0;
       label$10 : {
        label$11 : {
         switch ((HEAP32[($1_1 + 8 | 0) >> 2] | 0) - 1 | 0 | 0) {
         case 0:
          $12_1 = ($4_1 << 3 | 0) + $8_1 | 0;
          if ((HEAP32[($12_1 + 4 | 0) >> 2] | 0 | 0) != (30 | 0)) {
           break label$10
          }
          $4_1 = HEAP32[(HEAP32[$12_1 >> 2] | 0) >> 2] | 0;
          break;
         case 1:
          break label$10;
         default:
          break label$11;
         };
        }
        $6_1 = 1;
       }
       HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
       HEAP32[($3_1 + 12 | 0) >> 2] = $6_1;
       $4_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
       label$13 : {
        label$14 : {
         switch ((HEAP32[$1_1 >> 2] | 0) - 1 | 0 | 0) {
         case 0:
          $6_1 = ($4_1 << 3 | 0) + $8_1 | 0;
          if ((HEAP32[($6_1 + 4 | 0) >> 2] | 0 | 0) != (30 | 0)) {
           break label$13
          }
          $4_1 = HEAP32[(HEAP32[$6_1 >> 2] | 0) >> 2] | 0;
          break;
         case 1:
          break label$13;
         default:
          break label$14;
         };
        }
        $9_1 = 1;
       }
       HEAP32[($3_1 + 24 | 0) >> 2] = $4_1;
       HEAP32[($3_1 + 20 | 0) >> 2] = $9_1;
       $1_1 = $8_1 + ((HEAP32[($1_1 + 20 | 0) >> 2] | 0) << 3 | 0) | 0;
       if (FUNCTION_TABLE[HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0](HEAP32[$1_1 >> 2] | 0, $3_1 + 12 | 0) | 0) {
        break label$3
       }
       $0_1 = $0_1 + 8 | 0;
       $5_1 = $5_1 + 32 | 0;
       if (($11_1 | 0) != ($5_1 | 0)) {
        continue label$8
       }
       break label$8;
      };
     }
     if ($7_1 >>> 0 >= (HEAP32[($2_1 + 4 | 0) >> 2] | 0) >>> 0) {
      break label$2
     }
     $0_1 = (HEAP32[$2_1 >> 2] | 0) + ($7_1 << 3 | 0) | 0;
     if (!(FUNCTION_TABLE[HEAP32[((HEAP32[($3_1 + 36 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($3_1 + 32 | 0) >> 2] | 0, HEAP32[$0_1 >> 2] | 0, HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0)) {
      break label$2
     }
    }
    $194 = 1;
    break label$1;
   }
   $194 = 0;
  }
  global$0 = $3_1 + 48 | 0;
  return $194 | 0;
 }
 
 function $3($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $99 = 0, $52_1 = 0;
  $2_1 = $0_1 + $1_1 | 0;
  label$1 : {
   label$2 : {
    $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if ($3_1 & 1 | 0) {
     break label$2
    }
    if (!($3_1 & 2 | 0)) {
     break label$1
    }
    $3_1 = HEAP32[$0_1 >> 2] | 0;
    $1_1 = $3_1 + $1_1 | 0;
    $0_1 = $0_1 - $3_1 | 0;
    if (($0_1 | 0) == (HEAP32[1050860 >> 2] | 0 | 0)) {
     if (((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & 3 | 0 | 0) != (3 | 0)) {
      break label$2
     }
     HEAP32[1050852 >> 2] = $1_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -2 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
     HEAP32[$2_1 >> 2] = $1_1;
     break label$1;
    }
    $5($0_1 | 0, $3_1 | 0);
   }
   label$4 : {
    label$5 : {
     label$6 : {
      $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
      if (!($3_1 & 2 | 0)) {
       if (($2_1 | 0) == (HEAP32[1050864 >> 2] | 0 | 0)) {
        break label$5
       }
       if (($2_1 | 0) == (HEAP32[1050860 >> 2] | 0 | 0)) {
        break label$4
       }
       $52_1 = $2_1;
       $2_1 = $3_1 & -8 | 0;
       $5($52_1 | 0, $2_1 | 0);
       $1_1 = $1_1 + $2_1 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
       HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
       if (($0_1 | 0) != (HEAP32[1050860 >> 2] | 0 | 0)) {
        break label$6
       }
       HEAP32[1050852 >> 2] = $1_1;
       return;
      }
      HEAP32[($2_1 + 4 | 0) >> 2] = $3_1 & -2 | 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
      HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
     }
     if ($1_1 >>> 0 >= 256 >>> 0) {
      $7($0_1 | 0, $1_1 | 0);
      return;
     }
     $2_1 = ($1_1 & -8 | 0) + 1050580 | 0;
     label$9 : {
      $3_1 = HEAP32[1050844 >> 2] | 0;
      $1_1 = 1 << ($1_1 >>> 3 | 0) | 0;
      if (!($3_1 & $1_1 | 0)) {
       HEAP32[1050844 >> 2] = $1_1 | $3_1 | 0;
       $99 = $2_1;
       break label$9;
      }
      $99 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
     }
     $1_1 = $99;
     HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
     HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
     return;
    }
    HEAP32[1050864 >> 2] = $0_1;
    $1_1 = (HEAP32[1050856 >> 2] | 0) + $1_1 | 0;
    HEAP32[1050856 >> 2] = $1_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
    if (($0_1 | 0) != (HEAP32[1050860 >> 2] | 0 | 0)) {
     break label$1
    }
    HEAP32[1050852 >> 2] = 0;
    HEAP32[1050860 >> 2] = 0;
    return;
   }
   HEAP32[1050860 >> 2] = $0_1;
   $1_1 = (HEAP32[1050852 >> 2] | 0) + $1_1 | 0;
   HEAP32[1050852 >> 2] = $1_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
   HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
  }
 }
 
 function $4($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0;
  label$1 : {
   $0_1 = $0_1 >>> 0 <= 16 >>> 0 ? 16 : $0_1;
   if ((-65587 - $0_1 | 0) >>> 0 <= $1_1 >>> 0) {
    break label$1
   }
   $4_1 = $1_1 >>> 0 < 11 >>> 0 ? 16 : ($1_1 + 11 | 0) & -8 | 0;
   $2_1 = $0(($0_1 + $4_1 | 0) + 12 | 0 | 0) | 0;
   if (!$2_1) {
    break label$1
   }
   $1_1 = $2_1 - 8 | 0;
   label$2 : {
    $3_1 = $0_1 - 1 | 0;
    if (!($3_1 & $2_1 | 0)) {
     $0_1 = $1_1;
     break label$2;
    }
    $5_1 = $2_1 - 4 | 0;
    $6_1 = HEAP32[$5_1 >> 2] | 0;
    $2_1 = (($2_1 + $3_1 | 0) & (0 - $0_1 | 0) | 0) - 8 | 0;
    $0_1 = $2_1 + (($2_1 - $1_1 | 0) >>> 0 <= 16 >>> 0 ? $0_1 : 0) | 0;
    $2_1 = $0_1 - $1_1 | 0;
    $3_1 = ($6_1 & -8 | 0) - $2_1 | 0;
    if ($6_1 & 3 | 0) {
     HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     $3_1 = $0_1 + $3_1 | 0;
     HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 1 | 0;
     HEAP32[$5_1 >> 2] = $2_1 | ((HEAP32[$5_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     $3_1 = $1_1 + $2_1 | 0;
     HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 1 | 0;
     $3($1_1 | 0, $2_1 | 0);
     break label$2;
    }
    $1_1 = HEAP32[$1_1 >> 2] | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
    HEAP32[$0_1 >> 2] = $1_1 + $2_1 | 0;
   }
   label$5 : {
    $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if (!($1_1 & 3 | 0)) {
     break label$5
    }
    $2_1 = $1_1 & -8 | 0;
    if ($2_1 >>> 0 <= ($4_1 + 16 | 0) >>> 0) {
     break label$5
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = $4_1 | ($1_1 & 1 | 0) | 0 | 2 | 0;
    $1_1 = $0_1 + $4_1 | 0;
    $4_1 = $2_1 - $4_1 | 0;
    HEAP32[($1_1 + 4 | 0) >> 2] = $4_1 | 3 | 0;
    $2_1 = $0_1 + $2_1 | 0;
    HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 1 | 0;
    $3($1_1 | 0, $4_1 | 0);
   }
   $3_1 = $0_1 + 8 | 0;
  }
  return $3_1 | 0;
 }
 
 function $5($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if ($1_1 >>> 0 >= 256 >>> 0) {
     $3_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
     label$4 : {
      label$5 : {
       if (($0_1 | 0) == ($2_1 | 0)) {
        $2_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
        $1_1 = HEAP32[($0_1 + ($2_1 ? 20 : 16) | 0) >> 2] | 0;
        if ($1_1) {
         break label$5
        }
        $2_1 = 0;
        break label$4;
       }
       $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
       HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
       HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
       break label$4;
      }
      $4_1 = $2_1 ? $0_1 + 20 | 0 : $0_1 + 16 | 0;
      label$7 : while (1) {
       $5_1 = $4_1;
       $2_1 = $1_1;
       $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
       $4_1 = $1_1 ? $2_1 + 20 | 0 : $2_1 + 16 | 0;
       $1_1 = HEAP32[($2_1 + ($1_1 ? 20 : 16) | 0) >> 2] | 0;
       if ($1_1) {
        continue label$7
       }
       break label$7;
      };
      HEAP32[$5_1 >> 2] = 0;
     }
     if (!$3_1) {
      break label$1
     }
     $1_1 = ((HEAP32[($0_1 + 28 | 0) >> 2] | 0) << 2 | 0) + 1050436 | 0;
     if (($0_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
      HEAP32[($3_1 + ((HEAP32[($3_1 + 16 | 0) >> 2] | 0 | 0) == ($0_1 | 0) ? 16 : 20) | 0) >> 2] = $2_1;
      if (!$2_1) {
       break label$1
      }
      break label$2;
     }
     HEAP32[$1_1 >> 2] = $2_1;
     if ($2_1) {
      break label$2
     }
     (wasm2js_i32$0 = 1050848, wasm2js_i32$1 = (HEAP32[1050848 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     break label$1;
    }
    $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if (($0_1 | 0) != ($2_1 | 0)) {
     HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
     HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
     return;
    }
    (wasm2js_i32$0 = 1050844, wasm2js_i32$1 = (HEAP32[1050844 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1_1 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    return;
   }
   HEAP32[($2_1 + 24 | 0) >> 2] = $3_1;
   $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
   if ($1_1) {
    HEAP32[($2_1 + 16 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
   }
   $0_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
   if (!$0_1) {
    break label$1
   }
   HEAP32[($2_1 + 20 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = $2_1;
  }
 }
 
 function $6($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $30_1 = 0, $89 = 0, $80 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($1_1 >>> 0 >= 128 >>> 0) {
      HEAP32[($3_1 + 12 | 0) >> 2] = 0;
      if ($1_1 >>> 0 < 2048 >>> 0) {
       break label$3
      }
      if ($1_1 >>> 0 < 65536 >>> 0) {
       HEAP8[($3_1 + 14 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
       HEAP8[($3_1 + 12 | 0) >> 0] = $1_1 >>> 12 | 0 | 224 | 0;
       HEAP8[($3_1 + 13 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
       $30_1 = 3;
       break label$2;
      }
      HEAP8[($3_1 + 15 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[($3_1 + 14 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($3_1 + 13 | 0) >> 0] = ($1_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($3_1 + 12 | 0) >> 0] = ($1_1 >>> 18 | 0) & 7 | 0 | 240 | 0;
      $30_1 = 4;
      break label$2;
     }
     $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     if (($2_1 | 0) == (HEAP32[$0_1 >> 2] | 0 | 0)) {
      $4_1 = global$0 - 32 | 0;
      global$0 = $4_1;
      label$7 : {
       label$8 : {
        $2_1 = $2_1 + 1 | 0;
        if (!$2_1) {
         break label$8
        }
        $5_1 = HEAP32[$0_1 >> 2] | 0;
        $6_1 = $5_1 << 1 | 0;
        $2_1 = $2_1 >>> 0 < $6_1 >>> 0 ? $6_1 : $2_1;
        $2_1 = $2_1 >>> 0 <= 8 >>> 0 ? 8 : $2_1;
        $6_1 = ($2_1 ^ -1 | 0) >>> 31 | 0;
        $80 = $4_1;
        if ($5_1) {
         HEAP32[($4_1 + 28 | 0) >> 2] = $5_1;
         HEAP32[($4_1 + 20 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
         $89 = 1;
        } else {
         $89 = 0
        }
        HEAP32[($80 + 24 | 0) >> 2] = $89;
        $13($4_1 + 8 | 0 | 0, $6_1 | 0, $2_1 | 0, $4_1 + 20 | 0 | 0);
        if (HEAP32[($4_1 + 8 | 0) >> 2] | 0) {
         $0_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
         if (!$0_1) {
          break label$8
         }
         $48($0_1 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0);
         wasm2js_trap();
        }
        $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
        HEAP32[$0_1 >> 2] = $2_1;
        HEAP32[($0_1 + 4 | 0) >> 2] = $5_1;
        global$0 = $4_1 + 32 | 0;
        break label$7;
       }
       $26();
       wasm2js_trap();
      }
      $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     }
     HEAP32[($0_1 + 8 | 0) >> 2] = $2_1 + 1 | 0;
     HEAP8[((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $2_1 | 0) >> 0] = $1_1;
     break label$1;
    }
    HEAP8[($3_1 + 13 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
    HEAP8[($3_1 + 12 | 0) >> 0] = $1_1 >>> 6 | 0 | 192 | 0;
    $30_1 = 2;
   }
   $1_1 = $30_1;
   $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   if ($1_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $2_1 | 0) >>> 0) {
    $12($0_1 | 0, $2_1 | 0, $1_1 | 0);
    $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   }
   $49((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $2_1 | 0 | 0, $3_1 + 12 | 0 | 0, $1_1 | 0) | 0;
   HEAP32[($0_1 + 8 | 0) >> 2] = $1_1 + $2_1 | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return 0 | 0;
 }
 
 function $7($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $10_1 = 0, $5_1 = 0, $7_1 = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 0;
  HEAP32[($0_1 + 20 | 0) >> 2] = 0;
  $7_1 = $0_1;
  label$1 : {
   $10_1 = 0;
   if ($1_1 >>> 0 < 256 >>> 0) {
    break label$1
   }
   $10_1 = 31;
   if ($1_1 >>> 0 > 16777215 >>> 0) {
    break label$1
   }
   $3_1 = Math_clz32($1_1 >>> 8 | 0);
   $10_1 = ((($1_1 >>> (6 - $3_1 | 0) | 0) & 1 | 0) - ($3_1 << 1 | 0) | 0) + 62 | 0;
  }
  $2_1 = $10_1;
  HEAP32[($7_1 + 28 | 0) >> 2] = $2_1;
  $4_1 = ($2_1 << 2 | 0) + 1050436 | 0;
  $3_1 = 1 << $2_1 | 0;
  if (!($3_1 & (HEAP32[1050848 >> 2] | 0) | 0)) {
   HEAP32[$4_1 >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = $4_1;
   HEAP32[($0_1 + 12 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $0_1;
   HEAP32[1050848 >> 2] = HEAP32[1050848 >> 2] | 0 | $3_1 | 0;
   return;
  }
  label$3 : {
   label$4 : {
    $3_1 = HEAP32[$4_1 >> 2] | 0;
    if (($1_1 | 0) == ((HEAP32[($3_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0)) {
     $2_1 = $3_1;
     break label$4;
    }
    $5_1 = $1_1 << (($2_1 | 0) != (31 | 0) ? 25 - ($2_1 >>> 1 | 0) | 0 : 0) | 0;
    label$6 : while (1) {
     $4_1 = ($3_1 + (($5_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0;
     $2_1 = HEAP32[$4_1 >> 2] | 0;
     if (!$2_1) {
      break label$3
     }
     $5_1 = $5_1 << 1 | 0;
     $3_1 = $2_1;
     if (((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) != ($1_1 | 0)) {
      continue label$6
     }
     break label$6;
    };
   }
   $1_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
   HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
   HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = 0;
   HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
   return;
  }
  HEAP32[$4_1 >> 2] = $0_1;
  HEAP32[($0_1 + 24 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $0_1;
 }
 
 function $8($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $2_1 = 0, $3_1 = 0, $25_1 = 0, $70 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($1_1 >>> 0 >= 128 >>> 0) {
      HEAP32[($2_1 + 12 | 0) >> 2] = 0;
      if ($1_1 >>> 0 < 2048 >>> 0) {
       break label$3
      }
      if ($1_1 >>> 0 < 65536 >>> 0) {
       HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 12 | 0 | 224 | 0;
       HEAP8[($2_1 + 13 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
       $3_1 = 2;
       $25_1 = 3;
       break label$2;
      }
      HEAP8[($2_1 + 14 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($2_1 + 13 | 0) >> 0] = ($1_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($2_1 + 12 | 0) >> 0] = ($1_1 >>> 18 | 0) & 7 | 0 | 240 | 0;
      $3_1 = 3;
      $25_1 = 4;
      break label$2;
     }
     $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     if (($4_1 | 0) == (HEAP32[$0_1 >> 2] | 0 | 0)) {
      $3_1 = global$0 - 16 | 0;
      global$0 = $3_1;
      $10($3_1 + 8 | 0 | 0, $0_1 | 0, $4_1 | 0, 1 | 0);
      label$7 : {
       label$8 : {
        $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
        if (($4_1 | 0) != (-2147483647 | 0)) {
         if (!$4_1) {
          break label$8
         }
         $48($4_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0);
         wasm2js_trap();
        }
        global$0 = $3_1 + 16 | 0;
        break label$7;
       }
       $26();
       wasm2js_trap();
      }
      $70 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     } else {
      $70 = $4_1
     }
     HEAP8[($70 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0) >> 0] = $1_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = (HEAP32[($0_1 + 8 | 0) >> 2] | 0) + 1 | 0;
     break label$1;
    }
    HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 6 | 0 | 192 | 0;
    $3_1 = 1;
    $25_1 = 2;
   }
   $4_1 = $2_1 + 12 | 0;
   HEAP8[($3_1 | $4_1 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
   $17($0_1 | 0, $4_1 | 0, $4_1 + $25_1 | 0 | 0);
  }
  global$0 = $2_1 + 16 | 0;
  return 0 | 0;
 }
 
 function $9($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $2_1 = 0, $3_1 = 0, $5_1 = 0, $4_1 = 0, $5$hi = 0, $55 = 0;
  $2_1 = global$0 - 48 | 0;
  global$0 = $2_1;
  if ((HEAP32[$1_1 >> 2] | 0 | 0) == (-2147483648 | 0)) {
   $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
   $4_1 = $2_1 + 44 | 0;
   HEAP32[$4_1 >> 2] = 0;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = 1;
   HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 40 | 0) >> 2] = i64toi32_i32$0;
   $2(i64toi32_i32$1 + 36 | 0 | 0, 1049476 | 0, $3_1 | 0) | 0;
   $3_1 = HEAP32[$4_1 >> 2] | 0;
   HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = $3_1;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 40 | 0) >> 2] | 0;
   $5_1 = i64toi32_i32$0;
   $5$hi = i64toi32_i32$1;
   i64toi32_i32$0 = $2_1;
   HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = $5_1;
   HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[($1_1 + 8 | 0) >> 2] = $3_1;
   i64toi32_i32$0 = $1_1;
   HEAP32[i64toi32_i32$0 >> 2] = $5_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  }
  i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $5_1 = i64toi32_i32$1;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 1;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = $2_1 + 16 | 0;
  $1_1 = i64toi32_i32$1 + 8 | 0;
  HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[$1_1 >> 2] = 0;
  HEAPU8[1050377 >> 0] | 0;
  i64toi32_i32$0 = $5$hi;
  i64toi32_i32$1 = $2_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $5_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $1_1 = $34(12 | 0, 4 | 0) | 0;
  if (!$1_1) {
   $48(4 | 0, 12 | 0);
   wasm2js_trap();
  }
  i64toi32_i32$0 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  $55 = i64toi32_i32$0;
  i64toi32_i32$0 = $1_1;
  HEAP32[$1_1 >> 2] = $55;
  HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1_1 + 8 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 1049892;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 48 | 0;
 }
 
 function $10($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $5_1 = 0, $4_1 = 0, $6_1 = 0, $7_1 = 0, $17_1 = 0, $64 = 0, $80 = 0, $49_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  label$1 : {
   $5_1 = $2_1 + $3_1 | 0;
   $17_1 = 0;
   if ($2_1 >>> 0 > $5_1 >>> 0) {
    break label$1
   }
   $2_1 = 1;
   $6_1 = HEAP32[$1_1 >> 2] | 0;
   $3_1 = $6_1 << 1 | 0;
   $3_1 = $3_1 >>> 0 > $5_1 >>> 0 ? $3_1 : $5_1;
   $5_1 = $3_1 >>> 0 <= 8 >>> 0 ? 8 : $3_1;
   $3_1 = ($5_1 ^ -1 | 0) >>> 31 | 0;
   label$2 : {
    if (!$6_1) {
     $2_1 = 0;
     break label$2;
    }
    HEAP32[($4_1 + 28 | 0) >> 2] = $6_1;
    HEAP32[($4_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   }
   HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
   $6_1 = $4_1 + 20 | 0;
   $7_1 = $4_1 + 8 | 0;
   $49_1 = $7_1;
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       label$8 : {
        if ($3_1) {
         if (($5_1 | 0) < (0 | 0)) {
          break label$8
         }
         if (HEAP32[($6_1 + 4 | 0) >> 2] | 0) {
          $2_1 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
          if ($2_1) {
           $64 = $30(HEAP32[$6_1 >> 2] | 0 | 0, $2_1 | 0, $3_1 | 0, $5_1 | 0) | 0;
           break label$6;
          }
         }
         if (!$5_1) {
          break label$7
         }
         HEAPU8[1050377 >> 0] | 0;
         $64 = $34($5_1 | 0, $3_1 | 0) | 0;
         break label$6;
        }
        HEAP32[($7_1 + 4 | 0) >> 2] = 0;
        break label$5;
       }
       HEAP32[($7_1 + 4 | 0) >> 2] = 0;
       break label$5;
      }
      $64 = $3_1;
     }
     $2_1 = $64;
     if ($2_1) {
      HEAP32[($7_1 + 8 | 0) >> 2] = $5_1;
      HEAP32[($7_1 + 4 | 0) >> 2] = $2_1;
      $80 = 0;
      break label$4;
     }
     HEAP32[($7_1 + 8 | 0) >> 2] = $5_1;
     HEAP32[($7_1 + 4 | 0) >> 2] = $3_1;
    }
    $80 = 1;
   }
   HEAP32[$49_1 >> 2] = $80;
   if (!(HEAP32[($4_1 + 8 | 0) >> 2] | 0)) {
    $2_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
    HEAP32[$1_1 >> 2] = $5_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = $2_1;
    $17_1 = -2147483647;
    break label$1;
   }
   $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
   $17_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  }
  $2_1 = $17_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[$0_1 >> 2] = $2_1;
  global$0 = $4_1 + 32 | 0;
 }
 
 function $11($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $6_1 = 0, $7_1 = 0, $52_1 = 0, i64toi32_i32$1 = 0;
  $6_1 = global$0 - 32 | 0;
  global$0 = $6_1;
  $7_1 = HEAP32[1050432 >> 2] | 0;
  HEAP32[1050432 >> 2] = $7_1 + 1 | 0;
  label$1 : {
   label$2 : {
    if (($7_1 | 0) < (0 | 0)) {
     break label$2
    }
    if (HEAPU8[1050892 >> 0] | 0) {
     break label$2
    }
    HEAP8[1050892 >> 0] = 1;
    HEAP32[1050888 >> 2] = (HEAP32[1050888 >> 2] | 0) + 1 | 0;
    HEAP8[($6_1 + 29 | 0) >> 0] = $5_1;
    HEAP8[($6_1 + 28 | 0) >> 0] = $4_1;
    HEAP32[($6_1 + 24 | 0) >> 2] = $3_1;
    HEAP32[($6_1 + 20 | 0) >> 2] = $2_1;
    HEAP32[($6_1 + 16 | 0) >> 2] = 1049964;
    HEAP32[($6_1 + 12 | 0) >> 2] = 1049476;
    $2_1 = HEAP32[1050420 >> 2] | 0;
    if (($2_1 | 0) < (0 | 0)) {
     break label$2
    }
    HEAP32[1050420 >> 2] = $2_1 + 1 | 0;
    if (HEAP32[1050424 >> 2] | 0) {
     FUNCTION_TABLE[HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0]($6_1, $0_1);
     i64toi32_i32$1 = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
     HEAP32[($6_1 + 12 | 0) >> 2] = HEAP32[$6_1 >> 2] | 0;
     HEAP32[($6_1 + 16 | 0) >> 2] = i64toi32_i32$1;
     FUNCTION_TABLE[HEAP32[((HEAP32[1050428 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0](HEAP32[1050424 >> 2] | 0, $6_1 + 12 | 0);
     $52_1 = (HEAP32[1050420 >> 2] | 0) - 1 | 0;
    } else {
     $52_1 = $2_1
    }
    HEAP32[1050420 >> 2] = $52_1;
    HEAP8[1050892 >> 0] = 0;
    if ($4_1) {
     break label$1
    }
   }
   wasm2js_trap();
  }
  wasm2js_trap();
 }
 
 function $12($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  label$1 : {
   $9_1 = $1_1;
   $1_1 = $1_1 + $2_1 | 0;
   if ($9_1 >>> 0 > $1_1 >>> 0) {
    break label$1
   }
   $2_1 = 1;
   $5_1 = HEAP32[$0_1 >> 2] | 0;
   $4_1 = $5_1 << 1 | 0;
   $1_1 = $1_1 >>> 0 < $4_1 >>> 0 ? $4_1 : $1_1;
   $1_1 = $1_1 >>> 0 <= 8 >>> 0 ? 8 : $1_1;
   $4_1 = ($1_1 ^ -1 | 0) >>> 31 | 0;
   label$2 : {
    if (!$5_1) {
     $2_1 = 0;
     break label$2;
    }
    HEAP32[($3_1 + 28 | 0) >> 2] = $5_1;
    HEAP32[($3_1 + 20 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   }
   HEAP32[($3_1 + 24 | 0) >> 2] = $2_1;
   $13($3_1 + 8 | 0 | 0, $4_1 | 0, $1_1 | 0, $3_1 + 20 | 0 | 0);
   if (HEAP32[($3_1 + 8 | 0) >> 2] | 0) {
    $0_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
    if (!$0_1) {
     break label$1
    }
    $48($0_1 | 0, HEAP32[($3_1 + 16 | 0) >> 2] | 0 | 0);
    wasm2js_trap();
   }
   $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
   HEAP32[$0_1 >> 2] = $1_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
   global$0 = $3_1 + 32 | 0;
   return;
  }
  $26();
  wasm2js_trap();
 }
 
 function $13($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $20_1 = 0, $4_1 = 0;
  label$1 : {
   label$2 : {
    if ($1_1) {
     if (($2_1 | 0) < (0 | 0)) {
      break label$2
     }
     label$4 : {
      if (HEAP32[($3_1 + 4 | 0) >> 2] | 0) {
       label$6 : {
        $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
        if (!$4_1) {
         break label$6
        }
        $20_1 = $30(HEAP32[$3_1 >> 2] | 0 | 0, $4_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
        break label$4;
       }
      }
      $20_1 = $1_1;
      if (!$2_1) {
       break label$4
      }
      HEAPU8[1050377 >> 0] | 0;
      $20_1 = $34($2_1 | 0, $1_1 | 0) | 0;
     }
     $3_1 = $20_1;
     if ($3_1) {
      HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
      HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
      HEAP32[$0_1 >> 2] = 0;
      return;
     }
     HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
     break label$1;
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = 0;
    break label$1;
   }
   HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  }
  HEAP32[$0_1 >> 2] = 1;
 }
 
 function $14($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$1 = 0, $4_1 = 0, $5_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  if ((HEAP32[$1_1 >> 2] | 0 | 0) == (-2147483648 | 0)) {
   $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
   $4_1 = $2_1 + 28 | 0;
   HEAP32[$4_1 >> 2] = 0;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = 1;
   HEAP32[($2_1 + 20 | 0) >> 2] = 0;
   HEAP32[($2_1 + 24 | 0) >> 2] = i64toi32_i32$0;
   $2($2_1 + 20 | 0 | 0, 1049476 | 0, $3_1 | 0) | 0;
   $3_1 = HEAP32[$4_1 >> 2] | 0;
   HEAP32[($2_1 + 16 | 0) >> 2] = $3_1;
   i64toi32_i32$0 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
   $5_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1;
   HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
   HEAP32[($2_1 + 12 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[($1_1 + 8 | 0) >> 2] = $3_1;
   i64toi32_i32$0 = $1_1;
   HEAP32[$1_1 >> 2] = $5_1;
   HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = 1049892;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 32 | 0;
 }
 
 function $15($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = global$0 - 48 | 0;
  global$0 = $0_1;
  if (HEAPU8[1050376 >> 0] | 0) {
   HEAP32[($0_1 + 16 | 0) >> 2] = 2;
   HEAP32[($0_1 + 12 | 0) >> 2] = 1049716;
   HEAP32[($0_1 + 24 | 0) >> 2] = 1;
   HEAP32[($0_1 + 28 | 0) >> 2] = 0;
   HEAP32[($0_1 + 40 | 0) >> 2] = 14;
   HEAP32[($0_1 + 44 | 0) >> 2] = $1_1;
   HEAP32[($0_1 + 20 | 0) >> 2] = $0_1 + 36 | 0;
   HEAP32[($0_1 + 36 | 0) >> 2] = $0_1 + 44 | 0;
   $24($0_1 + 12 | 0 | 0, 1049756 | 0);
   wasm2js_trap();
  }
  global$0 = $0_1 + 48 | 0;
 }
 
 function $16($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $29_1 = 0, $4_1 = 0, $7_1 = 0, $5_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if ($2_1 >>> 0 >= (HEAP32[$0_1 >> 2] | 0) >>> 0) {
     break label$2
    }
    $5_1 = $3_1 + 8 | 0;
    $1_1 = global$0 - 32 | 0;
    global$0 = $1_1;
    label$3 : {
     $4_1 = HEAP32[$0_1 >> 2] | 0;
     if ($2_1 >>> 0 <= $4_1 >>> 0) {
      label$5 : {
       $29_1 = -2147483647;
       if (!$4_1) {
        break label$5
       }
       $6_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
       label$6 : {
        if (!$2_1) {
         $7_1 = 1;
         $40($6_1 | 0, $4_1 | 0);
         break label$6;
        }
        $7_1 = $30($6_1 | 0, $4_1 | 0, 1 | 0, $2_1 | 0) | 0;
        $29_1 = 1;
        if (!$7_1) {
         break label$5
        }
       }
       HEAP32[$0_1 >> 2] = $2_1;
       HEAP32[($0_1 + 4 | 0) >> 2] = $7_1;
       $29_1 = -2147483647;
      }
      $0_1 = $29_1;
      HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
      HEAP32[$5_1 >> 2] = $0_1;
      global$0 = $1_1 + 32 | 0;
      break label$3;
     }
     HEAP32[($1_1 + 12 | 0) >> 2] = 1;
     HEAP32[($1_1 + 8 | 0) >> 2] = 1049188;
     HEAP32[($1_1 + 20 | 0) >> 2] = 0;
     HEAP32[($1_1 + 24 | 0) >> 2] = 0;
     HEAP32[($1_1 + 16 | 0) >> 2] = 1049152;
     $24($1_1 + 8 | 0 | 0, 1049272 | 0);
     wasm2js_trap();
    }
    $0_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
    if (($0_1 | 0) == (-2147483647 | 0)) {
     break label$2
    }
    if (!$0_1) {
     break label$1
    }
    $48($0_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0);
    wasm2js_trap();
   }
   global$0 = $3_1 + 16 | 0;
   return;
  }
  $26();
  wasm2js_trap();
 }
 
 function $17($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $40_1 = 0;
  $4_1 = $2_1 - $1_1 | 0;
  $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  if ($4_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $3_1 | 0) >>> 0) {
   $2_1 = global$0 - 16 | 0;
   global$0 = $2_1;
   $10($2_1 + 8 | 0 | 0, $0_1 | 0, $3_1 | 0, $4_1 | 0);
   label$2 : {
    label$3 : {
     $3_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
     if (($3_1 | 0) != (-2147483647 | 0)) {
      if (!$3_1) {
       break label$3
      }
      $48($3_1 | 0, HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0);
      wasm2js_trap();
     }
     global$0 = $2_1 + 16 | 0;
     break label$2;
    }
    $26();
    wasm2js_trap();
   }
   $40_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  } else {
   $40_1 = $3_1
  }
  $49($40_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0 | 0, $1_1 | 0, $4_1 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = (HEAP32[($0_1 + 8 | 0) >> 2] | 0) + $4_1 | 0;
 }
 
 function $18($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  if ($2_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $3_1 | 0) >>> 0) {
   $12($0_1 | 0, $3_1 | 0, $2_1 | 0);
   $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  }
  $49((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $2_1 + $3_1 | 0;
  return 0 | 0;
 }
 
 function $19($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  HEAPU8[1050377 >> 0] | 0;
  $2_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $3_1 = HEAP32[$1_1 >> 2] | 0;
  $1_1 = $34(8 | 0, 4 | 0) | 0;
  if (!$1_1) {
   $48(4 | 0, 8 | 0);
   wasm2js_trap();
  }
  HEAP32[($1_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$1_1 >> 2] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = 1049908;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $20($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, $14_1 = 0, $14$hi = 0, $1_1 = 0, i64toi32_i32$1 = 0, $9_1 = 0;
  if (!(HEAP32[1050404 >> 2] | 0)) {
   if ($0_1) {
    $1_1 = HEAP32[$0_1 >> 2] | 0;
    HEAP32[$0_1 >> 2] = 0;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
    i64toi32_i32$4 = $1_1;
    $9_1 = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$3 = i64toi32_i32$4 ? $9_1 : 0;
    i64toi32_i32$2 = i64toi32_i32$4 ? i64toi32_i32$1 : i64toi32_i32$0;
    $14_1 = i64toi32_i32$3;
    $14$hi = i64toi32_i32$2;
   } else {
    i64toi32_i32$2 = 0;
    $14_1 = 0;
    $14$hi = i64toi32_i32$2;
   }
   i64toi32_i32$2 = $14$hi;
   i64toi32_i32$3 = 1050408;
   HEAP32[i64toi32_i32$3 >> 2] = $14_1;
   HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$2;
   HEAP32[1050404 >> 2] = 1;
  }
  return 1050408 | 0;
 }
 
 function $21($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if ((__wasm_popcnt_i32($1_1 | 0) | 0 | 0) != (1 | 0) | (-2147483648 - $1_1 | 0) >>> 0 < $0_1 >>> 0 | 0) {
    break label$1
   }
   if ($0_1) {
    HEAPU8[1050377 >> 0] | 0;
    $1_1 = $34($0_1 | 0, $1_1 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
   }
   return $1_1 | 0;
  }
  wasm2js_trap();
 }
 
 function $22($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = 1;
  HEAP32[($3_1 + 12 | 0) >> 2] = 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = 1050052;
  HEAP32[($3_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = $3_1 + 24 | 0;
  $24($3_1 | 0, $2_1 | 0);
  wasm2js_trap();
 }
 
 function $23($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $11_1 = 0;
  label$1 : {
   label$2 : {
    if (($2_1 | 0) != (1114112 | 0)) {
     $11_1 = 1;
     if (FUNCTION_TABLE[HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0]($0_1, $2_1) | 0) {
      break label$2
     }
    }
    if ($3_1) {
     break label$1
    }
    $11_1 = 0;
   }
   return $11_1 | 0;
  }
  return FUNCTION_TABLE[HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0]($0_1, $3_1, 0) | 0 | 0;
 }
 
 function $24($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $52_1 = 0, $67 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  HEAP16[($2_1 + 28 | 0) >> 1] = 1;
  HEAP32[($2_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 20 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 16 | 0) >> 2] = 1050136;
  HEAP32[($2_1 + 12 | 0) >> 2] = 1050052;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $0_1 = $2_1 + 12 | 0;
  $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  if (!$2_1) {
   $43(1049876 | 0);
   wasm2js_trap();
  }
  HEAP32[($1_1 + 12 | 0) >> 2] = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = $2_1;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  $1_1 = $1_1 + 4 | 0;
  $2_1 = HEAP32[$1_1 >> 2] | 0;
  $3_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  label$2 : {
   label$3 : {
    label$4 : {
     switch (HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 0) {
     case 0:
      if ($3_1) {
       break label$3
      }
      $2_1 = 1049476;
      $3_1 = 0;
      break label$2;
     case 1:
      break label$4;
     default:
      break label$3;
     };
    }
    if ($3_1) {
     break label$3
    }
    $2_1 = HEAP32[$2_1 >> 2] | 0;
    $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
    $2_1 = HEAP32[$2_1 >> 2] | 0;
    break label$2;
   }
   HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
   HEAP32[$0_1 >> 2] = -2147483648;
   $52_1 = $0_1;
   $0_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   $11($52_1 | 0, 1049944 | 0, HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, HEAPU8[($0_1 + 16 | 0) >> 0] | 0 | 0, HEAPU8[($0_1 + 17 | 0) >> 0] | 0 | 0);
   wasm2js_trap();
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = $2_1;
  $67 = $0_1;
  $0_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $11($67 | 0, 1049924 | 0, HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, HEAPU8[($0_1 + 16 | 0) >> 0] | 0 | 0, HEAPU8[($0_1 + 17 | 0) >> 0] | 0 | 0);
  wasm2js_trap();
 }
 
 function $25($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if (!((__wasm_popcnt_i32($3_1 | 0) | 0 | 0) != (1 | 0) | (-2147483648 - $3_1 | 0) >>> 0 < $1_1 >>> 0 | 0)) {
    $0_1 = $30($0_1 | 0, $1_1 | 0, $3_1 | 0, $2_1 | 0) | 0;
    if ($0_1) {
     break label$1
    }
   }
   wasm2js_trap();
  }
  return $0_1 | 0;
 }
 
 function $26() {
  var $0_1 = 0;
  $0_1 = global$0 - 32 | 0;
  global$0 = $0_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = 1;
  HEAP32[($0_1 + 8 | 0) >> 2] = 105e4;
  HEAP32[($0_1 + 20 | 0) >> 2] = 0;
  HEAP32[($0_1 + 24 | 0) >> 2] = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 1049980;
  $24($0_1 + 8 | 0 | 0, 1050036 | 0);
  wasm2js_trap();
 }
 
 function $27($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $29_1 = 0, $39_1 = 0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  $3_1 = FUNCTION_TABLE[HEAP32[((HEAP32[($1_1 + 24 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($1_1 + 20 | 0) >> 2] | 0, 1049668, 11) | 0;
  $2_1 = $0_1 + 8 | 0;
  HEAP8[($2_1 + 5 | 0) >> 0] = 0;
  HEAP8[($2_1 + 4 | 0) >> 0] = $3_1;
  HEAP32[$2_1 >> 2] = $1_1;
  label$1 : {
   $1_1 = $2_1;
   $3_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
   $29_1 = ($3_1 | 0) != (0 | 0);
   if (!(HEAPU8[($2_1 + 5 | 0) >> 0] | 0)) {
    break label$1
   }
   $2_1 = 1;
   if (!$3_1) {
    $2_1 = HEAP32[$1_1 >> 2] | 0;
    if (!((HEAPU8[($2_1 + 28 | 0) >> 0] | 0) & 4 | 0)) {
     $39_1 = $1_1;
     $1_1 = FUNCTION_TABLE[HEAP32[((HEAP32[($2_1 + 24 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($2_1 + 20 | 0) >> 2] | 0, 1050173, 2) | 0;
     HEAP8[($39_1 + 4 | 0) >> 0] = $1_1;
     $29_1 = $1_1;
     break label$1;
    }
    $2_1 = FUNCTION_TABLE[HEAP32[((HEAP32[($2_1 + 24 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($2_1 + 20 | 0) >> 2] | 0, 1050172, 1) | 0;
   }
   HEAP8[($1_1 + 4 | 0) >> 0] = $2_1;
   $29_1 = $2_1;
  }
  global$0 = $0_1 + 16 | 0;
  return $29_1 | 0;
 }
 
 function $28($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if (($1_1 | -2147483648 | 0 | 0) != (-2147483648 | 0)) {
   $40(HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0, $1_1 | 0)
  }
 }
 
 function $29($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if ($1_1) {
   $40(HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0, $1_1 | 0)
  }
 }
 
 function $30($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $6_1 = 0, $5_1 = 0, $7_1 = 0, $38_1 = 0, $8_1 = 0, $9_1 = 0, $210 = 0, $10_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $5_1 = $0_1 - 4 | 0;
        $6_1 = HEAP32[$5_1 >> 2] | 0;
        $4_1 = $6_1 & -8 | 0;
        $7_1 = $6_1 & 3 | 0;
        if ($4_1 >>> 0 >= (($7_1 ? 4 : 8) + $1_1 | 0) >>> 0) {
         $9_1 = $1_1 + 39 | 0;
         if ($9_1 >>> 0 < $4_1 >>> 0 ? $7_1 : 0) {
          break label$6
         }
         label$8 : {
          label$9 : {
           if ($2_1 >>> 0 >= 9 >>> 0) {
            $8_1 = $4($2_1 | 0, $3_1 | 0) | 0;
            if ($8_1) {
             break label$9
            }
            $38_1 = 0;
            break label$1;
           }
           if ($3_1 >>> 0 > -65588 >>> 0) {
            break label$8
           }
           $1_1 = $3_1 >>> 0 < 11 >>> 0 ? 16 : ($3_1 + 11 | 0) & -8 | 0;
           label$11 : {
            if (!$7_1) {
             if ($1_1 >>> 0 < 256 >>> 0 | $4_1 >>> 0 < ($1_1 | 4 | 0) >>> 0 | 0 | ($4_1 - $1_1 | 0) >>> 0 >= 131073 >>> 0 | 0) {
              break label$11
             }
             break label$2;
            }
            $2_1 = $0_1 - 8 | 0;
            $7_1 = $2_1 + $4_1 | 0;
            label$13 : {
             label$14 : {
              label$15 : {
               label$16 : {
                if ($1_1 >>> 0 > $4_1 >>> 0) {
                 if (($7_1 | 0) == (HEAP32[1050864 >> 2] | 0 | 0)) {
                  break label$13
                 }
                 if (($7_1 | 0) == (HEAP32[1050860 >> 2] | 0 | 0)) {
                  break label$15
                 }
                 $6_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
                 if ($6_1 & 2 | 0) {
                  break label$11
                 }
                 $6_1 = $6_1 & -8 | 0;
                 $4_1 = $6_1 + $4_1 | 0;
                 if ($4_1 >>> 0 < $1_1 >>> 0) {
                  break label$11
                 }
                 $5($7_1 | 0, $6_1 | 0);
                 $3_1 = $4_1 - $1_1 | 0;
                 if ($3_1 >>> 0 < 16 >>> 0) {
                  break label$16
                 }
                 HEAP32[$5_1 >> 2] = $1_1 | ((HEAP32[$5_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
                 $1_1 = $1_1 + $2_1 | 0;
                 HEAP32[($1_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
                 $2_1 = $2_1 + $4_1 | 0;
                 HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 1 | 0;
                 $3($1_1 | 0, $3_1 | 0);
                 break label$2;
                }
                $3_1 = $4_1 - $1_1 | 0;
                if ($3_1 >>> 0 > 15 >>> 0) {
                 break label$14
                }
                break label$2;
               }
               HEAP32[$5_1 >> 2] = $4_1 | ((HEAP32[$5_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
               $1_1 = $2_1 + $4_1 | 0;
               HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 1 | 0;
               break label$2;
              }
              $4_1 = (HEAP32[1050852 >> 2] | 0) + $4_1 | 0;
              if ($4_1 >>> 0 < $1_1 >>> 0) {
               break label$11
              }
              label$18 : {
               $3_1 = $4_1 - $1_1 | 0;
               if ($3_1 >>> 0 <= 15 >>> 0) {
                HEAP32[$5_1 >> 2] = $6_1 & 1 | 0 | $4_1 | 0 | 2 | 0;
                $1_1 = $2_1 + $4_1 | 0;
                HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 1 | 0;
                $3_1 = 0;
                $1_1 = 0;
                break label$18;
               }
               HEAP32[$5_1 >> 2] = $1_1 | ($6_1 & 1 | 0) | 0 | 2 | 0;
               $1_1 = $1_1 + $2_1 | 0;
               HEAP32[($1_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
               $2_1 = $2_1 + $4_1 | 0;
               HEAP32[$2_1 >> 2] = $3_1;
               HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -2 | 0;
              }
              HEAP32[1050860 >> 2] = $1_1;
              HEAP32[1050852 >> 2] = $3_1;
              break label$2;
             }
             HEAP32[$5_1 >> 2] = $1_1 | ($6_1 & 1 | 0) | 0 | 2 | 0;
             $1_1 = $1_1 + $2_1 | 0;
             HEAP32[($1_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
             HEAP32[($7_1 + 4 | 0) >> 2] = HEAP32[($7_1 + 4 | 0) >> 2] | 0 | 1 | 0;
             $3($1_1 | 0, $3_1 | 0);
             break label$2;
            }
            $4_1 = (HEAP32[1050856 >> 2] | 0) + $4_1 | 0;
            if ($4_1 >>> 0 > $1_1 >>> 0) {
             break label$3
            }
           }
           $1_1 = $0($3_1 | 0) | 0;
           if (!$1_1) {
            break label$8
           }
           $210 = $1_1;
           $1_1 = HEAP32[$5_1 >> 2] | 0;
           $1_1 = ($1_1 & 3 | 0 ? -4 : -8) + ($1_1 & -8 | 0) | 0;
           $10_1 = $49($210 | 0, $0_1 | 0, ($1_1 >>> 0 < $3_1 >>> 0 ? $1_1 : $3_1) | 0) | 0;
           $1($0_1 | 0);
           $38_1 = $10_1;
           break label$1;
          }
          $49($8_1 | 0, $0_1 | 0, ($1_1 >>> 0 < $3_1 >>> 0 ? $1_1 : $3_1) | 0) | 0;
          $2_1 = HEAP32[$5_1 >> 2] | 0;
          $3_1 = $2_1 & -8 | 0;
          $2_1 = $2_1 & 3 | 0;
          if ($3_1 >>> 0 < ($1_1 + ($2_1 ? 4 : 8) | 0) >>> 0) {
           break label$5
          }
          if ($3_1 >>> 0 > $9_1 >>> 0 ? $2_1 : 0) {
           break label$4
          }
          $1($0_1 | 0);
         }
         $38_1 = $8_1;
         break label$1;
        }
        $22(1049541 | 0, 46 | 0, 1049588 | 0);
        wasm2js_trap();
       }
       $22(1049604 | 0, 46 | 0, 1049652 | 0);
       wasm2js_trap();
      }
      $22(1049541 | 0, 46 | 0, 1049588 | 0);
      wasm2js_trap();
     }
     $22(1049604 | 0, 46 | 0, 1049652 | 0);
     wasm2js_trap();
    }
    HEAP32[$5_1 >> 2] = $1_1 | ($6_1 & 1 | 0) | 0 | 2 | 0;
    $2_1 = $1_1 + $2_1 | 0;
    $1_1 = $4_1 - $1_1 | 0;
    HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
    HEAP32[1050856 >> 2] = $1_1;
    HEAP32[1050864 >> 2] = $2_1;
    $38_1 = $0_1;
    break label$1;
   }
   $38_1 = $0_1;
  }
  return $38_1 | 0;
 }
 
 function $31($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  if ($1_1) {
   $40($0_1 | 0, $1_1 | 0)
  }
 }
 
 function $32($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $17($0_1 | 0, $1_1 | 0, $1_1 + $2_1 | 0 | 0);
  return 0 | 0;
 }
 
 function $33($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return FUNCTION_TABLE[HEAP32[((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[$0_1 >> 2] | 0, $1_1) | 0 | 0;
 }
 
 function $34($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $7_1 = 0;
  label$1 : {
   if ($1_1 >>> 0 >= 9 >>> 0) {
    $7_1 = $4($1_1 | 0, $0_1 | 0) | 0;
    break label$1;
   }
   $7_1 = $0($0_1 | 0) | 0;
  }
  return $7_1 | 0;
 }
 
 function $35($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 1015843549;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 1155541389;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = -82639843;
  HEAP32[i64toi32_i32$1 >> 2] = -865005739;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function $36($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = -1456929140;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 403936738;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 1849552250;
  HEAP32[i64toi32_i32$1 >> 2] = -760612342;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function $37($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = -1046296420;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = -853640255;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = -38005119;
  HEAP32[i64toi32_i32$1 >> 2] = 11661156;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function $38($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 1049908;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $39($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $6_1 = 0, $4_1 = 0, $5_1 = 0, $8_1 = 0, $7_1 = 0, $9_1 = 0, $47_1 = 0, $10_1 = 0, $11_1 = 0, $376 = 0, $515 = 0, $337 = 0, $12_1 = 0, $543 = 0, $526 = 0, $13_1 = 0, $266 = 0, $276 = 0, $286 = 0;
  label$1 : {
   $4_1 = HEAP32[$0_1 >> 2] | 0;
   $5_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   label$2 : {
    $7_1 = $1_1;
    $9_1 = HEAP32[$1_1 >> 2] | 0;
    $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    if ($9_1 | $0_1 | 0) {
     label$4 : {
      if (!$0_1) {
       break label$4
      }
      $8_1 = $4_1 + $5_1 | 0;
      label$5 : {
       $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
       if (!$3_1) {
        $0_1 = $4_1;
        break label$5;
       }
       $0_1 = $4_1;
       label$7 : while (1) {
        $1_1 = $0_1;
        if (($0_1 | 0) == ($8_1 | 0)) {
         break label$4
        }
        label$8 : {
         $6_1 = HEAP8[$0_1 >> 0] | 0;
         $47_1 = $0_1 + 1 | 0;
         if (($6_1 | 0) >= (0 | 0)) {
          break label$8
         }
         $47_1 = $0_1 + 2 | 0;
         if ($6_1 >>> 0 < -32 >>> 0) {
          break label$8
         }
         $47_1 = $0_1 + 3 | 0;
         if ($6_1 >>> 0 < -16 >>> 0) {
          break label$8
         }
         if (((($6_1 & 255 | 0) << 18 | 0) & 1835008 | 0 | ((HEAPU8[($0_1 + 3 | 0) >> 0] | 0) & 63 | 0 | (((HEAPU8[($0_1 + 2 | 0) >> 0] | 0) & 63 | 0) << 6 | 0 | (((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) & 63 | 0) << 12 | 0) | 0) | 0) | 0 | 0) == (1114112 | 0)) {
          break label$4
         }
         $47_1 = $0_1 + 4 | 0;
        }
        $0_1 = $47_1;
        $2_1 = $0_1 + ($2_1 - $1_1 | 0) | 0;
        $3_1 = $3_1 - 1 | 0;
        if ($3_1) {
         continue label$7
        }
        break label$7;
       };
      }
      if (($0_1 | 0) == ($8_1 | 0)) {
       break label$4
      }
      $1_1 = HEAP8[$0_1 >> 0] | 0;
      if (!(($1_1 | 0) >= (0 | 0) | $1_1 >>> 0 < -32 >>> 0 | 0 | $1_1 >>> 0 < -16 >>> 0 | 0)) {
       if (((($1_1 & 255 | 0) << 18 | 0) & 1835008 | 0 | ((HEAPU8[($0_1 + 3 | 0) >> 0] | 0) & 63 | 0 | (((HEAPU8[($0_1 + 2 | 0) >> 0] | 0) & 63 | 0) << 6 | 0 | (((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) & 63 | 0) << 12 | 0) | 0) | 0) | 0 | 0) == (1114112 | 0)) {
        break label$4
       }
      }
      label$10 : {
       if (!$2_1) {
        break label$10
       }
       if ($2_1 >>> 0 >= $5_1 >>> 0) {
        if (($2_1 | 0) == ($5_1 | 0)) {
         break label$10
        }
        break label$4;
       }
       if ((HEAP8[($2_1 + $4_1 | 0) >> 0] | 0 | 0) < (-64 | 0)) {
        break label$4
       }
      }
      $5_1 = $2_1;
     }
     if (!$9_1) {
      break label$2
     }
     $12_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
     label$12 : {
      if ($5_1 >>> 0 >= 16 >>> 0) {
       label$14 : {
        $3_1 = 0;
        $6_1 = 0;
        $2_1 = 0;
        label$15 : {
         label$16 : {
          $0_1 = ($4_1 + 3 | 0) & -4 | 0;
          $10_1 = $0_1 - $4_1 | 0;
          if ($5_1 >>> 0 < $10_1 >>> 0) {
           break label$16
          }
          $8_1 = $5_1 - $10_1 | 0;
          if ($8_1 >>> 0 < 4 >>> 0) {
           break label$16
          }
          $9_1 = $8_1 & 3 | 0;
          $1_1 = 0;
          label$17 : {
           $11_1 = ($0_1 | 0) == ($4_1 | 0);
           if ($11_1) {
            break label$17
           }
           label$18 : {
            $6_1 = $4_1 - $0_1 | 0;
            if ($6_1 >>> 0 > -4 >>> 0) {
             $0_1 = 0;
             break label$18;
            }
            $0_1 = 0;
            label$20 : while (1) {
             $3_1 = $0_1 + $4_1 | 0;
             $1_1 = ((($1_1 + ((HEAP8[$3_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($3_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($3_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($3_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
             $0_1 = $0_1 + 4 | 0;
             if ($0_1) {
              continue label$20
             }
             break label$20;
            };
           }
           if ($11_1) {
            break label$17
           }
           $3_1 = $0_1 + $4_1 | 0;
           label$21 : while (1) {
            $1_1 = $1_1 + ((HEAP8[$3_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
            $3_1 = $3_1 + 1 | 0;
            $6_1 = $6_1 + 1 | 0;
            if ($6_1) {
             continue label$21
            }
            break label$21;
           };
          }
          $0_1 = $4_1 + $10_1 | 0;
          label$22 : {
           if (!$9_1) {
            break label$22
           }
           $3_1 = $0_1 + ($8_1 & -4 | 0) | 0;
           $2_1 = (HEAP8[$3_1 >> 0] | 0 | 0) > (-65 | 0);
           if (($9_1 | 0) == (1 | 0)) {
            break label$22
           }
           $2_1 = $2_1 + ((HEAP8[($3_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
           if (($9_1 | 0) == (2 | 0)) {
            break label$22
           }
           $2_1 = $2_1 + ((HEAP8[($3_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
          }
          $8_1 = $8_1 >>> 2 | 0;
          $6_1 = $1_1 + $2_1 | 0;
          label$23 : while (1) {
           $2_1 = $0_1;
           if (!$8_1) {
            break label$15
           }
           $9_1 = $8_1 >>> 0 >= 192 >>> 0 ? 192 : $8_1;
           $10_1 = $9_1 & 3 | 0;
           $11_1 = $9_1 << 2 | 0;
           $3_1 = 0;
           if ($8_1 >>> 0 >= 4 >>> 0) {
            $13_1 = $0_1 + ($11_1 & 1008 | 0) | 0;
            $1_1 = $0_1;
            label$25 : while (1) {
             $0_1 = HEAP32[$1_1 >> 2] | 0;
             $266 = ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) + $3_1 | 0;
             $0_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
             $276 = $266 + ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
             $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
             $286 = $276 + ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
             $0_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
             $3_1 = $286 + ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
             $1_1 = $1_1 + 16 | 0;
             if (($1_1 | 0) != ($13_1 | 0)) {
              continue label$25
             }
             break label$25;
            };
           }
           $8_1 = $8_1 - $9_1 | 0;
           $0_1 = $2_1 + $11_1 | 0;
           $6_1 = (Math_imul((($3_1 >>> 8 | 0) & 16711935 | 0) + ($3_1 & 16711935 | 0) | 0, 65537) >>> 16 | 0) + $6_1 | 0;
           if (!$10_1) {
            continue label$23
           }
           break label$23;
          };
          label$26 : {
           $0_1 = $2_1 + (($9_1 & 252 | 0) << 2 | 0) | 0;
           $1_1 = HEAP32[$0_1 >> 2] | 0;
           $1_1 = (($1_1 ^ -1 | 0) >>> 7 | 0 | ($1_1 >>> 6 | 0) | 0) & 16843009 | 0;
           $337 = $1_1;
           if (($10_1 | 0) == (1 | 0)) {
            break label$26
           }
           $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
           $1_1 = $1_1 + ((($2_1 ^ -1 | 0) >>> 7 | 0 | ($2_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
           $337 = $1_1;
           if (($10_1 | 0) == (2 | 0)) {
            break label$26
           }
           $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
           $337 = ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) + $1_1 | 0;
          }
          $0_1 = $337;
          $376 = (Math_imul((($0_1 >>> 8 | 0) & 459007 | 0) + ($0_1 & 16711935 | 0) | 0, 65537) >>> 16 | 0) + $6_1 | 0;
          break label$14;
         }
         $376 = 0;
         if (!$5_1) {
          break label$14
         }
         $0_1 = $5_1 & 3 | 0;
         if ($5_1 >>> 0 >= 4 >>> 0) {
          $2_1 = $5_1 & -4 | 0;
          label$28 : while (1) {
           $1_1 = $3_1 + $4_1 | 0;
           $6_1 = ((($6_1 + ((HEAP8[$1_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($1_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($1_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($1_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
           $3_1 = $3_1 + 4 | 0;
           if (($2_1 | 0) != ($3_1 | 0)) {
            continue label$28
           }
           break label$28;
          };
         }
         if (!$0_1) {
          break label$15
         }
         $1_1 = $3_1 + $4_1 | 0;
         label$29 : while (1) {
          $6_1 = $6_1 + ((HEAP8[$1_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
          $1_1 = $1_1 + 1 | 0;
          $0_1 = $0_1 - 1 | 0;
          if ($0_1) {
           continue label$29
          }
          break label$29;
         };
        }
        $376 = $6_1;
       }
       $1_1 = $376;
       break label$12;
      }
      if (!$5_1) {
       $1_1 = 0;
       break label$12;
      }
      $3_1 = $5_1 & 3 | 0;
      label$31 : {
       if ($5_1 >>> 0 < 4 >>> 0) {
        $1_1 = 0;
        $2_1 = 0;
        break label$31;
       }
       $6_1 = $5_1 & 12 | 0;
       $1_1 = 0;
       $2_1 = 0;
       label$33 : while (1) {
        $0_1 = $2_1 + $4_1 | 0;
        $1_1 = ((($1_1 + ((HEAP8[$0_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($0_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($0_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($0_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
        $2_1 = $2_1 + 4 | 0;
        if (($6_1 | 0) != ($2_1 | 0)) {
         continue label$33
        }
        break label$33;
       };
      }
      if (!$3_1) {
       break label$12
      }
      $0_1 = $2_1 + $4_1 | 0;
      label$34 : while (1) {
       $1_1 = $1_1 + ((HEAP8[$0_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
       $0_1 = $0_1 + 1 | 0;
       $3_1 = $3_1 - 1 | 0;
       if ($3_1) {
        continue label$34
       }
       break label$34;
      };
     }
     label$35 : {
      if ($1_1 >>> 0 < $12_1 >>> 0) {
       $0_1 = $12_1 - $1_1 | 0;
       $1_1 = 0;
       label$37 : {
        label$38 : {
         switch ((HEAPU8[($7_1 + 32 | 0) >> 0] | 0) - 1 | 0 | 0) {
         case 0:
          $1_1 = $0_1;
          $0_1 = 0;
          break label$37;
         case 1:
          break label$38;
         default:
          break label$37;
         };
        }
        $1_1 = $0_1 >>> 1 | 0;
        $0_1 = ($0_1 + 1 | 0) >>> 1 | 0;
       }
       $1_1 = $1_1 + 1 | 0;
       $3_1 = HEAP32[($7_1 + 16 | 0) >> 2] | 0;
       $2_1 = HEAP32[($7_1 + 24 | 0) >> 2] | 0;
       $7_1 = HEAP32[($7_1 + 20 | 0) >> 2] | 0;
       label$40 : while (1) {
        $1_1 = $1_1 - 1 | 0;
        if (!$1_1) {
         break label$35
        }
        if (!(FUNCTION_TABLE[HEAP32[($2_1 + 16 | 0) >> 2] | 0 | 0]($7_1, $3_1) | 0)) {
         continue label$40
        }
        break label$40;
       };
       $515 = 1;
       break label$1;
      }
      break label$2;
     }
     if (FUNCTION_TABLE[HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0]($7_1, $4_1, $5_1) | 0) {
      $543 = 1
     } else {
      $1_1 = 0;
      label$43 : {
       label$44 : while (1) {
        $526 = $0_1;
        if (($0_1 | 0) == ($1_1 | 0)) {
         break label$43
        }
        $1_1 = $1_1 + 1 | 0;
        if (!(FUNCTION_TABLE[HEAP32[($2_1 + 16 | 0) >> 2] | 0 | 0]($7_1, $3_1) | 0)) {
         continue label$44
        }
        break label$44;
       };
       $526 = $1_1 - 1 | 0;
      }
      $543 = $526 >>> 0 < $0_1 >>> 0;
     }
     $515 = $543;
     break label$1;
    }
    $515 = FUNCTION_TABLE[HEAP32[((HEAP32[($7_1 + 24 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($7_1 + 20 | 0) >> 2] | 0, $4_1, $5_1) | 0;
    break label$1;
   }
   $515 = FUNCTION_TABLE[HEAP32[((HEAP32[($7_1 + 24 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($7_1 + 20 | 0) >> 2] | 0, $4_1, $5_1) | 0;
  }
  return $515 | 0;
 }
 
 function $40($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  label$1 : {
   label$2 : {
    $2_1 = HEAP32[($0_1 - 4 | 0) >> 2] | 0;
    $3_1 = $2_1 & -8 | 0;
    $2_1 = $2_1 & 3 | 0;
    if ($3_1 >>> 0 >= (($2_1 ? 4 : 8) + $1_1 | 0) >>> 0) {
     if ($3_1 >>> 0 > ($1_1 + 39 | 0) >>> 0 ? $2_1 : 0) {
      break label$2
     }
     $1($0_1 | 0);
     break label$1;
    }
    $22(1049541 | 0, 46 | 0, 1049588 | 0);
    wasm2js_trap();
   }
   $22(1049604 | 0, 46 | 0, 1049652 | 0);
   wasm2js_trap();
  }
 }
 
 function $41($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[$0_1 >> 2] | 0;
  label$1 : while (1) continue label$1;
 }
 
 function $42($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $5_1 = 0, $180 = 0, i64toi32_i32$5 = 0, $13_1 = 0, $14_1 = 0, $6_1 = 0, $9_1 = 0, $7_1 = 0, $13$hi = 0, $14$hi = 0, $8_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $26_1 = 0, $27_1 = 0, $28_1 = 0, $29_1 = 0, $30_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $34_1 = 0, $36_1 = 0, $37_1 = 0, $38_1 = 0, $35_1 = 0, $35$hi = 0, $15_1 = 0;
  i64toi32_i32$2 = $0_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = 0;
  $13_1 = i64toi32_i32$0;
  $13$hi = i64toi32_i32$1;
  $5_1 = global$0 - 48 | 0;
  global$0 = $5_1;
  $2_1 = 39;
  label$1 : {
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$3 = 1e4;
   if (i64toi32_i32$1 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
    i64toi32_i32$2 = i64toi32_i32$1;
    $14_1 = $13_1;
    $14$hi = i64toi32_i32$2;
    break label$1;
   }
   label$3 : while (1) {
    $4_1 = ($5_1 + 9 | 0) + $2_1 | 0;
    i64toi32_i32$2 = $13$hi;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_udiv($13_1 | 0, i64toi32_i32$2 | 0, 1e4 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $14_1 = i64toi32_i32$1;
    $14$hi = i64toi32_i32$2;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_mul($14_1 | 0, i64toi32_i32$2 | 0, 1e4 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $35_1 = i64toi32_i32$1;
    $35$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $13$hi;
    i64toi32_i32$3 = $13_1;
    i64toi32_i32$1 = $35$hi;
    i64toi32_i32$0 = $35_1;
    i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) + i64toi32_i32$1 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    $3_1 = i64toi32_i32$3 - i64toi32_i32$0 | 0;
    $0_1 = (($3_1 & 65535 | 0) >>> 0) / (100 >>> 0) | 0;
    $26_1 = ($0_1 << 1 | 0) + 1050175 | 0;
    $27_1 = $4_1 - 4 | 0;
    $28_1 = HEAPU8[$26_1 >> 0] | 0 | ((HEAPU8[($26_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$27_1 >> 0] = $28_1;
    HEAP8[($27_1 + 1 | 0) >> 0] = $28_1 >>> 8 | 0;
    $29_1 = ((($3_1 - Math_imul($0_1, 100) | 0) & 65535 | 0) << 1 | 0) + 1050175 | 0;
    $30_1 = $4_1 - 2 | 0;
    $31_1 = HEAPU8[$29_1 >> 0] | 0 | ((HEAPU8[($29_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$30_1 >> 0] = $31_1;
    HEAP8[($30_1 + 1 | 0) >> 0] = $31_1 >>> 8 | 0;
    $2_1 = $2_1 - 4 | 0;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$2 = i64toi32_i32$3;
    i64toi32_i32$3 = 0;
    i64toi32_i32$0 = 99999999;
    $15_1 = i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $14$hi;
    $13_1 = $14_1;
    $13$hi = i64toi32_i32$2;
    if ($15_1) {
     continue label$3
    }
    break label$3;
   };
  }
  i64toi32_i32$2 = $14$hi;
  $3_1 = $14_1;
  if ($3_1 >>> 0 > 99 >>> 0) {
   $2_1 = $2_1 - 2 | 0;
   $0_1 = $3_1;
   $3_1 = (($3_1 & 65535 | 0) >>> 0) / (100 >>> 0) | 0;
   $32_1 = ((($0_1 - Math_imul($3_1, 100) | 0) & 65535 | 0) << 1 | 0) + 1050175 | 0;
   $33_1 = $2_1 + ($5_1 + 9 | 0) | 0;
   $34_1 = HEAPU8[$32_1 >> 0] | 0 | ((HEAPU8[($32_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
   HEAP8[$33_1 >> 0] = $34_1;
   HEAP8[($33_1 + 1 | 0) >> 0] = $34_1 >>> 8 | 0;
  }
  label$5 : {
   if ($3_1 >>> 0 >= 10 >>> 0) {
    $2_1 = $2_1 - 2 | 0;
    $36_1 = ($3_1 << 1 | 0) + 1050175 | 0;
    $37_1 = $2_1 + ($5_1 + 9 | 0) | 0;
    $38_1 = HEAPU8[$36_1 >> 0] | 0 | ((HEAPU8[($36_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$37_1 >> 0] = $38_1;
    HEAP8[($37_1 + 1 | 0) >> 0] = $38_1 >>> 8 | 0;
    break label$5;
   }
   $2_1 = $2_1 - 1 | 0;
   HEAP8[($2_1 + ($5_1 + 9 | 0) | 0) >> 0] = $3_1 | 48 | 0;
  }
  label$7 : {
   $8_1 = ($5_1 + 9 | 0) + $2_1 | 0;
   $3_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
   $0_1 = $3_1 & 1 | 0;
   $6_1 = $0_1 ? 43 : 1114112;
   $9_1 = 39 - $2_1 | 0;
   $10_1 = $0_1 + $9_1 | 0;
   $7_1 = $3_1 & 4 | 0 ? 1050052 : 0;
   label$8 : {
    label$9 : {
     if (!(HEAP32[$1_1 >> 2] | 0)) {
      $0_1 = 1;
      $2_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      $3_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      if ($23($2_1 | 0, $3_1 | 0, $6_1 | 0, $7_1 | 0) | 0) {
       break label$9
      }
      break label$8;
     }
     $11_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
     if ($10_1 >>> 0 >= $11_1 >>> 0) {
      $0_1 = 1;
      $2_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      $3_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      if ($23($2_1 | 0, $3_1 | 0, $6_1 | 0, $7_1 | 0) | 0) {
       break label$9
      }
      break label$8;
     }
     if ($3_1 & 8 | 0) {
      $3_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
      HEAP32[($1_1 + 16 | 0) >> 2] = 48;
      $2_1 = HEAPU8[($1_1 + 32 | 0) >> 0] | 0;
      $0_1 = 1;
      HEAP8[($1_1 + 32 | 0) >> 0] = 1;
      $12_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      $4_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      if ($23($12_1 | 0, $4_1 | 0, $6_1 | 0, $7_1 | 0) | 0) {
       break label$9
      }
      $0_1 = ($11_1 - $10_1 | 0) + 1 | 0;
      label$13 : {
       label$14 : while (1) {
        $0_1 = $0_1 - 1 | 0;
        if (!$0_1) {
         break label$13
        }
        if (!(FUNCTION_TABLE[HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0]($12_1, 48) | 0)) {
         continue label$14
        }
        break label$14;
       };
       $180 = 1;
       break label$7;
      }
      $0_1 = 1;
      if (FUNCTION_TABLE[HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0]($12_1, $8_1, $9_1) | 0) {
       break label$9
      }
      HEAP8[($1_1 + 32 | 0) >> 0] = $2_1;
      HEAP32[($1_1 + 16 | 0) >> 2] = $3_1;
      $0_1 = 0;
      break label$9;
     }
     $2_1 = $11_1 - $10_1 | 0;
     label$15 : {
      label$16 : {
       label$17 : {
        $0_1 = HEAPU8[($1_1 + 32 | 0) >> 0] | 0;
        switch ($0_1 - 1 | 0 | 0) {
        case 1:
         break label$16;
        case 0:
        case 2:
         break label$17;
        default:
         break label$15;
        };
       }
       $0_1 = $2_1;
       $2_1 = 0;
       break label$15;
      }
      $0_1 = $2_1 >>> 1 | 0;
      $2_1 = ($2_1 + 1 | 0) >>> 1 | 0;
     }
     $0_1 = $0_1 + 1 | 0;
     $3_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     $4_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
     $1_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
     label$18 : {
      label$19 : while (1) {
       $0_1 = $0_1 - 1 | 0;
       if (!$0_1) {
        break label$18
       }
       if (!(FUNCTION_TABLE[HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0]($1_1, $3_1) | 0)) {
        continue label$19
       }
       break label$19;
      };
      $180 = 1;
      break label$7;
     }
     $0_1 = 1;
     if ($23($1_1 | 0, $4_1 | 0, $6_1 | 0, $7_1 | 0) | 0) {
      break label$9
     }
     if (FUNCTION_TABLE[HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0]($1_1, $8_1, $9_1) | 0) {
      break label$9
     }
     $0_1 = 0;
     label$20 : while (1) {
      $180 = 0;
      if (($0_1 | 0) == ($2_1 | 0)) {
       break label$7
      }
      $0_1 = $0_1 + 1 | 0;
      if (!(FUNCTION_TABLE[HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0]($1_1, $3_1) | 0)) {
       continue label$20
      }
      break label$20;
     };
     $180 = ($0_1 - 1 | 0) >>> 0 < $2_1 >>> 0;
     break label$7;
    }
    $180 = $0_1;
    break label$7;
   }
   $180 = FUNCTION_TABLE[HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0]($2_1, $8_1, $9_1) | 0;
  }
  global$0 = $5_1 + 48 | 0;
  return $180 | 0;
 }
 
 function $43($0_1) {
  $0_1 = $0_1 | 0;
  $22(1050053 | 0, 43 | 0, $0_1 | 0);
  wasm2js_trap();
 }
 
 function $44($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $2($0_1 | 0, 1048944 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $45($0_1) {
  $0_1 = $0_1 | 0;
  $29($0_1 | 0);
 }
 
 function $46($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return FUNCTION_TABLE[HEAP32[((HEAP32[($1_1 + 24 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($1_1 + 20 | 0) >> 2] | 0, 1049132, 5) | 0 | 0;
 }
 
 function $47($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $2($0_1 | 0, 1049476 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $48($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $0_1;
  $0_1 = HEAP32[1050416 >> 2] | 0;
  FUNCTION_TABLE[($0_1 ? $0_1 : 15) | 0]($2_1, $1_1);
  wasm2js_trap();
 }
 
 function $49($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $64 = 0;
  label$1 : {
   $4_1 = $2_1;
   if ($2_1 >>> 0 < 16 >>> 0) {
    $2_1 = $0_1;
    break label$1;
   }
   $3_1 = (0 - $0_1 | 0) & 3 | 0;
   $5_1 = $0_1 + $3_1 | 0;
   if ($3_1) {
    $2_1 = $0_1;
    $6_1 = $1_1;
    label$4 : while (1) {
     HEAP8[$2_1 >> 0] = HEAPU8[$6_1 >> 0] | 0;
     $6_1 = $6_1 + 1 | 0;
     $2_1 = $2_1 + 1 | 0;
     if ($2_1 >>> 0 < $5_1 >>> 0) {
      continue label$4
     }
     break label$4;
    };
   }
   $8_1 = $4_1 - $3_1 | 0;
   $7_1 = $8_1 & -4 | 0;
   $2_1 = $5_1 + $7_1 | 0;
   label$5 : {
    $3_1 = $1_1 + $3_1 | 0;
    if ($3_1 & 3 | 0) {
     if (($7_1 | 0) <= (0 | 0)) {
      break label$5
     }
     $4_1 = $3_1 << 3 | 0;
     $9_1 = $4_1 & 24 | 0;
     $6_1 = $3_1 & -4 | 0;
     $1_1 = $6_1 + 4 | 0;
     $4_1 = (0 - $4_1 | 0) & 24 | 0;
     $6_1 = HEAP32[$6_1 >> 2] | 0;
     label$7 : while (1) {
      $64 = $6_1 >>> $9_1 | 0;
      $6_1 = HEAP32[$1_1 >> 2] | 0;
      HEAP32[$5_1 >> 2] = $64 | ($6_1 << $4_1 | 0) | 0;
      $1_1 = $1_1 + 4 | 0;
      $5_1 = $5_1 + 4 | 0;
      if ($5_1 >>> 0 < $2_1 >>> 0) {
       continue label$7
      }
      break label$7;
     };
     break label$5;
    }
    if (($7_1 | 0) <= (0 | 0)) {
     break label$5
    }
    $1_1 = $3_1;
    label$8 : while (1) {
     HEAP32[$5_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $5_1 = $5_1 + 4 | 0;
     if ($5_1 >>> 0 < $2_1 >>> 0) {
      continue label$8
     }
     break label$8;
    };
   }
   $4_1 = $8_1 & 3 | 0;
   $1_1 = $3_1 + $7_1 | 0;
  }
  if ($4_1) {
   $3_1 = $2_1 + $4_1 | 0;
   label$10 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 + 1 | 0;
    if ($2_1 >>> 0 < $3_1 >>> 0) {
     continue label$10
    }
    break label$10;
   };
  }
  return $0_1 | 0;
 }
 
 function $50() {
  fimport$0(1048932 | 0, 12 | 0);
 }
 
 function $51($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $0_1 + $1_1 | 0 | 0;
 }
 
 function $52($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, $2_1 = 0, i64toi32_i32$1 = 0, $3_1 = 0, i64toi32_i32$3 = 0, $4_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $78 = 0, $83 = 0, $86 = 0, $128 = 0, $154 = 0, $182 = 0, $187 = 0;
  label$1 : {
   $0_1 = global$0 - 96 | 0;
   global$0 = $0_1;
   HEAP32[($0_1 + 52 | 0) >> 2] = 0;
   i64toi32_i32$1 = $0_1;
   i64toi32_i32$0 = 1;
   HEAP32[($0_1 + 44 | 0) >> 2] = 0;
   HEAP32[($0_1 + 48 | 0) >> 2] = i64toi32_i32$0;
   HEAP8[($0_1 + 88 | 0) >> 0] = 3;
   HEAP32[($0_1 + 72 | 0) >> 2] = 32;
   HEAP32[($0_1 + 84 | 0) >> 2] = 0;
   HEAP32[($0_1 + 80 | 0) >> 2] = 1048944;
   HEAP32[($0_1 + 64 | 0) >> 2] = 0;
   HEAP32[($0_1 + 56 | 0) >> 2] = 0;
   $6_1 = $0_1 + 44 | 0;
   HEAP32[($0_1 + 76 | 0) >> 2] = $6_1;
   $2_1 = global$0 + -64 | 0;
   global$0 = $2_1;
   $7_1 = 1;
   label$2 : {
    $8_1 = $0_1 + 56 | 0;
    $4_1 = $8_1;
    $5_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
    $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
    $4_1 = HEAP32[($9_1 + 12 | 0) >> 2] | 0;
    if (FUNCTION_TABLE[$4_1 | 0]($5_1, 1050120, 12) | 0) {
     break label$2
    }
    $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
    HEAP32[($2_1 + 60 | 0) >> 2] = 14;
    HEAP32[($2_1 + 52 | 0) >> 2] = 14;
    HEAP32[($2_1 + 20 | 0) >> 2] = 3;
    HEAP32[($2_1 + 16 | 0) >> 2] = 1050096;
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = 0;
    HEAP32[($2_1 + 28 | 0) >> 2] = 3;
    HEAP32[($2_1 + 32 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($2_1 + 56 | 0) >> 2] = $3_1 + 12 | 0;
    HEAP32[($2_1 + 48 | 0) >> 2] = $3_1 + 8 | 0;
    HEAP32[($2_1 + 44 | 0) >> 2] = 32;
    HEAP32[($2_1 + 40 | 0) >> 2] = $3_1;
    $10_1 = $2_1 + 40 | 0;
    HEAP32[($2_1 + 24 | 0) >> 2] = $10_1;
    if ($2($5_1 | 0, $9_1 | 0, $2_1 + 16 | 0 | 0) | 0) {
     break label$2
    }
    label$3 : {
     $3_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
     if ($3_1) {
      if (FUNCTION_TABLE[$4_1 | 0]($5_1, 1050132, 2) | 0) {
       break label$2
      }
      i64toi32_i32$2 = $3_1 + 16 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $78 = i64toi32_i32$0;
      i64toi32_i32$0 = $2_1 + 56 | 0;
      HEAP32[i64toi32_i32$0 >> 2] = $78;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $3_1 + 8 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $83 = i64toi32_i32$1;
      i64toi32_i32$1 = $2_1 + 48 | 0;
      HEAP32[i64toi32_i32$1 >> 2] = $83;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $3_1;
      i64toi32_i32$0 = HEAP32[$3_1 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
      $86 = i64toi32_i32$0;
      i64toi32_i32$0 = $2_1;
      HEAP32[(i64toi32_i32$0 + 40 | 0) >> 2] = $86;
      HEAP32[(i64toi32_i32$0 + 44 | 0) >> 2] = i64toi32_i32$1;
      if (!($2($5_1 | 0, $9_1 | 0, $10_1 | 0) | 0)) {
       break label$3
      }
      break label$2;
     }
     $3_1 = HEAP32[$1_1 >> 2] | 0;
     FUNCTION_TABLE[HEAP32[((HEAP32[($1_1 + 4 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0]($2_1, $3_1);
     i64toi32_i32$2 = $2_1;
     i64toi32_i32$1 = HEAP32[$2_1 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
     i64toi32_i32$2 = i64toi32_i32$1;
     i64toi32_i32$1 = -38005119;
     i64toi32_i32$3 = 11661156;
     if ((i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$1 | 0) | 0) {
      break label$3
     }
     i64toi32_i32$3 = $2_1;
     i64toi32_i32$2 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
     i64toi32_i32$3 = i64toi32_i32$2;
     i64toi32_i32$2 = -1046296420;
     i64toi32_i32$1 = -853640255;
     if ((i64toi32_i32$3 | 0) != (i64toi32_i32$1 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | 0) {
      break label$3
     }
     if (FUNCTION_TABLE[$4_1 | 0]($5_1, 1050132, 2) | 0) {
      break label$2
     }
     if (FUNCTION_TABLE[$4_1 | 0]($5_1, HEAP32[$3_1 >> 2] | 0, HEAP32[($3_1 + 4 | 0) >> 2] | 0) | 0) {
      break label$2
     }
    }
    $7_1 = 0;
   }
   global$0 = $2_1 - -64 | 0;
   if (!$7_1) {
    $3_1 = $0_1 + 40 | 0;
    HEAP32[$3_1 >> 2] = HEAP32[($0_1 + 52 | 0) >> 2] | 0;
    i64toi32_i32$1 = $0_1;
    i64toi32_i32$3 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($0_1 + 48 | 0) >> 2] | 0;
    $128 = i64toi32_i32$3;
    i64toi32_i32$3 = $0_1;
    HEAP32[($0_1 + 32 | 0) >> 2] = $128;
    HEAP32[($0_1 + 36 | 0) >> 2] = i64toi32_i32$0;
    $2_1 = $0_1 + 32 | 0;
    $17($2_1 | 0, 1049137 | 0, 1049147 | 0);
    $5_1 = fimport$1() | 0;
    fimport$2($0_1 + 24 | 0 | 0, $5_1 | 0);
    $7_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
    $4_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
    $1_1 = global$0 - 16 | 0;
    global$0 = $1_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = $4_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $7_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = $4_1;
    $16($1_1 + 4 | 0 | 0);
    i64toi32_i32$1 = $1_1;
    i64toi32_i32$0 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    i64toi32_i32$3 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
    $154 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1 + 16 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $154;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$3;
    global$0 = $1_1 + 16 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    $4_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    HEAP32[($6_1 + 8 | 0) >> 2] = $4_1;
    HEAP32[($6_1 + 4 | 0) >> 2] = $1_1;
    HEAP32[$6_1 >> 2] = $4_1;
    $1_1 = HEAP32[($0_1 + 48 | 0) >> 2] | 0;
    $17($2_1 | 0, $1_1 | 0, $1_1 + (HEAP32[($0_1 + 52 | 0) >> 2] | 0) | 0 | 0);
    $17($2_1 | 0, 1049147 | 0, 1049149 | 0);
    HEAP32[($0_1 - -64 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
    i64toi32_i32$1 = $0_1;
    i64toi32_i32$3 = HEAP32[($0_1 + 32 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($0_1 + 36 | 0) >> 2] | 0;
    $182 = i64toi32_i32$3;
    i64toi32_i32$3 = $0_1;
    HEAP32[($0_1 + 56 | 0) >> 2] = $182;
    HEAP32[($0_1 + 60 | 0) >> 2] = i64toi32_i32$0;
    $16($8_1 | 0);
    i64toi32_i32$1 = $8_1;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
    i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
    $187 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1 + 8 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $187;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$3;
    fimport$3(HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0);
    $29($6_1 | 0);
    if ($5_1 >>> 0 >= 132 >>> 0) {
     fimport$4($5_1 | 0)
    }
    global$0 = $0_1 + 96 | 0;
    break label$1;
   }
   $1_1 = global$0 + -64 | 0;
   global$0 = $1_1;
   HEAP32[($1_1 + 12 | 0) >> 2] = 55;
   HEAP32[($1_1 + 8 | 0) >> 2] = 1048968;
   HEAP32[($1_1 + 20 | 0) >> 2] = 1049024;
   HEAP32[($1_1 + 16 | 0) >> 2] = $0_1 + 32 | 0;
   HEAP32[($1_1 + 60 | 0) >> 2] = 31;
   HEAP32[($1_1 + 28 | 0) >> 2] = 2;
   HEAP32[($1_1 + 24 | 0) >> 2] = 1050156;
   i64toi32_i32$0 = $1_1;
   i64toi32_i32$3 = 0;
   HEAP32[($1_1 + 36 | 0) >> 2] = 2;
   HEAP32[($1_1 + 40 | 0) >> 2] = i64toi32_i32$3;
   HEAP32[($1_1 + 52 | 0) >> 2] = 32;
   HEAP32[($1_1 + 32 | 0) >> 2] = $1_1 + 48 | 0;
   HEAP32[($1_1 + 56 | 0) >> 2] = $1_1 + 16 | 0;
   HEAP32[($1_1 + 48 | 0) >> 2] = $1_1 + 8 | 0;
   $24($1_1 + 24 | 0 | 0, 1049116 | 0);
   wasm2js_trap();
  }
 }
 
 function $53() {
  var $0_1 = 0, $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $6_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  if ((HEAPU8[1050378 >> 0] | 0 | 0) != (3 | 0)) {
   HEAP8[($2_1 + 11 | 0) >> 0] = 1;
   HEAP32[($2_1 + 12 | 0) >> 2] = $2_1 + 11 | 0;
   $0_1 = $2_1 + 12 | 0;
   $1_1 = global$0 - 32 | 0;
   global$0 = $1_1;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        switch ((HEAPU8[1050378 >> 0] | 0) - 1 | 0 | 0) {
        default:
         HEAP8[1050378 >> 0] = 2;
         $0_1 = HEAP32[$0_1 >> 2] | 0;
         $6_1 = HEAPU8[$0_1 >> 0] | 0;
         HEAP8[$0_1 >> 0] = 0;
         if (!$6_1) {
          break label$5
         }
         $0_1 = global$0 - 32 | 0;
         global$0 = $0_1;
         label$9 : {
          label$10 : {
           label$11 : {
            if ((HEAP32[1050432 >> 2] | 0) & 2147483647 | 0) {
             if (HEAP32[1050888 >> 2] | 0) {
              break label$11
             }
            }
            if (HEAP32[1050420 >> 2] | 0) {
             break label$10
            }
            $3_1 = HEAP32[1050428 >> 2] | 0;
            HEAP32[1050428 >> 2] = 1048700;
            $4_1 = HEAP32[1050424 >> 2] | 0;
            HEAP32[1050424 >> 2] = 1;
            HEAP32[1050420 >> 2] = 0;
            label$13 : {
             if (!$4_1) {
              break label$13
             }
             FUNCTION_TABLE[HEAP32[$3_1 >> 2] | 0 | 0]($4_1);
             $5_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
             if (!$5_1) {
              break label$13
             }
             HEAP32[($3_1 + 8 | 0) >> 2] | 0;
             $40($4_1 | 0, $5_1 | 0);
            }
            global$0 = $0_1 + 32 | 0;
            break label$9;
           }
           HEAP32[($0_1 + 12 | 0) >> 2] = 1;
           HEAP32[($0_1 + 8 | 0) >> 2] = 1049824;
           i64toi32_i32$0 = 0;
           HEAP32[($0_1 + 20 | 0) >> 2] = 0;
           HEAP32[($0_1 + 24 | 0) >> 2] = i64toi32_i32$0;
           HEAP32[($0_1 + 16 | 0) >> 2] = 1049476;
           $24($0_1 + 8 | 0 | 0, 1049860 | 0);
           wasm2js_trap();
          }
          wasm2js_trap();
         }
         HEAP8[1050378 >> 0] = 3;
        case 2:
         global$0 = $1_1 + 32 | 0;
         break label$2;
        case 1:
         break label$4;
        case 0:
         break label$6;
        };
       }
       HEAP32[($1_1 + 12 | 0) >> 2] = 1;
       HEAP32[($1_1 + 8 | 0) >> 2] = 1048768;
       break label$3;
      }
      $43(1048916 | 0);
      wasm2js_trap();
     }
     HEAP32[($1_1 + 12 | 0) >> 2] = 1;
     HEAP32[($1_1 + 8 | 0) >> 2] = 1048832;
    }
    i64toi32_i32$0 = 0;
    HEAP32[($1_1 + 20 | 0) >> 2] = 0;
    HEAP32[($1_1 + 24 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($1_1 + 16 | 0) >> 2] = 1048776;
    $24($1_1 + 8 | 0 | 0, 1048684 | 0);
    wasm2js_trap();
   }
  }
  global$0 = $2_1 + 16 | 0;
 }
 
 function $54($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45_1 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45_1 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45_1 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, var$8$hi = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, var$7$hi = 0, $49_1 = 0, $63$hi = 0, $65 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37_1;
             if (var$2) {
              i64toi32_i32$1 = var$1$hi;
              var$3 = var$1;
              if (!var$3) {
               break label$11
              }
              i64toi32_i32$0 = var$3;
              i64toi32_i32$2 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$2 = 0;
               $38_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
              } else {
               i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               $38_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
              }
              var$4 = $38_1;
              if (!var$4) {
               break label$9
              }
              var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
              if (var$2 >>> 0 <= 31 >>> 0) {
               break label$8
              }
              break label$2;
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = i64toi32_i32$2;
             i64toi32_i32$1 = i64toi32_i32$2;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39_1;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40_1 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40_1;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $41_1;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43_1;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44_1;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      i64toi32_i32$2 = var$1$hi;
      i64toi32_i32$1 = var$1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      var$8 = i64toi32_i32$4;
      var$8$hi = i64toi32_i32$5;
      label$15 : while (1) {
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$2 = var$5;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        $45_1 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
        $45_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
       }
       $140 = $45_1;
       $140$hi = i64toi32_i32$1;
       i64toi32_i32$1 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = 0;
        $46_1 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        $46_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
       }
       $142$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $140$hi;
       i64toi32_i32$1 = $140;
       i64toi32_i32$5 = $142$hi;
       i64toi32_i32$0 = $46_1;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
       var$5$hi = i64toi32_i32$5;
       $144 = var$5;
       $144$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$2 = var$8;
       i64toi32_i32$1 = var$5$hi;
       i64toi32_i32$0 = var$5;
       i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
       i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
       i64toi32_i32$5 = i64toi32_i32$3;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
        $47_1 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        $47_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
       }
       var$6 = $47_1;
       var$6$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$2 = var$6$hi;
       i64toi32_i32$4 = var$6;
       i64toi32_i32$5 = var$1$hi;
       i64toi32_i32$0 = var$1;
       i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
       $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
       $151$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $144$hi;
       i64toi32_i32$2 = $144;
       i64toi32_i32$4 = $151$hi;
       i64toi32_i32$0 = $151;
       i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
       i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
       var$5 = i64toi32_i32$1;
       var$5$hi = i64toi32_i32$3;
       i64toi32_i32$3 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        $48_1 = 0;
       } else {
        i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
        $48_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
       }
       $154$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$7$hi;
       i64toi32_i32$2 = $154$hi;
       i64toi32_i32$3 = $48_1;
       i64toi32_i32$5 = var$7$hi;
       i64toi32_i32$0 = var$7;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
       var$0$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$6$hi;
       i64toi32_i32$2 = var$6;
       i64toi32_i32$3 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
       var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
       var$6$hi = i64toi32_i32$3;
       var$7 = var$6;
       var$7$hi = i64toi32_i32$3;
       var$2 = var$2 + -1 | 0;
       if (var$2) {
        continue label$15
       }
       break label$15;
      };
      break label$13;
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_popcnt_i32(var$0) {
  var$0 = var$0 | 0;
  var var$1 = 0, $5_1 = 0;
  label$1 : {
   label$2 : while (1) {
    $5_1 = var$1;
    if (!var$0) {
     break label$1
    }
    var$0 = var$0 & (var$0 - 1 | 0) | 0;
    var$1 = var$1 + 1 | 0;
    continue label$2;
   };
  }
  return $5_1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = [null, $54, $52, $52, $52, $45, $32, $8, $44, $54, $46, $54, $27, $20, $42, $15, $29, $18, $6, $47, $36, $54, $37, $19, $38, $28, $9, $14, $54, $35, $41, $33, $39, $54, $35];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "add": $51, 
  "init": $53, 
  "greet": $50, 
  "__wbindgen_free": $31, 
  "__wbindgen_malloc": $21, 
  "__wbindgen_realloc": $25, 
  "__wbindgen_start": $53
 };
}

var retasmFunc = asmFunc({
  "./wasm_bg.js": $_wasm_bg_js,
});
export var memory = retasmFunc.memory;
export var add = retasmFunc.add;
export var init = retasmFunc.init;
export var greet = retasmFunc.greet;
export var __wbindgen_free = retasmFunc.__wbindgen_free;
export var __wbindgen_malloc = retasmFunc.__wbindgen_malloc;
export var __wbindgen_realloc = retasmFunc.__wbindgen_realloc;
export var __wbindgen_start = retasmFunc.__wbindgen_start;
