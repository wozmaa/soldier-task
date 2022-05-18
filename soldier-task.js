const soldier = {
    name: 'khamzat',
    health: 10,
    gun: {
        gunName: 'tapch',
        cartridges: 30,
    },
    supplies: 8,

    shoot: function () {
        --this.cartridges;
        if(this.cartridges < 1){
            console.log('обойма пуста. Перезаредитесь')
        } else {
            console.log('бах-бах')
        }
    },

    recharge: function () {
        this.cartridges = 30;
        --this.supplies;
        if(this.supplies < 1){
            console.log('не осталось припасов')
        } else {
            console.log('перезарядка...')
        }
    },

    hurt: function () {
        --this.health;
        if(this.health < 1){
            console.log('Ты проиграл')
        }
    }
}