import { useRouter } from "next/navigation";

// page.tsx대신 route.tsx 쓰는 방법도 있다
// next 13버젼에 나온 redirect 기능 (서버 리다이렉트)

// 클라이언트 리다이렉트로 바꿔줘야해서 redirect 대신 useRouter로 수정
export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return null;
}
