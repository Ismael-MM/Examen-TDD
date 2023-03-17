import { describe, it, expect } from "vitest";
import {distribuiteGiftIMM} from "../refactors/papa";
// Escribir una función "transporteRegalos(tipoRegalos, renos)" que nos dice
// el nº de cajas de regalos que puede transportar en su trineo Papa Noel en función del peso de los regalos
// y del tipo de reno que lleve. Para ello se cumple lo siguiente:
//
// # PesoRegalos=nº de letras que contiene ese regalo. Ej: ball=4;
// # CapacidadTransporteReno= 2*nºletras del nombre del reno. Ej: Reno "Dasher" = 6 => 12;
//
// En el ejemplo anterior, se pueden llevar: capacidadReno / pesoRegalo=12 / 4= 3 cajas de ese regalo
//


describe('distribuiteGiftIMM', (): void => {

    it('debería ser una funcion', (): void => {
        expect(typeof distribuiteGiftIMM).toBe('function')
        })

// test 2: el primer parámetro debe ser un string
it('el 1er parámatro debe ser un string', (): void => {
    expect((): void => distribuiteGiftIMM (2)).toThrow()
    })        

    // test 3: el 2º parámetro debe ser un string
it('el 2º parámatro debe ser un string', (): void => {
    expect((): void => distribuiteGiftIMM ('a')).toThrow()
    })

    
    // test 4: debe darnos el nº de cajas de regalos q se pueden transportar
it('el numero de cajas se pueden transportar', (): void => {
expect(distribuiteGiftIMM('bola', 'pepito')).toBe(6)
})
})