export class Hero {
    name = 'Boris';
    birthDate = new Date();
    heroCurreny = 100;
    heroPower = 2;
    boostAbility = 3;

    constructor(name: string, heroPower: number) {
        this.name = name;
        this.heroPower = heroPower;
    }
}