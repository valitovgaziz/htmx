import express from 'express'

// Создаем приложение `express`
const app = express()
// Указываем директорию со статичными файлами
app.use(express.static('public'))

// Разметка 1
const html1 = `<div>
  <p>hello world</p>
  <button
    name="my-button"
    value="some-value"
    hx-get="/clicked"
  >
    click me
  </button>
</div>`
// Разметка 2
const html2 = `<span>no more swaps</span>`

// Обработчик POST-запроса
app.post('/clicked', (req, res) => {
  // Отправляем в ответ разметку 1
  res.send(html1)
})
// Обработчик GET-запроса
app.get('/clicked', (req, res) => {
  // Отправляем в ответ разметку 2
  res.send(html2)
})

app.listen(3000)