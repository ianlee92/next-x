import Image from "next/image";
// @는 src를 가리킨다
import styles from "@/app/page.module.css";
import Link from "next/link";
import Logo from "/public/logo.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Logo} width={500} height={500} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        {/* a태그를 쓰면 새로고침됨 */}
        <Link href="/i/flow/singup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        {/* x에서 /login으로 이동할 때 /i/flow/login으로 리다이렉트됨 */}
        <Link href="/i/flow/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
