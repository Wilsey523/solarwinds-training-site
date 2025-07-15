# SolarWinds Training Site

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

[![Preview](docs/solarwinds-training-site-preview.gif)](https://solarwinds-training-site.vercel.app)

[👉 **Live Demo**](https://solarwinds-training-site.vercel.app) | [📂 **View on GitHub**](https://github.com/YOUR_USERNAME/solarwinds-training-site)

This project is a web-based platform that allows users to learn how to operate and work with the SolarWinds GUI. It includes free tutorials, premium content behind a Stripe payment wall, and an admin panel for uploading new video tutorials.

## Features

- 🎥 **Free Tutorials**: Publicly available SolarWinds training videos.
- 🔒 **Premium Content**: Locked advanced lessons and certifications available after payment.
- 💳 **Stripe Integration**: Secure payments to unlock premium content.
- 📂 **Admin Upload Panel**: Allows admins to upload new videos directly through the website.
- 🌐 **Deployed with Vercel**: Quick and easy hosting.

## Getting Started

### Prerequisites
- Node.js and npm installed.
- A Stripe account for payment integration.
- GitHub account for deployment.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/solarwinds-training-site.git
   cd solarwinds-training-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your Stripe keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment
This project is ready to deploy on [Vercel](https://vercel.com):

- Push your code to GitHub.
- Connect the repository to Vercel.
- Set the environment variables in the Vercel dashboard.
- Deploy!

## Admin Panel
- Navigate to the admin section to upload new videos.
- Videos uploaded will automatically appear in the free content list.

## Adding a Preview Image or GIF
1. Create a folder named `docs/` in your project root.
2. Use a screen recording tool to create a short GIF or video preview:
   - On Mac: use **QuickTime Player** or **ScreenFlow**.
   - On Windows: use **Xbox Game Bar (Win+G)** or **ShareX**.
   - Convert your recording to GIF using [ezgif.com](https://ezgif.com/video-to-gif) or export directly as GIF.
3. Save the file in `docs/` as `solarwinds-training-site-preview.gif`.
4. Commit and push the change to GitHub:
   ```bash
   git add docs/solarwinds-training-site-preview.gif
   git commit -m "Add preview GIF"
   git push
   ```

This ensures the preview renders properly on GitHub.

## License
This project is licensed under the MIT License.

---

✅ Your SolarWinds Training Site is now ready to share and grow.
