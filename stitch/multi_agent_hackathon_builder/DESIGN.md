---
name: Multi-Agent Hackathon Builder
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '450'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The brand personality is high-performance, technical, and hyper-focused. It targets a sophisticated audience of developers, AI researchers, and engineers who value efficiency and clarity. The UI evokes a sense of "the command center"—a place where complex multi-agent orchestrations are managed with ease.

The design style is **Modern Minimalism** with a **Developer-Centric** edge, drawing inspiration from high-end technical tools like Vercel and Linear. It utilizes a predominantly dark, low-contrast foundation punctuated by high-contrast typography and subtle glassmorphism. Visual depth is achieved through layered surfaces rather than heavy shadows, creating a workspace that feels like a premium, distraction-free IDE.

## Colors

This design system uses a monochrome-first approach with surgical applications of color. The palette is rooted in absolute black (`#000000`) for the canvas, using a hierarchy of dark grays to define depth.

- **Primary & Secondary:** A vibrant "Electric Blue" and "Deep Purple" are used exclusively for primary actions, success states, and indicating active AI agents.
- **Surface Hierarchy:** The background is pitch black. Containers use a slightly lighter charcoal (`#0a0a0a`). Hover states and active selections move into the `#171717` and `#262626` range.
- **Accents:** Borders are kept extremely subtle (`#262626`) to maintain a seamless, "borderless" feel while providing enough structure for complex data layouts.

## Typography

The typography system relies on **Geist** for its precision and neutral, technical aesthetic. It is paired with **JetBrains Mono** for technical metadata and agent logs.

- **Scale:** Headlines use tight letter spacing and heavy weights to create a strong visual anchor against the dark background.
- **Body:** Body text is set with generous line-height to ensure readability during long sessions of agent configuration.
- **Micro-copy:** Use the `label-caps` style for section headers and `label-code` for any system-generated strings or variable names.

## Layout & Spacing

The design system employs a **Fluid-Fixed Hybrid** grid. The dashboard uses a sidebar-centric layout where the sidebar is fixed at 240px or 280px, and the main content area spans the remaining width using a 12-column fluid grid.

- **Rhythm:** An 8px linear scale (4px for micro-adjustments) governs all padding and margins. 
- **Desktop:** 32px outer margins with 24px gutters.
- **Tablet/Mobile:** Margins reduce to 16px. Content reflows into a single column, with the sidebar transforming into a bottom-anchored or overlay navigation.
- **Information Density:** High-density layouts are preferred. Use `16px (sm)` for internal component padding and `24px (md)` for spacing between major sections.

## Elevation & Depth

Depth is communicated through **Tonal Elevation** and **Glassmorphism**, avoiding traditional drop shadows which can look muddy on pitch-black backgrounds.

- **Level 0 (Base):** `#000000` - The main canvas.
- **Level 1 (Surface):** `#0a0a0a` - Cards, sidebars, and navigation headers.
- **Level 2 (Floating):** `#171717` with a 1px border of `#262626`. Used for modals and dropdowns.
- **Glassmorphism:** For overlays (like agent status panels), use a backdrop blur of `12px` and a semi-transparent fill of `#0a0a0a` at 70% opacity. 
- **Inner Glow:** Instead of shadows, use a very subtle `0.5px` white top-border at 10% opacity on buttons and cards to simulate a light source from above.

## Shapes

The shape language is **Soft (0.25rem)**, reflecting a precise, engineered feel. 

- **Components:** Standard buttons and inputs use `4px` (rounded-sm) to maintain a crisp, sharp appearance.
- **Containers:** Cards and large panels use `8px` (rounded-lg) to subtly differentiate from the sharper internal elements.
- **Interactive Elements:** Checkboxes and small toggles maintain the same `4px` radius for consistency. Avoid fully rounded pill shapes except for status badges.

## Components

- **Buttons:** Primary buttons use a solid primary blue or purple background with white text. Secondary buttons are "Ghost" style: a transparent background with a `#262626` border that shifts to `#404040` on hover.
- **Inputs:** Dark fields (`#0a0a0a`) with a 1px `#262626` border. Focus states use a 1px primary color border and a subtle 2px outer glow (0% blur).
- **Cards:** No shadows. Use a `#262626` border and a background of `#0a0a0a`. Headers within cards should be separated by a thin horizontal rule.
- **Chips/Badges:** Small, low-contrast containers with `JetBrains Mono` text. For agent status, use a small glowing dot (pulse effect) next to the status label.
- **Agent Nodes:** Custom components for the hackathon builder. These should appear as "Physical" modules with high-contrast connections (lines) between them, utilizing the `secondary_color` for active data flows.
- **Lists:** Clean, borderless rows with a `#171717` hover state. Use `label-code` for metadata alignment on the right side of the list item.