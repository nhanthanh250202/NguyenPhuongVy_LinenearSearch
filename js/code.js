export default class Mainscene extends Phaser.Scene {
  constructor() {
      super("Mainscene");
      this.backgroundMusic = null; // Thêm biến để theo dõi âm thanh
        
  }

  preload() {
      // Tải âm thanh
      this.load.audio("backgroundMusic", "../audio/Trangchu.mp3");
      this.load.audio("buttonClick", "../audio/Click.wav"); // Đổi đường dẫn tùy thuộc vào vị trí tệp âm thanh
      this.load.audio("learnbuttonClick", "../audio/Click.wav"); // Thêm âm thanh cho nút "Learn"
      this.load.image("Manhinhchinh", "../assets/Manhinhchinh.png");
      this.load.image("Play", "../assets/Play.png");
      this.load.image("Learn", "../assets/Learn.png");
      this.load.image("Luatchoi", "../assets/Luatchoi.png");
  }

  create() {
      // Tạo âm thanh và phát nó
      const backgroundMusic = this.sound.add("backgroundMusic", { loop: true });
      backgroundMusic.play();
      const background = this.add.image(1200 / 1.5, 700 / 1.8, "Manhinhchinh");

      const tenbtn = this.add.sprite(1600 / 2.6, 1000 / 1.93, "Play");
      // Thêm âm thanh khi nút được nhấn
    const buttonClickSound = this.sound.add('buttonClick');
      tenbtn.setInteractive();
      tenbtn.on("pointerdown", () => {
          console.log("Nhấn nút Play!");
          // Phát âm thanh khi nút được nhấn
        buttonClickSound.play();
          // Tắt âm thanh khi chuyển sang scene mới
          backgroundMusic.stop();
          this.scene.start("Main2"); // Transition to the "Main2" scene
      });

      const learnbtn = this.add.sprite(600 / 0.6, 765 / 1.5, "Learn");
      const learnbuttonClickSound = this.sound.add('learnbuttonClick'); // Thêm âm thanh cho nút "Learn"
    learnbtn.setInteractive();
      learnbtn.setInteractive();
      learnbtn.on("pointerdown", () => {
          console.log("Nhấn nút Learn!");
      // Phát âm thanh khi nút được nhấn
      learnbuttonClickSound.play();
          window.location.href = "/js/Learn.html";
      });
  }
  

  update() {}
}
