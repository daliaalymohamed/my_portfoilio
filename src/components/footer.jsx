// src/components/footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p className="text-lg">
        © {new Date().getFullYear()} Dalia Aly. Built with React & Vite.
      </p>
    </footer>
  )
}

export default Footer