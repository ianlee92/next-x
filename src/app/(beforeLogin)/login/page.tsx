import { redirect } from "next/navigation";

// page.tsx대신 route.tsx 쓰는 방법도 있다
// next 13버젼에 나온 redirect 기능
export default function Login() {
  redirect("i/flow/login");
}
