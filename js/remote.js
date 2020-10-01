class Remote{
    constructor(id) {
        this.id = id
    }
    changeChanel(newChanel){
        TV.changeChanel(newChanel);
    }
    chandeVol(newVol){
        TV.changeVol(newVol);
    }
}