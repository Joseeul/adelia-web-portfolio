# Adelia Portfolio

Personal portfolio website to showcase Adelia's profile, journey, skills, and creative works in illustration, 3D animation, and photography. Gallery content and selected site information are dynamically fetched from Supabase.

## Features

* Home page featuring Hero, About, Journey, Tools, Portfolio, and Contact sections.
* Galleries for illustrations, videos, and photography.
* Portfolio items and experience data loaded from Supabase.
* Smooth UI animations powered by Motion.
* Visitor analytics tracking via Vercel Analytics with event logging to Supabase.
* Fully responsive layout built with Tailwind CSS.

## Tech Stack

* React 19
* Vite
* Tailwind CSS 4
* React Router
* Motion
* Supabase
* Vercel Analytics

## Routes

| URL | Page |
| --- | --- |
| `/` | Main page and profile sections |
| `/drawings` | Illustration gallery |
| `/videos` | 3D animation and modeling gallery |
| `/photos` | Photography gallery |

## Project Structure

```text
src/
├── App.jsx              # Routes and app framework
├── components/          # Main page section components
├── lib/supabase.js      # Supabase client initialization
├── pages/               # Home, Drawings, Videos, and Photos pages
├── assets/              # Images, icons, and fonts
├── index.css            # Global styles and Tailwind configuration
└── main.jsx             # React entry point
public/                  # Static assets

```