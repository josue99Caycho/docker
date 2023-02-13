//Model
const UserSchema = require(`../model/user.model`)

module.exports = class User {

  constructor() {}

  async findAll(_request, response) {
    try {
      const users = await UserSchema.find().lean();
      return response.json(users)
    } catch (error) {
      console.log(`Ocurrió un error al obtener todos los usuarios`, error)
    }
  }

  async findByEmail(request, response) {
    try {
      const { email } = request.query;
      const user = await UserSchema.findOne({ email }).lean();
      response.json(user)
    } catch (error) {
      console.log(`Ocurrió un error al obtener el usuario por Email`, error)
    }
  }

  async Create(request, response) {
    try {

      const { name, age, email, lastName, phone } = request.body;
      const body = { name, age, email, lastName, phone }
      await UserSchema.create(body)
      response.send(`GUARDADO CON EXITO!`)

    } catch (error) {
      this.response.send(`OCURRIÓ UN ERROR AL GUARDAR EL USUARIO!`)
      console.log(`Ocurrió un error al guardar el usuario`, error)
    }
  }

}