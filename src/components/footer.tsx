import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#2B5329] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>
          © {new Date().getFullYear()} AjudAí - Todos os direitos reservados.{" "}
          <a
            href="https://www.youtube.com/watch?v=xUdy8nuCfmM"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Vídeo Pitch
          </a>
        </p>
      </div>
    </footer>
  );
}
