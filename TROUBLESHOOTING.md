# Troubleshooting Guide

## NPM Installation Issues

### Common Warnings (Safe to Ignore)
The following warnings are normal for Create React App projects and don't affect functionality:
- Deprecation warnings for older packages
- Audit vulnerabilities in development dependencies
- EBUSY errors during audit fixes on Windows

### Quick Solutions

1. **If npm start fails:**
   ```bash
   # Delete node_modules and reinstall
   rmdir /s node_modules
   del package-lock.json
   npm install
   npm start
   ```

2. **If you get EBUSY errors:**
   - Close all file explorers and editors
   - Run PowerShell as Administrator
   - Try the installation again

3. **Alternative: Use Yarn instead of NPM:**
   ```bash
   npm install -g yarn
   yarn install
   yarn start
   ```

## Browser Issues

### Dashboard Not Loading
- Ensure you're navigating to `http://localhost:3000`
- Check that no other applications are using port 3000
- Try clearing browser cache

### Charts Not Displaying
- Ensure JavaScript is enabled in your browser
- Check browser console for any errors
- Try refreshing the page

## Development Issues

### Hot Reload Not Working
- Save files with Ctrl+S
- Ensure you're editing files in the src/ directory
- Check that the development server is still running

### Tailwind Styles Not Applied
- Ensure postcss.config.js and tailwind.config.js are in root directory
- Restart the development server
- Check that index.css imports are correct

## Production Build

### Build Errors
```bash
# Clean build
npm run build
```

### Deployment Issues
- Ensure all routes are configured for SPA
- Check that build files are served correctly
- Configure server for client-side routing

## Need Help?

If you encounter any issues not covered here:
1. Check the browser console for error messages
2. Ensure all dependencies are installed correctly
3. Try creating a fresh installation
4. Check that Node.js version is 14 or higher

The dashboard is designed to work out of the box, so most issues are related to environment setup rather than the code itself.
