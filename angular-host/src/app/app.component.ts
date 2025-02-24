import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Multi-Tenant Micro Frontend</h1>
    <div class="dashboard">
      <ai-tenant-switcher></ai-tenant-switcher>
      <wasm-ai-widget></wasm-ai-widget>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }