/**
 * 复刻游戏原版加密解密算法
 * 对应原代码 bradi / 逆向加密逻辑
 */

// ========== 核心加解密函数 ==========
/**
 * 加密：原始字符串 → 游戏逗号分隔数字串
 * @param {string} originStr 原始文本
 * @returns {string} 加密串
 */
function encodeSave(originStr) {
    if (!originStr) return "";
    const codeList = [];
    for (let i = 0; i < originStr.length; i++) {
        const code = originStr.charCodeAt(i);
        codeList.push(code * 2 + 13);
    }
    return codeList.join(",");
}

/**
 * 解密：游戏加密串 → 原始字符串（完全复刻原 bradi 函数）
 * @param {string} encryptStr 逗号分割加密串
 * @returns {string|null} 解密原文
 */
function decodeSave(encryptStr) {
    if (encryptStr === undefined || encryptStr === null) {
        return null;
    }
    const strArr = encryptStr.trim().split(",");
    const codeArr = [];
    for (const s of strArr) {
        const num = Number(s);
        codeArr.push((num - 13) / 2);
    }

    const chunkSize = 8192;
    let result = "";
    for (let i = 0; i < codeArr.length; i += chunkSize) {
        const chunk = codeArr.slice(i, i + chunkSize);
        result += String.fromCharCode.apply(null, chunk);
    }
    return result;
}

// ========== 存档对象工具（对象 ↔ 加密串） ==========
/**
 * 存档对象 转 最终加密字符串
 * @param {object} saveObj 游戏存档对象
 * @returns {string} 加密后的存档串
 */
function objToEncrypt(saveObj) {
    const jsonStr = JSON.stringify(saveObj);
    return encodeSave(jsonStr);
}

/**
 * 加密字符串 转 存档对象
 * @param {string} encryptStr 加密串
 * @returns {object|null} 解析后的存档对象
 */
function encryptToObj(encryptStr) {
    const rawStr = decodeSave(encryptStr);
    if (!rawStr) return null;
    try {
        return JSON.parse(rawStr);
    } catch (e) {
        console.error("JSON解析失败", e);
        return null;
    }
}

// ========== 测试代码（运行后自动执行） ==========
(function runTest() {
    console.log("===== 开始加解密测试 =====");

    // 你的游戏默认初始存档（取自你源码 getEl()）
    const defaultSaveData = {
        distance: 1,
        stayDay: [1, 1, 1, 1],
        role: { hp: 50, maxHp: 50, att: 10, def: 0 },
        money: 5,
        day: 1,
        energy: 50,
        maxEnergy: 50,
        hunger: 100,
        maxHunger: 100
    };

    // 1. 对象 → 加密串
    const encryptResult = objToEncrypt(defaultSaveData);
    console.log("1. 加密结果：", encryptResult.slice(0, 100) + "...");

    // 2. 加密串 → 还原对象
    const restoreData = encryptToObj(encryptResult);
    console.log("2. 解密还原对象：", restoreData);

    // 3. 校验是否一致
    const isEqual = JSON.stringify(defaultSaveData) === JSON.stringify(restoreData);
    console.log("3. 校验结果：", isEqual ? "✅ 加解密完全一致" : "❌ 加解密失败");
})();