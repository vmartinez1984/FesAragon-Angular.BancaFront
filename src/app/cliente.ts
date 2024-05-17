export interface ClienteDtoIn {
    apellidos: string
    correo: string
    guid: string
    nombre: string
    telefono: string
    direccion: Direccion
}

export interface Direccion{
    alcaldia: string
    calleYNumero: string
    codigoPostal: string
    colonia: string
    coordenadasGps: string
    estado: string
    referencia: string
}

export interface ClienteDto {
    id: number
    apellidos: string
    correo: string
    guid: string
    nombre: string
    telefono: string
    direccion: Direccion
}