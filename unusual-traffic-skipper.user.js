// ==UserScript==
// @name         unusual-traffic-skipper
// @namespace    https://github.com/Kamilake/unusual-traffic-skipper
// @version      0.2.0
// @description  Skip Google's unsual traffic detection redirect wrapper
// @match        https://www.example.com/redirect/index*
// @run-at       document-start
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/Kamilake/unusual-traffic-skipper/main/unusual-traffic-skipper.user.js
// @updateURL    https://raw.githubusercontent.com/Kamilake/unusual-traffic-skipper/main/unusual-traffic-skipper.user.js
// ==/UserScript==
(function () {
  'use strict';

  const current = new URL(location.href);                 // 현재 URL 분해
  const targetRaw = current.searchParams.get('continue'); // ?continue= 값을 가져옴

  if (!targetRaw) return;                                  // 파라미터가 없으면 중단

  // 이중 URL-encoding 방지
  const decoded = decodeURIComponent(targetRaw);

  // 동일 탭에서 즉시 이동 (뒤로 가기 기록 남기지 않음)
  location.replace(decoded);
})();