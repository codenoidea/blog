# blog
## 프로젝트 내용
node.js + express + mongodb 활용한 간단한 블로그api 만들기
## 설치방법
```
nodejs 설치
```
## 실행
```
npm start
```
## 커밋
```
feat: 새로운 기능을 추가할 경우
fix: 버그를 고친 경우
docs: 문서 수정한 경우
style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
refactor: 프로덕션 코드 리팩터링
test: 테스트 추가, 테스트 리팩터링 (프로덕션 코드 변경 없음)
chore: 빌드 테스크 업데이트, 패키지 매니저 설정할 경우 (프로덕션 코드 변경 없음)
```
## 깃플로우
```
develop 브랜치에서 새 브랜치 생성
> 새 브랜치 작업 후 develop 브랜치에 풀리퀘스트
> main 브랜치에 develop 브랜치 머지
> 완료
```

## docker 명령어
```
docker build -t {이미지이름} .
docker build -t {이미지이름} . -f {도커파일}

docker-compose up -d
docker-compose -f {컴포즈파일} up -d
```