import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://ucc51e23f62c15db076a4fc1a6b3.previews.dropboxusercontent.com/p/thumb/ACUNydJ1KCQ85m1tjwqulhx7bU6UyXtwtZ0fEo0Kh0dDidTsvBKmq-7rJs86o6LOnpszqNLrfmO3McEzUmeMn4K89z7KgkTICPVAWwezmgpmy4p441X-qyXYyC_dziyiW2Gd-aOACvKsPK1U6Y85JCscsDJWpBr75i80DpRkHBXmOCGMLpbFWxQkpQBBfe55W4ffPrsJ-Ll3sR4GGfaEgYpWbFTdSXfJ03SFuLllkw-fqFhQJUlObUCdyDD3DqqeZPhiF76rqF6r4CAoqdDAKdGVrugGkGI3MdaL0JEpEUPyYy2-IEVJRl8_auPYuVdvgavFfinNVogjEHQjjOenhZkjruW-wQsYZboXaUQtXI-0dwifsjDkkSfpdKjtDTwFSTHEkku2qJItiC3hXqcArH7C/p.png?is_prewarmed=true",
  },
  {
    id: 2,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://ucf3f92a792eba3a711b7bb365e7.previews.dropboxusercontent.com/p/thumb/ACXQVHKDGhZz7oSoq1bRLyGtnDtrdVuzpAXZYYsWSUIzTiB_mFpcElwQFYH10eBbW8Nop7Bkd4rFx2vf7d8tcgdZ9SLYtGKdMfbnym35Xs08DM3kCD6TzX1nADesgRJh2A4RQmsuELTHZeYD5GUG5lN0BQkfP3-6xBkHPqK5hvCYKvVXYqxU6o8sdDMUdbgMeqAdqeTWdpxNHIjXtNFV0wAio5oShlRQ-KChHtpVaDl4mfG4BthtSaWJnoL9FbbLIjqJYC2A28PI9_EPP5BslL49OxzB9oC5sfq9OGUWKIHrMMRHUuEn3q5SKzqUiVLWs-SOSmDy4fSMac1IV0CGYzyO_cm07mWeuaqlBf-1Hbb_7GUoMP8czJfAS657JXACKs6rBTpV1SAMYkPY-RJ_wnG7/p.png?is_prewarmed=true",
  },
  {
    id: 3,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://ucbdf35887f9d1674a7f05592107.previews.dropboxusercontent.com/p/thumb/ACWiLVzPGRSyjqG0xfrwjrATgwE4tXFtybizdnJrRn0tArAh9sd3RxtxswrDLaGuzJCakB-1z632EZEpjLNkXknhvCA1CY5ePLb2Md-sz6VREmkTQBarOGQlp3QxltIUc8NJNLFvkTFsERg-elbc7A359DnZp9mdRB_NdY00THJdEmfXgp2KgNRi-fj-a7tnoZFxEQ-XP7No-NXeU04mX-Eq0lJvdpyolPUv30FwOE9oXBTgdwfVLr5pJ-TYZzQ0Ck3H2Y0oqpiMHb4nE7dggwvaENtwHXekfTIYuZ8XXwrx8j8fTU4JCUReWjc5AhrJbYSBjaruEOMLh8kUxuw8fQvt962_JgPxYXuJumC4pVkTBRTEBVE4BSxfgNuWez8lWtIPqfh4ydl9UEb3bQXBKqQ-/p.png?is_prewarmed=true",
  },
  {
    id: 4,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://uc5a0444029228d58ee740199a7c.previews.dropboxusercontent.com/p/thumb/ACXILjoRI-ZHswnHS0Q0IwFBKXHzCBkXb_ez1eRrnm7q7IU-7EBLHUKhp2cyKvQJngiDswEpHot7H19TELLqDMOgmrAX0q8U3JL3SRpbgxscd-rvgzqpqsfYsgyzOgCJhnh_9COGQcwdVaeVY8-mWMD6PQydYCM9GucvI_eu2MVkT9LEVeIGpPH8LXv5MXrmyQBLTIXrKO_JNfFEAEeNrY3TzF5-HCGSNLvuaxY4-B7e2o9n4Zr7ukbcUvPAKTxEd9NMx4L-wcTMDfAX7M6ecxSD2d20Cj_zqWdKLiSm9afJV0asgsH-Z_NGM_05YWBUN78n-p4Lyog2QoC6zWj_a8kzWQywiU_eVBiNEuLfdlXZfDPTRxkLQeHaHsbHgeT7vK8s5xju2YnGR__XvMsgVEnu/p.png?is_prewarmed=true",
  },
  {
    id: 5,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "https://uccd6a68da1d4476ebe1b186c141.previews.dropboxusercontent.com/p/thumb/ACXrcf2XOX1hMjWOq5n0F3AjaQtnBIkSfb8A4XiE6GCtfUt1rnByDUPcZR4qpECTaUYxIg2cFc-dL1WmqJzD5oi_6_dep6I_cPH6ewFeYxNpNOM-fInSluRWnrcXoAUGc208EaGmlrFzBJN6dgnPZVXogDDC3KvRAd2zYgELf_SvRqkQMokqVtrHHJKlFAweavROEP1kvpujfjZL9unjFbIJ2M5wt0s6JQVu3tVgTLBo4txJrk4cVoVrd1jhKL6cFyznlaoyzOOy2UmGILSaavw-WM-uAA8UgjhbhL0K4SoY8AWsIXrZ0vZXXGt2LDFAe2u8YTpzSZbf44T5tNfv5Y5Fv-iQk705Mu--yXhCKain_FaQnc296eCJZG292DOH-MQWYlQ4uLZtrOl5biEToSgf/p.png?is_prewarmed=true",
  },
  {
    id: 6,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://uc1fb97c570636d4c24aeeaf7a27.previews.dropboxusercontent.com/p/thumb/ACWsvwSu0vcJUzrCknEcdGDmu5fq5_kRJ172eOcxez5Etwfiu8_qTYcfWE_Duqjs1Q-GqwI9Q_uUtWPuL4fUQKEWepp3-SwKZIlH8NEZAoAejWw7rBVSVYf0JpXmvDWFUpxaI5QME_wapGQestmv_zEurRs60QiXPgvSsiw_vMd1RDWFaHIX0FidG-lVKQWzso3-Ua0HUDWDYiBtxp0RYqy6oRQB_tgVBVOlNCa3oJJL7oxWpfym4cQK-oPlLovCjMkdGzoymVcsCz7E4LONWGQODggFckxbf5m30iJ8IFi-rBbkPfwqZtGPGjIshqtpTN_UdyLqFkzkyS-_Vn2ETRGaeJy9JqKWoQjshFFKQ3lkZk15hKRCWJv6xOeKikjoPBeAIfI82izJdsuwm5SujX4J/p.png?is_prewarmed=true",
  },
  {
    id: 7,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://ucc51e23f62c15db076a4fc1a6b3.previews.dropboxusercontent.com/p/thumb/ACUNydJ1KCQ85m1tjwqulhx7bU6UyXtwtZ0fEo0Kh0dDidTsvBKmq-7rJs86o6LOnpszqNLrfmO3McEzUmeMn4K89z7KgkTICPVAWwezmgpmy4p441X-qyXYyC_dziyiW2Gd-aOACvKsPK1U6Y85JCscsDJWpBr75i80DpRkHBXmOCGMLpbFWxQkpQBBfe55W4ffPrsJ-Ll3sR4GGfaEgYpWbFTdSXfJ03SFuLllkw-fqFhQJUlObUCdyDD3DqqeZPhiF76rqF6r4CAoqdDAKdGVrugGkGI3MdaL0JEpEUPyYy2-IEVJRl8_auPYuVdvgavFfinNVogjEHQjjOenhZkjruW-wQsYZboXaUQtXI-0dwifsjDkkSfpdKjtDTwFSTHEkku2qJItiC3hXqcArH7C/p.png?is_prewarmed=true",
  },
  {
    id: 8,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://ucf3f92a792eba3a711b7bb365e7.previews.dropboxusercontent.com/p/thumb/ACXQVHKDGhZz7oSoq1bRLyGtnDtrdVuzpAXZYYsWSUIzTiB_mFpcElwQFYH10eBbW8Nop7Bkd4rFx2vf7d8tcgdZ9SLYtGKdMfbnym35Xs08DM3kCD6TzX1nADesgRJh2A4RQmsuELTHZeYD5GUG5lN0BQkfP3-6xBkHPqK5hvCYKvVXYqxU6o8sdDMUdbgMeqAdqeTWdpxNHIjXtNFV0wAio5oShlRQ-KChHtpVaDl4mfG4BthtSaWJnoL9FbbLIjqJYC2A28PI9_EPP5BslL49OxzB9oC5sfq9OGUWKIHrMMRHUuEn3q5SKzqUiVLWs-SOSmDy4fSMac1IV0CGYzyO_cm07mWeuaqlBf-1Hbb_7GUoMP8czJfAS657JXACKs6rBTpV1SAMYkPY-RJ_wnG7/p.png?is_prewarmed=true",
  },
  {
    id: 9,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://ucbdf35887f9d1674a7f05592107.previews.dropboxusercontent.com/p/thumb/ACWiLVzPGRSyjqG0xfrwjrATgwE4tXFtybizdnJrRn0tArAh9sd3RxtxswrDLaGuzJCakB-1z632EZEpjLNkXknhvCA1CY5ePLb2Md-sz6VREmkTQBarOGQlp3QxltIUc8NJNLFvkTFsERg-elbc7A359DnZp9mdRB_NdY00THJdEmfXgp2KgNRi-fj-a7tnoZFxEQ-XP7No-NXeU04mX-Eq0lJvdpyolPUv30FwOE9oXBTgdwfVLr5pJ-TYZzQ0Ck3H2Y0oqpiMHb4nE7dggwvaENtwHXekfTIYuZ8XXwrx8j8fTU4JCUReWjc5AhrJbYSBjaruEOMLh8kUxuw8fQvt962_JgPxYXuJumC4pVkTBRTEBVE4BSxfgNuWez8lWtIPqfh4ydl9UEb3bQXBKqQ-/p.png?is_prewarmed=true",
  },
  {
    id: 10,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://uc5a0444029228d58ee740199a7c.previews.dropboxusercontent.com/p/thumb/ACXILjoRI-ZHswnHS0Q0IwFBKXHzCBkXb_ez1eRrnm7q7IU-7EBLHUKhp2cyKvQJngiDswEpHot7H19TELLqDMOgmrAX0q8U3JL3SRpbgxscd-rvgzqpqsfYsgyzOgCJhnh_9COGQcwdVaeVY8-mWMD6PQydYCM9GucvI_eu2MVkT9LEVeIGpPH8LXv5MXrmyQBLTIXrKO_JNfFEAEeNrY3TzF5-HCGSNLvuaxY4-B7e2o9n4Zr7ukbcUvPAKTxEd9NMx4L-wcTMDfAX7M6ecxSD2d20Cj_zqWdKLiSm9afJV0asgsH-Z_NGM_05YWBUN78n-p4Lyog2QoC6zWj_a8kzWQywiU_eVBiNEuLfdlXZfDPTRxkLQeHaHsbHgeT7vK8s5xju2YnGR__XvMsgVEnu/p.png?is_prewarmed=true",
  },
  {
    id: 11,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "https://uccd6a68da1d4476ebe1b186c141.previews.dropboxusercontent.com/p/thumb/ACXrcf2XOX1hMjWOq5n0F3AjaQtnBIkSfb8A4XiE6GCtfUt1rnByDUPcZR4qpECTaUYxIg2cFc-dL1WmqJzD5oi_6_dep6I_cPH6ewFeYxNpNOM-fInSluRWnrcXoAUGc208EaGmlrFzBJN6dgnPZVXogDDC3KvRAd2zYgELf_SvRqkQMokqVtrHHJKlFAweavROEP1kvpujfjZL9unjFbIJ2M5wt0s6JQVu3tVgTLBo4txJrk4cVoVrd1jhKL6cFyznlaoyzOOy2UmGILSaavw-WM-uAA8UgjhbhL0K4SoY8AWsIXrZ0vZXXGt2LDFAe2u8YTpzSZbf44T5tNfv5Y5Fv-iQk705Mu--yXhCKain_FaQnc296eCJZG292DOH-MQWYlQ4uLZtrOl5biEToSgf/p.png?is_prewarmed=true",
  },
  {
    id: 12,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://uc1fb97c570636d4c24aeeaf7a27.previews.dropboxusercontent.com/p/thumb/ACWsvwSu0vcJUzrCknEcdGDmu5fq5_kRJ172eOcxez5Etwfiu8_qTYcfWE_Duqjs1Q-GqwI9Q_uUtWPuL4fUQKEWepp3-SwKZIlH8NEZAoAejWw7rBVSVYf0JpXmvDWFUpxaI5QME_wapGQestmv_zEurRs60QiXPgvSsiw_vMd1RDWFaHIX0FidG-lVKQWzso3-Ua0HUDWDYiBtxp0RYqy6oRQB_tgVBVOlNCa3oJJL7oxWpfym4cQK-oPlLovCjMkdGzoymVcsCz7E4LONWGQODggFckxbf5m30iJ8IFi-rBbkPfwqZtGPGjIshqtpTN_UdyLqFkzkyS-_Vn2ETRGaeJy9JqKWoQjshFFKQ3lkZk15hKRCWJv6xOeKikjoPBeAIfI82izJdsuwm5SujX4J/p.png?is_prewarmed=true",
  },
  {
    id: 13,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://ucc51e23f62c15db076a4fc1a6b3.previews.dropboxusercontent.com/p/thumb/ACUNydJ1KCQ85m1tjwqulhx7bU6UyXtwtZ0fEo0Kh0dDidTsvBKmq-7rJs86o6LOnpszqNLrfmO3McEzUmeMn4K89z7KgkTICPVAWwezmgpmy4p441X-qyXYyC_dziyiW2Gd-aOACvKsPK1U6Y85JCscsDJWpBr75i80DpRkHBXmOCGMLpbFWxQkpQBBfe55W4ffPrsJ-Ll3sR4GGfaEgYpWbFTdSXfJ03SFuLllkw-fqFhQJUlObUCdyDD3DqqeZPhiF76rqF6r4CAoqdDAKdGVrugGkGI3MdaL0JEpEUPyYy2-IEVJRl8_auPYuVdvgavFfinNVogjEHQjjOenhZkjruW-wQsYZboXaUQtXI-0dwifsjDkkSfpdKjtDTwFSTHEkku2qJItiC3hXqcArH7C/p.png?is_prewarmed=true",
  },
  {
    id: 14,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://ucf3f92a792eba3a711b7bb365e7.previews.dropboxusercontent.com/p/thumb/ACXQVHKDGhZz7oSoq1bRLyGtnDtrdVuzpAXZYYsWSUIzTiB_mFpcElwQFYH10eBbW8Nop7Bkd4rFx2vf7d8tcgdZ9SLYtGKdMfbnym35Xs08DM3kCD6TzX1nADesgRJh2A4RQmsuELTHZeYD5GUG5lN0BQkfP3-6xBkHPqK5hvCYKvVXYqxU6o8sdDMUdbgMeqAdqeTWdpxNHIjXtNFV0wAio5oShlRQ-KChHtpVaDl4mfG4BthtSaWJnoL9FbbLIjqJYC2A28PI9_EPP5BslL49OxzB9oC5sfq9OGUWKIHrMMRHUuEn3q5SKzqUiVLWs-SOSmDy4fSMac1IV0CGYzyO_cm07mWeuaqlBf-1Hbb_7GUoMP8czJfAS657JXACKs6rBTpV1SAMYkPY-RJ_wnG7/p.png?is_prewarmed=true",
  },
  {
    id: 15,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://ucbdf35887f9d1674a7f05592107.previews.dropboxusercontent.com/p/thumb/ACWiLVzPGRSyjqG0xfrwjrATgwE4tXFtybizdnJrRn0tArAh9sd3RxtxswrDLaGuzJCakB-1z632EZEpjLNkXknhvCA1CY5ePLb2Md-sz6VREmkTQBarOGQlp3QxltIUc8NJNLFvkTFsERg-elbc7A359DnZp9mdRB_NdY00THJdEmfXgp2KgNRi-fj-a7tnoZFxEQ-XP7No-NXeU04mX-Eq0lJvdpyolPUv30FwOE9oXBTgdwfVLr5pJ-TYZzQ0Ck3H2Y0oqpiMHb4nE7dggwvaENtwHXekfTIYuZ8XXwrx8j8fTU4JCUReWjc5AhrJbYSBjaruEOMLh8kUxuw8fQvt962_JgPxYXuJumC4pVkTBRTEBVE4BSxfgNuWez8lWtIPqfh4ydl9UEb3bQXBKqQ-/p.png?is_prewarmed=true",
  },
  {
    id: 16,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://uc5a0444029228d58ee740199a7c.previews.dropboxusercontent.com/p/thumb/ACXILjoRI-ZHswnHS0Q0IwFBKXHzCBkXb_ez1eRrnm7q7IU-7EBLHUKhp2cyKvQJngiDswEpHot7H19TELLqDMOgmrAX0q8U3JL3SRpbgxscd-rvgzqpqsfYsgyzOgCJhnh_9COGQcwdVaeVY8-mWMD6PQydYCM9GucvI_eu2MVkT9LEVeIGpPH8LXv5MXrmyQBLTIXrKO_JNfFEAEeNrY3TzF5-HCGSNLvuaxY4-B7e2o9n4Zr7ukbcUvPAKTxEd9NMx4L-wcTMDfAX7M6ecxSD2d20Cj_zqWdKLiSm9afJV0asgsH-Z_NGM_05YWBUN78n-p4Lyog2QoC6zWj_a8kzWQywiU_eVBiNEuLfdlXZfDPTRxkLQeHaHsbHgeT7vK8s5xju2YnGR__XvMsgVEnu/p.png?is_prewarmed=true",
  },
  {
    id: 17,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "https://uccd6a68da1d4476ebe1b186c141.previews.dropboxusercontent.com/p/thumb/ACXrcf2XOX1hMjWOq5n0F3AjaQtnBIkSfb8A4XiE6GCtfUt1rnByDUPcZR4qpECTaUYxIg2cFc-dL1WmqJzD5oi_6_dep6I_cPH6ewFeYxNpNOM-fInSluRWnrcXoAUGc208EaGmlrFzBJN6dgnPZVXogDDC3KvRAd2zYgELf_SvRqkQMokqVtrHHJKlFAweavROEP1kvpujfjZL9unjFbIJ2M5wt0s6JQVu3tVgTLBo4txJrk4cVoVrd1jhKL6cFyznlaoyzOOy2UmGILSaavw-WM-uAA8UgjhbhL0K4SoY8AWsIXrZ0vZXXGt2LDFAe2u8YTpzSZbf44T5tNfv5Y5Fv-iQk705Mu--yXhCKain_FaQnc296eCJZG292DOH-MQWYlQ4uLZtrOl5biEToSgf/p.png?is_prewarmed=true",
  },
  {
    id: 18,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://uc1fb97c570636d4c24aeeaf7a27.previews.dropboxusercontent.com/p/thumb/ACWsvwSu0vcJUzrCknEcdGDmu5fq5_kRJ172eOcxez5Etwfiu8_qTYcfWE_Duqjs1Q-GqwI9Q_uUtWPuL4fUQKEWepp3-SwKZIlH8NEZAoAejWw7rBVSVYf0JpXmvDWFUpxaI5QME_wapGQestmv_zEurRs60QiXPgvSsiw_vMd1RDWFaHIX0FidG-lVKQWzso3-Ua0HUDWDYiBtxp0RYqy6oRQB_tgVBVOlNCa3oJJL7oxWpfym4cQK-oPlLovCjMkdGzoymVcsCz7E4LONWGQODggFckxbf5m30iJ8IFi-rBbkPfwqZtGPGjIshqtpTN_UdyLqFkzkyS-_Vn2ETRGaeJy9JqKWoQjshFFKQ3lkZk15hKRCWJv6xOeKikjoPBeAIfI82izJdsuwm5SujX4J/p.png?is_prewarmed=true",
  },
  {
    id: 19,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://ucc51e23f62c15db076a4fc1a6b3.previews.dropboxusercontent.com/p/thumb/ACUNydJ1KCQ85m1tjwqulhx7bU6UyXtwtZ0fEo0Kh0dDidTsvBKmq-7rJs86o6LOnpszqNLrfmO3McEzUmeMn4K89z7KgkTICPVAWwezmgpmy4p441X-qyXYyC_dziyiW2Gd-aOACvKsPK1U6Y85JCscsDJWpBr75i80DpRkHBXmOCGMLpbFWxQkpQBBfe55W4ffPrsJ-Ll3sR4GGfaEgYpWbFTdSXfJ03SFuLllkw-fqFhQJUlObUCdyDD3DqqeZPhiF76rqF6r4CAoqdDAKdGVrugGkGI3MdaL0JEpEUPyYy2-IEVJRl8_auPYuVdvgavFfinNVogjEHQjjOenhZkjruW-wQsYZboXaUQtXI-0dwifsjDkkSfpdKjtDTwFSTHEkku2qJItiC3hXqcArH7C/p.png?is_prewarmed=true",
  },
  {
    id: 20,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://ucf3f92a792eba3a711b7bb365e7.previews.dropboxusercontent.com/p/thumb/ACXQVHKDGhZz7oSoq1bRLyGtnDtrdVuzpAXZYYsWSUIzTiB_mFpcElwQFYH10eBbW8Nop7Bkd4rFx2vf7d8tcgdZ9SLYtGKdMfbnym35Xs08DM3kCD6TzX1nADesgRJh2A4RQmsuELTHZeYD5GUG5lN0BQkfP3-6xBkHPqK5hvCYKvVXYqxU6o8sdDMUdbgMeqAdqeTWdpxNHIjXtNFV0wAio5oShlRQ-KChHtpVaDl4mfG4BthtSaWJnoL9FbbLIjqJYC2A28PI9_EPP5BslL49OxzB9oC5sfq9OGUWKIHrMMRHUuEn3q5SKzqUiVLWs-SOSmDy4fSMac1IV0CGYzyO_cm07mWeuaqlBf-1Hbb_7GUoMP8czJfAS657JXACKs6rBTpV1SAMYkPY-RJ_wnG7/p.png?is_prewarmed=true",
  },
  {
    id: 21,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://ucbdf35887f9d1674a7f05592107.previews.dropboxusercontent.com/p/thumb/ACWiLVzPGRSyjqG0xfrwjrATgwE4tXFtybizdnJrRn0tArAh9sd3RxtxswrDLaGuzJCakB-1z632EZEpjLNkXknhvCA1CY5ePLb2Md-sz6VREmkTQBarOGQlp3QxltIUc8NJNLFvkTFsERg-elbc7A359DnZp9mdRB_NdY00THJdEmfXgp2KgNRi-fj-a7tnoZFxEQ-XP7No-NXeU04mX-Eq0lJvdpyolPUv30FwOE9oXBTgdwfVLr5pJ-TYZzQ0Ck3H2Y0oqpiMHb4nE7dggwvaENtwHXekfTIYuZ8XXwrx8j8fTU4JCUReWjc5AhrJbYSBjaruEOMLh8kUxuw8fQvt962_JgPxYXuJumC4pVkTBRTEBVE4BSxfgNuWez8lWtIPqfh4ydl9UEb3bQXBKqQ-/p.png?is_prewarmed=true",
  },
  {
    id: 22,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://uc5a0444029228d58ee740199a7c.previews.dropboxusercontent.com/p/thumb/ACXILjoRI-ZHswnHS0Q0IwFBKXHzCBkXb_ez1eRrnm7q7IU-7EBLHUKhp2cyKvQJngiDswEpHot7H19TELLqDMOgmrAX0q8U3JL3SRpbgxscd-rvgzqpqsfYsgyzOgCJhnh_9COGQcwdVaeVY8-mWMD6PQydYCM9GucvI_eu2MVkT9LEVeIGpPH8LXv5MXrmyQBLTIXrKO_JNfFEAEeNrY3TzF5-HCGSNLvuaxY4-B7e2o9n4Zr7ukbcUvPAKTxEd9NMx4L-wcTMDfAX7M6ecxSD2d20Cj_zqWdKLiSm9afJV0asgsH-Z_NGM_05YWBUN78n-p4Lyog2QoC6zWj_a8kzWQywiU_eVBiNEuLfdlXZfDPTRxkLQeHaHsbHgeT7vK8s5xju2YnGR__XvMsgVEnu/p.png?is_prewarmed=true",
  },
  {
    id: 23,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "https://uccd6a68da1d4476ebe1b186c141.previews.dropboxusercontent.com/p/thumb/ACXrcf2XOX1hMjWOq5n0F3AjaQtnBIkSfb8A4XiE6GCtfUt1rnByDUPcZR4qpECTaUYxIg2cFc-dL1WmqJzD5oi_6_dep6I_cPH6ewFeYxNpNOM-fInSluRWnrcXoAUGc208EaGmlrFzBJN6dgnPZVXogDDC3KvRAd2zYgELf_SvRqkQMokqVtrHHJKlFAweavROEP1kvpujfjZL9unjFbIJ2M5wt0s6JQVu3tVgTLBo4txJrk4cVoVrd1jhKL6cFyznlaoyzOOy2UmGILSaavw-WM-uAA8UgjhbhL0K4SoY8AWsIXrZ0vZXXGt2LDFAe2u8YTpzSZbf44T5tNfv5Y5Fv-iQk705Mu--yXhCKain_FaQnc296eCJZG292DOH-MQWYlQ4uLZtrOl5biEToSgf/p.png?is_prewarmed=true",
  },
  {
    id: 24,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://uc1fb97c570636d4c24aeeaf7a27.previews.dropboxusercontent.com/p/thumb/ACWsvwSu0vcJUzrCknEcdGDmu5fq5_kRJ172eOcxez5Etwfiu8_qTYcfWE_Duqjs1Q-GqwI9Q_uUtWPuL4fUQKEWepp3-SwKZIlH8NEZAoAejWw7rBVSVYf0JpXmvDWFUpxaI5QME_wapGQestmv_zEurRs60QiXPgvSsiw_vMd1RDWFaHIX0FidG-lVKQWzso3-Ua0HUDWDYiBtxp0RYqy6oRQB_tgVBVOlNCa3oJJL7oxWpfym4cQK-oPlLovCjMkdGzoymVcsCz7E4LONWGQODggFckxbf5m30iJ8IFi-rBbkPfwqZtGPGjIshqtpTN_UdyLqFkzkyS-_Vn2ETRGaeJy9JqKWoQjshFFKQ3lkZk15hKRCWJv6xOeKikjoPBeAIfI82izJdsuwm5SujX4J/p.png?is_prewarmed=true",
  },
  {
    id: 25,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "https://uccd6a68da1d4476ebe1b186c141.previews.dropboxusercontent.com/p/thumb/ACXrcf2XOX1hMjWOq5n0F3AjaQtnBIkSfb8A4XiE6GCtfUt1rnByDUPcZR4qpECTaUYxIg2cFc-dL1WmqJzD5oi_6_dep6I_cPH6ewFeYxNpNOM-fInSluRWnrcXoAUGc208EaGmlrFzBJN6dgnPZVXogDDC3KvRAd2zYgELf_SvRqkQMokqVtrHHJKlFAweavROEP1kvpujfjZL9unjFbIJ2M5wt0s6JQVu3tVgTLBo4txJrk4cVoVrd1jhKL6cFyznlaoyzOOy2UmGILSaavw-WM-uAA8UgjhbhL0K4SoY8AWsIXrZ0vZXXGt2LDFAe2u8YTpzSZbf44T5tNfv5Y5Fv-iQk705Mu--yXhCKain_FaQnc296eCJZG292DOH-MQWYlQ4uLZtrOl5biEToSgf/p.png?is_prewarmed=true",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
