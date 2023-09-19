class Manager{
    crearUsuario(Nombre, Apellido, Edad, Curso){
        const usuario = {
            Nombre,
            Apellido,
            Edad,
            Curso,
        };
        this.usuarios.push(usuario);
    }
    consultarUsuario(){

    }
}