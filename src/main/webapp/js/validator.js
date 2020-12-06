/* 
 Document   : validator.js
 Created on : 24-feb-2014, 16:10:05
 Author     : Jesus Ramirez Guerrero
 Description:
 Clase para validar el formulario.
 */
$(document).ready(function() {
    $('#personal_data').validate({
        rules: {
            input_nombre: {
                required: true,
                maxlength: 10
            },
            input_apellidos: {
                required: true,
                maxlength: 20
            },
            input_telefono: {
                required: false,
                maxlength: 9,
            },
            input_email: {
                required: true,
                email: true
            }
        },
        messages: {
            input_nombre: {
                required: "El nombre es obligatorio",
                maxlength: "El máximo de caracteres es 10"
            },
            input_apellidos: {
                required: "Los apellidos son obligatorios",
                maxlength: "El máximo de caracteres es 20"
            },
            input_telefono: {
                maxlength: "Debe contener 9 dígitos"
            },
            input_email: {
                required: "El email es obligatorio",
                email: "Debe contener una @ y una extensión"
            }
        }
    });
    $('#guardar').click(function() {
        if ($("#personal_data").valid()) {
            $("#resultado").html("<div class='good'>El formulario se ha rellenada correctamente.</div>");
        } else {
            $("#resultado").html("<div class='error'>El formulario no cumple alguna de las restricciones.</div>");
        }
    });
});
