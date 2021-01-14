const initState = () => {
  const init = {
    tasks: [{
    text: 'Сделать что-то в среду',
    id: Date.now() + 1,
    status: false
    },{
    text: 'Бросить курить вчера',
    id: Date.now() + 3,
    status: true
    },
    {
      text: 'Поиграть с котом соседки',
      id: Date.now() + 2,
      status: false
      }]
  }
  return JSON.parse(localStorage.getItem('store')) || init
}

export default initState
