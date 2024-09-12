# React-Native Rust Wasm Integration

This project is a React Native app built using the Expo framework/platform. It serves as a minimal working example codebase for importing Rust code compiled with WebAssembly (Wasm) to React Native apps.

## Project High Level Overview

- Proof of concept app showcasing the integration of Rust Wasm with React Native.
- Utilizes the wasm2js tool to facilitate the import Wasm from React Native (see [this]https://rustwasm.github.io/wasm-bindgen/examples/wasm2js.html) example from wasm-bindgen documentation).
- Uses wasm-bindgen for the integration between Rust and JavaScript.
- Compiles the Rust Wasm code using wasm-pack.


## Getting Started

1. Ensure that you have all the necessary dependencies for React Native and Android SDK installed.
2. Run the `wasm/build.sh` script to recompile the Wasm code whenever needed (no hot reload for Wasm).
3. To first run the app, execute `sh wasm/build.sh` followed by `npx expo start`.


This project serves as a reference and example for those looking to port performance or security-critical parts of their code to Rust while maintaining a platform-agnostic design using WebAssembly (Wasm).

Please note that familiarity with React Native, Rust, and the Expo framework/platform is assumed.

For any questions or doubts, feel free to contact me on [LinkedIn](https://www.linkedin.com/in/luiz-henrique-salles-de-oliveira-mendon%C3%A7a-3963b928b/).

If you need assistance with similar projects, I offer freelancing services on [Fiverr](https://www.fiverr.com/luque_python).