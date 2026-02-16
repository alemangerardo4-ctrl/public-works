const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const optimizedDir = path.join(__dirname, '../public/images-optimized');

// Create optimized directory
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));

async function resizeImages() {
  console.log(`Resizing ${files.length} images...\n`);
  
  let processed = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(imagesDir, file);
      const outputPath = path.join(optimizedDir, file);
      
      const metadata = await sharp(filePath).metadata();
      const isLandscape = metadata.width > metadata.height;
      
      // Resize based on orientation
      if (isLandscape) {
        // Landscape: 1600x1200px
        await sharp(filePath)
          .resize(1600, 1200, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
      } else {
        // Portrait: 1200x1600px
        await sharp(filePath)
          .resize(1200, 1600, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
      }
      
      processed++;
      if (processed % 20 === 0) {
        console.log(`Processed ${processed}/${files.length}...`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  console.log(`\n✅ Complete! Resized ${processed} images to ${optimizedDir}`);
}

resizeImages();
