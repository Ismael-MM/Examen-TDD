import { describe,expect,it } from "vitest";
import {fizzbuzz} from "../refactors/fizzbuzz";

describe("FIZZBUZZ",() =>{
    /* it('Should be a function',()=>{
      expect(typeof fizzbuzz).toBe('function')  
    })  test redundante por eso lo quitamos*/
    it('Should throw if not number is provided as parameter',()=>{
        expect(() => fizzbuzz()).toThrow()
    })
    it('Should throw a specific error message if not number is provided as parameter',()=>{
        expect(() => fizzbuzz()).toThrow('paramater provided must be a number')
    })
    it('Should throw a specific error message  if not number is provided',()=>{
        expect(() => fizzbuzz(NaN)).toThrow('paramater provided must be a number')
    })
    it('should return 1 if number provided is 1',() =>{
        expect(fizzbuzz(1)).toBe(1)
    })
    it('should return your name if number provided is 2',() =>{
        expect(fizzbuzz(2)).toBe('ismael')
    })
    it('should return your name if number provided is multiple of 2',() =>{
        expect(fizzbuzz(4)).toBe('ismael')
        expect(fizzbuzz(6)).toBe('ismael')
        expect(fizzbuzz(8)).toBe('ismael')
    })
    it('should return your firts last name if number provided is 3',() =>{
        expect(fizzbuzz(3)).toBe('montelongo')
    })
    it('should return your firts last name if number provided is multiple of 3',() =>{
        expect(fizzbuzz(6)).toBe('montelongo')
        expect(fizzbuzz(9)).toBe('montelongo')
        expect(fizzbuzz(12)).toBe('montelongo')
    })
    /* it('should return 4 if number provided is 4', ()=>{
        expect(fizzbuzz(4)).toBe(4)
    }) */
    it('should return second last name if number provided is multiple of 11',()=>{
        expect(fizzbuzz(11)).toBe('montelongo')
    })
    it('should return second last name if number provided is multiple of 11',()=>{
        expect(fizzbuzz(22)).toBe('montelongo')
        expect(fizzbuzz(33)).toBe('montelongo')
    })
})