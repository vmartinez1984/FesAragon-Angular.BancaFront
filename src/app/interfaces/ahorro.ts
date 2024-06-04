export interface Ahorro {
    nombre: string
    clienteId: string
    clienteNombre: string
    nota: string
    total: number
    totalDeDepositos: number
    totalDeRetiros: number
    guid: string
    id: number
    tipoDeCuenta: string
    interes: number,
    depositos: MovimientoDto[]
    retiros: MovimientoDto[]
}

export interface AhorroDtoIn {
    guid: string
    nombre: string
    clienteId: string
    clienteNombre: string
    interes: number
    nota: string
}

export interface MovimientoDtoIn {    
    cantidad: number
    id: string
    concepto: string
    referencia: string
}

export interface MovimientoDto {
    fechaDeRegistro: Date
    cantidad: number
    id: string
    concepto: string
    referencia: string
}