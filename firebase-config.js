// 예산 총괄 앱 Firebase 설정
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 나오는 값을 그대로 붙여 넣으세요.
var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyB2t5u2qbFwP2Ilc7K6MFqyF7n6yyv794o",
  authDomain:        "cgn-budget.firebaseapp.com",
  databaseURL:       "https://cgn-budget-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "cgn-budget",
  storageBucket:     "cgn-budget.firebasestorage.app",
  messagingSenderId: "420158043495",
  appId:             "1:420158043495:web:bc178c9a8cc63bb9c16bc2"
};

// 마스터 — 항상 접속 가능, 자료 올리기와 열람 계정 관리를 할 수 있음
// database.rules.json 의 값과 같아야 합니다
var MASTER_EMAIL = "cgn210@cgnmail.net";
