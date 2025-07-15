# How to Import Your Code into a Git Repository

1. **Initialize Git in your project folder**
   Open a terminal in your project folder and run:
   ```bash
   git init
   ```

2. **Add a `.gitignore` file**
   Create a file named `.gitignore` in your project folder and add the following:
   ```gitignore
   # dependencies
   node_modules/

   # production
   .next/
   out/

   # sensitive files
   .env
   .env.local
   .env.production
   .env.development

   # system files
   .DS_Store
   Thumbs.db
   ```

3. **Add all files to Git**
   ```bash
   git add .
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Initial commit of SolarWinds Training Site"
   ```

5. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com)
   - Click **New Repository**
   - Name it (e.g., `solarwinds-training-site`)
   - Do NOT initialize with a README (you already have files locally)
   - Click **Create Repository**

6. **Link your local project to GitHub**
   Replace `YOUR_USERNAME` and `REPO_NAME` below with your GitHub details:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   ```

7. **Push your code to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

✅ Your code is now on GitHub with unnecessary files excluded! You can link this repository to Vercel for deployment.
