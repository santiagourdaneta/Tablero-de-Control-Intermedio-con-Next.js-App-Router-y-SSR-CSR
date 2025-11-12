/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    // Esto asegura que el compilador no intente analizar paquetes complejos
  ],
  
  // Puedes dejar 'experimental' vacío si no necesitas otras funciones
  experimental: {
    // Aquí puedes dejarlo vacío o con opciones conocidas de tu versión
  },
};

module.exports = nextConfig;