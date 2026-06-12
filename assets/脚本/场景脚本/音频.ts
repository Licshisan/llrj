import { _decorator, Component, AudioSource, AudioClip, director, resources, random } from 'cc';
import { 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass('音频管理器')
export class 音频管理器 extends Component {
    static instance: 音频管理器;
    @property(AudioSource) audioSource!: AudioSource;
    @property(AudioSource) bgmSource!: AudioSource;

    onLoad() {
        director.addPersistRootNode(this.node);
        音频管理器.instance = this;
    }

    playByName(path: string, vol = 0.2) {
        if (!设置.音效开关) return;
        resources.load("audio/" + path, AudioClip, (err, clip) => {
            console.log(err);
            if (err) return;
            this.audioSource.playOneShot(clip, vol);
        });
    }

    playBGM(path?: string, vol = 0.1) {
        if (!设置.播放音乐) return;
        console.log(this.bgmSource)
        if(this.bgmSource.playing) return;
        const bgms = ["BGM1", "BGM2", "BGM3", "BGM4"]
        if(!path) {
            path = bgms[Math.floor(Math.random() * bgms.length)]
        }
        console.log(path)
        resources.load("audio/" + path, AudioClip, (err, clip) => {
            if (err) {
                console.error("背景音乐加载失败：", err);
                return;
            }
            this.bgmSource.clip = clip;
            this.bgmSource.volume = vol;
            this.bgmSource.loop = true;
            this.bgmSource.play();
        });
    }

    stopBGM() {
        this.bgmSource.stop();
    }
}