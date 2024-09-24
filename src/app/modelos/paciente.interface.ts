export interface PacienteI {
    username: string;
    password: string;
    dpi: number;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    email: string;
    numero: string;
    idRol: number; // 1: paciente, 2: doctor, 3: admin
    estado: number; // 1: activo, 2: inactivo
}