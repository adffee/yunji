/*
  < 문제 >

- 학생명과 국어, 영어, 수학 점수를 순서대로 입력받아 평균을 구하여 출력하는 프로그램 구현.
  단, 순서대로 정보를 입력받는 과정에서 어느 하나라도 값이 입력되지 않는 경우에는 다음 입력
  과정으로의 진행을 멈추고 "학생 정보가 순서대로 정확히 입력되지 않았습니다." 문구를 대화상자
  형태로 표시하고 프로그램이 종료되도록 구현.
*/

'use strict'

////무한루프... 

let stname, kor, eng, math, av;

for (; ;){
    if (stname = prompt('학생명: ')) {
        if (kor = +prompt('국어: ')) {
            if (eng = +prompt('영어: ')){
                if (math = +prompt('수학: ')) {
                    av = (kor + eng + math) / 3;
                    alert(`${stname} 학생의 국어, 영어, 수학 점수의 평균: ${av}`);
                    break;
                }
            }
        }
    }
    alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
    break;
}


////무한루프쓰지마라...

let stName, kor, eng, math;

if (stName = prompt('학생명 : ')) {
    if (kor = +prompt('국어:')) {
        if (eng = +prompt('영어: ')) {
            if (math = +prompt('수학: ')) {
            everage = (kor + eng + math) / 3;
            alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균: ${everage}`);
            }
        }
    }
}

if (!math) {
    alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
}

///////선생님꺼

let stName, kor, eng, math;

if (stName = prompt('학생명: ')) {
    if (kor = +prompt('국어: ')) {
        if (eng = +prompt('영어: ')) {
            if (math = + prompt('수학: ')) {
                alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균: ${(kor+eng+math)/3}`);
            }
        }
    }
}

if (!math) {
    alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
}

//////////////////////////////////////


(stName = prompt('학생명: '))
    && (kor = +prompt('국어: '))
    && (eng = +prompt('영어: '))
    && (math = +prompt('수학: '))
    && alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균: ${(kor + eng + math) / 3}`);

math || alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
