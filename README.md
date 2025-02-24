# ai-microfrontend-platform

A futuristic AI-driven multi-tenant micro frontend platform using Angular, Stencil, and WebAssembly.

## 🚀 Features
- **Multi-Tenant AI Micro Frontend** powered by **Angular & Stencil**.
- AI-driven **Tenant Switching** UI.
- **WebAssembly AI-powered prediction module** integrated with the frontend.
- Designed for futuristic enterprise applications.

## 📂 Project Structure
```
ai-microfrontend-platform/
│── stencil-microfrontend/  # Stencil-powered micro frontends
│   ├── src/components/ai-tenant-switcher/  # AI tenant selection
│   ├── stencil.config.ts  # Stencil configuration
│── angular-host/  # Angular host for micro frontend
│   ├── src/app/  # Angular app with AI integration
│   ├── package.json  # Angular dependencies
│── wasm-ai-widget/  # WebAssembly AI module (Rust-based)
│   ├── src/main.rs  # AI prediction logic
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-microfrontend-platform.git
   cd ai-microfrontend-platform
   ```

2. Install dependencies and build Stencil micro frontend:
   ```bash
   cd stencil-microfrontend
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-host
   npm install
   npm start
   ```

4. Compile the WebAssembly AI module:
   ```bash
   cd ../wasm-ai-widget
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered multi-tenant switching.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & Micro Frontend Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered micro frontends.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
