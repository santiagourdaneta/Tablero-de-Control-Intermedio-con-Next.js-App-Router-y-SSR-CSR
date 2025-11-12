// src/app/layout.tsx
import './global.css';

// TypeScript para los metadatos
export const metadata = {
  title: 'Tablero Next',
  description: 'Aplicación de SSR con Next.js y TypeScript',
};

// Componente Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header style={{ padding: '20px', backgroundColor: '#1e40af', color: 'white' }}>
          <h1>Panel de Control</h1>
        </header>
        {/* Aquí se cargará el contenido de cada página (page.tsx) */}
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}