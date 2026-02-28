# QA Checklist - Product Deployment Workflow

## Pre-Deployment Checks

- [ ] Product images copied to `/public/products/`
- [ ] Product page created at `/app/products/[product-slug]/page.tsx`
- [ ] All images referenced correctly in code
- [ ] Pricing, descriptions, and specs finalized
- [ ] Git commit with clear message
- [ ] Push to `main` branch

## Post-Deployment Verification

### Timing
- Wait **2-5 minutes** after git push for Vercel to build and deploy
- Check Vercel dashboard for deployment status (if available)

### Live URL Tests
1. **Product page loads:** `https://publicworks.design/products/[slug]`
   - Expected: Product page renders with images
   - If 404: Wait longer or check Vercel deployment logs

2. **Images load correctly**
   - All product images display (no broken images)
   - Thumbnails clickable and switch main image

3. **Interactions work**
   - Color/finish selector changes selection
   - Quantity +/- buttons work
   - Add to Cart button present (functional when integrated)

4. **Mobile responsiveness**
   - Test on mobile viewport
   - Images scale correctly
   - Text readable, no horizontal scroll

5. **Navigation**
   - "Public Works" logo links to home
   - "All Products" link works

## Known Issues & Fixes

### Issue: 404 on new product pages
**Cause:** Vercel deployment not complete, or build cache
**Fix:** 
- Wait 2-5 min after push
- Check git commit was successful
- Verify files exist in repo on GitHub
- Force refresh browser (Cmd+Shift+R)
- Check Vercel deployment dashboard

### Issue: Images not loading
**Cause:** Incorrect path or file not in `/public/products/`
**Fix:**
- Verify file exists: `ls -la public/products/`
- Check path in code matches filename exactly
- Ensure images were committed and pushed

### Issue: Generic site title instead of product page
**Cause:** Next.js serving cached/old build
**Fix:**
- Wait for Vercel deployment to complete
- Check deployment time in Vercel dashboard
- Try different product URL to test if routing works

## Production URLs

- **Home:** https://publicworks.design
- **Steel Shelf:** https://publicworks.design/products/steel-shelf
- **Frame Tote:** https://publicworks.design/products/frame-tote

## Vercel Deployment

- **Repo:** https://github.com/alemangerardo4-ctrl/public-works
- **Branch:** main
- **Auto-deploy:** Enabled (pushes to main trigger deployment)
- **Build time:** ~1-3 minutes
- **Domain:** publicworks.design

## Quality Standards

- ✅ All images high quality, properly compressed
- ✅ Product descriptions clear and compelling
- ✅ Transparent pricing breakdown shown
- ✅ Technical specs accurate
- ✅ Mobile-friendly layout
- ✅ Fast load times (<3s)

## Next Steps After QA Pass

1. Share product URL with stakeholders
2. Test checkout flow (when integrated)
3. Monitor analytics for engagement
4. Gather user feedback
5. Iterate on design/copy as needed
