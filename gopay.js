// Ini fitur gopay dengan fee 0% sudah termasuk PPN
class Gopay {
    constructor(idr, number){
        this.idr = idr;
        this.number = number;
    }

    // Fungsi notification with framework JS
    getNotification(name){
        alert(`Halo kak ${name}, saldo Anda ${this.number} ${this.idr}`)
    }
}