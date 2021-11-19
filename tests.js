const chai = window.chai
const expect = chai.expect

describe('Wheel of Doom', () => {
    it('Puedo elegir candidatas aleatoriamente y las quito de la lista', () => {
  
      let coders = ["Alexia", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Gràcia", "Helen", "Joana", "Judith", "Kristina", "Laura C.", "Laura M.", "Marisa", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
      let position = 1;
  
      let coder = seleccionarCoder(coders, position);
  
      expect(coder).to.equal("Alisa")
      expect(coders).to.have.same.members(["Alexia", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Gràcia", "Helen", "Joana", "Judith", "Kristina", "Laura C.", "Laura M.", "Marisa", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"])
    })
  })