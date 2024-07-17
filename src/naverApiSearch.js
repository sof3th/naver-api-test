import { useState } from 'react';
import axios from 'axios';

export default function naverApiSearch(
  gubun,
  keyword,
  start = 1,
  display = 5,
  sort = 'sim'
) {
  return axios.get(`/v1/search/${gubun}`, {
    params: {
      query: keyword, // 검색 텍스트
      start: start, // 검색 시작 위치
      display: display, // 가져올 결과 겟수
      sort: sort, // 정렬유형 (sim: 유사도)
    },
    headers: {
      'X-Naver-Client-Id': 'MW6Tx3ZEf7y1iSvBzEQa',
      'X-Naver-Client-Secret': '8rdrL_Keuk',
    },
  });
}
