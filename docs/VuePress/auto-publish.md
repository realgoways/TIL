---
meta:
  - name: keywords
    content: vuepress,자동,배포,자동배포
  - name: description
    content: vuepress 쉽게 배포하기
  - property: og:title
    content: VuePress 손쉽게 배포하기
  - property: og:description
    content: VuePress 로 생성한 사이트를 손쉽게 배포해보자
  - property: og:url
    content: https://realgoways.github.io/TIL/VuePress/auto-deploy.html
---

# VuePress 손쉽게 배포하기 (자동 빌드 및 배포)
VuePress를 알게 된 후 git pages 를 만든다고 이래 저래 셋팅을 하다 보니  
새로 페이지를 만들거나 수정한 후 최종 반영까지의 단계가 조금 번거롭다고 느낌.

개발자는 게으른게 미덕이라고 하나,  
본인은 쓸데없이 덜 게으른 타입이라 한 땀 한 땀 손으로 하고 직접 확인하는 걸 좋아함ㅋ


그.러.나.  

편리한 방법이 있다면 활용해야지!  
하는 생각이 들었다. (철 들었나)  

![image](https://user-images.githubusercontent.com/15275415/89363494-4fb38a80-d70b-11ea-87d9-c00769d65401.jpg)

개선하고 나면 더 편할텐데 바빠서 개선할 시간이 없다고 하는 유명한 짤.  
찾다보니 레고 버전도 있다ㅋㅋ

![image](https://user-images.githubusercontent.com/15275415/89363497-517d4e00-d70b-11ea-8199-2430fb62d91a.jpg)

## Git Actions 활용

[https://github.com/marketplace/actions/vuepress-deploy](https://github.com/marketplace/actions/vuepress-deploy) 참고

### 저장소 root 에 `.github/workflows` 폴더 설치
::: warning 폴더명
`workflow` 가 아니라 `workflows` 임을 주의.  
:::
처음에 `s` 를 빼먹고 설치해서 액션이 제대로 실행되지 않았었다. 😅

### 위에서 설치한 폴더 하위에 yml 파일 생성
필자는 `main.yml` 로 생성하고 내용은 아래 걸로 추가해줬다.

```sh{2,5,7-8}
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@main

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@1.0.1
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        TARGET_REPO: realgoways/TIL
        TARGET_BRANCH: gh-pages
        BUILD_SCRIPT: yarn && yarn build
        BUILD_DIR: docs/.vuepress/dist/
```

### `ACCESS_TOKEN` 발급 및 셋팅
위 파일에 보면 `secrets.ACCESS_TOKEN` 을 사용하는데 GitHub 저장소에 셋팅을 해줘야한다.


**1. 토큰 발급**  
Settings > Developer settings > Personal access tokens 접속해서 `Generate new token` 을 한다.  
[https://github.com/settings/tokens](https://github.com/settings/tokens)

Note 영역을 적절하게 채우고 `repo` 부분에 체크를 한 후 `Generate Token`
![image](https://user-images.githubusercontent.com/15275415/89365726-32cd8600-d710-11ea-82e2-2346d3d211b2.png)

**2. `ACCESS_TOKEN` 셋팅**  
발행된 토큰을 복사해서 저장소의 Settings > Secrets 로 이동  
(저장소의 `Settings` 쪽으로 들어가야 한다.)

![image](https://user-images.githubusercontent.com/15275415/89366033-f0587900-d710-11ea-8608-e70f4026d51b.png)

`New Secret` 해서 key - value 를 적어준다.  

key : `ACCESS_TOKEN`  
value : 위에서 복사한 토큰  

아래와 같은 형태로 되면 된다.  

![image](https://user-images.githubusercontent.com/15275415/89366235-75dc2900-d711-11ea-94a8-7ec08cef5577.png)


**3. 이제 yml 파일을 push 하면 끝!**  

아래처럼 `Actions` 탭에서 실행 내역을 볼 수 있다.  
(초반에 토큰 설정 시 repo 권한을 안 주고 셋팅해서 무수한 실패를..ㅋㅋ)

![image](https://user-images.githubusercontent.com/15275415/89366418-d4090c00-d711-11ea-9ad5-72d88bd0a2bd.png)

## 기타: 액션 수행 결과 확인

어느 시점에 오류가 발생했는지 확인할 수 있다.
해당 부분을 클릭해보면 자세한 log 도 확인 가능하다.

![image](https://user-images.githubusercontent.com/15275415/89366643-37933980-d712-11ea-99df-3ce5fa180c2b.png)

이로써 저장소에 push 만 하면 gh-pages 까지 자동 배포가 된다~ 🎉  
이제 동그란 바퀴를 달게 되었다! ㅎㅎ

![image](https://user-images.githubusercontent.com/15275415/89366851-a1134800-d712-11ea-9efe-01bd0ef8837f.png)
