// Ini fitur gopay dengan fee 0%
class Gopay {
    constructor(idr, number){
        this.idr = idr;
        this.number = number;
    }

    // Fungsi notification
    getNotification(name){
        alert(`Halo kak ${name}, saldo Anda ${this.number} ${this.idr}`)
    }
}