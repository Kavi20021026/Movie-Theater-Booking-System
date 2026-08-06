const moviesData = {
    "jumanji": {
        "id": "jumanji",
        "title": "JUMANJI: THE NEXT LEVEL",
        "poster": "../jumanji/2.webp",
        "background": "../jumanji/jumanji-trailer-dropped-1-1504043786.jpg",
        "video": "../jumanji/Jumanji- The Next Level - Final Trailer.mp4",
        "directed": "Jake Kasdan",
        "starring": "Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan",
        "duration": "2 Hours 3 Minutes",
        "rating": "PG-13",
        "type": "3D",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["10:00", "11:30", "14:00"],
            "2026-08-07": ["09:00", "13:00", "15:30", "17:00"],
            "2026-08-08": ["12:00", "13:30", "16:00"]
        }
    },
    "jurassic_world_rebirth": {
        "id": "jurassic_world_rebirth",
        "title": "JURASSIC WORLD REBIRTH",
        "poster": "../jurassic _world re_birth/jurassic_world_rebirth_xlg.jpg",
        "background": "../jurassic _world re_birth/jurassic-world-rebirth-everything-we-know-and-our-biggest-bu_fb1w.1280.webp",
        "video": "../jurassic _world re_birth/Jurassic World Rebirth - Official Trailer.mp4",
        "directed": "Gareth Edwards",
        "starring": "Scarlett Johansson, Mahershala Ali, Jonathan Bailey, Ed Skrein",
        "duration": "2 Hours 6 Minutes",
        "rating": "PG-13",
        "type": "3D",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["10:30", "11:00", "14:30", "15:30"],
            "2026-08-07": ["09:30", "10:30", "13:00"],
            "2026-08-08": ["12:00", "15:00", "18:00"]
        }
    },
    "thunderbolts": {
        "id": "thunderbolts",
        "title": "THUNDERBOLTS",
        "poster": "../Thunderbolts/thunderbolts_xlg.jpg",
        "background": "../Thunderbolts/tb cover.jpg",
        "video": "../Thunderbolts/Thunderbolts- - Thunderbolts- - Final Trailer.mp4",
        "directed": "Jake Schreier",
        "starring": "Florence Pugh, Sebastian Stan, Wyatt Russell, Olga Kurylenko",
        "duration": "2 Hours 6 Minutes",
        "rating": "PG-13",
        "type": "4DX",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["12:00", "13:30", "16:00"],
            "2026-08-07": ["10:00", "14:00", "18:30"],
            "2026-08-08": ["11:00", "15:30", "20:00"]
        }
    },
    // Mock entries for other dashboard movies

    "spiderman_brand_new_day": {
        "id": "spiderman_brand_new_day",
        "title": "SPIDER-MAN: BRAND NEW DAY",
        "poster": "../images/images (1).jpg",
        "background": "../images/images.jpg",
        "video": "../images/SPIDER-MAN- BRAND NEW DAY – Official Trailer (HD).mp4",
        "directed": "Jon Watts",
        "starring": "Tom Holland, Zendaya, Jacob Batalon",
        "duration": "2 Hours 15 Minutes",
        "rating": "PG-13",
        "type": "IMAX 3D",
        "price": [850, 850, 600, 600, 600, 600, 450, 450], // pricing A-H
        "slots": {
            "2026-08-06": ["10:00", "14:00", "18:00"],
            "2026-08-07": ["11:30", "15:00", "19:30"],
            "2026-08-08": ["09:00", "13:00", "17:00", "21:00"]
        }
    },

    "jawan": {
        "id": "jawan",
        "title": "JAWAN",
        "poster": "img/collage romance.jpg",
        "background": "",
        "video": "",
        "directed": "Atlee Kumar",
        "starring": "Shah Rukh Khan, Nayanthara, Vijay Sethupathi",
        "duration": "2 Hours 50 Minutes",
        "rating": "UA",
        "type": "2D",
        "price": [700, 700, 500, 500, 500, 500, 400, 400],
        "slots": {
            "2026-08-06": ["10:00", "14:00", "18:00"],
            "2026-08-07": ["12:00", "16:00", "20:00"]
        }
    },
    "eternals": {
        "id": "eternals",
        "title": "ETERNALS",
        "poster": "img/eternals.jpg",
        "background": "",
        "video": "",
        "directed": "Chloé Zhao",
        "starring": "Gemma Chan, Richard Madden, Angelina Jolie",
        "duration": "2 Hours 36 Minutes",
        "rating": "PG-13",
        "type": "3D",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["11:00", "15:00", "19:00"]
        }
    },
    "spiderman": {
        "id": "spiderman",
        "title": "SPIDER-MAN: NO WAY HOME",
        "poster": "img/spiderman.jpg",
        "background": "",
        "video": "",
        "directed": "Jon Watts",
        "starring": "Tom Holland, Zendaya, Benedict Cumberbatch",
        "duration": "2 Hours 28 Minutes",
        "rating": "PG-13",
        "type": "3D",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["10:00", "13:30", "17:00", "20:30"]
        }
    },
    "theboys": {
        "id": "theboys",
        "title": "THE BOYS (SEASON 4)",
        "poster": "img/the boys.jpg",
        "background": "",
        "video": "",
        "directed": "Eric Kripke",
        "starring": "Karl Urban, Jack Quaid, Antony Starr",
        "duration": "1 Hour 0 Minutes",
        "rating": "R",
        "type": "2D",
        "price": [600, 600, 450, 450, 450, 450, 350, 350],
        "slots": {
            "2026-08-06": ["14:00", "18:00", "22:00"]
        }
    },
    "thor": {
        "id": "thor",
        "title": "THOR: LOVE AND THUNDER",
        "poster": "img/thor love of thunder.jpg",
        "background": "",
        "video": "",
        "directed": "Taika Waititi",
        "starring": "Chris Hemsworth, Natalie Portman, Christian Bale",
        "duration": "1 Hour 59 Minutes",
        "rating": "PG-13",
        "type": "3D",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["12:00", "15:30", "19:00"]
        }
    },
    "topgun": {
        "id": "topgun",
        "title": "TOP GUN: MAVERICK",
        "poster": "img/topgun.jpg",
        "background": "",
        "video": "",
        "directed": "Joseph Kosinski",
        "starring": "Tom Cruise, Miles Teller, Jennifer Connelly",
        "duration": "2 Hours 10 Minutes",
        "rating": "PG-13",
        "type": "4DX",
        "price": [900, 900, 650, 650, 650, 650, 500, 500],
        "slots": {
            "2026-08-06": ["13:00", "17:00", "21:00"]
        }
    },
    "johnwick": {
        "id": "johnwick",
        "title": "JOHN WICK: CHAPTER 4",
        "poster": "img/Jhon Wick.jpg",
        "background": "",
        "video": "",
        "directed": "Chad Stahelski",
        "starring": "Keanu Reeves, Donnie Yen, Bill Skarsgård",
        "duration": "2 Hours 49 Minutes",
        "rating": "R",
        "type": "2D",
        "price": [800, 800, 560, 560, 560, 560, 430, 430],
        "slots": {
            "2026-08-06": ["11:00", "15:00", "19:00", "22:30"]
        }
    }
};
window.moviesData = moviesData;
