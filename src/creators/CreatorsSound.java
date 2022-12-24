package creators;

import arc.Core;
import arc.assets.AssetDescriptor;
import arc.assets.loaders.SoundLoader;
import arc.audio.Sound;
import mindustry.Vars;

public class CreatorsSound {
    public static Sound loadSound(String soundName) {
        if (!Vars.headless) {
            String name = "sounds/" + soundName;
            String path = Vars.tree.get(name + ".ogg").exists() ? (name + ".ogg") : (name + ".mp3");
            Sound sound = new Sound();
            AssetDescriptor<?> desc = Core.assets.load(path, Sound.class, new SoundLoader.SoundParameter(sound));
            desc.errored = Throwable::printStackTrace;
            return sound;
        }
        return new Sound();
    }
}
