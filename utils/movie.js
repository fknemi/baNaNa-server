import axios from "axios";
async function getMovieDetails(title, year) {
    const encodedTitle = encodeURIComponent(title);
    let url = `http://www.omdbapi.com/?t=${encodedTitle}&plot=full&apikey=${process.env.OMDB_API_KEY}`
    if (year) {
        url += `&y=${year}`
    }

    let { data } = await axios.get(url)
    return data

}

async function getNowPlaying(location, language, shortCountryCode) {

    const url = 'https://serpapi.com/search';
    const params = {
        engine: 'google_events',
        q: `Movies+in+${location}`,
        hl: 'en',
        gl: shortCountryCode,
        api_key: process.env.SERP_API_KEY
    };

    try {
        //  const res = await axios.get(url, { params });
        const data = {
            "search_metadata": {
                "id": "675f12532d7ded11ee977ad0",
                "status": "Success",
                "json_endpoint": "https://serpapi.com/searches/9a3f5ba088accbe2/675f12532d7ded11ee977ad0.json",
                "created_at": "2024-12-15 17:30:59 UTC",
                "processed_at": "2024-12-15 17:30:59 UTC",
                "google_url": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&oq=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&sourceid=chrome&ie=UTF-8",
                "raw_html_file": "https://serpapi.com/searches/9a3f5ba088accbe2/675f12532d7ded11ee977ad0.html",
                "total_time_taken": 0.55
            },
            "search_parameters": {
                "engine": "google",
                "q": "Now Showing Movies In Indore,India,Madhya Pradesh",
                "google_domain": "google.com",
                "device": "desktop"
            },
            "search_information": {
                "query_displayed": "Now Showing Movies In Indore,India,Madhya Pradesh",
                "total_results": 6470000,
                "time_taken_displayed": 0.37,
                "organic_results_state": "Results for exact spelling"
            },
            "knowledge_graph": {
                "breadcrumbs": [
                    {
                        "title": "Movies playing"
                    }
                ],
                "movies_playing": [
                    {
                        "name": "Pushpa 2: The Rule",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9byWUYbnVSKxSbNERGilnajDel0kOD_7000HD2qxEIrGAk4-tPjtLWgh3hNK6O4EJwsUy4Z5cjqMUtMwRRzhWZrNtbkkvJ82SuKF-mX-IyZHL4bvCTGq-nJU5QMWRObRrO6cO7EOjvWciX_2i73iSYKf1EDqSQyAXpvgoPuajfMupKUu7a5xE2UU_NHD-3yhKGBNllWB4IJ3Ery1oEIjt2DuufGgbz4Z34y1bLg1aGplD5T4GQoH_-dYlxvXk4kLFPWRZSLt4X6Idape4-QeniBztu9BdBAyX-CdHJit2oaUSZN87FQ%3D%3D&q=pushpa+2:+the+rule+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsEBY",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=pushpa+2%3A+the+rule+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9byWUYbnVSKxSbNERGilnajDel0kOD_7000HD2qxEIrGAk4-tPjtLWgh3hNK6O4EJwsUy4Z5cjqMUtMwRRzhWZrNtbkkvJ82SuKF-mX-IyZHL4bvCTGq-nJU5QMWRObRrO6cO7EOjvWciX_2i73iSYKf1EDqSQyAXpvgoPuajfMupKUu7a5xE2UU_NHD-3yhKGBNllWB4IJ3Ery1oEIjt2DuufGgbz4Z34y1bLg1aGplD5T4GQoH_-dYlxvXk4kLFPWRZSLt4X6Idape4-QeniBztu9BdBAyX-CdHJit2oaUSZN87FQ%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c4212566d017a760adc4f1c2152f057ae0cd.jpeg"
                    },
                    {
                        "name": "Mufasa: The Lion King",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b_vt13Yzofd9IPoL1AlbP4RRx8V3o4W39rYWi2udfrUqmAklbazgSjKmnAlKdjNhkZTmZyEL2oIWn4iG9uegnN1Hm6Xb-6F-khDihkGL4llbPle70Tx-0YTL2HgWOWF4UYlv1_wE2Qd3zxb1roicven97Ec3l5GuM-ZDskVtrEM7n4nNLwTeOVKli3_iqyWgR0tucLwRq4AuG21IOl3eMAVzRgh7N4gKO2AsRl6Y_CaUoyI5cK9mkm_Cro_z3t1v784XJmeMbHHcg0X9olO1BObjsd9gDkqzf_IRirx7qqkESs9U0w%3D%3D&q=mufasa:+the+lion+king+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsEBs",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=mufasa%3A+the+lion+king+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b_vt13Yzofd9IPoL1AlbP4RRx8V3o4W39rYWi2udfrUqmAklbazgSjKmnAlKdjNhkZTmZyEL2oIWn4iG9uegnN1Hm6Xb-6F-khDihkGL4llbPle70Tx-0YTL2HgWOWF4UYlv1_wE2Qd3zxb1roicven97Ec3l5GuM-ZDskVtrEM7n4nNLwTeOVKli3_iqyWgR0tucLwRq4AuG21IOl3eMAVzRgh7N4gKO2AsRl6Y_CaUoyI5cK9mkm_Cro_z3t1v784XJmeMbHHcg0X9olO1BObjsd9gDkqzf_IRirx7qqkESs9U0w%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c421bcdac5b04e02fc252b13eb133779a43f.jpeg"
                    },
                    {
                        "name": "Moana 2",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9bzeCJB9v2uWk3tiv-bEa5WuBFNUlFKcWfQPLckGAhbzT8UdjwGSM-YlBW17Q4ypWdm8NyPhkikFTGRpdWotJb61YFN-bQcEnTkLfvy00bFytp3Rb70E88KpsybAPA7jPgzZqqdEl_rkd5fKWto6WaE42-WRglQ1AYrp3SBlr0SvsCBMXQNTRbo0gJFWywKY2mEEIhmoQhTj-fQjv3DowS1J9m7EsukzTfR2CV_AigAdLxSvUrCdfwu-HC-RFkG1cCusX00ebdpG7fnHtJFmgwi6XnEaNMz8dMyRov-4LB-tvJDyRUQ%3D%3D&q=moana+2+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsECA",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=moana+2+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9bzeCJB9v2uWk3tiv-bEa5WuBFNUlFKcWfQPLckGAhbzT8UdjwGSM-YlBW17Q4ypWdm8NyPhkikFTGRpdWotJb61YFN-bQcEnTkLfvy00bFytp3Rb70E88KpsybAPA7jPgzZqqdEl_rkd5fKWto6WaE42-WRglQ1AYrp3SBlr0SvsCBMXQNTRbo0gJFWywKY2mEEIhmoQhTj-fQjv3DowS1J9m7EsukzTfR2CV_AigAdLxSvUrCdfwu-HC-RFkG1cCusX00ebdpG7fnHtJFmgwi6XnEaNMz8dMyRov-4LB-tvJDyRUQ%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c42141702d8263f77e7812768d91993c7c2a.jpeg"
                    },
                    {
                        "name": "The Lord of the Rings: The War of the Rohirrim",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b-TELTMJwDjSOGKYGYHd3nnDiezPmwwuzGds241KhT4TnYYbwoJ5AZ-cZvj4zeHv17zCBnna1r10E_thNSQJLmK78dwzd_N67q6LDV5m7zgNfA26iiZABae0ycs04HPf-fuP3c6aCGY4RvsOQYu1Pbz0a-BBiDZ9mpXEBOFxpeqdyX1h97o6xwYLWI8pRnsZGtmDXZgxb6Ojw2U7W_l2kCSWK7ONJY7qCSepJePXM7yqdDf1n3xhtWhcOpn2przN00t1eUKeQAmwt2z2O8FFtVMDXJeHENIjyFFnsgI8woP81pH6RA%3D%3D&q=the+lord+of+the+rings:+the+war+of+the+rohirrim+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsECU",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=the+lord+of+the+rings%3A+the+war+of+the+rohirrim+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b-TELTMJwDjSOGKYGYHd3nnDiezPmwwuzGds241KhT4TnYYbwoJ5AZ-cZvj4zeHv17zCBnna1r10E_thNSQJLmK78dwzd_N67q6LDV5m7zgNfA26iiZABae0ycs04HPf-fuP3c6aCGY4RvsOQYu1Pbz0a-BBiDZ9mpXEBOFxpeqdyX1h97o6xwYLWI8pRnsZGtmDXZgxb6Ojw2U7W_l2kCSWK7ONJY7qCSepJePXM7yqdDf1n3xhtWhcOpn2przN00t1eUKeQAmwt2z2O8FFtVMDXJeHENIjyFFnsgI8woP81pH6RA%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c421daa054178ac768d08b1b75f8aa0e4db2.jpeg"
                    },
                    {
                        "name": "Zero Se Restart",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b2xSDMqrRr-ulKKzIKvv4b4_B6zwX1n53bpnhdsL9IAAovHKa74iA8jqx301CyEH07rQ4XuxHczeWTtVIu6RCwmL_p1PkWlKe5kRFKFsn2sf6JzLcBzPA5Lxp7rSPdCnkBG_QuYVwWDEGLz6gFZzWUknRvcF0tlYdR76oPKr3ztigOmDX4xz2IIBMi6BQWCfHWgMicWXr06JM4Ce1FcYllDC9nN0rx13eqniT3idgf8BaOlUHkakf8dCaSAUirjoyE_EpFd4bSlZaTfJ_zOFJXwnrI1lHM-LWyn6XXiRhRy4GZw9gg%3D%3D&q=zero+se+restart+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsECo",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=zero+se+restart+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b2xSDMqrRr-ulKKzIKvv4b4_B6zwX1n53bpnhdsL9IAAovHKa74iA8jqx301CyEH07rQ4XuxHczeWTtVIu6RCwmL_p1PkWlKe5kRFKFsn2sf6JzLcBzPA5Lxp7rSPdCnkBG_QuYVwWDEGLz6gFZzWUknRvcF0tlYdR76oPKr3ztigOmDX4xz2IIBMi6BQWCfHWgMicWXr06JM4Ce1FcYllDC9nN0rx13eqniT3idgf8BaOlUHkakf8dCaSAUirjoyE_EpFd4bSlZaTfJ_zOFJXwnrI1lHM-LWyn6XXiRhRy4GZw9gg%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c421f2d3889ba61372fcb7e6068543e9334d.png"
                    },
                    {
                        "name": "The Sabarmati Report",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b1n2kud6-axpjZzEjfhPRSsPteYsHriU8xo6INCo7m_gl1zRVqr1KSCMC1DAWcqBCNjUue1sUSNYIM6KHbuskSVxQdcMILnXxEnCInLGrsB4cY7l266CxHdyeFo-ytdzore4W9nR-jn8hE2Wp1793mcpNSj4RpGHvgxmPnTU8f5lR2oCh91nd7tFiV71PFTQ5czuuR-M6CqvuS_qJ5t_V2q_52isM7B3HroQe09bwTbAZ3b8ehuwefTq7HdRQGeUtRLsKztuejXIUX1W4s8E1Jf3dLpYiDaTzvgueqEyRwfirMu-8Q%3D%3D&q=the+sabarmati+report+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsEC8",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=the+sabarmati+report+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b1n2kud6-axpjZzEjfhPRSsPteYsHriU8xo6INCo7m_gl1zRVqr1KSCMC1DAWcqBCNjUue1sUSNYIM6KHbuskSVxQdcMILnXxEnCInLGrsB4cY7l266CxHdyeFo-ytdzore4W9nR-jn8hE2Wp1793mcpNSj4RpGHvgxmPnTU8f5lR2oCh91nd7tFiV71PFTQ5czuuR-M6CqvuS_qJ5t_V2q_52isM7B3HroQe09bwTbAZ3b8ehuwefTq7HdRQGeUtRLsKztuejXIUX1W4s8E1Jf3dLpYiDaTzvgueqEyRwfirMu-8Q%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c421736c053db542aac3c74aedcd8c2e1ac0.jpeg"
                    },
                    {
                        "name": "Heretic",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b8pfjXPeKCAQTxehMohdKLmAG0pm0cp4hIRgzKpLLeT9ZjZ2Ebajfu5hl2Vn05qhFmHDkgzwxubCIJBiP6ZuaVVEhl4TcR1MD1LsW3QKKGRrTWxx7fXZTidnDdI_l-rX4SpdkNMpxXJqbXdrM976igv0UD7eS3R9ApJQ1lxztR0udDWX_mtVUMnrrl7C6AXezyGf8Ij6I_-XlZU1cSSFZeeCJWq3mFW3CrDgAIrASemHDdmTN8HungbhnvXigfLe-D4i-A_FEt8P9CK5T67Q82Qk4xoDu77DDxEVyQnwfnup8uCFww%3D%3D&q=heretic+(film)+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsEDQ",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=heretic+%28film%29+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b8pfjXPeKCAQTxehMohdKLmAG0pm0cp4hIRgzKpLLeT9ZjZ2Ebajfu5hl2Vn05qhFmHDkgzwxubCIJBiP6ZuaVVEhl4TcR1MD1LsW3QKKGRrTWxx7fXZTidnDdI_l-rX4SpdkNMpxXJqbXdrM976igv0UD7eS3R9ApJQ1lxztR0udDWX_mtVUMnrrl7C6AXezyGf8Ij6I_-XlZU1cSSFZeeCJWq3mFW3CrDgAIrASemHDdmTN8HungbhnvXigfLe-D4i-A_FEt8P9CK5T67Q82Qk4xoDu77DDxEVyQnwfnup8uCFww%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c421564aa74097a5a489f717b99b80835baf.jpeg"
                    },
                    {
                        "name": "Solo Leveling - ReAwakening",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9bymNbwgilQaYlnMx8yiHCrpIR-BCNzXmLQ9hXoYyKqclmgP7xj5e2WVGAMZ5utjbEtX8a0-lECarEvwdKI3trUqZeho89rn5nWBuKo2GZIe7yqL7eousndELdgsPKy9rECwVSXv6rXaML-aHg2zA8b6ljYhhY8jGFhavS1lIqr-l_cTU4NQRea4776WHj_pA0keU3JABrbbSbTEkIl4bQHA37-L-c-rNbw2RKTcuHhkggtXQzSnND2EDqekD_8s5Z23RQUPTVuBSuzVzP8Wn631xRGagfTm3ksqyAhMt6RgffMaAnw%3D%3D&q=solo+leveling+-+reawakening+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsEDk",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=solo+leveling+-+reawakening+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9bymNbwgilQaYlnMx8yiHCrpIR-BCNzXmLQ9hXoYyKqclmgP7xj5e2WVGAMZ5utjbEtX8a0-lECarEvwdKI3trUqZeho89rn5nWBuKo2GZIe7yqL7eousndELdgsPKy9rECwVSXv6rXaML-aHg2zA8b6ljYhhY8jGFhavS1lIqr-l_cTU4NQRea4776WHj_pA0keU3JABrbbSbTEkIl4bQHA37-L-c-rNbw2RKTcuHhkggtXQzSnND2EDqekD_8s5Z23RQUPTVuBSuzVzP8Wn631xRGagfTm3ksqyAhMt6RgffMaAnw%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c4219dc1830bbaac6a29822d581a2c098ab1.jpeg"
                    },
                    {
                        "name": "The Wild Robot",
                        "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b2xcEYWLnhNqpxsi2spd7WSYCxCw0LLEq90ib4-gtGokVVp_CWSesnGnBcbES_M2Orwtus62ORd4PUr7gTjdjHeuGAzwPmW02haGhmtiluum0Lwx1ESlpAA3pqeu0No35l3ZSlJZHwozmRfjaDx691yeETiTpihvC59F7hIoq5HsaaSu7Dt_tEAN0oYDA4obXBva1h71rl2Cxfl31ABdYSYql4IFvG-AXTZdLvChL5W36arLm9_4TE1fB1s617-NcKywOZrfyQsHKvXtnlhwnTUDJoVTJ8kbnKh7xZGV5WeQQj132w%3D%3D&q=the+wild+robot+showtimes&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q-BZ6BAgsED4",
                        "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=the+wild+robot+showtimes&si=ACC90nx-a09Ms2c-Yw9HURzGmYr0DcnwaB2JZ7Rs9JDkX1F9b2xcEYWLnhNqpxsi2spd7WSYCxCw0LLEq90ib4-gtGokVVp_CWSesnGnBcbES_M2Orwtus62ORd4PUr7gTjdjHeuGAzwPmW02haGhmtiluum0Lwx1ESlpAA3pqeu0No35l3ZSlJZHwozmRfjaDx691yeETiTpihvC59F7hIoq5HsaaSu7Dt_tEAN0oYDA4obXBva1h71rl2Cxfl31ABdYSYql4IFvG-AXTZdLvChL5W36arLm9_4TE1fB1s617-NcKywOZrfyQsHKvXtnlhwnTUDJoVTJ8kbnKh7xZGV5WeQQj132w%3D%3D",
                        "image": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/408cfe593e2c02b0aad76c4d0148ab8647ffa51a71c2c421fb18850a6b66d166d0f63a779e9e5600.jpeg"
                    }
                ]
            },
            "organic_results": [
                {
                    "position": 1,
                    "title": "Indore Movie Tickets Online Booking & Showtimes near you",
                    "link": "https://in.bookmyshow.com/explore/movies-indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://in.bookmyshow.com/explore/movies-indore&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECBcQAQ",
                    "displayed_link": "https://in.bookmyshow.com › explore › movies-indore",
                    "thumbnail": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85fcc12ce42859cc562f9a5b74d40f896f5.jpeg",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f4fd1c9469dc887c69fe351606da69f6c.png",
                    "snippet": "Online movie ticket bookings for the Bollywood, Hollywood, Tamil, Telugu and other regional films showing near you in Indore. Check out the List of latest ...",
                    "snippet_highlighted_words": [
                        "movie",
                        "films showing",
                        "Indore"
                    ],
                    "sitelinks": {
                        "inline": [
                            {
                                "title": "Upcoming Movies 2024",
                                "link": "https://in.bookmyshow.com/explore/upcoming-movies-indore"
                            },
                            {
                                "title": "3D Movies in Indore",
                                "link": "https://in.bookmyshow.com/explore/3d-movies-indore"
                            },
                            {
                                "title": "Cinema In Indore",
                                "link": "https://in.bookmyshow.com/indore/venue-list"
                            },
                            {
                                "title": "Animation Movies",
                                "link": "https://in.bookmyshow.com/explore/animation-movies-indore"
                            }
                        ]
                    },
                    "source": "BookMyShow"
                },
                {
                    "position": 2,
                    "title": "Online Movie Ticket Booking, Showtimes in Indore - Paytm",
                    "link": "https://paytm.com/movies/indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://paytm.com/movies/indore&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECBYQAQ",
                    "displayed_link": "https://paytm.com › movies › indore",
                    "thumbnail": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f29cbdd0cd2306c98295ebe78424cda5c.jpeg",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f219cece33f969a151cdc62c31364dd98.png",
                    "snippet": "Movies in Indore - Book online movie tickets for cinemas in Indore at Paytm.com. Find showtimes, ticket prices, available seats with release dates of movies ...",
                    "snippet_highlighted_words": [
                        "Movies",
                        "Indore",
                        "movie",
                        "cinemas",
                        "Indore",
                        "showtimes",
                        "movies"
                    ],
                    "sitelinks": {
                        "inline": [
                            {
                                "title": "Theatres in Indore",
                                "link": "https://paytm.com/movies/indore/cinema-halls-and-movie-theatre"
                            },
                            {
                                "title": "Fundore Cinemas, Rau, Indore",
                                "link": "https://paytm.com/movies/indore/fundore-cinemas-rau-indore-c/1014901"
                            },
                            {
                                "title": "Inox Nexus Indore Central...",
                                "link": "https://paytm.com/movies/indore/inox-nexus-indore-central-regal-square-indore-c/1024422"
                            }
                        ]
                    },
                    "source": "Paytm"
                },
                {
                    "position": 3,
                    "title": "Indore INOX Cinemas List | Show Timings at Theatres Near ...",
                    "link": "https://in.bookmyshow.com/cinemas-list/inox/indore/inox",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://in.bookmyshow.com/cinemas-list/inox/indore/inox&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECBAQAQ",
                    "displayed_link": "https://in.bookmyshow.com › ... › INOX",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f789cd12623b06c86555c235ef514b843.png",
                    "snippet": "INOX Cinemas in Indore Tickets Online Booking. Check out prices, film shows, cinema showtimes, nearby theatre address, movies & cinemas show timings for ...",
                    "snippet_highlighted_words": [
                        "Cinemas",
                        "Indore",
                        "film",
                        "cinema showtimes",
                        "movies",
                        "cinemas show"
                    ],
                    "source": "BookMyShow"
                },
                {
                    "position": 4,
                    "title": "Movies in Indore",
                    "link": "https://ticketnew.com/movies/indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ticketnew.com/movies/indore&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECBIQAQ",
                    "displayed_link": "https://ticketnew.com › Movie Tickets › Indore",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f81516bf05468a1f28af046d85bfb248e.png",
                    "snippet": "Mufasa: The Lion King. UHindi, English. Zero Se Restart. New Release. Zero Se Restart. U/AHindi. Upcoming Movies · View All. Viduthalai Part - 2.",
                    "snippet_highlighted_words": [
                        "Movies"
                    ],
                    "source": "ticketnew.com"
                },
                {
                    "position": 5,
                    "title": "Showtimes in Indore - Movies",
                    "link": "https://timesofindia.indiatimes.com/entertainment/indore/movie-showtimes/140",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://timesofindia.indiatimes.com/entertainment/indore/movie-showtimes/140&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECBEQAQ",
                    "displayed_link": "https://timesofindia.indiatimes.com › ... › INDORE",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f1c8a820fd3c627a8c17dab8b4758636a.png",
                    "snippet": "Pushpa 2: The Rule ; Carnival Cinemas - Mangal City Mall, Vijay Nagar. 9:00 AM10:15 AM ; Miraj Cinema Velocity III - Chandra Nagar. 7:00 AM9:00 AM ; Fortune Cinema ...",
                    "snippet_highlighted_words": [
                        "Cinemas",
                        "Cinema",
                        "Cinema"
                    ],
                    "source": "Times of India"
                },
                {
                    "position": 6,
                    "title": "Cine Square Cinemas, Tirupati Nagar, Indore - Movie Tickets",
                    "link": "https://paytm.com/movies/indore/cine-square-cinemas-indore-c/19107",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://paytm.com/movies/indore/cine-square-cinemas-indore-c/19107&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECBoQAQ",
                    "displayed_link": "https://paytm.com › movies › cine-square-cinemas-indo...",
                    "thumbnail": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f072b2c7f6aa1133c21c5b827ea6ca913.jpeg",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f8d9c440fe6d35d8f7f4e0caab06e6c34.png",
                    "snippet": "Pushpa 2: The Rule. U/AHindi, Telugu · Bhool Bhulaiyaa 3. U/AHindi · Mufasa: The Lion King. New Release. Mufasa: The Lion King. UHindi, English · Moana 2. UHindi, ...",
                    "source": "Paytm"
                },
                {
                    "position": 7,
                    "title": "INOX Phoenix, Citadel Mall, Indore",
                    "link": "https://ticketnew.com/movies/indore/inox-phoenix-citadel-mall-c/1024424",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ticketnew.com/movies/indore/inox-phoenix-citadel-mall-c/1024424&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECDMQAQ",
                    "displayed_link": "https://ticketnew.com › movies › inox-phoenix-citadel-...",
                    "thumbnail": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85fb4d9af9056c24123a1d0a72160dcbf1c.jpeg",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f5ef51e782d36dbbc5b4f31402c5d3bb9.png",
                    "snippet": "INOX Phoenix, Citadel Mall, Indore is a chain of theatres in India that exhibit a myriad of movies around the year. Be it a Regional, Bollywood or Hollywood ...",
                    "snippet_highlighted_words": [
                        "Indore",
                        "India",
                        "movies"
                    ],
                    "source": "ticketnew.com"
                },
                {
                    "position": 8,
                    "title": "10 Theaters in Indore - Cinema Halls",
                    "link": "https://www.justdial.com/Indore/Cinema-Halls/nct-10099752",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.justdial.com/Indore/Cinema-Halls/nct-10099752&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECDQQAQ",
                    "displayed_link": "https://www.justdial.com › ... › 56+ Listings",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f525bc2bf9dcdf7a1143a910c8b0fc546.png",
                    "snippet": "56 Theaters in Indore. Find Movie Theaters running ✓Hindi Movies, ✓English Movies, ✓Tamil Movies, ✓Telugu Movies, ✓Marathi Movies, ✓Malayalam Movies, ...",
                    "snippet_highlighted_words": [
                        "Indore",
                        "Movie",
                        "running",
                        "Movies",
                        "Movies",
                        "Movies",
                        "Movies",
                        "Movies",
                        "Movies"
                    ],
                    "sitelinks": {
                        "inline": [
                            {
                                "title": "Cinema Halls in Mhow, Indore",
                                "link": "https://www.justdial.com/Indore/Cinema-Halls-in-Mhow/nct-10099752"
                            },
                            {
                                "title": "Cinema Halls in Rau",
                                "link": "https://www.justdial.com/Indore/Cinema-Halls-in-Rau/nct-10099752"
                            },
                            {
                                "title": "7d Cinema Halls",
                                "link": "https://www.justdial.com/Indore/7d-Cinema-Halls/nct-11134494"
                            }
                        ]
                    },
                    "rich_snippet": {
                        "top": {
                            "detected_extensions": {
                                "rating": 4.0,
                                "reviews": 2710962
                            },
                            "extensions": [
                                "4.0(2,710,962)"
                            ]
                        }
                    },
                    "source": "Justdial"
                },
                {
                    "position": 9,
                    "title": "INOX Movies in Indore",
                    "link": "https://www.phoenixcitadel.in/movies",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.phoenixcitadel.in/movies&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECC8QAQ",
                    "displayed_link": "https://www.phoenixcitadel.in › movies",
                    "thumbnail": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f5fce6406c294a8a730ac5e16272a95ff.jpeg",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85fb5bf68f19daaec57ccf6f6834349d310.png",
                    "snippet": "With a seating capacity of 1321 seats, the INOX multiplex offers varied choices of cinema options with its 2 INSIGNIA, 1 BIGPIX screen, and 1 KIDDLES auditoria.",
                    "snippet_highlighted_words": [
                        "cinema"
                    ],
                    "source": "Phoenix Citadel"
                },
                {
                    "position": 10,
                    "title": "Movie Theaters in Indore, List of Cinema Halls in Indore",
                    "link": "https://www.indoreonline.in/guide/movie-theaters-in-indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.indoreonline.in/guide/movie-theaters-in-indore&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4QFnoECDIQAQ",
                    "displayed_link": "https://www.indoreonline.in › guide › movie-theaters-in...",
                    "thumbnail": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85fa3dc7ab4d97672a3a63c635374aff147.jpeg",
                    "favicon": "https://serpapi.com/searches/675f12532d7ded11ee977ad0/images/310db2579ac77b9e0b024ae09039a85f38c5fb72858ae74d1ca4d2bf02984b4a.png",
                    "snippet": "Movie Theaters in Indore - Find out the top movie theaters in Indore along with their addresses and phone numbers and book your movie tickets now!",
                    "snippet_highlighted_words": [
                        "Movie",
                        "Indore",
                        "movie",
                        "Indore",
                        "movie",
                        "now"
                    ],
                    "source": "indoreonline.in"
                }
            ],
            "related_searches": [
                {
                    "block_position": 1,
                    "query": "Now showing movies in indore india madhya pradesh today",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Now+showing+movies+in+indore+india+madhya+pradesh+today&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAg-EAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+showing+movies+in+indore+india+madhya+pradesh+today"
                },
                {
                    "block_position": 1,
                    "query": "BookMyShow Indore",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=BookMyShow+Indore&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhDEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=BookMyShow+Indore"
                },
                {
                    "block_position": 1,
                    "query": "Indore Cinema movie List today",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Indore+Cinema+movie+List+today&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhCEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Indore+Cinema+movie+List+today"
                },
                {
                    "block_position": 1,
                    "query": "Now showing movies in indore india madhya pradesh ticket price",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Now+showing+movies+in+indore+india+madhya+pradesh+ticket+price&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhEEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+showing+movies+in+indore+india+madhya+pradesh+ticket+price"
                },
                {
                    "block_position": 1,
                    "query": "Now showing movies in indore india madhya pradesh online",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Now+showing+movies+in+indore+india+madhya+pradesh+online&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhGEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+showing+movies+in+indore+india+madhya+pradesh+online"
                },
                {
                    "block_position": 1,
                    "query": "Indore - Movie Ticket price",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Indore+-+Movie+Ticket+price&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhHEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Indore+-+Movie+Ticket+price"
                },
                {
                    "block_position": 1,
                    "query": "c21 mall, indore movie ticket price",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=c21+mall,+indore+movie+ticket+price&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhIEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=c21+mall%2C+indore+movie+ticket+price"
                },
                {
                    "block_position": 1,
                    "query": "au cinema: indore show timings today",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=au+cinema:+indore+show+timings+today&sa=X&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q1QJ6BAhFEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=au+cinema%3A+indore+show+timings+today"
                }
            ],
            "pagination": {
                "current": 1,
                "next": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=10&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8NMDegQICRAS",
                "other_pages": {
                    "2": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=10&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAE",
                    "3": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=20&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAG",
                    "4": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=30&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAI",
                    "5": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=40&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAK",
                    "6": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=50&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAM",
                    "7": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=60&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAO",
                    "8": "https://www.google.com/search?q=Now+Showing+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=UxJfZ6nIFe7l5NoP7tup8Q8&start=70&sa=N&sstk=ATObxK6rdlOigpNYBki4mJVNMQU2Gry0mlzx1fHd3BTrW7OuszVB6i2WU_96tmiuU-eDSHysbAW0iHrYjpI0ipIsADILYkj7EIomtA&ved=2ahUKEwjpvYHrpqqKAxXuMlkFHe5tKv4Q8tMDegQICRAQ"
                }
            },
            "serpapi_pagination": {
                "current": 1,
                "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=10",
                "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=10",
                "other_pages": {
                    "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=10",
                    "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=20",
                    "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=30",
                    "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=40",
                    "6": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=50",
                    "7": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=60",
                    "8": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Now+Showing+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=70"
                }
            }
        }
        // return res.data
        //
        let year = new Date().getFullYear()
        const promises = data.knowledge_graph.movies_playing.map(async ({ name }) => {
            let movie = await getMovieDetails(name, year);
            if (movie) {
                return movie;
            }
        });

        const resolvedMovies = await Promise.all(promises);
        const filteredMovies = resolvedMovies.filter(movie => movie.Response !== "False");
        return filteredMovies

    } catch (error) {
        console.error('Error fetching events:', error);
    }


}
async function getComingSoon(location, language, shortCountryCode) {

}












export {
    getMovieDetails,
    getNowPlaying,
    getComingSoon
}

