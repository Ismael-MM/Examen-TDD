 export const distribuiteGiftIMM = (packOfGifts, reindeers): void => {
    if (typeof packOfGifts != 'string') throw new Error('debe ser un string')
    if (typeof reindeers != 'string') throw new Error('debe ser un string')
    
    const pesoRegalo = packOfGifts.length
    const pesoReno = reindeers.length * 4
    return Math.floor(pesoReno / pesoRegalo)
    
    }