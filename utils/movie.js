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
                "id": "675f18d1ac4b4817b18574d7",
                "status": "Success",
                "json_endpoint": "https://serpapi.com/searches/ad8bbc1be7c50517/675f18d1ac4b4817b18574d7.json",
                "created_at": "2024-12-15 17:58:41 UTC",
                "processed_at": "2024-12-15 17:58:41 UTC",
                "google_url": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&oq=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&sourceid=chrome&ie=UTF-8",
                "raw_html_file": "https://serpapi.com/searches/ad8bbc1be7c50517/675f18d1ac4b4817b18574d7.html",
                "total_time_taken": 1.14
            },
            "search_parameters": {
                "engine": "google",
                "q": "Coming Soon Movies In Indore,India,Madhya Pradesh",
                "google_domain": "google.com",
                "device": "desktop"
            },
            "search_information": {
                "query_displayed": "Coming Soon Movies In Indore,India,Madhya Pradesh",
                "total_results": 7140000,
                "time_taken_displayed": 0.39,
                "organic_results_state": "Results for exact spelling"
            },
            "related_questions": [
                {
                    "question": "Which new movie is going to release?",
                    "snippet": "Upcoming Hindi Movies 2024",
                    "table": [
                        [
                            "Release Date",
                            "Movies Name",
                            "Cast"
                        ],
                        [
                            "10 January 2025",
                            "Fateh",
                            "Sonu Sood, Jacqueline Fernandez, Vijay Raaz, Dibyendu Bhattacharya"
                        ],
                        [
                            "January 2025",
                            "Ikkis",
                            "Dharmendra, Jaideep Ahlawat, Agastya Nanda, Ekavali Khanna"
                        ],
                        [
                            "January 2025",
                            "Azaad",
                            "Ajay Devgn, Aaman Devgan, Rasha Thadani, Diana Penty"
                        ]
                    ],
                    "formatted": [
                        {
                            "release_date": "10 January 2025",
                            "movies_name": "Fateh",
                            "cast": "Sonu Sood, Jacqueline Fernandez, Vijay Raaz, Dibyendu Bhattacharya"
                        },
                        {
                            "release_date": "January 2025",
                            "movies_name": "Ikkis",
                            "cast": "Dharmendra, Jaideep Ahlawat, Agastya Nanda, Ekavali Khanna"
                        },
                        {
                            "release_date": "January 2025",
                            "movies_name": "Azaad",
                            "cast": "Ajay Devgn, Aaman Devgan, Rasha Thadani, Diana Penty"
                        }
                    ],
                    "title": "Upcoming Bollywood Movies | Hindi Movies Releasing 2024",
                    "link": "https://www.gadgets360.com/entertainment/upcoming-bollywood-movies",
                    "displayed_link": "https://www.gadgets360.com › entertainment › upcomin...",
                    "source_logo": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/11f7f799deda70b6ac69fda5e3b7c7ffe100e50bbe5555550e08d73f94cffd61.png",
                    "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoaWNoIG5ldyBtb3ZpZSBpcyBnb2luZyB0byByZWxlYXNlPyIsImxrIjoiR2lOM2FHbGphQ0J1WlhjZ2JXOTJhV1VnYVhNZ1oyOXBibWNnZEc4Z2NtVnNaV0Z6WlEiLCJicyI6ImM0MlBzUTZDTUJSRlk5dzZPWkpPTDFFVEpXaXdjVFJwSEoxMEkzRXhCVjZnRVZvQ3hYNkluLUJILUc5T2doQkhaWDduM0hzZk9aRlprTW9vQllVV2NuMlRDTEtDUkV1VmdORlFZb2FpUXU0OElqYW5VX3NmSlNGWmRZbk4wYVFJb1V3U3JBelVSYVR6bHUxVkJRY1ZTOEdkLTVpdHFXZUhPYkoxeUlWNFhjZDNSc19wMm9CV3NDOUttY0hHOTRENWJNdWQxNUY1MUxXX0ZORXJINE9jeVRKSWhlbmdDa1RaYk1LVzdyLU1tNWxOaEVXOGN1ZTVZeTVkMklIOFpQUUciLCJpZCI6ImZjXzBoaGZaOHJrRGR5ZjVOb1ByNG1mc0FJXzMifQ==",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoaWNoIG5ldyBtb3ZpZSBpcyBnb2luZyB0byByZWxlYXNlPyIsImxrIjoiR2lOM2FHbGphQ0J1WlhjZ2JXOTJhV1VnYVhNZ1oyOXBibWNnZEc4Z2NtVnNaV0Z6WlEiLCJicyI6ImM0MlBzUTZDTUJSRlk5dzZPWkpPTDFFVEpXaXdjVFJwSEoxMEkzRXhCVjZnRVZvQ3hYNkluLUJILUc5T2doQkhaWDduM0hzZk9aRlprTW9vQllVV2NuMlRDTEtDUkV1VmdORlFZb2FpUXU0OElqYW5VX3NmSlNGWmRZbk4wYVFJb1V3U3JBelVSYVR6bHUxVkJRY1ZTOEdkLTVpdHFXZUhPYkoxeUlWNFhjZDNSc19wMm9CV3NDOUttY0hHOTRENWJNdWQxNUY1MUxXX0ZORXJINE9jeVRKSWhlbmdDa1RaYk1LVzdyLU1tNWxOaEVXOGN1ZTVZeTVkMklIOFpQUUciLCJpZCI6ImZjXzBoaGZaOHJrRGR5ZjVOb1ByNG1mc0FJXzMifQ%3D%3D"
                },
                {
                    "question": "Which is the biggest upcoming movie in India?",
                    "snippet": null,
                    "title": "Upcoming Indian Movies 2024 - 2026",
                    "link": "https://www.imdb.com/list/ls023200007/",
                    "list": [
                        "Pushpa: The Rule - Part 2. 20243h 21m. ... ",
                        "Baaghi 4. 2025. ... ",
                        "Dhruva Natchathiram Chapter 1: Yuddha Kaandam. 2h 25m. ... ",
                        "Untitled Rishab Shetty & Sudeep Film. DirectorRishab ShettyStarsSudeep.",
                        "The Vanishing Act. 20242h. ... ",
                        "Mughal Road.",
                        "Paani. ... ",
                        "Takht."
                    ],
                    "displayed_link": "https://www.imdb.com › list",
                    "source_logo": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/11f7f799deda70b6ac69fda5e3b7c7ff4d53b9e0701565ceb923177fd5afd82f.png",
                    "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoaWNoIGlzIHRoZSBiaWdnZXN0IHVwY29taW5nIG1vdmllIGluIEluZGlhPyIsImxrIjoiR2l4M2FHbGphQ0JwY3lCMGFHVWdZbWxuWjJWemRDQjFjR052YldsdVp5QnRiM1pwWlNCcGJpQnBibVJwWVEiLCJicyI6ImM0MlBzUTZDTUJSRlk5dzZPWkpPTDFFVEpXaXdjVFJwSEoxMEkzRXhCVjZnRVZvQ3hYNkluLUJILUc5T2doQkhaWDduM0hzZk9aRlprTW9vQllVV2NuMlRDTEtDUkV1VmdORlFZb2FpUXU0OElqYW5VX3NmSlNGWmRZbk4wYVFJb1V3U3JBelVSYVR6bHUxVkJRY1ZTOEdkLTVpdHFXZUhPYkoxeUlWNFhjZDNSc19wMm9CV3NDOUttY0hHOTRENWJNdWQxNUY1MUxXX0ZORXJINE9jeVRKSWhlbmdDa1RaYk1LVzdyLU1tNWxOaEVXOGN1ZTVZeTVkMklIOFpQUUciLCJpZCI6ImZjXzBoaGZaOHJrRGR5ZjVOb1ByNG1mc0FJXzMifQ==",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoaWNoIGlzIHRoZSBiaWdnZXN0IHVwY29taW5nIG1vdmllIGluIEluZGlhPyIsImxrIjoiR2l4M2FHbGphQ0JwY3lCMGFHVWdZbWxuWjJWemRDQjFjR052YldsdVp5QnRiM1pwWlNCcGJpQnBibVJwWVEiLCJicyI6ImM0MlBzUTZDTUJSRlk5dzZPWkpPTDFFVEpXaXdjVFJwSEoxMEkzRXhCVjZnRVZvQ3hYNkluLUJILUc5T2doQkhaWDduM0hzZk9aRlprTW9vQllVV2NuMlRDTEtDUkV1VmdORlFZb2FpUXU0OElqYW5VX3NmSlNGWmRZbk4wYVFJb1V3U3JBelVSYVR6bHUxVkJRY1ZTOEdkLTVpdHFXZUhPYkoxeUlWNFhjZDNSc19wMm9CV3NDOUttY0hHOTRENWJNdWQxNUY1MUxXX0ZORXJINE9jeVRKSWhlbmdDa1RaYk1LVzdyLU1tNWxOaEVXOGN1ZTVZeTVkMklIOFpQUUciLCJpZCI6ImZjXzBoaGZaOHJrRGR5ZjVOb1ByNG1mc0FJXzMifQ%3D%3D"
                },
                {
                    "question": "Which movie is coming out on April 10, 2024?",
                    "snippet": "1) Bade Miyan Chote Miyan Produced by Pooja Entertainment in association with AAZ, Bade Miyan Chote Miyan will hit the screens on the occasion of Eid on April 10. It also stars Manushi Chhillar and Alaya F.",
                    "title": "April 2024 upcoming movies: Bade Miyan Chote Miyan, Maidaan, Amar ...",
                    "date": "Apr 1, 2024",
                    "link": "https://www.hindustantimes.com/entertainment/bollywood/april-2024-upcoming-movies-bade-miyan-chote-miyan-maidaan-amar-singh-chamkila-aranmanai-4-and-more-101711877921001.html#:~:text=1)%20Bade%20Miyan%20Chote%20Miyan&text=Produced%20by%20Pooja%20Entertainment%20in,Manushi%20Chhillar%20and%20Alaya%20F.",
                    "displayed_link": "https://www.hindustantimes.com › bollywood › april-20...",
                    "source_logo": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/11f7f799deda70b6ac69fda5e3b7c7ff9f69bc443dc5d617a346575a1b36e1a3.png",
                    "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoaWNoIG1vdmllIGlzIGNvbWluZyBvdXQgb24gQXByaWwgMTAsIDIwMjQ/IiwibGsiOiJHaXAzYUdsamFDQnRiM1pwWlNCcGN5QmpiMjFwYm1jZ2IzVjBJRzl1SUdGd2NtbHNJREV3SURJd01qUSIsImJzIjoiYzQyUHNRNkNNQlJGWTl3Nk9aSk9MMUVUSldpd2NUUnBISjEwSTNFeEJWNmdFVm9DeFg2SW4tQkgtRzlPZ2hCSFpYN24zSHNmT1pGWmtNb29CWVVXY24yVENMS0NSRXVWZ05GUVlvYWlRdTQ4SWphblVfc2ZKU0ZaZFluTjBhUUlvVXdTckF6VVJhVHpsdTFWQlFjVlM4R2QtNWl0cVdlSE9iSjF5SVY0WGNkM1JzX3Ayb0JXc0M5S21jSEc5NEQ1Yk11ZDE1RjUxTFdfRk5Fckg0T2N5VEpJaGVuZ0NrVFpiTUtXN3ItTW01bE5oRVc4Y3VlNVl5NWQySUg4WlBRRyIsImlkIjoiZmNfMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUlfMyJ9",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoaWNoIG1vdmllIGlzIGNvbWluZyBvdXQgb24gQXByaWwgMTAsIDIwMjQ%2FIiwibGsiOiJHaXAzYUdsamFDQnRiM1pwWlNCcGN5QmpiMjFwYm1jZ2IzVjBJRzl1SUdGd2NtbHNJREV3SURJd01qUSIsImJzIjoiYzQyUHNRNkNNQlJGWTl3Nk9aSk9MMUVUSldpd2NUUnBISjEwSTNFeEJWNmdFVm9DeFg2SW4tQkgtRzlPZ2hCSFpYN24zSHNmT1pGWmtNb29CWVVXY24yVENMS0NSRXVWZ05GUVlvYWlRdTQ4SWphblVfc2ZKU0ZaZFluTjBhUUlvVXdTckF6VVJhVHpsdTFWQlFjVlM4R2QtNWl0cVdlSE9iSjF5SVY0WGNkM1JzX3Ayb0JXc0M5S21jSEc5NEQ1Yk11ZDE1RjUxTFdfRk5Fckg0T2N5VEpJaGVuZ0NrVFpiTUtXN3ItTW01bE5oRVc4Y3VlNVl5NWQySUg4WlBRRyIsImlkIjoiZmNfMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUlfMyJ9"
                },
                {
                    "question": "What movies are being released this week?",
                    "snippet": "New Movies This Week",
                    "table": [
                        [
                            "Title",
                            "Distributor",
                            "Rating"
                        ],
                        [
                            "Kraven the Hunter",
                            "Sony Pictures Entertainment (SPE)",
                            "R"
                        ],
                        [
                            "The Lord of the Rings: The War of the Rohirrim",
                            "Warner Bros.",
                            "PG-13"
                        ],
                        [
                            "Nickel Boys",
                            "Amazon/MGM",
                            "PG-13"
                        ]
                    ],
                    "formatted": [
                        {
                            "title": "Kraven the Hunter",
                            "distributor": "Sony Pictures Entertainment (SPE)",
                            "rating": "R"
                        },
                        {
                            "title": "The Lord of the Rings: The War of the Rohirrim",
                            "distributor": "Warner Bros.",
                            "rating": "PG-13"
                        },
                        {
                            "title": "Nickel Boys",
                            "distributor": "Amazon/MGM",
                            "rating": "PG-13"
                        }
                    ],
                    "title": "New Movies Coming Out This Week - Screendollars",
                    "link": "https://screendollars.com/movies/releases-by-week/",
                    "displayed_link": "https://screendollars.com › movies › releases-by-week",
                    "source_logo": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/11f7f799deda70b6ac69fda5e3b7c7ff79534d9a79d7c7dd0751a698dbaf2f0f.png",
                    "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoYXQgbW92aWVzIGFyZSBiZWluZyByZWxlYXNlZCB0aGlzIHdlZWs/IiwibGsiOiJHaWgzYUdGMElHMXZkbWxsY3lCaGNtVWdZbVZwYm1jZ2NtVnNaV0Z6WldRZ2RHaHBjeUIzWldWciIsImJzIjoiYzQyUHNRNkNNQlJGWTl3Nk9aSk9MMUVUSldpd2NUUnBISjEwSTNFeEJWNmdFVm9DeFg2SW4tQkgtRzlPZ2hCSFpYN24zSHNmT1pGWmtNb29CWVVXY24yVENMS0NSRXVWZ05GUVlvYWlRdTQ4SWphblVfc2ZKU0ZaZFluTjBhUUlvVXdTckF6VVJhVHpsdTFWQlFjVlM4R2QtNWl0cVdlSE9iSjF5SVY0WGNkM1JzX3Ayb0JXc0M5S21jSEc5NEQ1Yk11ZDE1RjUxTFdfRk5Fckg0T2N5VEpJaGVuZ0NrVFpiTUtXN3ItTW01bE5oRVc4Y3VlNVl5NWQySUg4WlBRRyIsImlkIjoiZmNfMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUlfMyJ9",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTa2M1U210Tk1IcEpSMFJyWWs5NU5XTk5SbFoyWkVKRWVGRnVNMDh6VXpOWFlreFhTVVZ3ZFc1Rk9ITk1UM0ZLVVcwMGNFaHRiVFp2VnpKZlpVMUlXa2g2T0ZKTWNqVXlaWEpMZHpkMlIzbGlVbXBtUTBWTlp6WjZSMVZOYXpWR1VSSVhNR2hvWmxvNGNtdEVaSGxtTlU1dlVISTBiV1p6UVVrYUlrRkdXSEpGWTNGRWFHUnVSa0ZVVDJ4TlVHNXllbmRxVkc1dlNTMDNjMDlTYVZFIiwiZmN2IjoiMyIsImVpIjoiMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUkiLCJxYyI6ImMtTXlUTTdQemN4TFZ5ak96ODlUeU0wdnkwd3RWc2pNQTZLVV9LSlVFSldacUpDYm1KSlJtYWhRVUpTWWtscWNJY0JRLV9pNnRqMEEiLCJxdWVzdGlvbiI6IldoYXQgbW92aWVzIGFyZSBiZWluZyByZWxlYXNlZCB0aGlzIHdlZWs%2FIiwibGsiOiJHaWgzYUdGMElHMXZkbWxsY3lCaGNtVWdZbVZwYm1jZ2NtVnNaV0Z6WldRZ2RHaHBjeUIzWldWciIsImJzIjoiYzQyUHNRNkNNQlJGWTl3Nk9aSk9MMUVUSldpd2NUUnBISjEwSTNFeEJWNmdFVm9DeFg2SW4tQkgtRzlPZ2hCSFpYN24zSHNmT1pGWmtNb29CWVVXY24yVENMS0NSRXVWZ05GUVlvYWlRdTQ4SWphblVfc2ZKU0ZaZFluTjBhUUlvVXdTckF6VVJhVHpsdTFWQlFjVlM4R2QtNWl0cVdlSE9iSjF5SVY0WGNkM1JzX3Ayb0JXc0M5S21jSEc5NEQ1Yk11ZDE1RjUxTFdfRk5Fckg0T2N5VEpJaGVuZ0NrVFpiTUtXN3ItTW01bE5oRVc4Y3VlNVl5NWQySUg4WlBRRyIsImlkIjoiZmNfMGhoZlo4cmtEZHlmNU5vUHI0bWZzQUlfMyJ9"
                }
            ],
            "organic_results": [
                {
                    "position": 1,
                    "title": "List of Movies Releasing This Week in Indore",
                    "link": "https://in.bookmyshow.com/explore/upcoming-movies-indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://in.bookmyshow.com/explore/upcoming-movies-indore&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECBcQAQ",
                    "displayed_link": "https://in.bookmyshow.com › explore › upcoming-mov...",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee92c3c5e13274804ecefeecf43ecb819f5.png",
                    "snippet": "Movies Now Showing in Indore. Pushpa 2: The RuleMufasa: The Lion King ; Upcoming Movies in Indore. Dil AwaaraRifle Club ; Movie Updates and Celebrities. Upcoming ...",
                    "snippet_highlighted_words": [
                        "Movies",
                        "Indore",
                        "Upcoming Movies",
                        "Indore",
                        "Movie",
                        "Upcoming"
                    ],
                    "sitelinks": {
                        "inline": [
                            {
                                "title": "Movies in 3D",
                                "link": "https://in.bookmyshow.com/explore/3d-upcoming-movies-indore"
                            },
                            {
                                "title": "Movies in 2D",
                                "link": "https://in.bookmyshow.com/explore/2d-upcoming-movies-indore"
                            },
                            {
                                "title": "Movies in MX4D",
                                "link": "https://in.bookmyshow.com/explore/mx4d-upcoming-movies-indore"
                            },
                            {
                                "title": "Movies in IMAX 3D",
                                "link": "https://in.bookmyshow.com/explore/imax-3d-upcoming-movies-indore"
                            }
                        ]
                    },
                    "source": "BookMyShow"
                },
                {
                    "position": 2,
                    "title": "Indore Movie Tickets Online Booking & Showtimes near you",
                    "link": "https://in.bookmyshow.com/explore/movies-indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://in.bookmyshow.com/explore/movies-indore&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECB4QAQ",
                    "displayed_link": "https://in.bookmyshow.com › explore › movies-indore",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9f504644833db0cedc74b3cc2479e39a1.png",
                    "snippet": "... Coming Soon · Pushpa 2: The Rule. 8.4. Pushpa 2: The Rule. Pushpa 2: The Rule ... Get ready for upcoming movies in theatres. Don't wait anymore and book ...",
                    "snippet_highlighted_words": [
                        "Coming Soon",
                        "movies"
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
                    "position": 3,
                    "title": "Now Showing & Upcoming Movies in Indore",
                    "link": "https://timesofindia.indiatimes.com/entertainment/indore/movies/140",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://timesofindia.indiatimes.com/entertainment/indore/movies/140&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECBUQAQ",
                    "displayed_link": "https://timesofindia.indiatimes.com › ETimes › Movies",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9a2970885a2c5b118c390ca585d36937d.png",
                    "snippet": "Upcoming Movies · Welcome To The Jungle · Baby John · Barroz · Mirai · Housefull 5.",
                    "snippet_highlighted_words": [
                        "Upcoming Movies"
                    ],
                    "source": "Times of India"
                },
                {
                    "position": 4,
                    "title": "Online Movie Ticket Booking, Showtimes in Indore - Paytm",
                    "link": "https://paytm.com/movies/indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://paytm.com/movies/indore&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECCYQAQ",
                    "displayed_link": "https://paytm.com › movies › indore",
                    "thumbnail": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9744e31f138e0f5103198c0354ee2dff2.jpeg",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee95d4b1841c91ebb937158dab5cd6ddf7b.png",
                    "snippet": "Pushpa 2: The Rule. U/AHindi · Bhool Bhulaiyaa 3 · Mufasa: The Lion King. New Release · Moana 2. 76% · Zero Se Restart. New Release · The Sabarmati Report · The Lord ...",
                    "sitelinks": {
                        "inline": [
                            {
                                "title": "Ayou Cinema, Rajendra Nagar",
                                "link": "https://paytm.com/movies/indore/ayou-cinema-rajendra-nagar-indore-c/3145"
                            },
                            {
                                "title": "Fundore Cinemas, Rau, Indore",
                                "link": "https://paytm.com/movies/indore/fundore-cinemas-rau-indore-c/1014901"
                            },
                            {
                                "title": "Theatres in Indore",
                                "link": "https://paytm.com/movies/indore/cinema-halls-and-movie-theatre"
                            }
                        ]
                    },
                    "source": "Paytm"
                },
                {
                    "position": 5,
                    "title": "INOX Movies in Indore",
                    "link": "https://www.phoenixcitadel.in/movies",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.phoenixcitadel.in/movies&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECBwQAQ",
                    "displayed_link": "https://www.phoenixcitadel.in › movies",
                    "thumbnail": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee92b34a56b6cf81dbce2695a6702b1c7d3.jpeg",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9b3acf7f03b7bef3407f7040411d7a007.png",
                    "snippet": "Enjoy the Ultimate cinematic experience with the biggest movies in Phoenix Mall, Indore. Latest movies in Indore at INOX multiplex with delightful ...",
                    "snippet_highlighted_words": [
                        "movies",
                        "Indore",
                        "movies",
                        "Indore"
                    ],
                    "source": "Phoenix Citadel"
                },
                {
                    "position": 6,
                    "title": "Movies in Indore",
                    "link": "https://ticketnew.com/movies/indore",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ticketnew.com/movies/indore&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECB8QAQ",
                    "displayed_link": "https://ticketnew.com › Movie Tickets › Indore",
                    "thumbnail": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee93c31fea6b93ed305c56823f849662b3c.jpeg",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee95b0b3514de175c2e350db9f1c3a035ca.png",
                    "snippet": "Mufasa: The Lion King. UHindi, English. Zero Se Restart. New Release. Zero Se Restart. U/AHindi. Upcoming Movies · View All. Viduthalai Part - 2.",
                    "snippet_highlighted_words": [
                        "Upcoming Movies"
                    ],
                    "source": "ticketnew.com"
                },
                {
                    "position": 7,
                    "title": "Fortune Cinemas Trinity Mall, Mhow, Indore - Movie Tickets",
                    "link": "https://paytm.com/movies/indore/fortune-cinemas-trinity-mall-mhow-indore-c/47667",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://paytm.com/movies/indore/fortune-cinemas-trinity-mall-mhow-indore-c/47667&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECDUQAQ",
                    "displayed_link": "https://paytm.com › Movie Tickets › Indore",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9b632d0386ceeba95a11ad7a91edc9a23.png",
                    "snippet": "Book your Favourite Movie ; Pushpa 2: The Rule ; Bhool Bhulaiyaa 3 ; Mufasa: The Lion King · Mufasa: The Lion King ; Moana 2 ; Zero Se Restart · Zero Se Restart.",
                    "snippet_highlighted_words": [
                        "Movie"
                    ],
                    "source": "Paytm"
                },
                {
                    "position": 8,
                    "title": "INOX C-21 Mall, Sheetal Nagar, Indore",
                    "link": "https://ticketnew.com/movies/indore/inox-c-21-mall-sheetal-nagar-c/1024421",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ticketnew.com/movies/indore/inox-c-21-mall-sheetal-nagar-c/1024421&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECDsQAQ",
                    "displayed_link": "https://ticketnew.com › movies › inox-c-21-mall-sheetal...",
                    "thumbnail": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9fb9ed299d494db11930101ad2b1fbbe5.jpeg",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee93229e2fc506e91ac570115fed0dbd59a.png",
                    "snippet": "Enjoy newly released movies in Indore through this seamless movie ticket booking website. Catch The Latest Action | Book Movie Tickets Online at Ticketnew.",
                    "snippet_highlighted_words": [
                        "movies",
                        "Indore",
                        "movie",
                        "Movie"
                    ],
                    "source": "ticketnew.com"
                },
                {
                    "position": 9,
                    "title": "The Drama Factory (@the_dramafactory)",
                    "link": "https://www.instagram.com/the_dramafactory/?hl=en",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/the_dramafactory/%3Fhl%3Den&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECDkQAQ",
                    "displayed_link": "2.8K+ followers",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee98d37a936d38279a0117d0293a6339292.png",
                    "snippet": "✨ Indore's Premium Movie Experience ⚡Wireless Charging & Cozy Recliners Dolby Atmos Sound & More Book Now ... Photo by The Drama Factory on ...",
                    "snippet_highlighted_words": [
                        "Indore's",
                        "Movie"
                    ],
                    "source": "Instagram · the_dramafactory"
                },
                {
                    "position": 10,
                    "title": "Filming location matching \"indore, madhya pradesh, india ...",
                    "link": "https://m.imdb.com/search/title/?locations=Indore%2C%20Madhya%20Pradesh%2C%20India",
                    "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.imdb.com/search/title/%3Flocations%3DIndore%252C%2520Madhya%2520Pradesh%252C%2520India&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQFnoECDcQAQ",
                    "displayed_link": "https://m.imdb.com › search › title › locations=Indore, ...",
                    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMDLXjuMomJEKL4wuVG0L8JlNqTyke11zmooYaEdOFpvZ1KNzi0Bu&usqp=CAE&s",
                    "favicon": "https://serpapi.com/searches/675f18d1ac4b4817b18574d7/images/a6c8481e30155991dd71a9be2e1feee9da9177a4625ba245eafbe72ac65e008a.jpeg",
                    "snippet": "IMDb's advanced search allows you to run extremely powerful queries over all people and titles in the database. Find exactly what you're looking for!",
                    "source": "IMDb"
                }
            ],
            "related_searches": [
                {
                    "block_position": 1,
                    "query": "New coming soon movies in indore india madhya pradesh",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=New+coming+soon+movies+in+indore+india+madhya+pradesh&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhREAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=New+coming+soon+movies+in+indore+india+madhya+pradesh"
                },
                {
                    "block_position": 1,
                    "query": "BookMyShow",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=BookMyShow&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhVEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=BookMyShow"
                },
                {
                    "block_position": 1,
                    "query": "Upcoming movies in indore",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Upcoming+movies+in+indore&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhWEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Upcoming+movies+in+indore"
                },
                {
                    "block_position": 1,
                    "query": "Indore Cinema movie List today",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Indore+Cinema+movie+List+today&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhZEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Indore+Cinema+movie+List+today"
                },
                {
                    "block_position": 1,
                    "query": "Indore - Movie Ticket price",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Indore+-+Movie+Ticket+price&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhYEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Indore+-+Movie+Ticket+price"
                },
                {
                    "block_position": 1,
                    "query": "AU Cinema: Indore",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=AU+Cinema:+Indore&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhUEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=AU+Cinema%3A+Indore"
                },
                {
                    "block_position": 1,
                    "query": "Movies in Indore tomorrow",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=Movies+in+Indore+tomorrow&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhXEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Movies+in+Indore+tomorrow"
                },
                {
                    "block_position": 1,
                    "query": "c21 mall, indore movie ticket price",
                    "link": "https://www.google.com/search?sca_esv=b5a71d7cacb5517b&q=c21+mall,+indore+movie+ticket+price&sa=X&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ1QJ6BAhSEAE",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=c21+mall%2C+indore+movie+ticket+price"
                }
            ],
            "pagination": {
                "current": 1,
                "next": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=10&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8NMDegQICRAS",
                "other_pages": {
                    "2": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=10&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAE",
                    "3": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=20&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAG",
                    "4": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=30&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAI",
                    "5": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=40&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAK",
                    "6": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=50&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAM",
                    "7": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=60&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAO",
                    "8": "https://www.google.com/search?q=Coming+Soon+Movies+In+Indore,India,Madhya+Pradesh&sca_esv=b5a71d7cacb5517b&ei=0hhfZ8rkDdyf5NoPr4mfsAI&start=70&sa=N&sstk=ATObxK7MLkOdKWr43izEMByMVXgSMJX6wYDYmoWEjr2nDmyJP1jp47GXG5kYCeW0gnisdcG80_sjuUar6rMA329zA-TZjkylUtmiqg&ved=2ahUKEwjKlfeDraqKAxXcD1kFHa_EByYQ8tMDegQICRAQ"
                }
            },
            "serpapi_pagination": {
                "current": 1,
                "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=10",
                "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=10",
                "other_pages": {
                    "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=10",
                    "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=20",
                    "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=30",
                    "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=40",
                    "6": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=50",
                    "7": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=60",
                    "8": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coming+Soon+Movies+In+Indore%2CIndia%2CMadhya+Pradesh&start=70"
                }
            }
        }

        const questions = ["Which new movie is going to release?", "What movies are being released this week?"]

        let year = new Date().getFullYear()
        let years = []
        for (let i = year; i <= year + 10; i++) {
            years.push(i);
        }

        const relatedQuestions = data.related_questions.filter(({ question }) => questions.includes(question))
        const movieTitles = relatedQuestions
            .map(({ formatted }) => {
                return Array.isArray(formatted)
                    ? formatted.map(movie => movie.title || movie.movies_name) // Extract titles from formatted
                    : [];
            })
            .flat();
        const promises = movieTitles.map(async (title) => {
            let movie = await getMovieDetails(title);
            if (movie) {
                return movie;
            }
        });

        const resolvedMovies = await Promise.all(promises);

        const filteredMovies = resolvedMovies.filter(movie => movie && movie.Response !== "False" && years.includes(parseInt(movie.Year, 10)));

        return filteredMovies;



    } catch (error) {
        console.error('Error fetching events:', error);
    }


}












export {
    getMovieDetails,
    getNowPlaying,
    getComingSoon
}

