const fs = require('fs');
const path = require('path');

// Create custom install script
console.log('Setting up deployment environment...');

// Copy vercel-package.json to package.json to override peer dependencies
fs.copyFileSync('vercel-package.json', 'package.json');

console.log('Setup complete! Ready for build.');
