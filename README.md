# 리액트로 스톱워치 기능 구현
https://snazzy-youtiao-740c6e.netlify.app/
<hr>

![image](https://github.com/Jannyoon/react_stopWatch/assets/149743716/68cfa633-04b4-4214-9440-ce5fe412be23)

- 렌더링과 관계없는 setInterval은 useRef를 사용해서 구현.
- 화면에 출력되는 분, 초는 useState로 렌더링 때마다 저장.

<hr>

### issue : 배경 그라데이션 모바일에서 깨짐 현상.
* 해결 방식  <br>
```
html { height : 100vh; }
body { height : 100%; background-repeat : no-repeat; background-attachment : fixed; }
```

<br>

* background-attachment 속성 : 배경 이미지의 고정 여부를 설정한다.
예를 들어 사용자가 스크롤을 한다면, 내부 텍스트는 움직이지만 배경 이미지는 변동되지 않는다.


