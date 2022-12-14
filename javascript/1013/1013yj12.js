/* 
    < 문제 >

1) 

2) 최초 객체 초기화.
    father: '파더',
    mother: '머더',
    son: '손',
    brother: null,
    sister: null,

3) outputFamily 메서드는 객체 내부에구성.

4) initSibling 메서드는 객체 외부 함수로 정의하되
    객체 내부에서 참조를 통해 정의.

6) 출력 결과는 아래와 동일하게 출력되도록 구현.

    아빠 : 파더
    엄마 : 머더
    아들 : 손
    형 : 없음
    누나 : 없음

    아빠 : 파더
    엄마 : 머더
    아들 : 손
    형 : 브러더
    누나 : 씨스터
*/


function initSibling(brother, sister) {
    this.brother = brother;
    this.sister = sister;}

const family = {
    father: '파더',
    mother: '머더',
    son: '손',
    brother: null,
    sister: null,
    initSibling,
    outputFamily() {
    console.log(`아빠 : ${this.father}`);
    console.log(`엄마 : ${this.mother}`);
    console.log(`아들 : ${this.son}`);
    console.log(`형 : ${this.brother || '없음'}`);
    console.log(`누나 : ${this.sister || '없음'}`);
    }
};

family.outputFamily();
console.log();

family.initSibling('브러더', '씨스터');
family.outputFamily();

/////

const family1 = {
    'father': '파더',
    'mother': '머더',
    'son': '손',
    'brother': null,
    'sister': null,
    initSibling,
    outputFamily() {
        for (const key in family1) {
            if (this[key] == null) {
                console.log(`${key}: 없음`);
            } else if (typeof(this[key]) === 'function') {
                break;
            } else {
                console.log(`${key}: ${this[key]}`);
            }
        }
    },
}

function initSibling(brother, sister) {
    this.brother = brother;
    this.sister = sister;
}

family.outputFamily();
console.log();

family.initSibling('브러더', '씨스터');
family.outputFamily();



//진우코드 

const family2 = {
    father: '파더',
    mother: '머더',
    son: '손',
    brother: null,
    sister: null,
    outputFamily() {
        for (const v in family2) {
            if (typeof (family2[v]) !== 'function') {
                if (family2[v] === null) {
                    family2[v] = '없음';
                }

                console.log(`${v} : ${family2[v]}`);
            }
        }

    },
    initSibling,

};



///선생님꺼


function initSibling(brother, sister) {
    this.brother = brother;
    this.sister = sister;
}

const family = {
    father: '파더',
    mother: '머더',
    son: '손',
    brother: null,
    sister: null,
    outputFamily() {
        const fieldName = ['아빠', '엄마', '아들', '형', '누나'];

        let i = 0;
        for (const v in family) {
            if (!fieldName[i]) break;
            console.log(`${fieldName[i++]} : ${this[v] || '없음'}`);
            
        }
    },
    initSibling
}

family.outputFamily();
console.log();

family.initSibling('브러더', '씨스터');
family.outputFamily();
