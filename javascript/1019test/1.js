/**
 * 1. string 변수에 특정 사이트의 URL(문자열)을 할당하라.
 * ex) https://www.naver.com/
 *
 * 2. string 변수에서 http:// 나 https:// 를 제거한채로 step1 변수에 저장하라.
 * ex) www.naver.com/
 *
 * 3. step1 변수의 문자열에서 '.'을 기준으로 문자열을 잘라 배열 형태로 출력하라.
 * ex) ['www', 'naver', 'com/']
 */

'use strict'

let url = 'https://www.naver.com/';

let step1, step2;

step1 = url.split('//')[1];
console.log(step1);

step2 = step1.split('.', 3);
console.log(step2);