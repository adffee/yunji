'use strict';

/**
 * 단어장을 출력하려고 한다. 하지만 아래의 객체는 아직 완성되지 않았다.
 * updateWord 메소드와 printWordNote 메소드가 필요하다.
 * 단어장의 빈 부분을 완성하는 updateWord 메소드는 객체의 외부에서 정의하고 '참조'를 통해서 객체에 정의한다.
 * printWordNote 메소드는 객체의 내부에서 정의한다.
 *
 * null인 부분은 실제 출력했을 때에는 '안배움' 문자열로 나타나야한다.
 * 또한 실제 실행 구문은 아래의 4 구문으로 제한한다.
 *
 * wordNote.printWordNote(); 
 * console.log();
 *
 * wordNote.updateWord();
 * wordNote.printWordNote();
 */

const wordNote = {
    father: '아빠',
    mother: '엄마',
    son: '아들',
    brother: null,
    sister: null,
    updateWord,
    printWordNote() {
        for (const key in wordNote) {
            if (typeof (wordNote[key]) !== 'function') {
                if (wordNote[key] === null) {
                    wordNote[key] = ' 안배움';
                }

                console.log(`${key} : ${wordNote[key]}`);
            }
        }
    }
};

function updateWord(brother, sister) {
    this.brother = brother;
    this.sister = sister;
}


wordNote.printWordNote();
console.log();

wordNote.updateWord('형', '누나');
wordNote.printWordNote();