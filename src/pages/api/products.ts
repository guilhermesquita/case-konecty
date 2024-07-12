import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://previews.dropbox.com/p/thumb/ACXnmIhv_85TDpRHfCm04tVTv3Bigu_c62bWw_VmkeLYRZeqWdnulr9pJZ_jAn7p4BU-lAgEAr4tmwXrr35BW1iDnOY2AML1GWlT1rTvMh6dNXEs3QvRZrpHYj6KfoyxtZFRjzYwEnvUef-JqJQ8T5_RF8jLEKhBup__cry7N5z1QnXh2SIkaW0hvkOEvKqDITfGJiYDnTVcTKiTEAmZjhixMtko2Qh5zpWsYNNIzZPWMi15Kw7scfE6NEbMBZKihjY6BTGjZt-mCWKRALqaZR6rsnaXC_yme_7dCdrwq_6-NXBB4ww31vJN925zlpLFp_u15xs8cT01KBc7x6I4GKEGZizCxrjRLJdmjU-1F_AfCw/p.png",
  },
  {
    id: 2,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://previews.dropbox.com/p/thumb/ACWHBJOJ0GhKlbwiq8E_6yO5GRrNpL8tFQGSpq0LP_5_RXkyeYEsSSYnol60ngfcFx6IQJkWWKQZ5SyLl3ZbCOy0bI3e3Z6YLI0pdz2O6YO-QLKPESb2s9xXSOVJC80k0qeyfvKiYoKWGTCu_dbWs9i6661aT6m8Mt3SUfYa8KqB88j8hylLxHYylxVy0wEDA5JtLHrKIADXmd5-X3DshLx0nZ-LtYY-i94z3uu7cl6vQrI-a6T9TPCPipSbhkntBrsL9dUOmvNeCelvMfFS9dy-8D9R3ZQNAoLsrNu9BgZsJTlJXmArFLuyDUbXKnV_b-vvCYyJY0XKkb3CZ9bC-OmA/p.png",
  },
  {
    id: 3,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://previews.dropbox.com/p/thumb/ACXts_PtXc0BF-gzKAnSCkleXqjpabHfMBbPoF6nbCZ91-Oxyw7BVOygB-pemyhq2Aqq321Zt91z4Mha9QmLCNwMPaqay7-maoTUYuZ1UM_BxDu1bmsJUoi1yWEJNRmB97kO4iGwQB_O0liq_OjprMer3F_O-Zma-aJZ46oFM8pJoVgZEnjdI7hTvk9a8GHENXMr74VUW8f7_S8hHqFkpn20qy8uESk3p722-awun1oQO9q2X7EH5BiZvBKUsHEXCN2eu1e6eDLTd6UW-EUNfytISWyPhxhGrZHN6R3ZFHBXMt83AeUszzxNwoNlcUWJ4eXSNn_xd-EcY2rRkoH6fS-Z/p.png",
  },
  {
    id: 4,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://previews.dropbox.com/p/thumb/ACXH3QyW2rg9amaRrLEzhBff_AFOWKKH0esbml_1PmDpkY5w0IClE2Am_rh6NX7MCBsg_oXDBDhr6iGleueh88Zwv_zqc_XmCxRnWn3NH5fLCCgVIeHgb532TQIInxdMiXojZySq-PqAjMfr1jetIJb2QfRVkfpMvNj7WbxO2GQLQBu-d-4VaUwX7r3bCUwhD4nM54aItjPdt9FROXn3c_25WaRWG-hAPJiOmo8XS2khtgyLtZuKsmLM8RqkvlOx8ugka5WJ6QKsj1--SG8JpIj4jljgcXkqjjujqzFOOJ1Pvg3PhOmsxnaTtJE8tLzya2tsaMD5BQGE6OLZnaQBT4ib/p.png",
  },
  {
    id: 5,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image: "https://previews.dropbox.com/p/thumb/ACX5BXaVGDw1dmC-uS5c7fJZNw6r9B8Ss_fxuOKeqDIcp_TwyI3HdEMFCN_3h8tynaa-UJ0bXoF-08qwcE7fvjX9y1kX7QYf1xN5mFR1OCJ-FCaPRDwxpCxHbfvn1YqPzqAjlm6wyK35ppHBXJKwFoNeQi8bEkQZRRv1zHHYKU_g13fNjXkih8i5WzdKk0YBI5NN_WkeQF0UT7ptP94aCsh7UpzILEo-YqgdRy_XXm9LJAPZiDrAPESWKO-oJs-TkoNgq7ka-omLkIW7YkkfECluubtkYD3vWmwHP9PZDAWXaxIzw5nJNk5dGAcebpCLZzyQF9mPCPYhPpSHyXj7MzX2/p.png",
  },
  {
    id: 6,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://previews.dropbox.com/p/thumb/ACUR362H75whQ4osZMRPRzQ1iULKN0_dLLsqXRn7w4pfEZLcEZWfcLe_PrRE7xiZkVTgFLZ1s5IKeKuX4qfML1J3pwHZp8eTk7g9f9qLQVKCKwKZqMTSOJbPzX7981UenJ6fsafWBoUui5smaLCMyvxK-GhfC7jb6r4eeLQpiMpR_EkU7O1HzREyOCXfKujT4NkYUKGpI3fJ-Ht-OcK1FePfdfqAOBmJroZ0W4q26xcpG34jtn7M5E-RNVTcKN95_nfpGL0ni81EaBjVsfK24yM4UI7hlYhUXX1g_TiSh5AEbeyv1-Ve5Y9zIJd3iLPdeXCxROD4okwOax9EGi5bdsPr/p.png",
  },
  {
    id: 7,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://previews.dropbox.com/p/thumb/ACXnmIhv_85TDpRHfCm04tVTv3Bigu_c62bWw_VmkeLYRZeqWdnulr9pJZ_jAn7p4BU-lAgEAr4tmwXrr35BW1iDnOY2AML1GWlT1rTvMh6dNXEs3QvRZrpHYj6KfoyxtZFRjzYwEnvUef-JqJQ8T5_RF8jLEKhBup__cry7N5z1QnXh2SIkaW0hvkOEvKqDITfGJiYDnTVcTKiTEAmZjhixMtko2Qh5zpWsYNNIzZPWMi15Kw7scfE6NEbMBZKihjY6BTGjZt-mCWKRALqaZR6rsnaXC_yme_7dCdrwq_6-NXBB4ww31vJN925zlpLFp_u15xs8cT01KBc7x6I4GKEGZizCxrjRLJdmjU-1F_AfCw/p.png",
  },
  {
    id: 8,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://previews.dropbox.com/p/thumb/ACWHBJOJ0GhKlbwiq8E_6yO5GRrNpL8tFQGSpq0LP_5_RXkyeYEsSSYnol60ngfcFx6IQJkWWKQZ5SyLl3ZbCOy0bI3e3Z6YLI0pdz2O6YO-QLKPESb2s9xXSOVJC80k0qeyfvKiYoKWGTCu_dbWs9i6661aT6m8Mt3SUfYa8KqB88j8hylLxHYylxVy0wEDA5JtLHrKIADXmd5-X3DshLx0nZ-LtYY-i94z3uu7cl6vQrI-a6T9TPCPipSbhkntBrsL9dUOmvNeCelvMfFS9dy-8D9R3ZQNAoLsrNu9BgZsJTlJXmArFLuyDUbXKnV_b-vvCYyJY0XKkb3CZ9bC-OmA/p.png",
  },
  {
    id: 9,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://previews.dropbox.com/p/thumb/ACXts_PtXc0BF-gzKAnSCkleXqjpabHfMBbPoF6nbCZ91-Oxyw7BVOygB-pemyhq2Aqq321Zt91z4Mha9QmLCNwMPaqay7-maoTUYuZ1UM_BxDu1bmsJUoi1yWEJNRmB97kO4iGwQB_O0liq_OjprMer3F_O-Zma-aJZ46oFM8pJoVgZEnjdI7hTvk9a8GHENXMr74VUW8f7_S8hHqFkpn20qy8uESk3p722-awun1oQO9q2X7EH5BiZvBKUsHEXCN2eu1e6eDLTd6UW-EUNfytISWyPhxhGrZHN6R3ZFHBXMt83AeUszzxNwoNlcUWJ4eXSNn_xd-EcY2rRkoH6fS-Z/p.png",
  },
  {
    id: 10,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://previews.dropbox.com/p/thumb/ACXH3QyW2rg9amaRrLEzhBff_AFOWKKH0esbml_1PmDpkY5w0IClE2Am_rh6NX7MCBsg_oXDBDhr6iGleueh88Zwv_zqc_XmCxRnWn3NH5fLCCgVIeHgb532TQIInxdMiXojZySq-PqAjMfr1jetIJb2QfRVkfpMvNj7WbxO2GQLQBu-d-4VaUwX7r3bCUwhD4nM54aItjPdt9FROXn3c_25WaRWG-hAPJiOmo8XS2khtgyLtZuKsmLM8RqkvlOx8ugka5WJ6QKsj1--SG8JpIj4jljgcXkqjjujqzFOOJ1Pvg3PhOmsxnaTtJE8tLzya2tsaMD5BQGE6OLZnaQBT4ib/p.png",
  },
  {
    id: 11,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image: "https://previews.dropbox.com/p/thumb/ACX5BXaVGDw1dmC-uS5c7fJZNw6r9B8Ss_fxuOKeqDIcp_TwyI3HdEMFCN_3h8tynaa-UJ0bXoF-08qwcE7fvjX9y1kX7QYf1xN5mFR1OCJ-FCaPRDwxpCxHbfvn1YqPzqAjlm6wyK35ppHBXJKwFoNeQi8bEkQZRRv1zHHYKU_g13fNjXkih8i5WzdKk0YBI5NN_WkeQF0UT7ptP94aCsh7UpzILEo-YqgdRy_XXm9LJAPZiDrAPESWKO-oJs-TkoNgq7ka-omLkIW7YkkfECluubtkYD3vWmwHP9PZDAWXaxIzw5nJNk5dGAcebpCLZzyQF9mPCPYhPpSHyXj7MzX2/p.png",
  },
  {
    id: 12,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://previews.dropbox.com/p/thumb/ACUR362H75whQ4osZMRPRzQ1iULKN0_dLLsqXRn7w4pfEZLcEZWfcLe_PrRE7xiZkVTgFLZ1s5IKeKuX4qfML1J3pwHZp8eTk7g9f9qLQVKCKwKZqMTSOJbPzX7981UenJ6fsafWBoUui5smaLCMyvxK-GhfC7jb6r4eeLQpiMpR_EkU7O1HzREyOCXfKujT4NkYUKGpI3fJ-Ht-OcK1FePfdfqAOBmJroZ0W4q26xcpG34jtn7M5E-RNVTcKN95_nfpGL0ni81EaBjVsfK24yM4UI7hlYhUXX1g_TiSh5AEbeyv1-Ve5Y9zIJd3iLPdeXCxROD4okwOax9EGi5bdsPr/p.png",
  },
  {
    id: 13,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://previews.dropbox.com/p/thumb/ACXnmIhv_85TDpRHfCm04tVTv3Bigu_c62bWw_VmkeLYRZeqWdnulr9pJZ_jAn7p4BU-lAgEAr4tmwXrr35BW1iDnOY2AML1GWlT1rTvMh6dNXEs3QvRZrpHYj6KfoyxtZFRjzYwEnvUef-JqJQ8T5_RF8jLEKhBup__cry7N5z1QnXh2SIkaW0hvkOEvKqDITfGJiYDnTVcTKiTEAmZjhixMtko2Qh5zpWsYNNIzZPWMi15Kw7scfE6NEbMBZKihjY6BTGjZt-mCWKRALqaZR6rsnaXC_yme_7dCdrwq_6-NXBB4ww31vJN925zlpLFp_u15xs8cT01KBc7x6I4GKEGZizCxrjRLJdmjU-1F_AfCw/p.png",
  },
  {
    id: 14,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://previews.dropbox.com/p/thumb/ACWHBJOJ0GhKlbwiq8E_6yO5GRrNpL8tFQGSpq0LP_5_RXkyeYEsSSYnol60ngfcFx6IQJkWWKQZ5SyLl3ZbCOy0bI3e3Z6YLI0pdz2O6YO-QLKPESb2s9xXSOVJC80k0qeyfvKiYoKWGTCu_dbWs9i6661aT6m8Mt3SUfYa8KqB88j8hylLxHYylxVy0wEDA5JtLHrKIADXmd5-X3DshLx0nZ-LtYY-i94z3uu7cl6vQrI-a6T9TPCPipSbhkntBrsL9dUOmvNeCelvMfFS9dy-8D9R3ZQNAoLsrNu9BgZsJTlJXmArFLuyDUbXKnV_b-vvCYyJY0XKkb3CZ9bC-OmA/p.png",
  },
  {
    id: 15,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://previews.dropbox.com/p/thumb/ACXts_PtXc0BF-gzKAnSCkleXqjpabHfMBbPoF6nbCZ91-Oxyw7BVOygB-pemyhq2Aqq321Zt91z4Mha9QmLCNwMPaqay7-maoTUYuZ1UM_BxDu1bmsJUoi1yWEJNRmB97kO4iGwQB_O0liq_OjprMer3F_O-Zma-aJZ46oFM8pJoVgZEnjdI7hTvk9a8GHENXMr74VUW8f7_S8hHqFkpn20qy8uESk3p722-awun1oQO9q2X7EH5BiZvBKUsHEXCN2eu1e6eDLTd6UW-EUNfytISWyPhxhGrZHN6R3ZFHBXMt83AeUszzxNwoNlcUWJ4eXSNn_xd-EcY2rRkoH6fS-Z/p.png",
  },
  {
    id: 16,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://previews.dropbox.com/p/thumb/ACXH3QyW2rg9amaRrLEzhBff_AFOWKKH0esbml_1PmDpkY5w0IClE2Am_rh6NX7MCBsg_oXDBDhr6iGleueh88Zwv_zqc_XmCxRnWn3NH5fLCCgVIeHgb532TQIInxdMiXojZySq-PqAjMfr1jetIJb2QfRVkfpMvNj7WbxO2GQLQBu-d-4VaUwX7r3bCUwhD4nM54aItjPdt9FROXn3c_25WaRWG-hAPJiOmo8XS2khtgyLtZuKsmLM8RqkvlOx8ugka5WJ6QKsj1--SG8JpIj4jljgcXkqjjujqzFOOJ1Pvg3PhOmsxnaTtJE8tLzya2tsaMD5BQGE6OLZnaQBT4ib/p.png",
  },
  {
    id: 17,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image: "https://previews.dropbox.com/p/thumb/ACX5BXaVGDw1dmC-uS5c7fJZNw6r9B8Ss_fxuOKeqDIcp_TwyI3HdEMFCN_3h8tynaa-UJ0bXoF-08qwcE7fvjX9y1kX7QYf1xN5mFR1OCJ-FCaPRDwxpCxHbfvn1YqPzqAjlm6wyK35ppHBXJKwFoNeQi8bEkQZRRv1zHHYKU_g13fNjXkih8i5WzdKk0YBI5NN_WkeQF0UT7ptP94aCsh7UpzILEo-YqgdRy_XXm9LJAPZiDrAPESWKO-oJs-TkoNgq7ka-omLkIW7YkkfECluubtkYD3vWmwHP9PZDAWXaxIzw5nJNk5dGAcebpCLZzyQF9mPCPYhPpSHyXj7MzX2/p.png",
  },
  {
    id: 18,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://previews.dropbox.com/p/thumb/ACUR362H75whQ4osZMRPRzQ1iULKN0_dLLsqXRn7w4pfEZLcEZWfcLe_PrRE7xiZkVTgFLZ1s5IKeKuX4qfML1J3pwHZp8eTk7g9f9qLQVKCKwKZqMTSOJbPzX7981UenJ6fsafWBoUui5smaLCMyvxK-GhfC7jb6r4eeLQpiMpR_EkU7O1HzREyOCXfKujT4NkYUKGpI3fJ-Ht-OcK1FePfdfqAOBmJroZ0W4q26xcpG34jtn7M5E-RNVTcKN95_nfpGL0ni81EaBjVsfK24yM4UI7hlYhUXX1g_TiSh5AEbeyv1-Ve5Y9zIJd3iLPdeXCxROD4okwOax9EGi5bdsPr/p.png",
  },
  {
    id: 19,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "https://previews.dropbox.com/p/thumb/ACXnmIhv_85TDpRHfCm04tVTv3Bigu_c62bWw_VmkeLYRZeqWdnulr9pJZ_jAn7p4BU-lAgEAr4tmwXrr35BW1iDnOY2AML1GWlT1rTvMh6dNXEs3QvRZrpHYj6KfoyxtZFRjzYwEnvUef-JqJQ8T5_RF8jLEKhBup__cry7N5z1QnXh2SIkaW0hvkOEvKqDITfGJiYDnTVcTKiTEAmZjhixMtko2Qh5zpWsYNNIzZPWMi15Kw7scfE6NEbMBZKihjY6BTGjZt-mCWKRALqaZR6rsnaXC_yme_7dCdrwq_6-NXBB4ww31vJN925zlpLFp_u15xs8cT01KBc7x6I4GKEGZizCxrjRLJdmjU-1F_AfCw/p.png",
  },
  {
    id: 20,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "https://previews.dropbox.com/p/thumb/ACWHBJOJ0GhKlbwiq8E_6yO5GRrNpL8tFQGSpq0LP_5_RXkyeYEsSSYnol60ngfcFx6IQJkWWKQZ5SyLl3ZbCOy0bI3e3Z6YLI0pdz2O6YO-QLKPESb2s9xXSOVJC80k0qeyfvKiYoKWGTCu_dbWs9i6661aT6m8Mt3SUfYa8KqB88j8hylLxHYylxVy0wEDA5JtLHrKIADXmd5-X3DshLx0nZ-LtYY-i94z3uu7cl6vQrI-a6T9TPCPipSbhkntBrsL9dUOmvNeCelvMfFS9dy-8D9R3ZQNAoLsrNu9BgZsJTlJXmArFLuyDUbXKnV_b-vvCYyJY0XKkb3CZ9bC-OmA/p.png",
  },
  {
    id: 21,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "https://previews.dropbox.com/p/thumb/ACXts_PtXc0BF-gzKAnSCkleXqjpabHfMBbPoF6nbCZ91-Oxyw7BVOygB-pemyhq2Aqq321Zt91z4Mha9QmLCNwMPaqay7-maoTUYuZ1UM_BxDu1bmsJUoi1yWEJNRmB97kO4iGwQB_O0liq_OjprMer3F_O-Zma-aJZ46oFM8pJoVgZEnjdI7hTvk9a8GHENXMr74VUW8f7_S8hHqFkpn20qy8uESk3p722-awun1oQO9q2X7EH5BiZvBKUsHEXCN2eu1e6eDLTd6UW-EUNfytISWyPhxhGrZHN6R3ZFHBXMt83AeUszzxNwoNlcUWJ4eXSNn_xd-EcY2rRkoH6fS-Z/p.png",
  },
  {
    id: 22,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "https://previews.dropbox.com/p/thumb/ACXH3QyW2rg9amaRrLEzhBff_AFOWKKH0esbml_1PmDpkY5w0IClE2Am_rh6NX7MCBsg_oXDBDhr6iGleueh88Zwv_zqc_XmCxRnWn3NH5fLCCgVIeHgb532TQIInxdMiXojZySq-PqAjMfr1jetIJb2QfRVkfpMvNj7WbxO2GQLQBu-d-4VaUwX7r3bCUwhD4nM54aItjPdt9FROXn3c_25WaRWG-hAPJiOmo8XS2khtgyLtZuKsmLM8RqkvlOx8ugka5WJ6QKsj1--SG8JpIj4jljgcXkqjjujqzFOOJ1Pvg3PhOmsxnaTtJE8tLzya2tsaMD5BQGE6OLZnaQBT4ib/p.png",
  },
  {
    id: 23,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image: "https://previews.dropbox.com/p/thumb/ACX5BXaVGDw1dmC-uS5c7fJZNw6r9B8Ss_fxuOKeqDIcp_TwyI3HdEMFCN_3h8tynaa-UJ0bXoF-08qwcE7fvjX9y1kX7QYf1xN5mFR1OCJ-FCaPRDwxpCxHbfvn1YqPzqAjlm6wyK35ppHBXJKwFoNeQi8bEkQZRRv1zHHYKU_g13fNjXkih8i5WzdKk0YBI5NN_WkeQF0UT7ptP94aCsh7UpzILEo-YqgdRy_XXm9LJAPZiDrAPESWKO-oJs-TkoNgq7ka-omLkIW7YkkfECluubtkYD3vWmwHP9PZDAWXaxIzw5nJNk5dGAcebpCLZzyQF9mPCPYhPpSHyXj7MzX2/p.png",
  },
  {
    id: 24,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "https://previews.dropbox.com/p/thumb/ACUR362H75whQ4osZMRPRzQ1iULKN0_dLLsqXRn7w4pfEZLcEZWfcLe_PrRE7xiZkVTgFLZ1s5IKeKuX4qfML1J3pwHZp8eTk7g9f9qLQVKCKwKZqMTSOJbPzX7981UenJ6fsafWBoUui5smaLCMyvxK-GhfC7jb6r4eeLQpiMpR_EkU7O1HzREyOCXfKujT4NkYUKGpI3fJ-Ht-OcK1FePfdfqAOBmJroZ0W4q26xcpG34jtn7M5E-RNVTcKN95_nfpGL0ni81EaBjVsfK24yM4UI7hlYhUXX1g_TiSh5AEbeyv1-Ve5Y9zIJd3iLPdeXCxROD4okwOax9EGi5bdsPr/p.png",
  },
  {
    id: 25,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image: "https://previews.dropbox.com/p/thumb/ACX5BXaVGDw1dmC-uS5c7fJZNw6r9B8Ss_fxuOKeqDIcp_TwyI3HdEMFCN_3h8tynaa-UJ0bXoF-08qwcE7fvjX9y1kX7QYf1xN5mFR1OCJ-FCaPRDwxpCxHbfvn1YqPzqAjlm6wyK35ppHBXJKwFoNeQi8bEkQZRRv1zHHYKU_g13fNjXkih8i5WzdKk0YBI5NN_WkeQF0UT7ptP94aCsh7UpzILEo-YqgdRy_XXm9LJAPZiDrAPESWKO-oJs-TkoNgq7ka-omLkIW7YkkfECluubtkYD3vWmwHP9PZDAWXaxIzw5nJNk5dGAcebpCLZzyQF9mPCPYhPpSHyXj7MzX2/p.png",
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
