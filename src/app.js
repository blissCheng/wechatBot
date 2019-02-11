
import config from './config';
import { Wechaty } from 'wechaty';
import { lotter } from './services';

const bot = new Wechaty();

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
      // 如果消息来源存在在配置列表
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
    // 消息匹配，回复内容
    if (msg.text() === v.code) {
      // 回复对象
      const replyObj = msg.to();

      switch (v.code) {
        case '1':
        case '2':
          replyObj.say(`${v.nickName}：\n ${lotter.getSelected(v.name)}`); // 获取随机彩
          break;
        case '3':
          replyObj.say()
      }
    }
  })
};




