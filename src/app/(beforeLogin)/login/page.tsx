"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

// page.tsx대신 route.tsx 쓰는 방법도 있다
// next 13버젼에 나온 redirect 기능 (서버 리다이렉트)

// 서버에서 리다이렉트하면 인터셉팅이 제대로 되지 않음
// 클라이언트 리다이렉트로 바꿔줘야해서 redirect 대신 useRouter로 수정
export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  // /i/flow/login 가기전에 /login을 거쳐서 가기 때문에 /login/page.tsx에 배경을 똑같이 적용해줘야됨
  return <Main />;
}

// push와 replace 뒤로가기할 때 이동이 다름
// router.push => 뒤로가기 하면 /login 으로가서 해당 파일에서는 다시 /i/flow/login으로 가게되서 무한 반복됨
// localhost:3000/ -> /login -> /i/flow/login

// router.replace => 뒤로가기 하면 /login 히스토리가 안남아있어 이전으로 대체됨
// localhost:3000/ ( -> /login ) -> /i/flow/login
