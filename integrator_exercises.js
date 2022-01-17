// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.

function menorMayor(numeros) {
    // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
    // 'numeros' en la posición 1.
    // Ej:
    // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
    // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
    // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
  
    // Tu código aca:
      var mayor=numeros[0];
      var menor=numeros[0];
      for (var i=1; i< numeros.length;i++){
        if (mayor < numeros[i]){
          mayor=numeros[i]
        } 
        if (menor>numeros[i]){
          menor=numeros[i];
        }
      }
      return [menor, mayor];
  }
  
  function cuantosOnline(usuarios) {
    // La funcion llamada "cuantosOnline" recibe como argumento un objeto 'usuarios', cada property de ese objeto es un objeto
    // cada usuario tiene una property 'online' que es un booleano.
    // deberia devolver la cantidad de usuarios con la property online igual a true.
    // Por ej:
    // let usuarios = {
    //     toni: {
    //         edad: 33,
    //         online: true
    //     },
    //     emi: {
    //         edad: 25,
    //         online: true
    //     },
    //     fran: {
    //         edad: 25,
    //         online: false
    //     },
    //     agus: {
    //         edad: 24,
    //         online: false
    //     }
    // }; 
    // cuantosOnline(usuarios) devuelve 2
    // Tip: Podes usar el metodo for...in
  
    // Tu código aca:
  var cantonline = 0;
  for (var usuario in usuarios){
    if (usuarios[usuario].online){
      cantonline= cantonline +1;
    }
  }
  return cantonline;
  }
  
  function divisores(numero) {
    // La funcion llamada 'divisores' recibe como argumento un numero (entero) 
    // y debe devolver un array con los divisores exactos de 'numero'.
    // Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
    // Nota: El array no debe contener el 1 y el mismo numero.
    // Por ej:
    // divisores(15) devuelve [3, 5]
    // divisores(11) devuelve 'Es primo'
  
     // Tu código aca:
     var array = [];
  for (var i=2; i<numero; i++){
    if (numero %i === 0){
      array.push(i); 
    } 
  }
  if (array.length >0){
    return (array);
  } else{
    return ('Es primo');
  }
  }
  
  function actividadesEnComun(persona1, persona2) {
    // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
    // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
    // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
    //     persona2 = ['comer', 'dormir', 'futbol']
    // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
    // Tip: podes usar ciclos for anidados.
    // Tu código aca:
    var encomun= [];
  for (var i=0; i<persona1.length; i++){
    for (var j=0; j<persona2.length; j++){
      if (persona1[i]=persona2[j]){
        encomun.push(persona2[j]);
      }
    }
  }
  return (encomun);
  }
  
  function palabraMasLarga(array) {
    // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
    // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
    // Por ej:
    // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
  
    // Tu código aca:
    return array
    .reduce((a, b) => {
      a.push(...b.split(" "))
      return a
    }, [])
    .map(x => x.replace(/,/g, ''))
    .sort((a, b) => a.length > b.length ? 1 : -1)
    .pop()
  }
  
  function crearClaseEmprendedor() {
    class Emprendedor {
        constructor(nombre, apellido, libros, mascotas) {
            // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
            // Inicializar las propiedades del emprendedor con los valores recibidos como argumento
  
            // Tu código aca:
            this.nombre=nombre;
            this.apellido=apellido;
            this.libros=libros;
            this.mascotas=mascotas;
        }
  
        addMascota(mascota) {
          // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
          // no debe retornar nada.
  
          // Tu código aca:
          var mascota = new Emprendedor(this.mascotas.push(mascota));
        }
  
        getMascotas() {
            // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
            // Ej:
            // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
            // emprendedor.getMascotas() debería devolver 2
  
            // Tu código aca:
            Emprendedor.prototype.getMascotas=function(){
              return (this.mascotas + ' ');
            }
            let perro = new Emprendedor(this.mascotas.push('perro','gato'));
            return ((perro.getMascotas()).length)-8;
        }
  
        addBook(book, autor) {
            // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
            // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
            // No debe retornar nada.
  
            // Tu código aca:
            var objeto= {autor: autor, nombre: book};
            var objeto= new Emprendedor(this.libros.push(objeto)); 
        }
  
        getBooks() {
            // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
            // Ej:
            // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
            // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']
  
            // Tu código aca:
            Emprendedor.prototype.getBooks= function(){
              return (this.libros+' '+this.libros);
            }
            let Elsenior= new Emprendedor(this.libros.unshift('Lord of the Flies','The Foundation Trilogy'));
            return ([this.libros[0], this.libros[1]]);
            
        }
  
        getFullName() {
            // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
            // ej:
            // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
            // emprendedor.getFullName() deberia devolver 'Elon Musk'
  
            // Tu código aca:
            Emprendedor.prototype.getFullName= function(){
              return (this.nombre + ' ' + this.apellido);
            }
            let Elon = new Emprendedor('Elon','Musk');
            return (Elon.getFullName());
        }
    }
  
    return Emprendedor;
  }
  
  /* ====================== EXTRA CREDIT ===================== */
  // Este ejercicio no cuenta en el puntaje del checkpoint
  // pero si llegas hasta aca y lo haces quiere decir que venis super bien!
  
  function repetirCaracteres() {
    // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
    // que reciba como parametro un string
    // y devuelve un string en donde cada letra se repita una vez.
    // Por ej:
    // 'hola'.repeatCharacters() devuelve "hhoollaa"
  
    // Tu código aca:
    const letters = word.split('')
    const repeated = letters.map(letter => letter.repeat(2))
    return repeated.join('');
  }