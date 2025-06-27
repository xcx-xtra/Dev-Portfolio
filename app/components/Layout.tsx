import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-xl font-bold">
              MyPortfolio
            </a>
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-16">{children}</main>

      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
