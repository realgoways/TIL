---
meta:
  - name: keywords
    content: hadoop,하둡,sql-on-hadoop
  - name: description
    content: sql-on-hadoop 개념
  - property: og:title
    content: sql-on-hadoop 개념
  - property: og:description
    content: sql-on-hadoop 에 대해 알아보자
  - property: og:url
    content: https://realgoways.github.io/TIL/Hadoop/sql-on-hadoop.html
  - property: twitter:url
    content: https://realgoways.github.io/TIL/Hadoop/sql-on-hadoop.html
---

# SQL-On-Hadoop 개념

- HDFS에 저장된 데이터를 SQL 혹은 SQL과 유사한 형태로 처리를 요청하고 분산 처리하는 시스템
- 하이브(Hive), 타조(Tajo), 임팔라(Impala), 프레스토(Presto) 등

# SQL-On-Hadoop 종류

## Hive 하이브

- 하이브는 가장 대표적인 SQL-On-Hadoop
- 보는 관점에 따라 Tez를 적용하지 않은 기존의 하이브는 SQL-On-Hadoop 에 포함시키지 않기도 한다.
- 하이브는 하둡(HDFS) 위에서 동작하는 데이터 웨어하우스 시스템
- 데이터 요약, 데이터 분석 등의 기능 제공
- 하둡에서 맵리듀스를 직접 돌리는 대신, 사용자가 SQL로 쿼리를 작성하면 이것을 자동으로 맵리듀스 작업으로 변경해주는 쿼리 엔진

### Tez 란?

- Hive를 가속화하기 위한 노력
- 기존 맵리듀스의 단점을 해결하고 고속화 실현
- 불필요한 단계가 감소하여 처리가 짧아지고 스테이지 사이의 대기 시간이 없어 처리 전체가 동시에 실행 > 실행시간이 단축됨

### Hive 단점

- 맵리듀스의 특성상 하드디스크를 많이 사용하고 불필요한 기록을 하는 경우가 많다.
- Job을 준비하는 시간 등 속도 저하의 요인이 많음

## 오픈소스별 특징

- 하이브는 상대적으로 Long Time Query를 처리하는데 용이
- 임팔라는 작은 데이터에 대해서는 다른 오픈소스에 비해 더 빠른 결과를 지원, 그러나 Long Time Query를 제대로 수행하지 못하거나 데이터 크기가 커질수록 성능이 떨어지는 경향이 있다.
- 타조의 설계 목표는 Long Time Query와 Online Query(Low latency) 모두를 지원하는 것. 실제로 두 가지가 다 가능하고 성능도 우수하지만, 상대적으로 역사가 짧기 때문에 안정성 문제나 Long Time Query 는 하이브에 비해 느린 경우도 있다. 또 임팔라에 비해 Online Query 가 느린 경우도 있다.
- 샤크는 타조와 비슷하게 두 가지 방식 모두 지원하며, 메모리에 데이터를 올려놓으면 확실히 좋은 성능을 지원

## 특성 비교 표

| System Name     | Fault Tolerance | Dynamic Scheduling | Long Time Query | Low Latency |
| --------------- | --------------- | ------------------ | --------------- | ----------- |
| Hive 하이브     | O               | O                  | O               | O           |
| Tajo 타조       | O               | O                  | O               | O           |
| Impala 임팔라   | X               | X                  | X               | O           |
| Presto 프레스토 | X               | X                  | X               | O           |

### Fault Tolerance

- 쿼리 처리 중 발생하는 오류를 처리해 쿼리를 완료하는 기능

### Dynamic Scheduling

- 각 노드에 노드가 한 번에 실행할 수 있는 태스크를 우선적으로 분배, 그리고 노드가 할당받은 태스크를 완료하면 다시 태스크 할당.
- 반면 Fixed Scheduling 은 작업 시작 시, 클러스터 노드에게 균등하게 분할된 작업을 한 번에 할당.

## 차이에 따른 활용 방법

- 대량의 비구조화된 데이터 가공과 같은 무거운 배치 처리에는 높은 처리량으로 리소스를 활용하는 `Hive`
- 구조화된 데이터를 대화식으로 집계할 때는 지연이 적은 `Impala`, `Presto`
