# Product Addition Workflow - SAFE & TESTED

## ✅ Baseline Confirmed

**Current stable design:** Zen Stream-inspired dark minimal  
**Commit:** 87bd20b  
**Live URL:** https://publicworks.design  
**Status:** ✅ Verified working via browser screenshot

**Design features:**
- Dark background (#0a1410)
- Sierra panoramic background image
- "PUBLIC" (white) / "WORKS" (yellow #c5ff00)
- GIS coordinates (36.7783° N, 119.4179° W)
- Email waitlist signup
- Minimal, clean layout

---

## 📋 Adding Products - Step by Step

### Step 1: Upload Product Images ONLY
```bash
cd /Users/homebase/.openclaw/workspace/public-works/public/products
# Copy your images here
```

**Commit:**
```bash
git add public/products/
git commit -m "Add product images for [Product Name]"
git push origin main
```

**Test:** Verify images load at `https://publicworks.design/products/[filename]`

---

### Step 2: Create ONE Product Page
Create: `app/products/[slug]/page.tsx`

**Template:**
```tsx
'use client'

export default function ProductName() {
  return (
    <div className="min-h-screen bg-[#0a1410]">
      {/* Navigation matching homepage */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1410]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            PUBLIC <span className="text-[#c5ff00]">WORKS</span>
          </a>
        </div>
      </nav>

      {/* Product content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* YOUR PRODUCT PAGE HERE */}
        </div>
      </div>
    </div>
  )
}
```

**Commit:**
```bash
git add app/products/[slug]/
git commit -m "Add [Product Name] product page"
git push origin main
```

**Deploy:**
```bash
cd /Users/homebase/.openclaw/workspace/public-works
vercel --prod --yes
```

**Test immediately:** Visit `https://publicworks.design/products/[slug]`

---

### Step 3: Update Homepage Product Grid (OPTIONAL)
Only after Step 2 confirmed working!

Edit `app/page.tsx` - add product grid section BEFORE closing `</div>`

**Commit:**
```bash
git add app/page.tsx
git commit -m "Add product grid to homepage"
git push origin main
vercel --prod --yes
```

**Test:** Verify homepage still looks correct

---

## 🚨 Rules to Avoid Breaking Things

### ❌ DON'T:
- Delete or rename `app/page.tsx` (homepage)
- Modify `app/layout.js` navigation
- Add `/shop` or `/cart` pages yet (caused build errors)
- Make multiple changes at once
- Push without testing locally first
- Assume automatic GitHub→Vercel deployment works (use CLI)

### ✅ DO:
- Make ONE change at a time
- Commit after each change
- Deploy via `vercel --prod --yes` (don't rely on auto-deploy)
- Test with browser screenshot BEFORE moving to next step
- Keep product pages in `/app/products/[slug]/page.tsx`
- Match homepage color scheme: dark bg (#0a1410), yellow accent (#c5ff00)

---

## 🔧 Deployment Commands

**From public-works directory:**
```bash
# Check status
git status

# Stage changes
git add [files]

# Commit with clear message
git commit -m "Brief description of change"

# Push to GitHub
git push origin main

# Deploy to Vercel (ALWAYS use CLI for now)
vercel --prod --yes

# Wait 30 seconds, then verify
# Open in browser: https://publicworks.design
```

---

## 🐛 If Something Breaks

### Emergency Rollback
```bash
# Find last working commit
git log --oneline | head -10

# Reset to it (replace COMMIT_HASH)
git reset --hard COMMIT_HASH

# Force push
git push -f origin main

# Redeploy
vercel --prod --yes
```

**Known good commit:** 87bd20b (Zen Stream baseline)

---

## 📸 Always Verify with Browser

**Don't trust:**
- Build logs saying "success"  
- Web fetch text output
- Assumptions

**Do use:**
```
browser → open → screenshot → actual visual confirmation
```

---

## 🎯 Next Session Checklist

Before adding products:
1. Pull latest: `git pull origin main`
2. Verify baseline intact: `vercel ls` (check last deployment)
3. Test homepage live: Open in browser
4. Then proceed with Step 1 → Step 2 → Step 3

---

**Current status:** ✅ Clean baseline restored (Zen Stream design)  
**Ready for:** One-by-one product page additions  
**Deployment method:** Vercel CLI (`vercel --prod --yes`)

**Last updated:** 2026-03-01
