---
name: Cardiology Excellence
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44474d'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1d'
  on-tertiary-container: '#828485'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the intersection of academic rigor and empathetic clinical care. It targets high-net-worth individuals and professional referrals who seek both advanced medical expertise and a personalized, human touch. 

The visual style is **Corporate Modern with Minimalist influences**, emphasizing clarity and prestige. Every element must feel intentional and grounded, avoiding unnecessary decoration in favor of generous whitespace and structural balance. The aesthetic should mirror a high-end private medical suite: quiet, confident, and meticulously organized.

## Colors

The palette is designed to project stability and luxury. 
- **Deep Navy (#0A192F)**: Used for high-level containers, primary headings, and navigation to establish authority and trust.
- **Sophisticated Gold (#C5A059)**: Reserved for highlights, primary calls to action, and interactive accents. It should be used sparingly to maintain its premium impact.
- **Crisp White (#FFFFFF)**: The foundation of the UI, ensuring a clinical and clean atmosphere.
- **Surface Grays**: Light neutral tones (e.g., #F8F9FA) are used for subtle section backgrounds to provide soft visual separation without introducing heavy borders.

## Typography

This design system utilizes a sophisticated typographic pairing to balance tradition and modernity. 
- **Playfair Display** is utilized for headlines to convey a sense of heritage, wisdom, and "literary" authority.
- **Inter** is the workhorse for all functional text, ensuring maximum legibility for medical information and data across all devices. 

Large display type should favor a tighter letter-spacing to feel more editorial, while labels utilize increased tracking and uppercase styling for a disciplined, navigational feel.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a controlled, premium editorial feel, and a fluid 4-column grid for mobile. 

The spacing rhythm is based on an 8px base unit. To achieve the "generous whitespace" requirement, vertical sections should favor large padding (80px to 120px) to allow content to breathe. Information density should remain low to medium, preventing cognitive load and emphasizing a calm user experience. 
- **Desktop**: 12-column grid with a 1200px max-width centered container.
- **Tablet**: 8-column grid with 32px side margins.
- **Mobile**: 4-column grid with 20px side margins.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering rather than heavy lines. 
- **Surface Elevation**: Cards and containers use a very soft, multi-layered shadow (0px 4px 20px rgba(10, 25, 47, 0.05)) to appear as though they are resting gently on the background.
- **Interactive Depth**: On hover, gold accents may subtly glow or elevate with a slightly more pronounced shadow.
- **Glassmorphism**: Use backdrop blurs (20px+) on navigation bars to maintain context of the underlying medical imagery while ensuring text remains legible.

## Shapes

The shape language is **Soft (0.25rem / 4px base)**. While the brand is modern, it avoids overly "bubbly" or rounded corners to maintain a professional, clinical edge. Sharp corners are avoided to ensure the "human" and "compassionate" aspect of the brand is felt through subtle softening of UI containers and buttons. 

Images should follow the same corner radius rules, except for hero sections which may use full-bleed or sharp edges to emphasize architectural precision.

## Components

- **Buttons**: Primary buttons are solid Deep Navy or Gold with white/navy text respectively. They use 4px rounded corners and Medium weight Inter text. Transitions should be 300ms ease-in-out.
- **Input Fields**: Minimalist style with a 1px bottom border or a very light gray stroke. Labels should use the `label-md` style above the field.
- **Cards**: Pure white backgrounds with the defined ambient shadow. Padding inside cards should be generous (min 32px).
- **Navigation**: Persistent top bar with a glassmorphism effect. The active state is indicated by a subtle Gold underline or text color change.
- **Appointment Widget**: A high-priority custom component utilizing a clean calendar interface with Gold as the selection color.
- **Imagery**: High-resolution, warm-toned photography showing Dr. Sharma in clinical settings or abstract medical close-ups with a shallow depth of field. Avoid "stock-looking" bright blues; favor natural light.