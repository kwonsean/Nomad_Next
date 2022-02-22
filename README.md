# NEXT.js

## 라이브러리 VS 프레임워크

### 라이브러리

- 라이브러리는 자유롭게 유저가 컨트롤 할 수 있다. (react.js)
- 유저가 원할때 사용 한다.

### 프레임워크

- 프레임워크가 직접 작성한 코드를 가져다 사용 한다.
- 따라서 유저는 코드를 적절한 위치에 잘 작성해야 한다.

## 서버사이드 렌더링

- 기존 react.js 프로젝트의 소스를 확인하면 root div이외에는 아무것도 없다. 따라서 인터넷 환경이 느린 곳에서 유저는 처음 화면으로 흰색 빈 화면을 보면서 JS파일과 react.js가 실행되기를 기다려야 한다.
- 반면 next.js 프로젝트의 소스를 보면 html파일안에 작성한 html 요소가 모두 들어가 있다. 이것은 유저의 인터넷 환경이 느리다고 하더라도 기본적인 UI는 바로 확인할 수 있다는 것을 의미한다.  
  또한 이후에 로딩이 완료되어 js파일과 react.js가 실행이 되면 일반적인 react.js프로젝트 처럼 사용이 가능해진다.
- 따라서 어떤 방법으로 렌더링을 하는지에 따라 유저는 첫 로딩화면을 빈화면을 바라보고 있을수도 있고 기본적인 UI가 제공된 화면을 바라보고 있을수도 있다.

## pages

- pages에 작성한 파일명은 url주소가 된다. (about.js => localhost3000/about)
- 파일은 js, jsx형식이 가능하며, **대소문자**가 구분된다.
- index.js파일은 홈 페이지( / )가 된다.
- pages의 파일은 export default로 구성이 되어 있어야 하고 react를 import하지 않아도 jsx형식을 사용 가능하다.
  <br/>

```js
export default function Home() {
  return (
    <>
      <h1>HELLO!! This is home page</h1>
    </>
  );
}
```

## Link

- next.js에서는 `Link`를 지원한다. Link를 이용하면 새로고침 없이 화면을 이동할 수 있게 된다.
- 사용시 주의점은 Link태그로 a태그를 감싸서 사용해야 한다.  
  왜냐하면 class, style같은 설정이 Link태그에 적용이 되지 않기 때문에 안에 감싸져 있는 a 태그에 설정을 해야하기 때문이다. 단, href는 Link태그에 작성한다.
- `useRouter`를 이용하면 url정보를 확인할 수 있다. `const router = useRouter();`

## styled jsx

- style태그에 jsx props를 입력한 뒤 문자열로 바로 스타일을 줄 수 있다.

```js
<style jsx>
  {`
    a {
      text-decoration: none;
      color: white;
    }
    .active {
      color: red;
    }
  `}
</style>
```

- 랜덤의 className을 가지게 되기 때문에 충돌을 예방하며, 다른 컴포넌트에도 영향을 끼지치 않는다.

## \_app.js

- \_app.js파일은 pages폴더에 작성한 파일이 그려지기전에 먼저 거쳐가는 파일로 공통적으로 사용하는 컴포넌트(nav)를 작성하여 반복되는 코드를 막을 수 있다.
- styled jsx에 global을 추가하여 전체요소에 스타일을 적용할 수 있다.  
  global은 각 page를 중심으로 적용이 된다. index에서 적용 => / 페이지에 있는 경우 적용한 스타일 작동 BUT. /about페이지로 이동시 적용한 스타일은 사라짐

## globals.css

- globals.css파일은 기본적으로 제공하는 파일로 우리가 만든 파일(index.js, about.js)에는 import할 수 없다. 이런 파일에는 무조건 module.css형식으로 작성한 css파일만 import 가능하다.
- 반면 \_app.js파일에는 그냥 css파일을 import 할 수 있다. 따라서 \<style jsx global>을 이용하는 것보다 css파일을 이용하는게 더 깔끔하게 전역적인 스타일링을 할 수 있는 방법인 것 같다.
