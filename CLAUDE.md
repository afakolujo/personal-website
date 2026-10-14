# Project Rules

1. **Stack:** Vite + React 18 + TypeScript.
2. **Components:** Every page section is its own component in `src/components`, with its own CSS file in `src/components/styles`.
3. **Design tokens:** Colors and fonts live only as CSS variables in `src/index.css`.
4. **Animation:** Use the free `gsap` package (import from `gsap/ScrollTrigger`, `gsap/ScrollSmoother`, `gsap/SplitText`). Never use `gsap-trial`.
5. **3D:** If we add 3D, pin `@react-three/fiber@8` and `@react-three/drei@9`, and keep React at 18.
6. **Build check:** After every change, run `npm run build` and fix any errors.
7. **Explanations:** Explain each change in 2-3 plain sentences, as if to a beginner.
