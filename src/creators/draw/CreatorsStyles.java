package creators.draw;

import arc.graphics.Color;
import arc.scene.ui.ImageButton;
import arc.scene.ui.ScrollPane;
import mindustry.gen.Tex;
import mindustry.ui.Styles;

import static mindustry.ui.Styles.flatOver;

public class CreatorsStyles {
    public static ImageButton.ImageButtonStyle clearToggleTransi = new ImageButton.ImageButtonStyle(){{
        down = Styles.flatDown;
        checked = Styles.flatDown;
        up = Styles.black6;
        over = flatOver;
    }};

    public static ImageButton.ImageButtonStyle clearTogglei = new ImageButton.ImageButtonStyle(){{
        down = Styles.flatDown;
        checked = Styles.flatDown;
        up = Styles.black;
        over = flatOver;
    }};
    public static ScrollPane.ScrollPaneStyle smallPane = new ScrollPane.ScrollPaneStyle(){{
        vScroll = Tex.clear;
        vScrollKnob = Tex.scrollKnobVerticalThin;
    }};

    public static ImageButton.ImageButtonStyle clearTransi = new ImageButton.ImageButtonStyle(){{
        down = Styles.flatDown;
        up = Styles.black6;
        over = flatOver;
        disabled = Styles.black8;
        imageDisabledColor = Color.lightGray;
        imageUpColor = Color.white;
    }};
}
