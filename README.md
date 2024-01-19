# JDON
### "Job Description을 기반으로 직무 분석과 해당 직무 학습에 도움을 주는 서비스"
</br>

## 주요 서비스 내용
### 기능
  - 최근 채용공고에 많이 언급된 직군별 기술스택에 맞는 영상을 추천
  - 자유로운 커피챗 모집을 지원
### 타겟 
  - 취업을 향하여 달려가는 모두
  - 자신의 jd 을 분석하여 교육자료 및 회사를 추천받고 싶은 모두
  - 같은 고민을 하는, 혹은 배우고 싶은 동료들과의 커피챗을 원하는 모두

### 프로젝트관련 정보
- <a href="https://www.notion.so/JDON-3667f7453ffd40eaa8bcca9b62fbec3a">Notion</a>
- <a href="https://www.figma.com/file/GfE8RImZKlq05g2VfNzqUq/JDON?type=design&node-id=371-1400&mode=design&t=khjS3U9eo9gqCiZT-0">Figma</a>
</br>

### 배포URL
|    분류     |                               정보                          |
| :---------: | :----------------------------------------------------------------------: |
|    배포URL     |           [JDON](https://peaceful-sopapillas-36c089.netlify.app/)             |
|    ID/PW     |       기능구현중      |

</br>
</br>

## FE팀 소개
| **이지원** | **정종미** |
| :------: |  :------: |
| ![Uploading image.png…]()
 | [<img src="https://github.com/Kernel360/f1-JDON-Frontend/assets/116716381/a735504b-6061-4db9-9c44-997c9a257e7a" height=150 width=150> <br/> @jjo-mi](https://github.com/jjo-mi) 



</br>
</br>


## 기술스택
|    분류     |                                기술 이름                                 |
| :---------: | :----------------------------------------------------------------------: |
|    언어     |              [JavaScript](https://www.typescriptlang.org/)               |
| 프레임워크  |              [React](https://nextjs.org/)               |
|  스타일링   |                 [MUI,SCSS](https://tailwindcss.com/)                 |
| 라이브러리 |                         [Axios,Recoil](https://zod.dev/)                          |


</br>
</br>



## 진행상황
- 피그마를 기준으로 퍼블리싱 끝나고, 현재 각 페이지별 업무를 조정하면서 기능구현하고 있습니다.
- 초기기획에서 회의를 통해 사용자 편의성을 위해 백엔드팀과 논의하여 디자인 및 기능들 세부 조정중에 있습니다.


### 👉 세부 진행상황

#### 1. 퍼블러싱
>- 피그마를 이용하여 와이어프레임 및 UI/UX 완료
>- mui 를 사용하여 퍼블리싱 90% 완료(페이지: 로그인, 회원가입, 메인, 커피챗, 마이페이지)
>- 반응형으로 구현
미미한 스타일 수정은 필요한 상태

#### 2. api 연동
>- 현재 가데이터를 통한 api 연동 중
>- 현재 메인페이지의 인기 기술 스택 부분은 완료


</br>
</br>

## 성능최적화를 위한 노력
1. 간단한 정보들은 로컬스토리지를 활용해 저장하여 api 통신을 줄이기 위해 노력중
2. 백엔드 팀과의 api 설계시 논의를 통해 최대한 필요한 값만 받아올 수 있게 하고 있음
3. 사용자의 편의성을 위해 react-lazyload 적용 예정 (지원님 이건 한번 봐주세요 이미지 최적화 방법중하나라는데 이걸 추천해서 우리도 시도해보면 어떨까해서요! 원치 않으시면 삭제하셔도됩니당)

</br>
</br>

## 트러블 슈팅
1. cors 에러
   
 </br>
</br>


## 방향성
1. 애자일방식으로 개발 진행, QA를 통한 빠른 피드백 수용 
2. 공통 컴포넌트 등 코드의 중복방지와 재사용성 및 통일감 중시
3. 직관적인 UI/UX
4. 필요한 기술스택 최대한 활용

</br>
</br>

## 구현 목표
- [ ] 기능구현 ~ 1월 31일
- [ ] 리팩토링 ~ 2월 6일
- [ ] 최종마감 2월 7일
</br>
</br>

## 질문 사항
1. 성능최적화 하는데 고민이 많은데 아직 적용은 못해보고 있어서 시도해볼 수 있는것들에 대해 조언을 받고싶습니다.
2. 공통스타일 및 폴더 구조에 대해 어떤식으로 해나가는게 좋은지 궁금합니다! 현재는 각페이지에서 개별적으로 적용해야하는 스타일들은 scss 파일을 두고 있고, mui의 컴포넌트를 이용해서 할 수 있는 경우는 활용하고 있는데, 자칫 프로젝트를 무겁게 하고 있는게 아닌가라는 생각이들기도하고 실무에서는 어떤식으로 하는지 알고싶습니다.

