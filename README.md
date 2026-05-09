# Luminara Health Centre

A fictional hospital website built with Next.js, React, and TypeScript. The project is meant for a frontend portfolio, so it focuses on public website pages, reusable UI, routing, filtering, forms, and a small admin-style demo view.

The hospital name, doctors, departments, contact details, and appointment rows are all mock content. No real patient data is used or stored.

## Why I Built It

Hospital websites are a good frontend exercise because they need more than a landing page. A useful version needs clear navigation, service pages, doctor profiles, forms, responsive layouts, and safe handling of sensitive-looking data. I built this project to show those pieces working together in a clean Next.js app.

## Features

- Home page with hero image, emergency contact banner, featured departments, doctor cards, patient information, and opening hours
- About page for project context and hospital overview
- Departments page using reusable department data
- Doctors page with client-side search and department filtering
- Dynamic doctor profile pages
- Appointment request form with basic validation
- Contact form with basic validation
- Services page with structured service cards
- Demo admin appointment list using static mock data
- Mobile-friendly navigation
- SEO-friendly page titles and meta descriptions
- Local mock data only, with no database or API keys

## Tech Stack

- Next.js 16.2.6
- React 19.2.6
- TypeScript
- App Router
- Plain CSS
- Local static data

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Folder Structure

```text
.
├── public/
│   └── images/
│       └── hospital-hero.png
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── admin/appointments/
│   │   ├── appointment/
│   │   ├── contact/
│   │   ├── departments/
│   │   ├── doctors/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── data/
│   └── types/
├── LICENSE
├── package.json
└── README.md
```

## Screenshots

Screenshots can be added here after deployment or local testing.

- Home page screenshot
- Doctors page screenshot
- Appointment form screenshot
- Demo admin list screenshot

## Accessibility Notes

- Semantic landmarks are used for header, main content, footer, navigation, sections, forms, and tables.
- Form fields have visible labels, validation messages, and `aria-invalid` states.
- A skip link is included for keyboard users.
- Interactive controls include visible focus styles.
- The appointment table keeps labels visible on smaller screens.

## Known Limitations

- Form submissions only show local confirmation messages.
- The admin page is a static demo and has no authentication.
- Appointment data is hardcoded mock data.
- Doctor avatar visuals are generated from initials instead of profile photos.
- The contact details and address are fictional.

## Future Improvements

- Add unit and component tests
- Add real form submission through a safe demo API route
- Add loading and empty states for API-backed data
- Add appointment status filtering on the demo admin page
- Add deployment screenshots to this README
- Add a CMS or JSON-backed content editing workflow

## Support

If you find this project useful, please consider starring the repository.  
It helps support the project and shows employers/other developers that the work is useful.

You are free to fork the project for learning purposes. Please keep the license and attribution intact.

## License

MIT License. Copyright 2026 Ritchie Fernandes.
