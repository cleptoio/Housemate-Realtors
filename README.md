# 🏠 Housemate Realtors

**Enterprise-grade real estate website for Pune's premier property consultancy.**

> Buy · Sell · Rent · Interior Design · Society Redevelopment

[![Live Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)]()
[![RERA](https://img.shields.io/badge/RERA-Registered-C8A456?style=flat-square)]()
[![Built by Clepto.io](https://img.shields.io/badge/Built%20by-Clepto.io-0B1D3A?style=flat-square)](https://clepto.io)

---

## ✨ Features

- **Luxury Design** — Navy `#0B1D3A` + Gold `#C8A456` palette with Playfair Display typography
- **4 Premium Pages** — Home, Services, About, Contact
- **Scroll Animations** — IntersectionObserver-based reveal effects with staggered delays
- **Animated Counters** — Stats that count up on scroll (500+ properties, 1200+ clients)
- **Parallax Hero** — Full-viewport hero section with Pune cityscape
- **WhatsApp Integration** — Floating button on every page + smart form → WhatsApp redirect
- **Mobile-First Responsive** — Breakpoints for mobile, tablet, and desktop
- **SEO Optimized** — Meta tags, schema markup (RealEstateAgent, FAQPage), semantic HTML
- **RERA Trust Signals** — Badges and compliance messaging throughout
- **No Framework** — Pure HTML/CSS/JS, zero dependencies, instant load

## 📁 Project Structure

```
├── index.html              # Home — Hero, stats, services, properties, testimonials
├── services.html           # Services — Buy/sell, rentals, interior, redevelopment
├── about.html              # About — Story, values, team, mission
├── contact.html            # Contact — Smart form, FAQ, Google Maps
├── css/
│   └── styles.css          # Complete design system (900+ lines)
├── js/
│   └── main.js             # Interactions & animations
└── assets/
    └── images/             # AI-generated hero & section images
```

## 🚀 Quick Start

Simply open `index.html` in your browser — no build step required.

Or serve locally:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then visit `http://localhost:8080`

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#0B1D3A` | Primary backgrounds |
| `--gold` | `#C8A456` | Accents, CTAs, highlights |
| `--cream` | `#F8F5F0` | Alternate section backgrounds |
| `--font-heading` | Playfair Display | All headings |
| `--font-body` | Inter | Body text, UI elements |

## 📱 Pages Overview

| Page | Sections |
|------|----------|
| **Home** | Hero, Stats Bar, Services Grid, Featured Properties, Trust Section, Neighborhoods, Testimonials, CTA |
| **Services** | Buy & Sell, Rentals, Interior Design, Redevelopment (each with feature lists + process timelines) |
| **About** | Company Story, Core Values, Team, Mission Statement |
| **Contact** | Smart Form, Info Cards, Google Maps, FAQ (with schema markup) |

## 🔧 Customization

Before deploying, replace the following placeholders with real client data:

| Placeholder | Replace With |
|-------------|-------------|
| `+91 81493 88788` | Client's phone number |
| `info@housematerealtors.com` | Client's email |
| `Pune, Maharashtra 411045` | Exact office address |
| WhatsApp `918149388788` | Client's WhatsApp number |
| Team photos/names | Real headshots and names |
| Property listings | Real property data and photos |
| Client testimonials | Real testimonials |
| Social media `#` links | Real Instagram/Facebook/LinkedIn URLs |

## 🌐 Deployment Options

| Option | Steps |
|--------|-------|
| **Cloudflare Pages** (recommended) | Push to GitHub → Connect repo → Auto-deploy |
| **Hostinger** | Upload files to `public_html` via File Manager |
| **GoDaddy cPanel** | Upload to `public_html`, point DNS |
| **Netlify** | Drag & drop the folder, connect custom domain |

## 📊 SEO

- Unique `<title>` and `<meta description>` per page
- `RealEstateAgent` schema on home page
- `FAQPage` schema on contact page
- Semantic HTML5 with proper heading hierarchy
- Alt text on all images

---

**Built with ♥ by [Clepto.io](https://clepto.io)**