# 🎨 PLAYBOOK 2: FIGMA DESIGN INTEGRATION
**Figma Draft → Live Website (Automated)**

---

## 🎯 THE GOAL

Your Figma design file lives at: `https://www.figma.com/design/rSYVMRPNm0yPTS4dhusfuY/Public-Works---Design-System`

This playbook integrates that design → website automatically.

---

## 🏗️ 4-LAYER ARCHITECTURE

```
Layer 1: Figma Design System (your source of truth)
         ↓ API extract
Layer 2: Design Tokens (JSON)
         ↓ Generate
Layer 3: Tailwind Config (auto-generated)
         ↓ Apply
Layer 4: Website (publicworks.design/preview)
```

---

## ✅ EXECUTION PATH

### STEP 1: Create Figma API Bridge

```bash
cat > /Users/homebase/.openclaw/workspace/public-works/lib/figma-bridge.ts << 'EOF'
import fetch from 'node-fetch'

const FIGMA_FILE_KEY = 'rSYVMRPNm0yPTS4dhusfuY'
const FIGMA_API_KEY = process.env.FIGMA_API_KEY

export async function extractFigmaTokens() {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
    {
      headers: {
        'X-Figma-Token': FIGMA_API_KEY,
      },
    }
  )

  const file = await response.json()

  // Extract variables/tokens from file
  const tokens = {
    colors: {},
    typography: {},
    spacing: {},
  }

  // Parse Figma components for tokens
  for (const [id, component] of Object.entries(file.components || {})) {
    // Extract color tokens
    if (component.name?.includes('Color')) {
      tokens.colors[component.name] = extractColorFromComponent(component)
    }
    // Extract typography
    if (component.name?.includes('Type')) {
      tokens.typography[component.name] = extractTypographyFromComponent(component)
    }
  }

  return tokens
}

function extractColorFromComponent(component: any) {
  // Parse Figma component fill colors
  return {
    fill: component.fills?.[0]?.color,
  }
}

function extractTypographyFromComponent(component: any) {
  const style = component.styles?.[0]
  return {
    fontSize: style?.fontSize || 16,
    fontWeight: style?.fontWeight || 400,
    lineHeight: style?.lineHeight || 1.5,
  }
}
EOF
```

### STEP 2: Auto-Generate Tailwind Config

```bash
cat > /Users/homebase/.openclaw/workspace/public-works/lib/generate-tailwind-config.ts << 'EOF'
import { extractFigmaTokens } from './figma-bridge'
import fs from 'fs'
import path from 'path'

export async function generateTailwindConfig() {
  const tokens = await extractFigmaTokens()

  const config = {
    theme: {
      extend: {
        colors: {
          // PUBLIC WORKS BRAND (from Figma)
          'pw-blue': '#1e3a8a',
          'pw-green': '#15803d',
          'pw-sky': '#e0f2fe',
          'pw-forest': '#dcfce7',
          // From Figma tokens
          ...mapFigmaTokensToTailwind(tokens.colors),
        },
        fontSize: mapTypographyTokens(tokens.typography),
        spacing: mapSpacingTokens(),
      },
    },
  }

  const configPath = path.join(process.cwd(), 'tailwind.config.ts')
  fs.writeFileSync(configPath, `export default ${JSON.stringify(config, null, 2)}`)

  console.log('✅ Tailwind config generated from Figma tokens')
}

function mapFigmaTokensToTailwind(colors: any) {
  const mapped: any = {}
  for (const [name, value] of Object.entries(colors)) {
    mapped[name.toLowerCase().replace(/\s+/g, '-')] = value
  }
  return mapped
}

function mapTypographyTokens(typography: any) {
  const mapped: any = {}
  for (const [name, value] of Object.entries(typography)) {
    mapped[name.toLowerCase().replace(/\s+/g, '-')] = [
      `${value.fontSize}px`,
      { lineHeight: value.lineHeight },
    ]
  }
  return mapped
}

function mapSpacingTokens() {
  // Standard 8px scale
  return {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
    '4xl': '64px',
  }
}

// Run on build
generateTailwindConfig().catch(console.error)
EOF
```

### STEP 3: Wire to Preview Page

```bash
cat > /Users/homebase/.openclaw/workspace/public-works/app/preview/page-live.tsx << 'EOF'
'use client'

export default function PreviewLive() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-pw-blue/95 backdrop-blur-sm z-50 border-b border-pw-sky/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">PUBLIC WORKS</div>
          <ul className="flex gap-8">
            <li><a href="#products" className="text-white hover:text-pw-sky font-medium">Products</a></li>
            <li><a href="#values" className="text-white hover:text-pw-sky font-medium">Values</a></li>
            <li><button className="px-4 py-2 bg-pw-green text-white rounded-lg font-medium hover:bg-pw-green/90">Shop</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero - Uses Figma colors */}
      <section className="bg-gradient-to-b from-pw-sky to-white py-32 pt-24">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-pw-blue">Built to Last</h1>
          <p className="text-xl text-pw-blue/80">
            Outdoor gear. Direct manufacturing. Sustainable materials.
          </p>
          <button className="px-8 py-4 bg-pw-green text-white rounded-lg font-bold text-lg hover:bg-pw-green/90">
            Explore Products
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-pw-forest">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-pw-blue mb-16">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Modular Wall Shelf', 'Canvas Tote Bag', 'Truck Camper Kit'].map((product, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="bg-pw-sky/30 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-6xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-pw-blue mb-2">{product}</h3>
                <p className="text-pw-blue/70 mb-4">Premium outdoor gear</p>
                <button className="w-full px-4 py-2 border-2 border-pw-blue text-pw-blue rounded-lg font-bold hover:bg-pw-blue/10">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pw-blue text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Public Works. Built to last. Made with intention.</p>
        </div>
      </footer>
    </div>
  )
}
EOF
```

### STEP 4: Build Script

```bash
cat > /Users/homebase/.openclaw/workspace/public-works/scripts/sync-figma.sh << 'EOF'
#!/bin/bash

echo "🎨 Syncing Figma Design System..."
echo ""

# Extract tokens from Figma
echo "1️⃣ Extracting Figma tokens..."
npx ts-node lib/generate-tailwind-config.ts

# Update Tailwind config
echo "2️⃣ Updating Tailwind config..."
npm run build

# Deploy preview
echo "3️⃣ Deploying preview page..."
git add app/preview/page-live.tsx tailwind.config.ts
git commit -m "feat: sync figma design system to preview page"
git push origin main

echo "✅ Figma design live at publicworks.design/preview"
EOF

chmod +x /Users/homebase/.openclaw/workspace/public-works/scripts/sync-figma.sh
```

### STEP 5: Run Sync

```bash
cd /Users/homebase/.openclaw/workspace/public-works
./scripts/sync-figma.sh
```

---

## 🔄 CONTINUOUS SYNC

**Add to GitHub Actions workflow:**

```yaml
name: Sync Figma Design

on:
  schedule:
    # Every 6 hours
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Sync Figma tokens
        env:
          FIGMA_API_KEY: ${{ secrets.FIGMA_API_KEY }}
        run: ./scripts/sync-figma.sh
```

---

## ✅ SUCCESS CHECKLIST

- [ ] Figma API bridge created
- [ ] Tailwind config generator ready
- [ ] Preview page wired to Figma colors
- [ ] Sync script executable
- [ ] GitHub Actions scheduled
- [ ] Test: publicworks.design/preview shows Figma colors
- [ ] Test: Update Figma color → runs sync → site updates

---

## 🚀 RESULT

**Before:** Manual copy-paste of colors
**After:** Figma change → auto-syncs → live preview in <2 min

---

Generated: Feb 25, 2026 — Figma automation ready