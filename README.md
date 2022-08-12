# 프로젝트 Description

프로젝트명 : 숫자야구

인터넷에서, 간단하게 게임을 할 수 있는 사이트입니다. 게임의 종류는 숫자야구로, 4가지 3가지를 선택할 수 있고 카운트에 맞춰서 숫자를 모두 맞추면 성공입니다.

디렉토리 구조 : Vue와 자바스크립트로만 이루어진 홈페이지입니다. asset안에는 필요한 정보가, views 안에는 홈페이지 코드가 들어가 있습니다.

## 프로젝트 정보

Vue로 만들어진 홈페이지입니다. vue와 vue-router만 설치한다면, 무리없이 사용 가능합니다.

사용 방법은, 페이지에 들어가 숫자야구를 즐기시면 끝입니다. 기획 자체도 간단하게 인터넷에서 즐길 수 있는 게임이라는 컨셉으로 잡아서, 페이지에 들어가서 숫자야구만 즐기면 됩니다.

## 프로젝트 결과물

+ 홈페이지
<img width="410" alt="홈" src="https://user-images.githubusercontent.com/48556879/184275441-aa664a09-9339-401c-88df-7dd5173811e1.png">

+ 설명 페이지
<img width="496" alt="설명" src="https://user-images.githubusercontent.com/48556879/184275459-737b820a-913c-419d-a1db-6ab5f9cad28a.png">

+ 게임 화면
<img width="642" alt="게임화면" src="https://user-images.githubusercontent.com/48556879/184275473-0f42aa98-84b4-4673-a1a7-c8698a041bbe.png">

+ 게임 화면 - 성공시
<img width="713" alt="성공화면" src="https://user-images.githubusercontent.com/48556879/184275483-2b21ac95-9523-422c-9f7f-559eafe3499a.png">

+ 게임 화면 - 실패시
<img width="620" alt="게임 실패" src="https://user-images.githubusercontent.com/48556879/184275518-527b794e-6c9d-4152-a67b-3ce46640bcce.png">

+ 게임 화면 - 오류처리
<img width="726" alt="오류처리" src="https://user-images.githubusercontent.com/48556879/184275546-f737fdcf-f8ef-4591-b832-bb5e4118024d.png">

+ 간단한 코드 설명

```java_script
const makeNumbers = () => {
    const integer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 3; i += 1){
        const choice = integer.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(choice);
    }
    return array;
}
```

랜덤 함수를 통해, 정답인 숫자를 만들어주는 코드가 핵심입니다. 그 이후, 정답과의 비교를 통해 스트라이크와 볼을 출력해줍니다.

+ 후기

처음으로 해보는 프로젝트였습니다. 어렸을 적, 웹 홈페이지에서 했던 게임이 생각나서 만들었습니다. 고등학생 당시, 친구들과 즐겁게 했던 숫자야구 게임과 Vue를 결합하여 제작했습니다. html 과 css에 대해 자세히 알게 되었고, html의 블럭 개념, css 개념, javascript의 여러 문법에 대해서 자세히 알게 되었습니다. 또한, Vue라는 프레임워크에 대해서 자세히 공부하게 된 점이 좋습니다.

## 자세한 설명

자세한 설명은, 김홍길_몰입프로젝트.pptx 에 최종 발표자료를 올려두었으니 참고 바랍니다.
