# 🚀 PLAYBOOK 1: DEPLOYMENT ARCHITECTURE
**Coming Soon Page Swap + Live Production**

---

## 🎯 THE MOVE

Your current production sites are beautiful and live. Now you want minimal "coming soon" pages as the public face. This playbook shows HOW to swap them without losing your full sites.

**Architecture:**
```
publicworks.design/     → Coming soon page (public)
publicworks.design/full → Full product site (internal)

aleman.engineer/        → Coming soon page (public)
aleman.engineer/full    → Full portfolio (internal)
```

---

## ✅ 3-STEP EXECUTION

### STEP 1: Create Coming Soon Pages (Local)

**For public-works:**

```bash
cat > /Users/homebase/.openclaw/workspace/public-works/app/coming-soon/page.tsx << 'EOF'
'use client'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 flex items-center justify-center">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          PUBLIC WORKS
        </h1>
        <p className="text-2xl text-blue-200 mb-8">
          Outdoor Gear Built to Last
        </p>
        <p className="text-lg text-blue-100 mb-12">
          We're nearly ready. Launching spring 2026.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <input
            type="email"
            placeholder="Get notified"
            className="px-6 py-3 rounded-lg w-full max-w-xs bg-white text-gray-900 placeholder-gray-600"
          />
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition">
            Notify
          </button>
        </div>
        <div className="text-blue-300 text-sm space-y-2">
          <p>📧 hello@publicworks.design</p>
          <p>🔗 <a href="/full" className="underline hover:text-white">View full site</a></p>
        </div>
      </div>
    </div>
  )
}
EOF
```

**For aleman-engineer:**

```bash
cat > /Users/homebase/.openclaw/workspace/aleman-engineer/app/coming-soon/page.tsx << 'EOF'
'use client'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          GERARDO ALEMAN
        </h1>
        <p className="text-2xl text-slate-300 mb-8">
          Mechanical Design Engineer
        </p>
        <p className="text-lg text-slate-400 mb-12">
          Portfolio launching spring 2026. Mechanical design. Aerospace. Creative.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <input
            type="email"
            placeholder="Notify me"
            className="px-6 py-3 rounded-lg w-full max-w-xs bg-white text-gray-900 placeholder-gray-600"
          />
          <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition">
            Notify
          </button>
        </div>
        <div className="text-slate-400 text-sm space-y-2">
          <p>📧 hello@aleman.engineer</p>
          <p>🔗 <a href="/full" className="underline hover:text-white">View full portfolio</a></p>
        </div>
      </div>
    </div>
  )
}
EOF
```

### STEP 2: Route Management (Next.js)

**Update public-works layout routing:**

```bash
cat > /Users/homebase/.openclaw/workspace/public-works/app/layout-router.ts << 'EOF'
// Route: / → coming soon
// Route: /full → full product site
// Route: /preview → preview new design

export const publicRoutes = {
  '/': 'coming-soon',
  '/full': 'index',
  '/preview': 'preview',
  '/products': 'full-products',
}
EOF
```

**Update aleman-engineer layout routing:**

```bash
cat > /Users/homebase/.openclaw/workspace/aleman-engineer/app/layout-router.ts << 'EOF'
// Route: / → coming soon
// Route: /full → full portfolio
// Route: /work → full work section
// Route: /about → full about

export const publicRoutes = {
  '/': 'coming-soon',
  '/full': 'index',
  '/work': 'work',
  '/about': 'about',
}
EOF
```

### STEP 3: Deploy + Swap

**Commit coming soon pages:**

```bash
cd /Users/homebase/.openclaw/workspace/public-works
git add app/coming-soon/page.tsx
git commit -m "feat: add coming soon page (spring 2026 launch)"
git push origin main

cd /Users/homebase/.openclaw/workspace/aleman-engineer
git add app/coming-soon/page.tsx
git commit -m "feat: add coming soon page (spring 2026 launch)"
git push origin main
```

**Verify Vercel deployment:**

```bash
# Check public-works
curl https://publicworks.design/ | grep -i "Public Works" | head -1

# Check aleman-engineer  
curl https://aleman.engineer/ | grep -i "Gerardo" | head -1
```

---

## 🎛️ FALLBACK ROUTES (Keep Full Sites Accessible)

Users can still access full sites:
- `publicworks.design/full` → Full product site
- `publicworks.design/preview` → Design preview (Figma draft)
- `aleman.engineer/full` → Full portfolio
- `aleman.engineer/about` → About page

---

## 📊 DNS ARCHITECTURE

No DNS changes needed. Vercel handles routing:

```
publicworks.design → Vercel (public: coming soon, /full: product site)
aleman.engineer → Vercel (public: coming soon, /full: portfolio)
mc-dashboard-puce.vercel.app → MC Dashboard (live)
```

---

## ✅ SUCCESS CHECKLIST

- [ ] Coming soon pages created locally (both repos)
- [ ] Routes configured
- [ ] Committed to git
- [ ] Pushed to main
- [ ] GitHub Actions auto-deploy triggered
- [ ] Verify: publicworks.design shows coming soon
- [ ] Verify: publicworks.design/full shows full site
- [ ] Verify: aleman.engineer shows coming soon
- [ ] Verify: aleman.engineer/full shows portfolio

---

## 🚀 NEXT STEPS

Once coming soon pages live:
1. **Playbook 2:** Figma design → integrate to /preview route
2. **Playbook 3:** Discord webhooks (notify on launches)
3. **Playbook 4:** Email signup → notification system

---

**Timeline:** 15 minutes to execute
**Rollback:** Simple git revert if needed
**Result:** Public-facing coming soon + internal full sites preserved

Generated: Feb 25, 2026 — Execution ready