import { App } from './src/App'

const app = new App().server
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
