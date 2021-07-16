class Form{
    constructor(){
        this.inputbox1 = createButton("add food");
        this.inputbox2 = createButton("feed the dog");
    }
    display(){
        this.inputbox1.position(
            displayWidth - displayWidth / 2,
            displayHeight - displayHeight / 1.2
          );
          this.inputbox2.position(
            displayWidth - displayWidth / 1.8,
            displayHeight - displayHeight / 1.2
          );
          this.inputbox1.mousePressed(() => {
            database.ref("/").update({
                milk: milk+1,
              });
          });
          this.inputbox2.mousePressed(() => {
            database.ref("/").update({
                milk: milk-1,
              });
        });
    }
}