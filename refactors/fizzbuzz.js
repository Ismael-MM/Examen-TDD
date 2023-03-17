export const fizzbuzz = (number) =>{
    if(typeof number != 'number') throw new Error('paramater provided must be a number');
    if(Number.isNaN(number)) throw new Error('paramater provided must be a number');

    if(number % 11 == 0) return 'montelongo'
    if(number % 2 == 0) return 'ismael'
    if(number % 3 == 0) return 'montelongo'


    return number
}