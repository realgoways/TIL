---
meta:
  - name: keywords
    content: Git,계정분리,계정여러개
  - name: description
    content: Git 계정을 분리해서 여러 개로 사용하기
  - property: og:title
    content: Git 계정 분리해서 사용하기
  - property: og:description
    content: Git 계정을 분리해서 여러 개로 사용하기
  - property: og:url
    content: https://realgoways.github.io/TIL/Git/user-separate.html
  - property: twitter:url
    content: https://realgoways.github.io/TIL/Git/user-separate.html
---

# Git 계정 분리해서 사용하기

회사 업무와 개인적인 코딩 간 git 계정을 분리해서 커밋해야 하는 상황이 생긴다.  

특정 폴더에서만 특정한 `username` 과 `email` 을 사용하고 싶을 때
`.gitconfig` 파일을 따로 생성하고 적절한 조건을 지정해주면 된다.

### 1. `.gitconfig` 열기
```sh
$ vi ~/.gitconfig
```

### 2. 조건 지정

특정 폴더 하위에서 작업할 경우 별도로 지정한 config 를 사용하도록 지정한다.
```sh
[includeIf "gitdir:~/dev/realgo/"]
        path = .gitconfig-personal
```

기존 설정과 비교해보면 아래와 같다.

- AS-IS
```sh
[pager]
        branch = false
[user]
        email = w.w@회사이메일
        name = w.w
```

- TO-BE
```sh
[pager]
        branch = false
[user]
        email = w.w@회사이메일
        name = w.w
[includeIf "gitdir:~/dev/realgo/"]
        path = .gitconfig-personal
```

### 3. 새로운 config 파일 생성
- 원하는 설정 값으로 config 파일을 생성해두면 끝
```sh
$ vi ~/.gitconfig-personal

[pager]
        branch = false
[user]
        email = tohoni@naver.com
        name = realgo
[github]
        user = realgoways
```