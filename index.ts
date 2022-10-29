// crear las clases Edificio, Piso y Departamento aquí

class Piso {
  nombre: string;
  departamentos: Departamento[] = [];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
  pushDepartamento(departamento: Departamento) {
    return this.departamentos.push(departamento);
  }
}

class Departamento {
  departamento: string;
  constructor(departamento: string) {
    this.departamento = departamento;
  }
  getName() {
    return this.departamento;
  }
}
class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const busquedaDePiso = this.pisos.find(
      (piso) => piso.nombre == nombreDePiso
    );
    busquedaDePiso?.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const encontrado: any = this.pisos.find(
      (piso) => piso.nombre == nombreDePiso
    );
    return encontrado?.departamentos;
  }
}
//no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
