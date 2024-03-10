import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {/* @modal 이외는 children에 (beforeLogin)의 i/flow/login 및 signup, login, page.tsx */}
      {children}
      {/* modal은 패러렐 라우트를 사용한 @modal 폴더에 포함된 것들 */}
      {modal}
    </div>
  );
}

// localhost:3000일 때, children -> page.tsx, modal -> @modal/default.tsx
// localhost:3000/i/flow/login일 때, children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
