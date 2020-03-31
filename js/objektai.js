class man {
    constructor(gender, age, hair){
        this.genderCount = gender;
        this.ageCount = age;
        this.hairCount = hair;
        

    this.init();
    }

    init() {
        console.log(this);

        this.kiekMetu();
        this.kokiosSpalvosPlaukai();
    }

    kiekMetu(){
        return console.log(`Šiam žmogui yra ${this.ageCount} metu`);

    }

    kokiosSpalvosPlaukai(){
        return console.log(`Sio zmogaus plaukai yra ${this.hairCount}`)
    }

}

const pirmasZmogus = new man('vyras', 30, 'rudi')
const antrasZmogus = new man('moteris', 20, 'juodi')