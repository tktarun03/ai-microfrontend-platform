import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'ai-tenant-switcher',
  styleUrl: 'ai-tenant-switcher.css',
  shadow: true
})
export class AITenantSwitcher {
  @State() tenants = ["Finance", "Retail", "Healthcare"];
  @State() selectedTenant = "Finance";

  switchTenant(tenant: string) {
    this.selectedTenant = tenant;
  }

  render() {
    return (
      <div class="tenant-widget">
        <h2>AI Tenant Selector</h2>
        {this.tenants.map(tenant => (
          <button onClick={() => this.switchTenant(tenant)}>{tenant}</button>
        ))}
        <p>Current Tenant: {this.selectedTenant}</p>
      </div>
    );
  }
}
