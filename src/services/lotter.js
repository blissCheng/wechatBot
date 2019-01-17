import config from '../config';
import { start } from 'repl';
export class Lotter {

  constructor() {
    this.selected = {
      welfare: [],
      sports: []
    };
    this.result = {
      welfare: {},
      sports: {}
    };
  }

  getSelected(state) {
    const obj = config[state];
    
    // 获取红色随机值
    const redRandom = () => {

      let results = [];

      const getVal = () => {
        const val = Math.ceil(Math.random() * obj.red.range[1]);
        // 如果已存在数字，轮询重置
        if (results.indexOf(val) > -1) {
          return getVal();
        } else {
          return val;
        }
      }

      for (let n = 0; n < obj.red.number; n++) {
        results.push(getVal());
      }
      return results.sort((a, b) => {
        return a - b > 0;
      });
    }; 
    // 获取蓝色值
    const blueRandom = () => {
      
      let results = [];

      const getVal = () => {
        const val = Math.ceil(Math.random() * obj.blue.range[1]);
        // 如果已存在数字，轮询重置
        if (results.indexOf(val) > -1) {
          return getVal();
        } else {
          return val;
        }
      }

      for (let n = 0; n < obj.blue.number; n++) {
        results.push(getVal());
      }
      return results.sort((a, b) => {
        return a - b > 0;
      });
    };
    // 获取5组
    for (let i = 0; i < 5; i++) {
      this.selected[state].push({
        red: redRandom(),
        blue: blueRandom()
      });
    }
    let result = '';
    // 发送消息
    this.selected[state].forEach(item => {
      let group = item.red.join('  ') + ' * ' + item.blue.join('  ');
      result += group + '\n';
    });
    return result;
  }
 
  getSportsResult() {

  }
  getWelfareResult() {

  }

}
export default new Lotter();