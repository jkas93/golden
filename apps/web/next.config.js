/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un build standalone autocontenido para producción en servidor
  // Reduce significativamente el tamaño en disco del deploy
  output: 'standalone',
};

export default nextConfig;
