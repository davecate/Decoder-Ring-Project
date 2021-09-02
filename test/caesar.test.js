const { caesar } = require("../src/caesar")
const { expect } = require("chai")

describe("caesar", () => {
  
  describe("error handling", () => {
    it ("Should return false if the shift value is missing", () => {
      const answer = false
      const input = "BLOOD AND THUNDER"
      let encode = true
      const actual = caesar(input, undefined, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should return false if the shift value is 0", () => {
      const answer = false
      const input = "BLOOD AND THUNDER"
      let shift = 0
      let encode = true
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should return false if the shift value is less than -25", () => {
      const answer = false
      const input = "BLOOD AND THUNDER"
      let shift = -26
      let encode = true
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should return false if the shift value is greater than 25", () => {
      const answer = false
      const input = "BLOOD AND THUNDER"
      let shift = 26
      let encode = true
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    
  })
  
  describe ("encoding", () => {
    
    const encode = true
    
    it ("Should return a string, shifting all input characters based on the value of the shift parameter", () => {
      const answer = "eorrg dqg wkxqghu"
      const input = "BLOOD AND THUNDER"
      let shift = 3
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    
    it ("Should maintain spaces and non-alphabetical characters while ignoring caps", () => {
      const answer = "eo00g & wkxqg3u"
      const input = "BL00D & THUND3R"
      let shift = 3
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    
    it ("Should wrap aroud to the other end of the alphabet when necessary", () => {
      const answer = "yilla xka qerkabo"
      const input = "BLOOD AND THUNDER"
      let shift = -3
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    
  })
  
  describe("decoding", () => {
    
    const encode = false
    
    it ("Should decode an encoded input if the encode parameter is false", () => {
      const answer = "blood and thunder"
      const input = "eorrg dqg wkxqghu"
      let shift = 3
      const actual = caesar(input, shift, encode)
       expect(actual).to.eql(answer)
    })
    
    it ("Should maintain spaces and non-alphabetical characters while ignoring caps", () => {
      const answer = "bl00d & thund3r"
      const input = "eo00g & wkxqg3u"
      let shift = 3
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    
    it ("Should wrap aroud to the other end of the alphabet when necessary", () => {
      const answer = "blood and thunder"
      const input = "yilla xka qerkabo"
      let shift = -3
      const actual = caesar(input, shift, encode)
      expect(actual).to.eql(answer)
    })
    
  })
  
})