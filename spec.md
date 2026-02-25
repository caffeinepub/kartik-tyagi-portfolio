# Specification

## Summary
**Goal:** Add an animated Performance Gallery subsection to Case Study 1 (VRH Derma) displaying Meta Ads performance screenshots with scroll animations, hover effects, and lightbox functionality.

**Planned changes:**
- Add Performance Gallery subsection at the end of Case Study 1 with 2 Meta Ads performance screenshots
- Implement fade-in and slide-up animations triggered on scroll using existing useScrollAnimation hook
- Add subtle hover effects with 1.03x scale zoom and soft shadow
- Create modal lightbox with fade transition, darkened overlay, and left/right navigation between images
- Style with green/black/white theme, thin black borders, 2-column desktop grid, 1-column mobile layout
- Optimize images with lazy loading and ensure mobile responsiveness
- Preserve all existing case study text content

**User-visible outcome:** Users can view 2 Meta Ads performance screenshots at the end of the VRH Derma case study with smooth scroll animations, hover effects, and click to open a lightbox modal with navigation between images.
