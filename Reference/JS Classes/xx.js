class MyArray {
    
    constructor(){}

    isArray(){
        // ...
    }

    push() {
        // ...
    }
}







class Lol {

    constructor() {
        console.log('생성됨!!!!')

        this.attack();
    }

    attack() {
        return 56;
    }

    amur() {
        return 56;
    }

    hp() {
        return 500
    }
}

new Lol()

class Charactor extends Lol {
    charNm
    constructor(charNm) {
        super();
        this.charNm = charNm;
    }
}





class User {
    constructor(userId, userNm, userAge) {
        this.userId = userId;
        this.userNm = userNm;
        this.userAge = userAge;

        console.log('asd');

        this.message = this.userId + this.userNm + this.userAge;
        }

    xx(userId) {
        this.userId = userid
    }

    cc(){
        this.xx(1);
        this.xx(2);
    }

}

new User("es99con", "김동민", 29);

















class Starcraft {
    constructor(starname) {
        this.starname = starname;  
    }
    marinattack() {
        return 6
    }
    medicattack() {
        return 0
    }
}

new Starcraft('zert')
new Starcraft('protoss')

class ModelMarin extends Starcraft {
    constructor(choice, mod) {
        super(choice);
        this.model = mod;
    }
    marin() {
        return this.marinattack() 
    }
    marinattack() {
        return 6
    }
    medicattack() {
        return 0
    }
}

class xxx extends Starcraft {

}

mychoice = new ModelMarin('terran', 'marin')

