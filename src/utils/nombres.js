// utils/nombres.js

const nombres = [
  "Fabiola Mejías", "Carlos Romero", "Daniela Torres", "Luis Suárez", "Ana Pérez",
  "Jorge Martínez", "Patricia Gómez", "Ricardo Díaz", "Camila Herrera", "Pedro Vargas",
  "Lucía Mendoza", "David Castro", "Andrea Ríos", "Miguel León", "Rosa Campos",
  "Esteban Silva", "Natalia Ramírez", "Julio Paredes", "Gabriela Díaz", "Iván Lozano",
  "Sofía Cabrera", "Tomás Moreno", "Isabel Luna", "Raúl Navarro", "Paula Arias",
  "Samuel Ortega", "Mariana Lozano", "Fernando Cruz", "Daniel Gómez", "Laura Ruiz",
  "Santiago Soto", "Valeria Salas", "Eduardo Peña", "Elena Cordero", "Cristian Rivas",
  "Angela Castaño", "Kevin Herrera", "Juliana Vargas", "Mauricio Rojas", "Diana Londoño",
  "Sebastián Vera", "Alejandra Silva", "Andrés Acosta", "Luisa Fajardo", "Juan Castaño",
  "Catalina Blanco", "Camilo Benítez", "Sara Niño", "Felipe Duarte", "Carolina Bernal",
  "Gustavo Patiño", "Emilia Navarro", "Óscar Serrano", "Mónica Montoya", "Hugo Valdés",
  "Bianca Ríos", "Martín Álvarez", "Adriana Cedeño", "Iván Ríos", "Jessica Calderón",
  "Pablo Lemus", "Marlon Gómez", "Melissa López", "Alexis Pineda", "Nicole Ayala",
  "Mateo Quintero", "Daniela Guzmán", "Julián Serrano", "Pamela Herrera", "Roberto Marín",
  "Isabella Duarte", "Diego Zambrano", "Miranda Cárdenas", "Brayan Mena", "Florencia Ríos",
  "Nicolás Guerra", "Rocío Londoño", "Axel Castaño", "Tatiana Salazar", "Bastián Peña",
  "Yuliana Cruz", "José Patiño", "Valentina Paredes", "Jonathan Cárdenas", "Karen Zuluaga",
  "Cristina Lozano", "Elvis Andrade", "Maira Jaramillo", "Samuel Escobar", "Lorena Valencia",
  "Elkin Gómez", "Liseth Bermúdez", "Aarón Velasco", "Liliana Suárez", "Franklin Mejía",
  "Ángela Cárdenas", "Jhonatan Morales", "Marleny Fuentes", "Yeison León", "Dayana Pérez"
];

function censurarNombre(nombreCompleto) {
  const [nombre, apellido] = nombreCompleto.split(" ");
  const censurar = (palabra) =>
    palabra.slice(0, 3) + "*".repeat(Math.max(0, palabra.length - 3));
  return `${censurar(nombre)} ${censurar(apellido)}`;
}

function obtenerNombreAleatorioCensurado() {
  const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  return censurarNombre(aleatorio);
}

export { obtenerNombreAleatorioCensurado };
