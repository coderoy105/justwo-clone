export type ProductSection = "new" | "best";

export interface Product {
  /** cafe24 product_no from m.justwo.shop */
  id: number;
  name: string;
  image: string;
  href: string;
  /** 정상가 (원) */
  price: number;
  /** 할인가 (원), 5% 프로모션 등 */
  discountPrice?: number;
  /** 할인율 (%) */
  discountRate?: number;
  /** 상품요약정보 (스펙 태그) */
  summary?: string;
  /** 컬러 스와치 hex 목록 */
  colors: string[];
  /** 누적판매 등 배지 문구 */
  badge?: string;
  section: ProductSection;
}

export interface HeroSlide {
  image: string;
  alt: string;
}

export interface CategoryTab {
  label: string;
  href: string;
}

const PRODUCT_HREF = (productNo: number) =>
  `https://m.justwo.shop/product/detail.html?product_no=${productNo}&cate_no=1`;

export const noticeMessages: string[] = [
  "신규회원 가입 시 2,000원 쿠폰 지급",
  "8만원 이상 구매 시 무료배송",
  "매일 새로운 상품이 업데이트됩니다",
];

export const heroSlides: HeroSlide[] = [
  {
    image:
      "https://file.cafe24cos.com/banner-admin-live/upload/justwo/9a1c2350-a6a5-4ab5-e597-7b3fb3bbcc95.jpeg",
    alt: "저스투 시즌 기획전 배너 1",
  },
  {
    image:
      "https://file.cafe24cos.com/banner-admin-live/upload/justwo/e54dba8e-088d-4698-bd83-2d0234e20bbe.jpeg",
    alt: "저스투 시즌 기획전 배너 2",
  },
  {
    image:
      "https://file.cafe24cos.com/banner-admin-live/upload/justwo/2d10f02f-2a29-4db3-f9b4-65d278edbf1a.jpeg",
    alt: "저스투 시즌 기획전 배너 3",
  },
];

export const categoryTabs: CategoryTab[] = [
  { label: "BEST", href: "https://m.justwo.shop/board/product/list_best.html" },
  { label: "NEW 5%", href: "https://m.justwo.shop/product/list.html?cate_no=1" },
  { label: "🍁 Autumn🍁", href: "https://m.justwo.shop/product/list.html?cate_no=43" },
  { label: "당일출고", href: "https://m.justwo.shop/product/list.html?cate_no=28" },
  { label: "[1+1] 기획특가", href: "https://m.justwo.shop/product/list.html?cate_no=44" },
  { label: "코디세트 ~42%", href: "https://m.justwo.shop/product/list.html?cate_no=45" },
  { label: "머슬핏", href: "https://m.justwo.shop/product/list.html?cate_no=42" },
  { label: "OUTWEAR", href: "https://m.justwo.shop/product/list.html?cate_no=25" },
  { label: "TOP", href: "https://m.justwo.shop/product/list.html?cate_no=26" },
  { label: "BOTTOM", href: "https://m.justwo.shop/product/list.html?cate_no=27" },
  { label: "ACC", href: "https://m.justwo.shop/product/list.html?cate_no=29" },
  { label: "ALL PRODUCT", href: "https://m.justwo.shop/product/list.html?cate_no=1" },
];

export const products: Product[] = [
  // ── NEW5% 7 days ──────────────────────────────────────────────
  {
    id: 749,
    name: "[2족가격 / 키높이] 폭닥 노르딕 양털 어그",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261030/dd21dd5ece28c4fdf2e169e388a02aa9.gif",
    href: PRODUCT_HREF(749),
    price: 29900,
    summary: "보온성 털 안감 / 키높이 굽 / 겨울 슬리퍼",
    colors: [],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1675,
    name: "[1+1할인] 소프트웜 기모 반폴라 티셔츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261028/be6902a936955f1377714eb72e7a004e.gif",
    href: PRODUCT_HREF(1675),
    price: 19900,
    summary: "기모안감 / 세미머슬핏 / 높은 신축성",
    colors: [],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1674,
    name: "[겨울버전] 모직 투턱 와이드 슬랙스",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261028/ac324bebf618983637718a53b780cde0.gif",
    href: PRODUCT_HREF(1674),
    price: 44900,
    discountPrice: 42700,
    discountRate: 5,
    summary: "겨울버전 / 딥 투턱 / 히든밴딩",
    colors: ["#000000", "#474747"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1673,
    name: "부클 크롭 스트링 가디건",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261028/5fc03864d56e7c7e15cdae7b07ebfae5.gif",
    href: PRODUCT_HREF(1673),
    price: 57900,
    discountPrice: 55100,
    discountRate: 5,
    summary: "크롭기장 / 밑단스트링 / 부클원단",
    colors: ["#000000", "#D7B170", "#A9A9A9"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1672,
    name: "핸즈 워싱 와이드 데님팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261028/e5f449995527a012d595a7c4522db037.gif",
    href: PRODUCT_HREF(1672),
    price: 55000,
    discountPrice: 52300,
    discountRate: 5,
    summary: "워싱 포인트 / 와이드핏 / 핸즈포켓",
    colors: ["#FEC0CB", "#F09D01", "#000000"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1671,
    name: "[안감퀄팅] 로엔 스웨이드 배색 패딩자켓",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261028/857a285901183e864a3db8598c0d91ea.gif",
    href: PRODUCT_HREF(1671),
    price: 97900,
    discountPrice: 93100,
    discountRate: 5,
    summary: "패딩안감 / 크롭기장 / 소매니트",
    colors: ["#000000"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1669,
    name: "누알 배색 사선 카고팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261026/48d9c1914608d5880e65ddb752c470ba.gif",
    href: PRODUCT_HREF(1669),
    price: 43900,
    discountPrice: 41800,
    discountRate: 5,
    summary: "배색 카고 / 파라슈트 / 와이드핏",
    colors: ["#000000"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1668,
    name: "오프 지퍼 핑거홀 후리스",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261026/de0a4f232041b0a54965f440ffba825a.gif",
    href: PRODUCT_HREF(1668),
    price: 49900,
    discountPrice: 47500,
    discountRate: 5,
    summary: "사선절개 / 하이넥 / 후드",
    colors: [
      "#000000",
      "#501704",
      "#56754C",
      "#C0C0C0",
      "#363636",
      "#474747",
      "#000082",
      "#FEFFEF",
    ],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1667,
    name: "FR 리벳 카펜터 플레어 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261026/58550b257ca1d324d920e81585f69a3a.gif",
    href: PRODUCT_HREF(1667),
    price: 67900,
    discountPrice: 64600,
    discountRate: 5,
    summary: "플레어핏 / 더블니 / 카펜터",
    colors: ["#000000"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1666,
    name: "코틀레 퍼니트 후드집업",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261026/25482d48a8112e091f466e652c78e231.gif",
    href: PRODUCT_HREF(1666),
    price: 47900,
    discountPrice: 45600,
    discountRate: 5,
    summary: "퍼 탈부착 / 투웨이지퍼",
    colors: ["#000000", "#A9A9A9"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1665,
    name: "[기모안감] 레이시 트랙 와이드 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261026/1804dc0fb11c48d1d38e85d56787333f.gif",
    href: PRODUCT_HREF(1665),
    price: 29900,
    discountPrice: 28500,
    discountRate: 5,
    summary: "기모안감 / 트랙 디자인 / 허리밴딩",
    colors: ["#FFFFFF"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1664,
    name: "에이 쓰리지퍼 경량패딩",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261026/88a1c647e4d5d79612d0136f99f940bc.gif",
    href: PRODUCT_HREF(1664),
    price: 72900,
    discountPrice: 69300,
    discountRate: 5,
    summary: "쓰리지퍼 / 밑단스트링 / 은은한 광택",
    colors: ["#000000", "#A9A9A9", "#56754C", "#474747"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1663,
    name: "디토 히든밴딩 코듀로이 투턱 기모팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261023/24dc04100cab76ca0c3ef656649408ae.gif",
    href: PRODUCT_HREF(1663),
    price: 39900,
    summary: "포근한 기모 안감 / 고급스러운 코듀로이 / 투턱 와이드핏",
    colors: ["#FEFFEF", "#501704", "#000000", "#D7B170"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1662,
    name: "[남여공용] [기획특가] 시어서커 웰론 경량패딩",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261022/eb557f45e5d1aa50bc84751f8698904e.gif",
    href: PRODUCT_HREF(1662),
    price: 69900,
    summary: "은은하게 비치는 시어서커 / 밑단 스트링 / 사이드 포켓",
    colors: ["#FF5A00", "#FEFFEF", "#A9A9A9", "#00B3FF"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1660,
    name: "[기모안감 / 1+1할인] GA 기모 절개 스트링 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261020/d08ce3c58e891572b981e8b3d70a72cf.gif",
    href: PRODUCT_HREF(1660),
    price: 29900,
    summary: "허리밴딩 / 스트링 / 사이드절개",
    colors: [],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1659,
    name: "폴라베어 양털 후드티",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261020/f5451cf099c42163ff84125b1c4d1f80.gif",
    href: PRODUCT_HREF(1659),
    price: 37900,
    summary:
      "넉넉한 빅후드로 볼륨감을 살리고, 실용적인 캥거루 포켓과 부드러운 양털 소재를 더해 포근하면서도 캐주얼한 스타일을 완성했어요",
    colors: ["#000000", "#A9A9A9", "#501704"],
    badge: "NEW",
    section: "new",
  },
  {
    id: 1676,
    name: "[2장가격] 소프트웜 기모 반폴라 티셔츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261028/be6902a936955f1377714eb72e7a004e.gif",
    href: PRODUCT_HREF(1676),
    price: 19900,
    summary: "기모안감 / 세미머슬핏 / 높은 신축성",
    colors: ["#000000", "#474747", "#FFFFFF", "#501704"],
    badge: "NEW",
    section: "new",
  },

  // ── BEST BEST ITMES ───────────────────────────────────────────
  {
    id: 1603,
    name: "[1+1+1 할인] VD 골지 래글런 머슬핏 니트",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260908/40073dcc8d6d7a9ceb5d55e55a379916.gif",
    href: PRODUCT_HREF(1603),
    price: 29900,
    summary: "주문폭주 / 가을 감사 이벤트로 1+1+1 이벤트 진행합니다 ! 감사합니다.",
    colors: [],
    section: "best",
  },
  {
    id: 1580,
    name: "[기획특가] VD 골지 래글런 머슬핏 니트",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260908/cf64135da3ce536ec7605cf933a37b45.gif",
    href: PRODUCT_HREF(1580),
    price: 29900,
    summary: "머슬핏과 세로 골지 패턴으로 상체가 탄탄해 보이며, 쫀쫀하게 몸을 잡아줘요",
    colors: ["#000000", "#56754C", "#474747", "#501704", "#A9A9A9", "#FEFFEF"],
    section: "best",
  },
  {
    id: 1463,
    name: "[주문폭주] 백 스터드 세미 부츠컷 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260928/4d2d9e0787a9510b4689bda10af10e3c.gif",
    href: PRODUCT_HREF(1463),
    price: 59800,
    summary:
      "백포켓 리벳 포인트와 자연스러운 플레어핏으로 다리가 길어 보이며, 사계절 활용 가능한 데님 팬츠입니다.",
    colors: ["#000000", "#FFFFFF"],
    section: "best",
  },
  {
    id: 1357,
    name: "RN 핑거홀 머슬 하프 반집업",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260211/54e37b3daa8a769522ab7704ad1f46f4.gif",
    href: PRODUCT_HREF(1357),
    price: 43900,
    summary: "세미 머슬핏 / 핑거홀 핸드워머 / 하프 반집업",
    colors: ["#000000", "#FEFFEF"],
    section: "best",
  },
  {
    id: 1655,
    name: "[기획특가] 더블 스터드 플레어 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261019/da5b60576ca7ab921d719244230141ab.gif",
    href: PRODUCT_HREF(1655),
    price: 52900,
    discountPrice: 36800,
    discountRate: 31,
    summary: "플레어핏으로 비율을 살리고, 스터드 디테일로 유니크한 무드를 완성해요",
    colors: ["#000000"],
    section: "best",
  },
  {
    id: 1657,
    name: "[1+1+1할인] 에센셜 골지 절개 머슬 긴팔티",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261019/a77e1b5de9fc593e49356fcf7059ff40.gif",
    href: PRODUCT_HREF(1657),
    price: 29900,
    summary:
      "크롭한 기장감으로 비율을 살리고, 어깨 절개와 머슬핏으로 상체를 강조하며 신축성 좋은 골지 원단으로 편안함까지 더했어요",
    colors: [],
    section: "best",
  },
  {
    id: 1662,
    name: "[남여공용] [기획특가] 시어서커 웰론 경량패딩",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20261022/eb557f45e5d1aa50bc84751f8698904e.gif",
    href: PRODUCT_HREF(1662),
    price: 69900,
    summary: "은은하게 비치는 시어서커 / 밑단 스트링 / 사이드 포켓",
    colors: ["#FF5A00", "#FEFFEF", "#A9A9A9", "#00B3FF"],
    section: "best",
  },
  {
    id: 1447,
    name: "무브 절개 플레어 데님",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260826/0e3d51ecb44aaa7b79bcfaa6f4948952.gif",
    href: PRODUCT_HREF(1447),
    price: 37700,
    summary:
      "은은한 워싱에 자연스럽게 퍼지는 플레어핏이라 다리가 길어 보이고, 탄탄한 원단이라 핏도 오래 유지돼요!",
    colors: ["#125CC1"],
    section: "best",
  },
  {
    id: 1604,
    name: "[1+1할인] 레이 합포 오버핏 맨투맨",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260908/1ab5336b0eddb0b23e409464a98d7845.gif",
    href: PRODUCT_HREF(1604),
    price: 29900,
    summary: "루즈핏과 밑단 쭈리로 핏을 잡았으며, 탄탄한 합포 원단으로 볼륨감을 살렸어요",
    colors: [],
    section: "best",
  },
  {
    id: 1613,
    name: "에센셜 울 크롭 가디건",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260916/11df1b18399370a5ba77a3ee37eb4d06.gif",
    href: PRODUCT_HREF(1613),
    price: 34900,
    summary: "크롭 기장으로 비율을 살렸으며, 울 혼방 원단으로 부드럽고 포근하게 착용돼요",
    colors: ["#C20F0A", "#501704", "#E2CCA5", "#000000", "#A9A9A9", "#474747", "#000082"],
    section: "best",
  },
  {
    id: 1517,
    name: "LU 코튼 와이드 카고팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260615/47928a05f222e8d55c8723316d9bff30.gif",
    href: PRODUCT_HREF(1517),
    price: 43200,
    summary:
      "백포켓과 카고 포켓 디테일로 실용성을 높였으며, 탄탄한 면 원단으로 사계절 내내 활용하기 좋아요!",
    colors: ["#D7B170", "#A9A9A9"],
    section: "best",
  },
  {
    id: 1328,
    name: "[기획특가,슬림핏] TF 머슬 골지 헨리넥 티",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260224/3f7c0049bf025de328a63b32a3ce900e.gif",
    href: PRODUCT_HREF(1328),
    price: 37900,
    summary: "탄탄한 텐션감의 슬림핏 골지 티셔츠",
    colors: ["#000000", "#A9A9A9", "#FEFFEF", "#474747"],
    section: "best",
  },
  {
    id: 1628,
    name: "[1+1할인] 백 절개 핀턱 커브드 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260927/9058ad24684c5bf5375ce03cd0b29e33.gif",
    href: PRODUCT_HREF(1628),
    price: 29900,
    summary: "허리밴딩으로 편안함을 더하고, 백 핀턱으로 자연스러운 볼륨감을 살렸어요",
    colors: [],
    section: "best",
  },
  {
    id: 1358,
    name: "SJ 백포켓 스터드 커브드 팬츠",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260211/c93b2859dbcaa9b12c2ca321cb56753d.gif",
    href: PRODUCT_HREF(1358),
    price: 62900,
    summary: "블랙 컬러의 트렌디한 실루엣과 백포켓 스터드 디테일",
    colors: ["#000000", "#FFFFFF"],
    section: "best",
  },
  {
    id: 1430,
    name: "[1+1할인 / 기획특가] 베이직 코튼 머슬 크롭티",
    image:
      "https://ecimg.cafe24img.com/pg589b89845891095/justwo/web/product/medium/20260412/1d92693293ea7fb23a161a5b27e9b8d7.gif",
    href: PRODUCT_HREF(1430),
    price: 19900,
    summary: "누적판매 5,000장 / 트렌디한 슬림핏 크롭티",
    colors: [],
    badge: "누적판매 5,000장",
    section: "best",
  },
];

export const newProducts: Product[] = products.filter((p) => p.section === "new");
export const bestProducts: Product[] = products.filter((p) => p.section === "best");
