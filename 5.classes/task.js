class Student {
    constructor(name){
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) { return; }
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        return this.marks[subject].reduce((acc, mark, idx, arr) => acc + mark / arr.length, 0); 
    }
    getAverage() {
        let keys =  Object.keys(this.marks);
        if (keys.length === 0) { return 0;}
        let avgResult = 0;
        for (let i = 0; i < keys.length; i++) {
            avgResult += this.marks[keys[i]].reduce((acc, mark, idx, arr) => acc + mark / arr.length, 0); 
        }
        return avgResult / keys.length;
    }
}