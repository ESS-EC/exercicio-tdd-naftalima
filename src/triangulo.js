function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;

  }

  // Triangulo.prototype.toString = function () {
  //   return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c} to equal `
  // };

var triangulo = function(a,b,c) {
    if ( (this.a + this.b > this.c) && (this.a - this.b < this.c) ){
      return true
    } 
      return false
 }

  Triangulo.prototype.valido = function () {
    // soma maior e modulo da subtracao menor para todos
    if (triangulo(this.a, this.b, this.c) && triangulo(this.a, this.c, this.b) && triangulo(this.b, this.c, this.a) ) {
      return true
    } else {
      return false
    }
    // return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };
  
  Triangulo.prototype.tipo = function () {
    if (this.a == this.b && this.b == this.c){
      return "Equilatero"
    }
    else {
      if (this.a  == this. b || this.b == this.c || this.a == this.c){
        return "Isosceles"
      } else {
        return "Escaleno"
      }
    }
  };
  
  
  module.exports = Triangulo;