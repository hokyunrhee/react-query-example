# react query example

react query를 이용하면 전역 상태를 건드리지 않고 데이터를 가져오고, 캐시하고, 업데이트 할 수 있습니다.

## Client State vs Server State

리덕스 같은 상태관리 라이브러리를 사용해도 이와 같은 작업들을 모두 처리할 수 있습니다. 다만 그다지 적합하지 않은 선택이라고 생각합니다. `클라이언트 상태`와 `서버 상태`는 다르기 때문입니다. 서버로부터 가져온 데이터는 클라이언트가 제어, 소유할 수 없습니다. 단지 특정 시점의 서버 데이터를 가져와서 사용할 뿐입니다.

서버 상태를 적절히 관리하기 위해서는 다음과 같은 일들이 필요합니다.

- 캐싱
- 동일 데이터에 대한 중복 요청 제거
- 오래된 데이터 업데이트
- 데이터 변경 요청 이후 업데이트
- 이외의 여러가지 일

react query는 위와 같이 복잡한 일들을 도와줍니다. 서버 상태를 관리하기 위한 좋은 선택입니다.

> 클라이언트 상태와 서버 상태에 대해서 궁금하다면 [리액트 어플리케이션의 상태 관리하기](https://www.kenrhee.com/blog/react-application-state-management)를 읽어주세요.

## Tips

- React Query 개발자 도구를 사용하세요.
- query key를 useEffect의 dependency array 처럼 생각하세요. query key가 변경되면 refetch가 일어 납니다.
- form의 초기값과 같이 background refetch가 필요 없는 경우라면 `{ staleTime: Infinity }` 옵션을 고려해보세요.
- 사용자 경험 향상을 위해 optimistic ui update를 구현하세요.

### FAQ

> Q: 리렌더링이 되면 queryFn도 호출되나요?  
> A: 아닙니다. 리렌더링은 queryFn을 실행시키지 않습니다.

> Q: loading과 fetching은 무슨 차이인가요?  
> A: loading status는 이전에 캐시된 데이터가 없는 최초의 fetching 상태입니다. 최초 호출시에는 `isLoading`과 `isFetching`은 true입니다.

> Q: useQuery를 사용하고 있습니다. 호출 시점을 지정할 수 있나요?  
> A: enabled 옵션을 사용하면 가능합니다.

> Q: cacheTime과 staleTime은 무엇이 다른가요?  
> A: cacheTime은 사용되지 않은 데이터가 삭제되기까지 걸리는 시간입니다. staleTime은 data가 fresh에서 stale 상태로 변하는데 걸리는 시간입니다. 만약 staleTime을 `Infinity`으로 설정한다면 fresh 상태를 유지하게 됩니다.

> Q: setQueryData를 이용해서 cached data를 조작하여 client state를 관리해도 될까요?  
> A: optimistic ui update를 하는 경우 외에는 사용하지 않는 것이 좋습니다. useState, Context API, redux, mobx 등 더 적절한 대안이 많이 있습니다.

### Reference

- [React Query](https://react-query.tanstack.com/)
- [Practical React Query](https://tkdodo.eu/blog/practical-react-query)
