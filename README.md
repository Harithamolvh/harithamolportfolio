# Harithamol — Crystal Glass Portfolio

A responsive Next.js App Router portfolio with a layered pastel light scene, an editorial avatar hero, glass skill tiles, a four-step process, project previews, count-up milestones, and contact details.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` for the production build and TypeScript checks, and `npm start` to serve it.

## Structure

- `src/app/page.tsx`: page composition and URL-driven overlay/filter state.
- `src/app/globals.css`: shared glass materials, typography tokens, focus styles, and legacy component styles.
- `src/app/portfolio.css`: mobile-first layouts, the fixed light scene, hero, and component animations.
- `src/components/CrystalCursorAura.tsx`: fixed scene with drifting orbs, seven repeating glass bubbles, blooms, streaks, and a translucent ring.
- `src/components/HeroSection.tsx`: introduction, primary resume button, avatar sphere, and freelance contact card with availability.
- `src/components/ProcessSection.tsx` and `StatsSection.tsx`: process lenses and existing portfolio metrics.
- `src/components/ProjectPreview.tsx`: clearly labeled illustrative UI previews, not production screenshots.
- `src/data/portfolioData.ts`: existing content, project facts, and career history.
- `src/data/presentationData.ts`: process copy and milestone presentation.
- `src/routes/`: pure destination lists; `qcRouter.config.ts` registers them with `@qubitcodes/qcrouter`.
- `src/lib/usePortfolioQuery.ts`: same-document query updates with Back/Forward support.
- `src/lib/useDialogAccessibility.ts`: focus trapping, Escape handling, scroll locking, and focus restoration.
- `src/app/api/contact/route.ts`: existing contact endpoint, unchanged by the visual redesign.

The project gallery retains the interactive tenant, SMS, payment concurrency, and service pipeline demonstrations. Architecture examples and the complete career timeline remain in expandable sections. Resume and plain-text resume views remain available.

## Visual system

The freelance contact card has a slow pearl/lilac shimmer masked to its border. Reduced-motion preferences keep the highlight static.

Portfolio prose uses `--portfolio-body-size`: 16px on mobile and 14px from 1024px, with medium weight and generous line spacing. Navigation and buttons use semibold 14–16px text, labels use 12–14px, and headings use 600–700 weight. Typography sizes use rem units where practical; cards and section headings wrap to accommodate larger text.

The supplied pearl-white, lilac, periwinkle, and violet CSS variables remain the palette source. The page keeps its luminous appearance across operating-system themes. Space Grotesk headings pair with Inter body text, with font fallbacks when Google Fonts is unavailable.

Use `glass-surface` for cards, `glass-inset` for nested controls, `glass-btn` for buttons, `glass-chip` for small labels, and `glass-input` for form fields. Selected states use `glass-selected`; overlays use `glass-dialog` and `glass-stationary`. Reflections sit behind content and cannot intercept pointer input.

The material uses 36px backdrop blur (42px on hover and 44px for compact navigation), a crisp inner top highlight, and a masked 1.5px pink-blue-lilac rim inspired by polished glass butterfly wings. The iridescent edge leaves the center transparent.

The viewport-fixed backdrop samples a full-page gradient as the user scrolls. Its decorative layer moves at 0.3 times scroll speed and seamlessly recycles an identical bubble arrangement. Color orbs drift over 23–30 seconds; sphere floats, staggered entrances, and count-ups run separately. Scroll updates are batched through requestAnimationFrame without React rerenders.

Reduced-motion preferences stop ambient animation, floating bubbles, parallax, section reveals, count-up animation, hover tilt, smooth scrolling, and confetti. Decorative layers are hidden from assistive technology. Inputs keep visible focus states and use 16px text on mobile.

## Shareable state

- `/?action=resume`: resume reader.
- `/?action=ats`: plain-text resume.
- `/?project=eazycart#projects`: expanded project and simulator.
- `/?category=Multi-Tenant%20SaaS#projects`: selected project category.
- `/?tech=PHP%208#projects`: selected technology.
- `/?work=all#projects`: complete project gallery.

Section destinations are named routes using ordinary fragment anchors, not hash-based application routing.

The resume reader opens as a centered, viewport-constrained dialog with internal scrolling, responsive toolbar actions, and a visible close control. Print styles remove the dialog's scrolling constraints.

## Hero portrait

The portrait uses the supplied Gemini video (`gemini_generated_video_542b82ef.mp4`), trimmed to 88 frames at 24 fps (3.67 seconds). Backgrounds were removed locally with U2Net, the 9:16 source was centered on a transparent 720x960 canvas to match the still portrait's scale, and the opening/closing frames blend into the original pose. The silent VP9 WebM with alpha lives at `public/hero-wave-clean.webm`, resolved through the `avatarWaveVideo` named route. The source video cropped the sides of the body; transparent padding preserves scale without inventing missing motion.

The still portrait and video share an SVG matte filter that trims three display pixels, softens the boundary, and neutralizes colour spill only along the narrow rim. Residual neutral backdrop pixels in the video arm/body gap were removed before the cleaned WebM export. The original artwork remains unchanged.

`WavingPortrait.tsx` plays once on hover, keyboard focus, or tap, then restores the original. It ignores duplicate triggers, stops on Escape/reduced motion/hidden tabs, and keeps the still portrait on download or decoding failure. A transparent-pixel check also falls back to the still on browsers that decode WebM without alpha. `HERO_WAVE_VIDEO.enabled` in `src/config/portrait.ts` controls activation. Playback and alpha were checked in desktop and touch-emulated Chrome; other browser engines have not been visually verified. Earlier sprite assets and generation prompts remain as unused source material.

The hero uses the approved stylized likeness of Harithamol, generated with the built-in image tool using `real-frames/Confident Smile in Satin Blazer.png` as the facial reference and the previous avatar as the style reference. The existing outfit, pose, lighting, transparent background, layout, and animation are retained.

The approved source is `public/hero-avatar-harithamol.png`. The website loads `public/hero-avatar-harithamol.webp`, optimized at quality 90 with full alpha quality, through the named `avatar` route. Both images are 1086 ? 1448. The former `public/hero-avatar.webp` remains available as a backup.

## Verification and existing backend limitation

The production build and TypeScript checks passed. Headless Chrome checks covered widths of 320, 390, 768, 1024, and 1440 pixels, horizontal overflow, mobile navigation, project filtering, browser-history restoration, resume dialog focus and Escape handling, ambient/parallax motion, and reduced-motion behavior. No browser runtime errors were observed.

The contact form was checked using a mocked response; no message was sent. Its existing backend validates and logs submissions but does not currently deliver email. Configure a delivery service before relying on this endpoint for inbound inquiries.
