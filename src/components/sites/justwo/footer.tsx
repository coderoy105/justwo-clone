export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-4 py-8 text-[11px] leading-relaxed text-neutral-500">
      <section aria-label="고객센터 안내" className="mb-5">
        <h2 className="mb-1 text-[12px] font-bold text-neutral-900">CS ARENA</h2>
        <p>MON-FRI 10:00~17:00</p>
        <p>SAT.SUN.HOLIDAY OFF</p>
      </section>

      <section aria-label="계좌 안내" className="mb-5">
        <h2 className="mb-1 text-[12px] font-bold text-neutral-900">계좌 안내</h2>
        <p>신한은행 110-547-932579 (예금주: 이예빈)</p>
      </section>

      <section aria-label="사업자 정보" className="mb-5">
        <h2 className="mb-1 text-[12px] font-bold text-neutral-900">사업자 정보</h2>
        <p>상호: 저스투 (JUSTWO) / 대표자: 이예빈</p>
        <p>사업자등록번호: 119-45-01279</p>
        <p>통신판매업신고: 2026-광주광산-0082</p>
        <p>주소: 광주광역시 광산구 송도로320번길 23 (신촌동) 무등빌3동 403호</p>
        <p>개인정보보호책임자: 이예빈</p>
        <p>Hosting by Cafe24 Corp.</p>
      </section>

      <section aria-label="구매안전서비스" className="mb-5">
        <p className="flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-bold text-white"
          >
            T
          </span>
          토스페이먼츠 구매안전서비스(에스크로)를 적용한 가맹점입니다.
        </p>
      </section>

      <nav aria-label="약관 링크" className="flex flex-wrap gap-x-3 gap-y-1 border-t border-neutral-200 pt-4">
        <a href="https://m.justwo.shop/shopinfo/about" className="hover:text-neutral-900">
          회사소개
        </a>
        <a href="https://m.justwo.shop/shopinfo/agreement" className="hover:text-neutral-900">
          이용약관
        </a>
        <a href="https://m.justwo.shop/shopinfo/guide" className="hover:text-neutral-900">
          이용안내
        </a>
        <a href="https://m.justwo.shop/shopinfo/privacy" className="hover:text-neutral-900">
          개인정보처리방침
        </a>
      </nav>

      <p className="mt-4 text-[10px] text-neutral-400">
        Copyright © 저스투. All rights reserved.
      </p>
    </footer>
  );
}
