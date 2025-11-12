// src/app/components/UserDashboard.tsx
'use client'; // ¡CRUCIAL! Indica que este código se ejecuta en el navegador (CSR)

import React, { useState, useMemo } from 'react';

// Reutilizamos la interfaz User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Reutilizamos el componente UserCard (solo necesitamos la definición)
const UserCard = ({ user }: { user: User }) => (
   
        <div className="card"> 
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
            <p>Email: <strong>{user.email}</strong></p>
        </div>
   
);

export default function UserDashboard({ initialUsers }: { initialUsers: User[] }) {
  // Estado para guardar el texto de búsqueda que teclea el usuario
  const [searchText, setSearchText] = useState('');

  // useMemo: Optimiza el filtrado para que solo se recalcule si cambia searchText o initialUsers
  const filteredUsers = useMemo(() => {
    return initialUsers.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, initialUsers]);

  return (
    <div>
      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre o email..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      {/* Renderizado de usuarios filtrados */}
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}