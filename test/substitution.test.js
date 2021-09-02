const { substitution } = require("../src/substitution")
const { expect } = require("chai")

describe("substitution", () => {
  
  describe("error handling", () => {
    let encode = true
    
    
    it("Should return false if alphabet parameter is missing", () => {
      let input = "$5 foot-long"
      let alphabet = null
      let answer = false
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
    it("Should return false if alphabet parameter isn't a string of exactly 26 characters", () => {
      let input = "$5 foot-long"
      let alphabet = "qwertyuioasdfghjklzxcvbnm"
      let answer = false
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
    it("Should return false if the alphabet parameter contains any repeating characters", () => {
      let input = "$5 foot-long"
      let alphabet = "qwertyuioqasdfghjklzxcvbnm"
      let answer = false
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
  })
  
  describe("encoding", () => {
    let encode = true
    
    it("Should encode a message by translating letters from the input string into a scrambled 26-character alphabet", () => {
      let input = "$5 foot-long"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "$5 yggz-sgfu"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
    it("Should maintain spaces and special/numeric characters from input to output", () => {
      let input = "$5 foot-long"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "$5 yggz-sgfu"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
    it("Should translate upper case the same as lower case", () => {
      let input = "$5 fOoT-lOnG"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "$5 yggz-sgfu"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
  })
  
  describe("decoding", () => {
    let encode = false
    
    it("Should decode a message by translating encoded characters from the input string into the English alphabet", () => {
      let input = "$5 yggz-sgfu"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "$5 foot-long"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
    it("Should maintain spaces and special characters from input to output", () => {
      let input = "$5 yggz-sgfu"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "$5 foot-long"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
    it("Should translate upper case the same as lower case", () => {
      let input = "$5 yGgZ-sGfU"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "$5 foot-long"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
    
  })
  
})