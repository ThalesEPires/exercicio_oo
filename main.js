function Veiculo(tipo, marca, modelo) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;

    this.dizTipo = function () {
        console.log(this.tipo);
    }
    this.dizMarca = function () {
        console.log(this.marca);
    }
    this.dizModelo = function () {
        console.log(this.modelo);
    }

}

const carro = new Veiculo("Carro", "Fiat", "Uno");
const moto = new Veiculo("Moto", "Honda", "Fan");
const caminhao = new Veiculo("Caminhao", "Volvo", "FH 460");

carro.dizModelo();
moto.dizMarca();
caminhao.dizTipo();