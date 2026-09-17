# Interactive Experience Page

## Goal

Add a focused `/experience` page that turns Dalton's verified CV history into a clear, interactive career story. The page should demonstrate product judgment through fast orientation, progressive disclosure, visible feedback, and easy recovery rather than making an explicit claim about "product intuition."

The homepage will introduce the journey without becoming substantially longer. Recruiters and hiring managers can then open or share the dedicated page, focus it on a discipline, and download the most relevant CV.

## Experience principles

- Make the current role, 15 years of experience, location, and primary action immediately clear.
- Keep the full career sequence visible so filters never remove context unexpectedly.
- Put product outcomes and consequences before technology inventories.
- Reveal supporting detail on demand without hiding essential qualifications.
- Explain every state change and keep an obvious route back to the default view.
- Avoid interaction puzzles, gesture-only controls, decorative loading, and motion required for comprehension.

## Homepage entry point

Add a compact "15 years at the forge" section between the projects and about sections. It contains three milestones:

- 2011: engineering career begins.
- 2017: architecture work on Philips Tasy EMR.
- 2021-present: regulated product platforms and enterprise tooling.

The section links to `/experience` and acts as a preview rather than a second copy of the complete timeline.

## Experience page

### Hero

The opening presents:

- Dalton Castro, Senior Software Engineer.
- "15 years building web and mobile products."
- Stockholm, Sweden.
- A primary `Download CV` action for the neutral Software Engineer PDF.
- Secondary email and LinkedIn actions.
- A compact `More CV versions` disclosure containing Frontend, Full-stack, and React Native PDFs.

The public page will not display a phone number.

### Focus controls

Provide a sticky group of accessible controls:

- All
- Frontend
- Mobile
- Backend
- Architecture & Leadership

`All` is the default and always remains available. Selecting a focus preserves every employer and role in the timeline while visually emphasizing matching achievements and technologies. Non-matching supporting details become quieter, not absent.

The page reports the result in visible text, for example, "6 roles include mobile delivery." The selected focus is reflected in the URL as `?focus=mobile`, allowing focused views to be shared and restored. Unknown focus values fall back to `All`.

### Timeline

Render roles newest first along one continuous timeline. Each entry shows:

- Company, location, role, and dates.
- A short statement of the product or organizational context.
- The two strongest verified outcomes by default.
- Relevant discipline and technology tags.
- An accessible `View more` control when supporting outcomes exist.

Expanded state is local to each entry. The control label changes to `Show less`, and collapsing returns the card to its concise state. The filter and expansion controls work independently.

The full entries cover Nooga Solutions, LeoVegas, Dot Digital Group, CDA/WEDEV, Philips Informatics, and Pointer-Cielo. Roles from Ativsoft, Sao Joao Pharmacies, DBSite, and Compasso Tecnologia appear in a compact earlier-career chapter so the full history remains available without dominating the page.

### Closing information

Finish with concise education and language details followed by a contact call to action. Personal projects remain on the existing homepage and are not duplicated in the career timeline.

## Content source and maintenance

Create one typed static data module inside the portfolio repository. Use the Software Engineer CV as the neutral baseline and add only verified discipline-specific details found in the Frontend, Full-stack, and React Native variants.

The website will not parse or depend on the external `get-the-job` project at runtime. The four final PDFs will be copied into stable public paths in this repository so download links are deployable. Content updates remain deliberate source changes rather than an implicit cross-repository sync system.

## Visual design

Reuse the existing portfolio system:

- Dark forge background, ember and flame accents.
- Syne display headings, DM Sans body copy, and JetBrains Mono labels.
- Existing surface colors, borders, glow, buttons, labels, and focus treatment.
- A thin glowing timeline path with compact bordered cards attached to it.

Motion is limited to gentle emphasis and disclosure transitions. It is not required to understand the page and is disabled by the existing reduced-motion behavior. On small screens the timeline becomes a simple left-aligned sequence; focus controls can scroll horizontally while remaining keyboard operable and visibly labeled.

## Components and data flow

Keep the implementation small:

- A server-rendered `/experience` route owns metadata, hero, timeline shell, education, languages, and contact content.
- One client component owns the focus query parameter, visible result message, achievement emphasis, and per-entry expansion.
- A typed static data module is the single source for roles, outcomes, tags, education, languages, and CV download metadata.
- A compact server-rendered homepage preview links to the full route.

No new package, API, persistence layer, or generalized timeline framework is needed.

## Accessibility and resilience

- Use real links and buttons with visible keyboard focus.
- Mark the active focus with `aria-pressed` and announce or visibly describe its effect.
- Preserve logical heading order and readable content without JavaScript; the server output contains the complete career data.
- Do not encode meaning using color alone: emphasized content also receives clear labels and state text.
- Keep touch targets usable and do not require horizontal gestures to access information.
- If optional content is absent, omit that element without leaving empty UI.
- If a CV file is unavailable during development, automated checks fail rather than shipping a broken download.

## Verification

- Unit-test the static data constraints and focus-value fallback.
- Component-test focus selection, visible feedback, expanded/collapsed labels, and keyboard interaction.
- Verify every CV link resolves to a committed PDF.
- Run lint, TypeScript checking, existing tests, the production build, and whitespace checks.
- Inspect `/` and `/experience` at desktop and mobile widths, including keyboard navigation and reduced-motion mode.
- Treat the visual inspection and browser interactions as separate evidence from the build and automated checks.

## Explicitly out of scope

- Parsing CV PDFs in the browser.
- A CMS or cross-repository synchronization pipeline.
- A separate page for each role-specific CV.
- An animated career map, carousel, 3D scene, or new visual framework.
- Repeating the homepage project gallery inside the experience page.
