// src/app/page.tsx
// Hacemos que esta página se renderice en el servidor (SSR)
// Next.js asume esto por defecto, pero usamos async para forzar la carga de datos.

import UserDashboard from './components/UserDashboard';

// TypeScript para definir la forma de los datos
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Componente de la Tarjeta de Usuario
const UserCard = ({ user }: { user: User }) => (
  <div className="card">
    <h2>{user.name}</h2>
    <p>@{user.username}</p>
    <p>Email: <strong>{user.email}</strong></p>
  </div>
);

// Componente principal de la página (SSR para la carga inicial)
export default async function DashboardPage() {
  // 1. CARGA DE DATOS EN EL SERVIDOR (SSR)
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  // 2. Pasamos los datos SSR al componente CSR
  return (
    <div>
      <h2>Lista de Usuarios (SSR + Búsqueda Dinámica)</h2>
      {/* El componente UserDashboard maneja la interactividad */}
      <UserDashboard initialUsers={users} />
      
    </div>
  );
}