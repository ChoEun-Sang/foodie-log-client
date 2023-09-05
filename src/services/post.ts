import { useUserStore } from "../store/useUserStore";
import { userRequest } from "./index";

// Fetch 기본 설정
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const accessToken = useUserStore.getState().user.accessToken;
const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

// 피드 등록 (axios)
export const postFeed = async (body: FormData) => {
  const res = await userRequest.post("/api/feed/save", body);
  console.log("feed 등록 서버 응답데이터", res);
  return res;
};

// 피드 등록 - 검색
export const searchShop = async (keyword: string) => {
  console.log("searchShop", keyword);
  const res = await fetch(`${BASE_URL}/api/feed/search/restaurant?keyword=${keyword}`, {
    method: "GET",
    headers,
  });
  const data = await res.json();
  return data;
};
