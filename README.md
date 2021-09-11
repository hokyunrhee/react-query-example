# react query example

react query를 이용하여 server state를 다루는 방법에 대한 예제입니다.

**자유롭게** 수정해서 todolist 어플리케이션을 완성해주세요.

완성된 예제와 간단한 설명은 example 브랜치에서 확인할 수 있습니다.

## running Locally

```
$ git clone https://github.com/hokyunrhee/react-query-example.git
$ react-query-example
$ yarn
$ yarn dev
```

## routes

```
GET /todo
GET /todo/1
GET /todo?completed=true
POST /todo
PATCH /todo/1
DELETE /todo/1
```

## schema

`prisma/schema.prisma`에서 확인할 수 있습니다.

## built using

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [React Query](https://react-query.tanstack.com/)
