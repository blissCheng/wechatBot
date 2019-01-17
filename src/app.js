
import config from './config';
import { Wechaty } from 'wechaty';
import { lotter } from './services';
const bot = new Wechaty();

// 机器人实例 

bot.on('scan', qrcode => {
  require('qrcode-terminal').generate(qrcode, { small: true })
});
bot.on('login', user => {
  console.log(`${user} 已登录`);
});
bot.on('message', msg => {  // Message
  const contact = bot.userSelf(); // Contact
  const from = msg.from().alias(); // Contact
  const to = msg.to().name(); // Contact
  // 接收方是本人
  if (to === contact.name() || to === '文件传输助手') {
    from.then(res => {
      if (!res) {
        res = msg.from().name(); // 如果没有备注名
      }
      // 如果包含选中人
      if (config.from.indexOf(res) > -1) {
        reply(msg);
      }
    });
  }
});

bot.start()
  .then(() => {
    console.log('starter Bot Started！');
  });

const reply = (msg) => {
  const { messageDict } = config;
  messageDict.forEach((v) => {
    console.log(msg.text() === v.code);
    if (msg.text() === v.code) {
      msg.to().say(`${v.nickName}：\n ${lotter.getSelected(v.name)}`)
    }
  })
};

