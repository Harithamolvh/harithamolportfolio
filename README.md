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
- `src/components/HeroSection.tsx`: introduction, avatar sphere, and philosophy card.
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

## Avatar asset and generation prompt

The built-in image-generation tool created the fictional illustrative avatar. It is not a likeness of Harithamol. The transparent, optimized asset is saved at `public/hero-avatar.webp` (approximately 145 KB). The original generated PNG is retained in the tool's generated-images directory.

Prompt used:

> Create a premium stylized 3D character asset for a web developer portfolio. A fictional adult woman developer, waist-up, centered, three-quarter pose turned slightly right looking toward viewer, warm medium-brown skin, dark shoulder-length gently wavy hair, round understated thin crystal-clear glasses, softly confident smile, wearing a sculptural pearl-white blazer over a lavender top, arms relaxed loosely folded at waist. Sophisticated editorial 3D sculpture rendering, realistic materials but clearly stylized avatar rather than photograph of a real person. Lavender and cool-blue studio rim lighting, very soft pink highlights, luminous refined finish. Entire head and shoulders fully in frame with breathing room above, lower torso at bottom, portrait 3:4 composition. Genuine transparent alpha background, isolated cutout. No circle, no orb, no backdrop, no text, no logos, no props. Asset will be placed by CSS inside a transparent crystal sphere.

Replace this asset with an authorized personal portrait when available; the sphere and all lighting effects remain independent CSS layers.

## Verification and existing backend limitation

The production build and TypeScript checks passed. Headless Chrome checks covered widths of 320, 390, 768, 1024, and 1440 pixels, horizontal overflow, mobile navigation, project filtering, browser-history restoration, resume dialog focus and Escape handling, ambient/parallax motion, and reduced-motion behavior. No browser runtime errors were observed.

The contact form was checked using a mocked response; no message was sent. Its existing backend validates and logs submissions but does not currently deliver email. Configure a delivery service before relying on this endpoint for inbound inquiries.
