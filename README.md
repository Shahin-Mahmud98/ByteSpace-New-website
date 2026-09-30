# ByteSpace New

Landing, courses, course detail, creator profile, Login and Signup pages. Auth uses Firebase (email/password, Google, Facebook).

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure
- `app/` – routes (`/`, `/login`, `/signup`) and demo auth API routes
- `components/` – reusable sections and UI (`ui/Button`, `CourseCard`, `AuthForm`, …)
- `lib/data.ts` – content data (courses, categories, testimonials)
- `public/img/` – images cropped from the design
