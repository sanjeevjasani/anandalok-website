# Code Audit Report
**Project:** Anandalok Website
**Date:** 2026-04-01
**Languages detected:** JavaScript/JSX (React 19, Next.js 16 App Router), CSS
**Files reviewed:** 36 source files / 45 total (9 excluded: images, lock files, generated assets)
**Coverage:** Full — all JSX/JS/CSS source files read

---

## Overall Score: 5.5/10

| Dimension | Score | Summary |
|-----------|-------|---------|
| Dead Code | 6/10 | `src/App.css` (full Vite template, 185 lines), two unused deps (`react-router-dom`, `@gsap/react`), one unused hook and dead imports in `StoriesPage.jsx` |
| Coding Standards | 5/10 | Scroll-animation GSAP setup is copy-pasted verbatim in 7 page components; `StoriesPage.jsx` conflates listing and detail view in one 384-line component; contact and newsletter forms silently discard user input |
| Correctness & Bugs | 5/10 | `document.body.style.overflow = 'hidden'` is never reset on navigation away from an open lightbox; `setTimeout` inside `CardTypewriter` setInterval is not cleared on unmount; `ScrollTrigger.create()` in `Impact.jsx` leaks on unmount |
| Security & Performance | 6/10 | No security vulnerabilities; all 30+ images use raw `<img>` instead of Next.js `<Image>`, missing lazy loading and WebP conversion; Google Maps embed contains placeholder coordinates |

---

## Findings

Severity: 🔴 High | 🟡 Medium | 🟢 Low

### Dead Code

- 🔴 [src/App.css:1](src/App.css) Entire file is a Vite scaffold artifact (`.counter`, `.hero`, `.vite`, `.framework` styles) not referenced anywhere in the Next.js codebase → Delete the file entirely; it is never imported.
- 🟡 [package.json:19](package.json) `react-router-dom` is listed as a dependency but zero files import from it; all routing uses Next.js `Link` and `usePathname`/`useParams` from `next/navigation` → Remove from `dependencies`.
- 🟡 [package.json:13](package.json) `@gsap/react` is listed as a dependency but `useGSAP` is never imported; all components use `gsap` directly → Remove from `dependencies`.
- 🟡 [package.json:26](package.json) `@vitejs/plugin-react` is a dev dependency from the original Vite scaffold; the project builds with Next.js, not Vite → Remove from `devDependencies`.
- 🟡 [src/components/StoriesPage.jsx:170](src/components/StoriesPage.jsx) `const router = useRouter()` is declared but `router` is never called anywhere in the component → Remove the declaration and the `useRouter` import.
- 🟢 [src/components/StoriesPage.jsx:4](src/components/StoriesPage.jsx) `ChevronRight` and `MessageSquare` are imported from `lucide-react` but never rendered → Remove both from the import statement.
- 🟢 [src/assets/react.svg](src/assets/react.svg) and [src/assets/vite.svg](src/assets/vite.svg) are Vite scaffold assets not referenced in any Next.js component → Delete both files.
- 🟢 [tailwind.config.js:4](tailwind.config.js) `"./index.html"` is in the Tailwind `content` array; Next.js has no root `index.html` → Remove that entry.

### Coding Standards

- 🟡 [src/components/AboutPage.jsx:39](src/components/AboutPage.jsx) The same 15-line GSAP scroll-animation setup block (`gsap.from('.hero-elem')` + `gsap.utils.toArray('.scroll-animate').forEach(...)`) is copy-pasted verbatim in 7 page components: `AboutPage`, `AdmissionPage`, `ContactPage`, `DonatePage`, `GalleryPage`, `GetInvolvedPage`, and `StoriesPage` → Extract into a custom hook `useScrollAnimations(heroClass)` and call it from each page.
- 🟡 [src/components/StoriesPage.jsx:1](src/components/StoriesPage.jsx) `StoriesPage` handles both listing and detail views via an `if (slug && currentStory)` branch, making it a 384-line dual-purpose component; the detail logic belongs in `src/app/stories/[slug]/page.jsx` as its own component → Split into `StoriesPage.jsx` (listing only) and `StoryDetailPage.jsx` (detail only).
- 🟡 [src/components/ContactPage.jsx:73](src/components/ContactPage.jsx) `handleSubmit` sets `formSubmitted = true` but never sends data anywhere ("// Simulate form submission"); user messages are silently discarded → Integrate a real form endpoint (e.g. Formspree, Netlify Forms, or a Next.js API route).
- 🟡 [src/components/StoriesPage.jsx:362](src/components/StoriesPage.jsx) Newsletter form's `onSubmit` only calls `e.preventDefault()`; email addresses are discarded → Connect to a mailing list API or mark as coming soon.
- 🟢 `gsap.registerPlugin(ScrollTrigger)` is called at module level in 13 separate files → Call it once in a shared `lib/gsap.js` module and import from there.
- 🟢 [src/components/AdmissionPage.jsx:143](src/components/AdmissionPage.jsx) Both "Download Form" buttons use `href="#"`, meaning they scroll to the top and provide no form → Either link to a real PDF or disable with a "Coming Soon" note.

### Correctness & Bugs

- 🔴 [src/components/Gallery.jsx:48](src/components/Gallery.jsx) `document.body.style.overflow = 'hidden'` is set when the lightbox opens. If the user navigates away using the Back button or a Next.js `<Link>` while the lightbox is open, `closeLightbox` is never called and `overflow: hidden` permanently disables page scrolling until a full reload → Add a cleanup in the component's unmount effect: `useEffect(() => { return () => { document.body.style.overflow = 'auto'; }; }, [])`.
- 🔴 [src/components/DonatePage.jsx:152](src/components/DonatePage.jsx) and [src/components/DonatePage.jsx:305](src/components/DonatePage.jsx) Two "Donate Now" buttons are plain `<button>` elements with no `onClick` handler and no `type="submit"` inside a form. Clicking them does nothing → Either link to the bank details section (`<a href="#bank-details">`) or implement a payment gateway click handler.
- 🟡 [src/components/Impact.jsx:14](src/components/Impact.jsx) `ScrollTrigger.create()` inside `useEffect` has no cleanup return. Each `StatItem` mount creates a persisted trigger that is never killed when the component unmounts, causing accumulation on hot-reloads or repeated navigation → Return a cleanup: `return () => trigger.kill()` where `trigger` is the return value of `ScrollTrigger.create(...)`.
- 🟡 [src/components/Features.jsx:66](src/components/Features.jsx) Inside `CardTypewriter`, a `setTimeout` is created inside the `setInterval` callback at line 74. The `useEffect` cleanup on line 78 calls `clearInterval` but does not cancel the pending `setTimeout`. If the component unmounts while the timeout is pending, it calls `setText('')` on an unmounted component → Capture the timeout ID and cancel it in the cleanup function.
- 🟡 [src/components/Protocol.jsx:94](src/components/Protocol.jsx) `pin: window.innerWidth > 768` evaluates at mount time and does not re-evaluate on window resize; a user resizing from desktop to narrow viewport after initial load will have stuck scroll-pin behavior → Use a ResizeObserver or recalculate via a `resize` event listener, or use a CSS media query pin alternative.
- 🟢 [src/components/StoriesPage.jsx:222](src/components/StoriesPage.jsx) Local image paths like `/rushadru_official.jpg` have Unsplash query parameters appended: `src={currentStory.image}?q=100&w=2600`. Next.js static files ignore query strings; the parameters have no effect → Remove the string concatenation for paths that don't start with `http`.

### Security & Performance

- 🟡 [src/components/Hero.jsx:31](src/components/Hero.jsx) and all other image-rendering components — all images use raw `<img>` tags. The project never uses Next.js `<Image>` (`next/image`), forgoing automatic lazy loading, WebP/AVIF conversion, and layout-shift prevention. The hero image is above-the-fold and loads immediately as a large JPEG with no size hints → Replace `<img>` with `<Image>` from `next/image` throughout, especially for LCP candidates (`/hero.jpg`, `/campus*.jpg`).
- 🟡 [src/components/ContactPage.jsx:303](src/components/ContactPage.jsx) The embedded Google Maps `<iframe>` uses placeholder coordinates (`3d22.7`, `2d88.467`) that point to a generic spot near Kolkata, not the actual campus address → Replace with real coordinates for Badu Road, Madhyamgram, or use a static map image.
- 🟡 [src/components/StoriesPage.jsx:256](src/components/StoriesPage.jsx) `navigator.clipboard.writeText(window.location.href)` is called synchronously in an `onClick` without a `.catch()`. The Clipboard API requires a secure context (HTTPS) and `clipboard-write` permission; the rejected promise surfaces as an unhandled error in unsupported or HTTP contexts → Wrap in `try/catch` or `.catch(err => console.warn(err))`.
- 🟢 [src/app/layout.jsx:26](src/app/layout.jsx) and [src/app/globals.css:13](src/app/globals.css) — A noise overlay is applied twice: once via `body::before` in CSS (`opacity: 0.05`) and once via a fixed `<div>` in JSX (`opacity-[0.03]`). The combined effect doubles compositing work on every frame → Remove one; the CSS pseudo-element approach in `globals.css` is sufficient.
- 🟢 [src/components/AboutPage.jsx:64](src/components/AboutPage.jsx), [AdmissionPage.jsx:76](src/components/AdmissionPage.jsx), [Origin.jsx:64](src/components/Origin.jsx), [Philosophy.jsx:44](src/components/Philosophy.jsx) — Four hero images are sourced from Unsplash CDN URLs. External image URLs create a dependency on a third-party CDN; if Unsplash changes the URL schema or the image is removed, sections will show broken images → Download and host locally in `public/`, as done for all other assets.

---

## Recommendations

Sorted by impact — High before Medium before Low.

| # | Change | Severity | Expected Outcome |
|---|--------|----------|-----------------|
| 1 | Fix `document.body.style.overflow` leak in `Gallery.jsx` and `GalleryPage.jsx` — add unmount cleanup | High | Eliminates permanent scroll breakage on navigation from open lightbox |
| 2 | Wire up or remove the two non-functional "Donate Now" buttons in `DonatePage.jsx:152` and `DonatePage.jsx:305` | High | Donate CTA on the organization's primary fundraising page actually works |
| 3 | Delete `src/App.css` (Vite artifact, 185 dead lines) | High | Removes confusing dead file that references undefined CSS variables |
| 4 | Replace all `<img>` tags with Next.js `<Image>` for all campaign images | Medium | Measurable improvement to Core Web Vitals (LCP, CLS); enables WebP auto-conversion and lazy loading |
| 5 | Remove unused dependencies: `react-router-dom`, `@gsap/react`, `@vitejs/plugin-react` from `package.json` | Medium | Smaller install footprint; removes false signal that react-router-dom routing is in use |
| 6 | Add cleanup return to `ScrollTrigger.create()` in `Impact.jsx:14` | Medium | Prevents ScrollTrigger instance accumulation on hot-reload and repeated page visits |
| 7 | Clear `setTimeout` on unmount in `CardTypewriter` (`Features.jsx:66`) | Medium | Eliminates post-unmount state update warning and potential stale closure behavior |
| 8 | Implement actual form submission in `ContactPage.jsx` (replace `handleSubmit` placeholder) and newsletter form in `StoriesPage.jsx` | Medium | User messages and email subscriptions are no longer silently discarded |
| 9 | Extract shared GSAP scroll-animation setup into a custom hook | Medium | Eliminates 7 copy-paste blocks (~105 lines of duplication); single point of change |
| 10 | Replace Google Maps iframe placeholder coordinates with actual campus coordinates in `ContactPage.jsx:303` | Medium | Embedded map shows the correct location |
| 11 | Remove the duplicate noise overlay — keep `globals.css` version, delete the `<div>` in `layout.jsx:26-33` | Low | Halves compositing cost for the decorative effect |
| 12 | Add `.catch()` to `navigator.clipboard` call in `StoriesPage.jsx:256` | Low | Prevents unhandled promise rejection in non-HTTPS or restricted environments |
| 13 | Remove `ChevronRight`, `MessageSquare` dead imports and unused `router` hook in `StoriesPage.jsx` | Low | Cleaner imports; avoids importing unused code |
| 14 | Download and host the 4 Unsplash hero images locally | Low | Eliminates third-party CDN dependency for core visual content |

---

## Changes Applied

| File | Change |
|------|--------|
| `src/components/Gallery.jsx` | Added `useEffect` unmount cleanup to reset `document.body.style.overflow` when lightbox is open during navigation |
| `src/App.css` | Deleted — Vite scaffold artifact, never imported in the Next.js codebase |
| `next.config.js` | Created — added `remotePatterns` to allow Next.js `<Image>` to serve `images.unsplash.com` URLs |
| `src/components/Navbar.jsx` | Replaced `<img>` with `<Image>` (logo) |
| `src/components/Footer.jsx` | Replaced `<img>` with `<Image>` (logo) |
| `src/components/Hero.jsx` | Replaced `<img>` with `<Image fill>` + `priority` (LCP hero image) |
| `src/components/Gallery.jsx` | Replaced all `<img>` with `<Image fill>` (grid thumbnails + lightbox) |
| `src/components/ArtworkGallery.jsx` | Replaced `<img>` with `<Image fill>` (artwork grid) |
| `src/components/Truth.jsx` | Replaced `<img>` with `<Image fill>` |
| `src/components/SuccessStory.jsx` | Replaced `<img>` with `<Image fill>` |
| `src/components/Origin.jsx` | Replaced `<img>` with `<Image fill>` + added `aspect-[4/3]` wrapper |
| `src/components/Philosophy.jsx` | Replaced `<img>` with `<Image fill>` (parallax texture) |
| `src/components/AboutPage.jsx` | Replaced all 6 `<img>` with `<Image fill>` (hero, two story images, 4-grid) |
| `src/components/AdmissionPage.jsx` | Replaced `<img>` with `<Image fill priority>` (hero) |
| `src/components/ContactPage.jsx` | Replaced `<img>` with `<Image fill priority>` (hero) |
| `src/components/DonatePage.jsx` | Replaced `<img>` with `<Image fill priority>` (hero) |
| `src/components/GalleryPage.jsx` | Replaced all `<img>` with `<Image fill>` (hero, gallery grid, lightbox) |
| `src/components/GetInvolvedPage.jsx` | Replaced all 3 `<img>` with `<Image fill>` |
| `src/components/StoriesPage.jsx` | Replaced all `<img>` with `<Image fill>`; removed unused `useRouter`, `ChevronRight`, `MessageSquare` imports |
