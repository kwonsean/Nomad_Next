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

## HEAD

- `import Head from "next/head"`를 통해서 Head태그를 가져와 HTML요소에 title, meta같은 부분들을 작성할 수 있다.
- SEO(검색 엔진 최적화)를 위해 중요한 부분이며 next.js에서 Head태그를 이용하여 손쉽게 작성 가능하다.
- 현재 내 코드에서는 title을 pathName에서 추출하여 받아서 사용하도록 하여 \_app.js파일에서 한번만 작성해 사용하고 있다.
  > home, about페이지만 있을 경우에는 괜찮았지만 동적 주소를 가지는 페이지가 추가되면서 이 방법보다는 각 페이지별로 Seo컴포넌트를 추가하는 것이 더 깔끔하고 동적 주소에 잘 대응할 수 있었다.

## redirects

```js
 async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
```

- redirects는 source에 입력한 주소로 이동시 destination에 입력한 주소로 redirects시킴.  
  이때 :path\* 처럼 작성을 하면 blog/ 뒤 부분이 그대로 남은 상태로 redirect가 됨  
  즉, ID값을 그대로 유지한채 redirect가 가능하다.

## rewrites

- 이건 더 신기한 기능인데 redirects처럼 source에 입력한 주소로 이동시 destination에 입력한 주소로 이동하게 되는건 동일하지만 url에 변화가 없음  
  즉, /old-blog/주소는 그대로 인데 화면은 /new-blog/주소가 보이게 된다.
- 이 방법을 이용하여 API를 호출할 수 도 있고 이를 통해 API KEY를 숨길 수 있게 된다.

```js
 async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
```

## getServerSideProps

- 서버사이드렌더링을 위해 사용하는 함수
- 이 부분에 작성한 코드는 서버에서 작동하게 된다. 따라서 이곳에 API를 호출하는 코드를 작성하게 되면 화면은 API가 호출이 다 된후에 그려지게 될 것이다.
- 즉, 기본적인 UI가 나오고 Loading...이 나오는 것이 아닌 전체 요소가 다 로딩될때까지 기다린 후 한번에 화면이 그려지게 된다.
- 이렇게 되면 유저는 loading화면을 볼 필요가 없어지지만 API호출이 느린경우 아무것도 보지 못하는 단점이 존재한다.  
  하지만 SEO측면에서는 소스코드에 API데이터가 포함되기 때문에 장점이 많다.

## 동적 주소

- Next에서 url은 pages폴더에 파일명으로 이루어 진다.  
  따라서 user/info 이런식의 주소를 이용하기 위해서는 파일명을 user/info로 만들어야 될 것 같지만 그렇지 않다.
- 먼저 pages폴더안에 user폴더를 생성하고 user폴더 안에서 info파일을 생성하면 user/info 주소값을 얻을 수 있다.  
  user 주소만을 얻고 싶은 경우에는 user폴더에 index.js파일을 생성하면 된다.
- 만약 user/12351(userID)같은 동적 주소가 필요한 경우에는 user폴더 안에 `[userID].js` 형태로 파일을 생성해야한다.
- 이렇게 생성한 파일은 Next가 알아서 userID변수를 가지는 동적 주소로 판단한다.  
  즉, `[ ]`을 이용하여 파일을 생성하면 Next에서 동적 주소를 사용할 수 있다.

## url에서 여러 query값 받기

- 동적주소를 사용하기 위해 파일명에 `[ ]`을 붙여주었는데 여러 query값을 한번에 알아내기 위해서는 `[...params]`처럼 `...`을 붙여준다. 이렇게 되면 query값으로 들어온 모든 내용을 배열로 저장해 두게 된다.

## 404 페이지

- `404.js` 파일을 생성하면 404페이지를 커스텀 할 수 있다.

## env

- env파일에서 API\*KEY를 brower에서 사용하기 위해서는 `NEXT_PUBLIC_`를 붙여주어야 js파일에서 가져와 사용이 가능하다.
