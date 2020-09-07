function Animal(name, weight) {
    this.name = name;
    this.weight = weight;

    this.setName = function (newName) {
        this.name = newName;
    }

    this.setWeight = function (newWeight) {
        this.weight = newWeight;
    }

    this.getName = function () {
        return this.name;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.toString = function () {
        return "Con thú tên là " + this.name + ", cân nặng là " + this.weight + "<br>";
    }
}