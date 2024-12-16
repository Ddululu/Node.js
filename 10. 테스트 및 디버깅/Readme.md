# 10. 테스트 및 디버깅

### Lab 설명

Mocha와 Chai를 사용하여 Node.js 애플리케이션의 유닛 테스트를 작성하고 디버깅하는 방법을 배웁니다.

### 목표

- Mocha와 Chai를 사용한 테스트 작성 이해
- 테스트 주도 개발(TDD) 및 디버깅 기법 익히기

```jsx
// test.js
const { expect } = require('chai');

function add(a, b) {
  return a + b;
}

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
```