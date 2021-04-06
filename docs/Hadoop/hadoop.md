---
meta:
  - name: keywords
    content: hadoop,하둡
  - name: description
    content: hadoop 개념, 하둡 개념
  - property: og:title
    content: hadoop 개념, 하둡 개념
  - property: og:description
    content: 하둡이 뭔지 알아보자
  - property: og:url
    content: https://realgoways.github.io/TIL/Hadoop/hadoop.html
  - property: twitter:url
    content: https://realgoways.github.io/TIL/Hadoop/hadoop.html
---

# Hadoop 이 뭐야?

이젠 공부할 때가 됐지
비정형 데이터를 포함한 빅데이터를 다루기 위한 가장 적절한 플랫폼

## Hadoop 탄생

- 인덱싱 라이브러리 Lucene 오픈소스로 공개
- 아들 프로젝트 Nutch 탄생
- 다시 아들 프로젝트 Hadoop 탄생

## Hadoop 생태계의 진화

대충 뭐뭐 있나 보자

- Core Hadoop
- HBase
- Pig
  - 스크립트 랭귀지
- Zookeeper
  - 코디네이터
- Mahout
  - 머신러닝 알고리즘을 하둡 같은 분산 플랫폼에 저장되어 있는 데이터에서 처리할 수 있도록 해주는 구현체
- Hive
  - SQL로 하둡 데이터를 다루는 부분
- Avro
  - 경량 어플리케이션 서버
- Whirr
- Sqoop
  - 관계형 데이터베이스와 하둡 간의 데이터를 주고 받기 쉽게 할 수 있는 프레임웍
- HCatalog
  - 하둡에 저장된 데이터의 메타 정보, 스키마 정보를 공유 (하나의 카탈로그)
- Mrunit
  - 테스팅 프레임웍, 맵리듀스 테스트
- Bigtop
- Oozie
  - 하둡 내 데이터가 저장되면 용도에 맞게 데이터 마트를 만들게 되는데, 최종 데이터를 만들기까지 여러 단계를 거쳐야 함
  - 그런 workflow를 스케쥴링하는 플랫폼
  - 최근 airflow 가 더 많이 쓰임
