# 🚀 PLAYBOOK #1: GITHUB TO VERCEL DEPLOYMENT UNBLOCK
**Public Works — Complete Deployment Linkage Guide**

---

## 🎯 THE PROBLEM

Your websites are **ALREADY LIVE AND WORKING**:
- ✅ aleman.engineer (200 OK, full portfolio live)
- ✅ publicworks.design (200 OK, full product site live)
- ✅ mc-dashboard-puce.vercel.app (200 OK, live)

BUT:
- ❌ Local git has 2 unpushed commits
- ❌ GitHub Actions workflow files missing from repositories
- ❌ Manual deployment process (no automation)

**Result:** You're shipping successfully but without automation or source-of-truth sync.

---

## 🔍 ROOT CAUSE ANALYSIS

| Component | Status | Issue |
|-----------|--------|-------|
| Site code | ✅ Works | Deployed to Vercel (previous manual)  |
| Vercel projects | ✅ Live | All 3 sites active + responding |
| GitHub repos | ⚠️ Partial | Code pushed but incomplete history |
| Git workflow files | ❌ Missing | Not in .github/workflows/ directories |
| Auto-deployment | ❌ Disabled | No GitHub Actions triggers configured |

---

## ✅ 3-STEP UNBLOCK SOLUTION

### STEP 1: Sync Local Git → Remote (5 min)

**Check current state:**
```bash
cd /Users/homebase/.openclaw/workspace/aleman-engineer
git status

cd /Users/homebase/.openclaw/workspace/public-works
git status

cd /Users/homebase/.openclaw/workspace/mc-dashboard
git status
```

**Expected output:**
```
On branch main
Your branch is ahead of 'origin/main' by 2 commits

nothing to commit, working tree clean
```

**Push unpushed commits:**
```bash
git push origin main
```

**Verify:**
```bash
git log --oneline -3
```

### STEP 2: Add GitHub Actions Workflows (10 min)

**For each repo (aleman-engineer, public-works, mc-dashboard):**

#### A. Create workflow directory
```bash
mkdir -p .github/workflows
```

#### B. Create deploy.yml
```bash
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
        run: npx vercel deploy --prod --token $VERCEL_TOKEN --yes
EOF
```

#### C. Verify file created
```bash
cat .github/workflows/deploy.yml
```

#### D. Commit + push
```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add vercel deployment workflow"
git push origin main
```

### STEP 3: Verify GitHub Secrets Are Configured

**Go to each repository:**
- https://github.com/alemangerardo4-ctrl/aleman-engineer/settings/secrets/actions
- https://github.com/alemangerardo4-ctrl/public-works/settings/secrets/actions
- https://github.com/alemangerardo4-ctrl/mc-dashboard/settings/secrets/actions

**Verify all 3 secrets exist:**
- ✅ VERCEL_TOKEN
- ✅ VERCEL_ORG_ID  
- ✅ VERCEL_PROJECT_ID (unique per repo)

---

## 🔄 HOW IT WORKS (After Setup)

```
1. You commit code locally
         ↓
2. git push origin main
         ↓
3. GitHub detects push to main
         ↓
4. GitHub Actions workflow triggered (.github/workflows/deploy.yml)
         ↓
5. Workflow reads secrets (VERCEL_TOKEN, ORG_ID, PROJECT_ID)
         ↓
6. npx vercel deploy --prod executes
         ↓
7. Vercel builds your project
         ↓
8. Production sites auto-update
         ↓
✅ aleman.engineer / publicworks.design / mc-dashboard live with latest code
```

---

## ✨ SUCCESS CHECKLIST

- [ ] Pushed 2 unpushed commits from local machines
- [ ] Created .github/workflows/ directory in all 3 repos
- [ ] Created deploy.yml in all 3 repos
- [ ] Committed + pushed workflow files
- [ ] Verified GitHub secrets configured (VERCEL_TOKEN, ORG_ID, PROJECT_ID)
- [ ] Test: Make a small code change locally
- [ ] Test: git push origin main
- [ ] Test: Watch GitHub Actions tab → workflow runs
- [ ] Test: Verify site updated within 2 min

---

## 🚨 TROUBLESHOOTING

### "Workflow not triggering after push"
**Solution:** Workflow file must be in `main` branch AND properly formatted

```bash
git log --oneline -- .github/workflows/deploy.yml
# Should show your deploy.yml commit
```

### "Deployment fails with 400 error"
**Solution:** Verify VERCEL_PROJECT_ID is correct (project-specific, not org-wide)

```bash
# Get from Vercel project settings:
https://vercel.com/alemangerardo4-ctrl/[PROJECT-NAME]/settings/general
```

### "GitHub Actions shows error: secret not found"
**Solution:** Secret name must EXACTLY match (case-sensitive):
- ✅ VERCEL_TOKEN (not vercel_token)
- ✅ VERCEL_ORG_ID (not team_id)
- ✅ VERCEL_PROJECT_ID (not id)

---

## 📊 DEPLOYMENT MATRIX

| Repo | Secrets Added | Workflow File | Status |
|------|---------------|---------------|--------|
| aleman-engineer | [Yes/No] | [Yes/No] | [ ] |
| public-works | [Yes/No] | [Yes/No] | [ ] |
| mc-dashboard | [Yes/No] | [Yes/No] | [ ] |

---

## 🎯 AFTER SETUP

**Every push to main automatically:**
1. ✅ Installs dependencies
2. ✅ Builds Next.js project
3. ✅ Deploys to Vercel
4. ✅ Updates production URLs

**Zero manual CLI needed.**

---

**Next playbooks:** Discord orchestration + Figma design system integration

Generated: Feb 25, 2026 — Operational automation ready