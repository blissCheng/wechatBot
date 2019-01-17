const config = {
  from: [
    '孟鑫',
    '吔～'
  ],
  messageDict: [
    {
      name: 'welfare',
      nickName: '双色球',
      code: '1',
    }, {
      name: 'sports',
      nickName: '大乐透',
      code: '2'
    }
  ],
  welfare: {
    days: [2, 4, 7],
    exclude: [1, 3, 5],
    startHour: 9,
    endHour: 22,
    red: {
      number: 6,
      range: [1, 33]
    },
    blue: {
      number: 1,
      range: [1, 16]
    }
  },
  sports: {
    days: [1, 3, 6],
    exclude: [2, 4, 5],
    startHour: 9,
    endHour: 22,
    red: {
      number: 5,
      range: [1, 35]
    },
    blue: {
      number: 2,
      range: [1, 12]
    }
  }
}

export default config;