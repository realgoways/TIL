---
meta:
  - name: keywords
    content: jpa
  - name: description
    content: jpa 개념
  - property: og:title
    content: jpa 개념
  - property: og:description
    content: jpa 개념
  - property: og:url
    content: https://realgoways.github.io/TIL/JPA/about_jpa.html
  - property: twitter:url
    content: https://realgoways.github.io/TIL/JPA/about_jpa.html
---

# JPA 란?

- Java Persistence API
- JPA를 구현한 ORM Framework를 사용하여 JPA를 이용한다. (ex. Hibernate, EclipseLink, OpenJPA 등)

# ORM 은 또 뭐야?

ORM : Object Relational Mapping

- 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것
  - 객체 지향 프로그래밍은 클래스를 사용하고, 관계형 데이터베이스는 테이블을 사용한다.
  - 객체와 관계형 모델 간에 불일치가 존재한다.
  - ORM을 통해 객체 간 관계를 바탕으로 SQL을 자동으로 생성하여 불일치를 해결한다.

## ORM 장점

- 객체 지향적인 코드로 인해 더 직관적, 비즈니스 로직에 집중할 수 있게 도와준다.
- 재사용 및 유지보수의 편리성이 증가한다.
- DBMS에 대한 종속성이 줄어든다.

## ORM 단점

- 완벽히 ORM 으로만 서비스를 구현하기가 어렵다.
- 프로시저가 많은 시스템에서는 ORM의 장점을 활용하기 어렵다.

## Example

아래 이미지는 `Student` 자바 클래스와 `student` DB 테이블 간의 ORM 을 보여준다.

![image](https://user-images.githubusercontent.com/15275415/117572449-edf6d580-b10d-11eb-9265-07a30c17207d.png)
