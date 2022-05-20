import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        buyer:{
            email:"",
            nombre:"",
            apellido:"",
            telefono:""
        },
        total:80000,
        items:5,
    })

    const{
        buyer:{email, nombre, apellido, telefono},
    } = form;

    // const handleChange = (event) =>{
    //     const {name, value} = 
    // }
    return (
        <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca su email" value={form.buyer.email}/>
        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu mail con nadie más.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Nombre</label>
        <input type="text" class="form-control" placeholder="Introduzca su nombre" value={form.buyer.nombre}/>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Apellido</label>
        <input type="text" class="form-control" placeholder="Introduzca su apellido" value={form.buyer.apellido} />
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Teléfono</label>
        <input type="tel" class="form-control" placeholder="Introduzca su teléfono" value={form.buyer.telefono}/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    )
}

export default Form