---
meta:
  - name: keywords
    content: git,rebase
  - property: og:url
    content: https://realgoways.github.io/TIL/Git/rebase.html
  - property: twitter:url
    content: https://realgoways.github.io/TIL/Git/rebase.html
---

# Git rebase

reabase 에 대해 알아보자.

## 일반적인 작업 흐름
![image](https://user-images.githubusercontent.com/15275415/89151746-9767d400-d59c-11ea-9724-1910ff5a44a1.png)

## 세 개 이상의 브랜치를 병합할 때
- `master` 브랜치를 기준으로 `hotfix1~3` 브랜치가 생성되었다고 할 때
![image](https://user-images.githubusercontent.com/15275415/89151627-5cfe3700-d59c-11ea-99f1-9470bff2be11.png)

- `hotfix1` merge
![image](https://user-images.githubusercontent.com/15275415/89151653-67203580-d59c-11ea-8f36-d12ac2b9d99e.png)

- `hotfix2` merge
![image](https://user-images.githubusercontent.com/15275415/89151687-769f7e80-d59c-11ea-9136-1273104c0d12.png)

- `hotfix3` merge
![image](https://user-images.githubusercontent.com/15275415/89151710-83bc6d80-d59c-11ea-9233-f38dd9267f91.png)

## git rebase 사용 시

### `hotfix1` 브랜치부터 정리
- `hotfix1` 브랜치에서 rebase 실행
```ts
git rebase master
```

- rebase 하면서 conflict 발생 시
  - `hotfix1` 브랜치의 이름이 `hotfix1|REBASE 1/1` 로 변경된다.
  - conflict 상태를 해결하기 위해 세 가지 옵션을 제공
```
git rebase --continue : 충돌 상태를 해결한 후 계속 작업을 진행할 수 있게 한다.
git rebase --skip : 병합 대상 브랜치의 내용으로 강제 병합을 실행한다.
                    즉, 여기서 해당 명령을 실행하면 master 브랜치를 강제로 병합한 상태가 된다.
                    또한 해당 브랜치에서는 다시 git rebase 명령을 실행할 수 없다.
git rebase --abort : git rebase 명령 실행을 취소한다.
                     다시 git rebase hotfix2 명령을 실행할 수 있다.
```
  - conflict 발생한 부분을 수정하고 `git add .` 으로 add 해준 뒤
    `git rebase --continue` 명령 실행, 아래는 실행 했을 때의 작업 흐름
![image](https://user-images.githubusercontent.com/15275415/89151782-aea6c180-d59c-11ea-958c-3e5f06b25b81.png)
  - `master` 브랜치로 이동 후 `git merge hotfix1 --no-ff` 를 통해 최종 병합
    `--no--ff` : fast-forward를 하지 말라는 옵션, 병합한 흔적을 명시적으로 커밋 그래프에 남김
![image](https://user-images.githubusercontent.com/15275415/89151799-bb2b1a00-d59c-11ea-9d71-853ef117a2ac.png)
- `hotfix2, hotfix3` 도 같은 방법으로 rebase 실행
![image](https://user-images.githubusercontent.com/15275415/89151868-da29ac00-d59c-11ea-9bcc-038998ac794b.png)

# git rebase -i : 커밋 내역 합하기

리베이스 할 커밋을 고르는 작업

- 가장 최근 커밋 내역 2개를 합하는 경우
```
git rebase -i HEAD~~
```
실행하면, vim 편집기 창에 두 커밋의 요약 정보가 표시된다.
접두어에 대한 설명도 포함되어 있다.

- 남기는 커밋 메세지 앞에는 접두어 `pick`
- 없애는 커밋 메세지 앞에는 접두어 `fixup`
- 커밋 SHA-1 체크섬 값은 꼭 남겨두어야 한다.
- ~기존의 커밋 메세지를 수정할 수는 없다.~

---

## `git rebase -i` 를 사용해서 중간에 낀 커밋 메세지 수정
```
git rebase -i {수정을 시작할 커밋의 직전 커밋}`
```
ex) `git rebase -i HEAD~3` 실행 시
=> `HEAD~2, HEAD~1, HEAD` 커밋 출력

### reword
커밋 메세지를 변경하는 명령
- 커밋 앞에 `reword` 명령으로 수정하고 저장 시, 해당 커밋의 메세지를 다시 작성하는 에디터 창 오픈
- 커밋 메세지가 정상으로 변경되고 커밋의 해쉬값 또한 변경된다.

### edit
커밋 메세지 뿐 아니라 커밋의 작업 내용도 변경할 수 잇는 명령
- 커밋 앞에 `edit` 명령으로 수정하고 저장 및 종료하면 변경할 커밋으로 checkout 됨
- 그 상태에서 변경할 작업 수행
  - 필요하면 code 수정
  - `git add .` => staged 상태로 변경
  - `git commit --amend -m "변경할 커밋 메세지"` => 커밋 메세지 수정
  - `git rebase --continue` => rebase 를 마침