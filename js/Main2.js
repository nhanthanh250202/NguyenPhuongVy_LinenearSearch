export default class Main2 extends Phaser.Scene {

  constructor() {
    super("Main2");
  }

  preload() {
    // Tải âm thanh
    this.load.audio("backgroundMusic", "../audio/Game.mp3");
    this.load.audio("buttonClick", "../audio/Click.wav");
    this.load.image("Luatchoi", "../assets/Luatchoi.png");
    this.load.image("Playbutton", "../assets/Start.png");
  }

  create() {
    // Tạo các đối tượng âm thanh
    const backgroundMusic = this.sound.add("backgroundMusic", { loop: true });
    const buttonClickSound = this.sound.add("buttonClick");

    // Thêm sự kiện pointerdown để tiếp tục ngữ cảnh âm thanh
    this.input.on('pointerdown', () => {
      if (this.sound.context.state === 'suspended') {
        this.sound.context.resume();
      }
    });

    // Phát âm thanh nền
    backgroundMusic.play();

    // Thêm hình nền và nút PlayButton
    const background = this.add.image(1200/1.5, 700/1.8, "Luatchoi");
    const PlayButton = this.add.sprite(1300/1.152, 700/1.1, "Playbutton");
    
    PlayButton.setInteractive();

    // Thêm sự kiện pointerdown cho PlayButton
    PlayButton.on("pointerdown", () => {
      console.log("Nhấn nút Play!");

      // Phát âm thanh khi nhấn nút PlayButton
      buttonClickSound.play();

      // Tắt âm thanh nền trước khi chuyển trang
      backgroundMusic.stop();

      // Chuyển đến trang "Mode.html"
      window.location.href = "./Mode.html";
    });
  }

  // Tắt âm thanh nền khi scene bị hủy
  destroy() {
    const backgroundMusic = this.sound.get("backgroundMusic");
    if (backgroundMusic && backgroundMusic.isPlaying) {
      backgroundMusic.stop();
    }

    super.destroy();
  }
}
