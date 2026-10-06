# 🚀 My Developer Portfolio

Hi, I'm **Dalia Aly** — a **Senior Software Developer** passionate about building clean, responsive, and interactive web applications. This is my personal portfolio built with modern tools and performance in mind.

🔗 **Live Demo**: [https://daliaalymohamed.github.io/my_portfoilio/](https://daliaalymohamed.github.io/my_portfoilio/)  
📂 **Built with**: React 19, Vite, Tailwind CSS, GSAP, Framer Motion & `reactbits`

---

## 🌟 Features

- ✅ **Blazing Fast** with Vite (⚡ HMR, optimized builds)
- ✅ **React 19** ready (using modern hooks, transitions, and patterns)
- ✅ **Beautiful Animations** powered by **GSAP** and **Framer Motion**
- ✅ **Custom UI Components** from `reactbits`
- ✅ **Responsive Design** with Tailwind CSS
- ✅ **Scroll-Optimized** to avoid jank and Firefox scroll-linked warnings
- ✅ **Performance-First** with lazy loading, code splitting, and clean bundle size

---

## 🛠 Tech Stack

| Category       | Tools & Libraries                          |
|----------------|--------------------------------------------|
| **Framework**  | React 19, Vite                             |
| **Styling**    | Tailwind CSS, CSS Variables, Responsive    |
| **Animation**  | GSAP 3, Framer Motion                      |
| **UI Kit**     | `reactbits` (custom reusable components)   |
| **Icons**      | Iconify                                    |
| **Build Tool** | Vite (⚡ Fast, modern, no Webpack)         |
| **Runtime**    | Node.js v22.11.0                           |

---

## 🎨 Highlights

### ✨ `reactbits` Components in Action
- **`TextType`**: Typing effect with scroll-triggered start
- **`Lanyard`**: Infinite horizontal skill ticker
- **`InfiniteScroll`**: Vertical auto-scrolling project feed with tilt
- All built for **performance** and **UX polish**

### 🎯 Performance Optimized
This site avoids common pitfalls like:
- ❌ Scroll-linked jank (no main-thread repositioning)
- ✅ Uses CSS `scroll-snap`, `position: sticky`, and `transform` where possible
- ✅ `IntersectionObserver` instead of `scroll` events
- ✅ Smooth 60fps animations via compositor-friendly techniques

> 🔔 Firefox? No scroll-linked effect warnings — because we do it right.


## 🚀 Getting Started

### Prerequisites
- Node.js **v22.11.0** or higher
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/daliaalymohamed/my_portfoilio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview