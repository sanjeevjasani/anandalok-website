# `/build-landing-page` — Answers for Anandalok Website

Answers to all 5 questions the skill will ask, based on the content at anandalokwcmh.com.

---

## Question 1 — Brand name and one-line purpose

> **"What's the brand/org name and one-line purpose?"**

**Answer:**

> Anandalok (Welfare Centre for the Mentally Handicapped) — a residential care home providing safe, structured, and loving long-term care for individuals with intellectual and developmental disabilities from middle and lower-middle-class families in West Bengal, since 1990.

**Why this phrasing works:**
- "Residential care home" is concrete and instantly understood by families searching for placement
- "Intellectual and developmental disabilities" is the correct clinical framing — avoids dated language
- "Middle and lower-middle-class families" signals accessibility and who this is for
- "Since 1990" is trust-building — 35+ years of operation is a major credibility signal
- The skill uses this line for the hero subtext, the Philosophy contrast statement, and the Protocol card descriptions — so specificity here pays off across every section

---

## Question 2 — Aesthetic preset

> **"Pick an aesthetic direction"**

**Answer: Preset F — "Arctic Minimal" (Scandinavian / Clean Tech)**

**Why:**
You asked for white and minimalist. Preset F is the only one built around a near-white canvas (`Snow #F8FAFC`) with maximum whitespace and clean typography. It removes visual noise and lets the human stories and photography do the emotional work — which is exactly right for a care facility.

**One mandatory colour customisation after generation:**
The default accent in F is Electric Blue `#0057CC`, which reads as corporate/tech. Replace it with **Sage Green `#7A9E7E`**. On a white canvas it sits quietly without dominating — buttons, highlights, and active states will feel gentle and warm rather than loud.

Change it in `src/index.css` after generation:
```css
:root {
  --accent: #7A9E7E; /* Sage Green */
}
```

Everything else in Preset F — DM Sans headings, Libre Baskerville for drama text, generous whitespace, clean architecture imagery — works well for an NGO that needs to convey both professionalism and warmth.

---

## Question 3 — 3 key value propositions

> **"What are your 3 key value propositions or pillars?"**

**Answer:**

> 1. Provides 24/7 residential care with 16 full-time staff for individuals with intellectual disabilities, giving families lifelong peace of mind
> 2. Delivers structured daily programs — vocational training, activities, and nutritious meals — in a secure, green campus environment
> 3. Offers an affordable day care option (10:30 AM – 4:30 PM) for families seeking professional support without full residential placement

**How these map to the three Feature cards:**

| Card | Pattern | Your prop |
|---|---|---|
| Card 1 — Diagnostic Shuffler | Cycles 3 sub-items | Prop 1 → sub-labels: "Round-the-clock supervision", "Trained residential staff", "Safe and green campus" |
| Card 2 — Telemetry Typewriter | Types messages live | Prop 2 → feed: daily schedule messages, e.g. "09:00 — Morning assembly complete · 11:00 — Vocational session in progress..." |
| Card 3 — Cursor Protocol Scheduler | Animated weekly grid | Prop 3 → maps to the day care weekly schedule (Mon–Fri active, Sat–Sun rest) |

---

## Question 4 — Primary CTA

> **"What should visitors do?"**

**Answer:**

> Support Our Mission

**Why "Support Our Mission" over the alternatives:**

A landing page typically serves two audiences simultaneously — **families** looking for placement, and **donors/supporters** wanting to help. "Support Our Mission" works as the hero CTA because it's the harder conversion and deserves the prime placement.

Add a secondary CTA below the hero: **"Inquire About Admission"** — this serves families without competing with the donation path.

**Suggested CTA hierarchy across the page:**

| Section | CTA | Audience |
|---|---|---|
| Navbar button | Support Our Mission | Donors |
| Hero (primary) | Support Our Mission | Donors |
| Hero (secondary link) | Inquire About Admission → | Families |
| Donation CTA section | Donate Now | Donors |
| Volunteer section | Join as a Volunteer | Community |
| Footer | Download Admission Form | Families |

---

## Question 5 — NGO or Commercial

> **"Is this for an NGO / non-profit, or a commercial brand?"**

**Answer: NGO / Non-Profit**

**What this unlocks:**
- Donation CTA section with suggested amounts
- Giving tiers: "Friend / Supporter / Champion" instead of pricing
- Volunteer / Get Involved section
- Partners & Supporters marquee (German Government funding, Mahajeevan Sadhan Sangh, etc.)
- Footer reads "Mission Active" instead of "System Operational"
- Impact Counter with real Anandalok numbers (see below)

---

## Bonus — Impact Counter Numbers

When the skill generates the Impact Counter section, replace the placeholder numbers with these real figures from the website:

| Stat | Value | Label |
|---|---|---|
| Years of service | 35+ | Years of uninterrupted care |
| Residents currently | 30 | Residents in our care |
| Full-time staff | 16 | Dedicated residential staff |
| Visiting faculty | 11 | Visiting specialists |
| Founded | 1990 | Est. January 7, 1990 |

**Tip:** "30 residents" is a small number that could look underwhelming as a headline stat. Lead with **"35+ Years"** or frame the residents stat as **"30 lives supported daily"** — same number, far more impact.

---

## Summary — Full Answer Sheet to Paste

When the skill asks its questions, paste this block:

```
1. Anandalok (Welfare Centre for the Mentally Handicapped) — a residential care home
   providing safe, structured, and loving long-term care for individuals with intellectual
   and developmental disabilities from middle and lower-middle-class families in
   West Bengal, since 1990.

2. F — Arctic Minimal
   (After generation, change --accent to #7A9E7E in src/index.css)

3. Value props:
   - Provides 24/7 residential care with 16 full-time staff for individuals with
     intellectual disabilities, giving families lifelong peace of mind
   - Delivers structured daily programs — vocational training, activities, and nutritious
     meals — in a secure, green campus environment
   - Offers an affordable day care option (10:30 AM–4:30 PM) for families seeking
     professional support without full residential placement

4. Support Our Mission

5. NGO / Non-Profit
```
