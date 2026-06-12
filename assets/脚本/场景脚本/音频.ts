import { _decorator, Component, AudioSource, AudioClip, game, director, resources } from 'cc';
import { 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass('音频管理器')
export class 音频管理器 extends Component {
    static instance: 音频管理器;
    @property(AudioSource) audioSource!: AudioSource;
    @property(AudioClip) clips!: AudioClip[];

    onLoad() {
        director.addPersistRootNode(this.node);
        音频管理器.instance = this;
    }

    play(clip: AudioClip, vol = 1) {
        this.audioSource.playOneShot(clip, vol);
    }

    playByName(path: string, vol = 1) {
        if(!设置.音效开关) return
        resources.load("audio/" + path, AudioClip, (err, clip) => {
            if (err) return;
            this.play(clip, vol);
        });
    }
}