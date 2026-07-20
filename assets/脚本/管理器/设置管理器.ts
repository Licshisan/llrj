import { error, sys, warn } from 'cc';

const 默认设置 = {
  游戏版本: '1.0.8',
  上次难度: '普通',
  播放速度: 2,
  播放音乐: true,
  暗夜模式: false,
  自动买果子: false,
  防误触: false,
  批量购买: false,
  // 上次选择: '',
  保留天赋: '',
  经典比例: false,
  生效特质: [],
  音效开关: true,
  锁定天赋: [],
};

export let 设置: typeof 默认设置 = JSON.parse(JSON.stringify(默认设置));

export function 加载设置() {
  try {
    const 设置字符串 = sys.localStorage.getItem('设置');
    if (!设置字符串) {
      error('本地无设置数据，使用默认设置');
      return;
    }

    const 设置对象 = JSON.parse(设置字符串);
    if (typeof 设置对象 !== 'object' || 设置对象 === null) {
      warn('设置对象格式异常，使用默认设置');
      return;
    }

    for (const 键 in 默认设置) {
      if (键 === '游戏版本') {
        设置对象[键] = 默认设置[键];
        continue;
      }
      if (
        !Object.prototype.hasOwnProperty.call(设置对象, 键) ||
        typeof 设置对象[键] !== typeof 默认设置[键]
      ) {
        设置对象[键] = 默认设置[键];
        error(`设置项【${键}】异常，已重置为默认值: ${默认设置[键]}`);
      }
    }

    设置 = JSON.parse(JSON.stringify(设置对象));
  } catch (e) {
    error('加载设置失败', e);
  }
}

export function 保存设置() {
  try {
    const 设置字符串 = JSON.stringify(设置);
    sys.localStorage.setItem('设置', 设置字符串);
  } catch (e) {
    error('保存设置失败', e);
  }
}
