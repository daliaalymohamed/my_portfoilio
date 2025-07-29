// src/components/contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Have a project in mind or want to collaborate? Let's connect!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:daliaalymohamed@gmail.com"
          className="bg-indigo-900/70 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-indigo-900/70 transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/daliaalymohamed"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-indigo-900/70 text-indigo-900/70 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dalia-aly-368a9573/"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-iindigo-900/70 text-indigo-900/70 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact