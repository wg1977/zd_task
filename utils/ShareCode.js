// 助力码辅助生成
class ShareCode {
  constructor(username, fruits, pet, plantBean) {
    this._username = username
    // 东东农场互助码
    this._fruits = fruits
    // 东东萌宠互助码
    this._pet = pet
    // 种豆得豆互助码
    this._plantBean = plantBean
  }

  get username() {
    return this._username
  }

  get fruits() {
    return this._fruits
  }

  get pet() {
    return this._pet
  }

  get plantBean() {
    return this._plantBean
  }
}

const shareCodes = [
  new ShareCode('七月的冬途', 'dfc96be827cc4ad58401d376bbdfbe1b', 'MTAxODc2NTEzNDAwMDAwMDAxMDQxMTYyNw==', 'bgtullxfnxmzyrjj5rfzehfr2u')
]

module.exports = {
  ShareCode,
  shareCodes
}
