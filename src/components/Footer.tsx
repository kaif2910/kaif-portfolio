export default function Footer() {
  return (
    <footer className="py-8 border-t border-black/10 dark:border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shaikh Mohd Kaif Mujamill. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/kaif2910" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kaif-shaikh-7617223b8/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:kaif282907@gmail.com" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
