const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));

async function analyzeImages() {
  console.log(`Analyzing ${files.length} images...\n`);
  
  const results = [];
  
  for (const file of files) {
    try {
      const filePath = path.join(imagesDir, file);
      const metadata = await sharp(filePath).metadata();
      results.push({
        file,
        width: metadata.width,
        height: metadata.height,
        orientation: metadata.width > metadata.height ? 'landscape' : 'portrait',
        aspectRatio: (metadata.width / metadata.height).toFixed(2)
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  // Group by orientation
  const landscape = results.filter(r => r.orientation === 'landscape');
  const portrait = results.filter(r => r.orientation === 'portrait');
  
  console.log(`Landscape: ${landscape.length}`);
  console.log(`Portrait: ${portrait.length}`);
  console.log(`\nSample landscape dimensions:`);
  landscape.slice(0, 5).forEach(r => {
    console.log(`  ${r.file}: ${r.width}x${r.height} (ratio: ${r.aspectRatio})`);
  });
  console.log(`\nSample portrait dimensions:`);
  portrait.slice(0, 5).forEach(r => {
    console.log(`  ${r.file}: ${r.width}x${r.height} (ratio: ${r.aspectRatio})`);
  });
  
  // Save results
  fs.writeFileSync(
    path.join(__dirname, 'image-analysis.json'),
    JSON.stringify({ landscape, portrait }, null, 2)
  );
  console.log(`\nResults saved to image-analysis.json`);
}

analyzeImages();
