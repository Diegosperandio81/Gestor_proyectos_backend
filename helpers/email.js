import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    //Informacion del email
      const info = await transport.sendMail({
        from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Conforma tu cuenta",
        text: "Confirma tu cuenta en UpTask",
        html: `<p>Hola ${nombre} !!!. Confirma tu cuenta en UpTask</p>
        <p>Para ello solo debes hacer click en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>
        </p>

        <p>Si tu no creaste una cuenta en UpTask, puede ignorar y eliminar este mensaje.</p>




        `
      })
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
      }
    });

  //Informacion del email
    const info = await transport.sendMail({
      from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
      to: email,
      subject: "UpTask - Reestablece tu password",
      text: "Reestablece el password de tu cuenta en UpTask",
      html: `<p>Hola ${nombre} !!!. Has solicitado reestablecer tu password de tu cuenta en UpTask</p>
      <p>Para ello solo debes hacer click en el siguiente enlace:
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a>
      </p>

      <p>Si tu no solicitaste reestablecer el password, puedes ignorar y eliminar este mensaje.</p>




      `
    })
};