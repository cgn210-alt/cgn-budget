# 2027 경영관리실 예산 총괄 (로그인 웹앱)

주소: https://cgn210-alt.github.io/cgn-budget/ (저장소를 만든 뒤부터 열림)

- 이 저장소에는 예산 자료가 없습니다. 화면 코드와 카톡 썸네일(og.png)만 있습니다.
- 예산 자료와 집행액은 Firebase 데이터베이스에 저장되고, 허용된 구글 계정으로 로그인해야 보입니다.
- 마스터: cgn210@cgnmail.net (자료 올리기, 열람 계정 관리)
- 이 폴더의 파일은 구글드라이브 `claude/cgn-budget-2027/도구/build_web.py`가 만듭니다.
  직접 고치지 말고, 도구를 고친 뒤 다시 만드세요(단, firebase-config.js는 덮어쓰지 않음).

## 처음 한 번 설정

1. Firebase 콘솔(console.firebase.google.com)에서 새 프로젝트 만들기 (예: cgn-budget)
2. Authentication > 로그인 방법 > Google 사용 설정
3. Authentication > 설정 > 승인된 도메인에 `cgn210-alt.github.io` 추가
4. Realtime Database 만들기 (위치: 싱가포르 asia-southeast1, 잠금 모드로 시작)
5. Realtime Database > 규칙 탭에 `database.rules.json` 내용을 붙여 넣고 게시
6. 프로젝트 설정 > 내 앱 > 웹 앱 추가 → 나오는 설정값을 `firebase-config.js`에 붙여 넣기
7. github.com/new 에서 저장소 `cgn-budget`(Public) 만들기 → 이 폴더에서 `사이트-올리기.bat` 실행
8. 저장소 Settings > Pages > Branch: main / (root) 저장

## 자료 올리기 (예산안이 바뀔 때마다)

1. 구글드라이브 도구로 분석을 다시 돌림 (`python 도구/run.py`) → `결과/budget.json` 갱신
2. PC 브라우저에서 앱 주소 접속 → 마스터 계정 로그인
3. 상단 '자료 올리기' → `결과/budget.json` 선택 (집행액은 그대로 유지)

## 카카오톡으로 보기

- 앱 주소를 카톡에 붙여 넣으면 썸네일이 붙은 미리보기가 나옵니다.
- 카톡 안의 브라우저에서는 구글 로그인이 막혀 있습니다. 링크를 누른 뒤 메뉴에서
  '다른 브라우저로 열기'(크롬·사파리)를 눌러 로그인하세요.
- 썸네일을 바꾼 뒤 카톡에 예전 그림이 나오면 index.html의 `og.png?v=1` 숫자를 올립니다.

## 보안 규칙을 바꿨을 때

`database.rules.json`을 고치면 Firebase 콘솔 규칙 탭에 직접 다시 붙여 넣고 게시해야 합니다.
