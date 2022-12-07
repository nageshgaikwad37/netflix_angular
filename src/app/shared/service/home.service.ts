import { Injectable } from '@angular/core';
import { Iresult } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

result:Iresult[]=
  [
    {
        "adult": false,
        "backdrop_path": "/3r3tZgKTw1554hcFoUfydLHE38w.jpg",
        "genre_ids": [27,9648],
        "id": 338947,
        "original_language": "en",
        "original_title": "Hellraiser",
        "overview": "A young woman struggling with addiction comes into possession of an ancient puzzle box, unaware that its purpose is to summon the Cenobites, a group of sadistic supernatural beings from another dimension.",
        "popularity": 983.967,
        "poster_path": "/f9ZAIUxTTk23vo1BC9Ur1Rx5c2E.jpg",
        "release_date": "2022-09-28",
        "title": "Hellraiser",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 330
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            10749
        ],
        "id": 485470,
        "original_language": "ko",
        "original_title": "Nice Sister-In-Law 2",   

        "overview": "If you give it once, a good brother-in-law who gives everything generously will come!  At the house of her girlfriend Jin-kyung, who lives with pumice stone, her brother and his wife suddenly visit and the four of them live together. At first, Kyung-seok, who was burdened by his girlfriend's brother, began to keep his eyes on his wife, Yeon-su. A bold brother-in-law who walks around in no-bra and panties without hesitation even at his sister-in-law's house. Besides, from a certain moment, he starts to send a hand of temptation to Pyeong-seok first...",
        "popularity": 1380.56,
        "poster_path": "/3pEs4hmeHvTAsmx09whEaPDOQpq.jpg",
        "release_date": "2017-10-08",
        "title": "Nice Sister-In-Law 2",
        "video": false,
        "vote_average": 5,
        "vote_count": 1
    },
    {
        "adult": false,
        "backdrop_path": "/u9Io1hVnxb2b3T0z99aOK8sq0SN.jpg",
        "genre_ids": [
            9648,
            12,
            35,
            80
        ],
        "id": 829280,
        "original_language": "en",
        "original_title": "Enola Holmes 2",
        "overview": "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
        "popularity": 1017.379,
        "poster_path": "/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
        "release_date": "2022-11-04",
        "title": "Enola Holmes 2",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 1185
    },
    {
        "adult": false,
        "backdrop_path": "/pGx6O6IwqADOsgmqWzPysmWnOyr.jpg",
        "genre_ids": [
            28,
            14
        ],
        "id": 732459,
        "original_language": "en",
        "original_title": "Blade of the 47 Ronin",
        "overview": "In this sequel to \"47 Ronin,\" a new class of warriors emerges among the Samurai clans to keep a sought-after sword from falling into the wrong hands.",
        "popularity": 918.948,
        "poster_path": "/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg",
        "release_date": "2022-10-25",
        "title": "Blade of the 47 Ronin",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 84
    },
    {
        "adult": false,
        "backdrop_path": "/sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 1037858,
        "original_language": "en",
        "original_title": "The Soccer Football Movie",
        "overview": "When mysterious green slime monsters start popping out of soccer balls, all-star athletes Zlatan Ibrahimović and Megan Rapinoe must team up with their four biggest fans to stop evil scientist \"Weird Al\" Yankovic from stealing their talent.",
        "popularity": 866.807,
        "poster_path": "/sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
        "release_date": "2022-11-09",
        "title": "The Soccer Football Movie",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 44
    },
    {
        "adult": false,
        "backdrop_path": "/oqwqnaaoSpQMqAQyoEiF8W2F7Id.jpg",
        "genre_ids": [
            10751,
            35,
            16,
            12
        ],
        "id": 1018403,
        "original_language": "en",
        "original_title": "Tom and Jerry Snowman's Land",
        "overview": "It’s time to chase that holiday spirit with Tom and Jerry! With magic in the air, Jerry and his nephew, Tuffy, make a snow mouse that miraculously comes to life! To keep their new friend, Larry the snow mouse from melting, Tuffy and Jerry must race him to the fabled Snowman’s Village. In hot pursuit, Tom and devious Dr. Doublevay have their own plans for Larry’s magic.",
        "popularity": 906.96,
        "poster_path": "/effgnqJMX2lXvXhKlJt7Pm1TkcU.jpg",
        "release_date": "2022-09-06",
        "title": "Tom and Jerry Snowman's Land",
        "video": false,
        "vote_average": 8,
        "vote_count": 13
    },
    {
        "adult": false,
        "backdrop_path": "/sUuzl04qNIYsnwCLQpZ2RSvXA1V.jpg",
        "genre_ids": [
            35,
            28,
            53
        ],
        "id": 792775,
        "original_language": "is",
        "original_title": "Leynilögga",
        "overview": "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
        "popularity": 918.47,
        "poster_path": "/jnWyZsaCl3Ke6u6ReSmBRO8S1rX.jpg",
        "release_date": "2022-05-23",
        "title": "Cop Secret",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 26
    },
    {
        "adult": false,
        "backdrop_path": "/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg",
        "genre_ids": [
            12,
            16,
            35,
            10751,
            14
        ],
        "id": 676701,
        "original_language": "es",
        "original_title": "Tadeo Jones 3: La Tabla Esmeralda",
        "overview": "Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.",
        "popularity": 908.216,
        "poster_path": "/jvIVl8zdNSOAJImw1elQEzxStMN.jpg",
        "release_date": "2022-08-24",
        "title": "Tad the Lost Explorer and the Curse of the Mummy",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 119
    },
    {
        "adult": false,
        "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
        "genre_ids": [
            53
        ],
        "id": 985939,
        "original_language": "en",
        "original_title": "Fall",
        "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        "popularity": 866.891,
        "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
        "release_date": "2022-08-11",
        "title": "Fall",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1805
    },
    {
        "adult": false,
        "backdrop_path": "/y4XBYLldCLuNLVeObTndfAaUrc3.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 896485,
        "original_language": "fr",
        "original_title": "Overdose",
        "overview": "Captain Sara Bellaiche, from Toulouse Judiciary Police branch, is investigating a go-fast linked to the murder of two teenagers, an investigation led by Richard Cross, from the Paris Criminal Brigade. Forced to collaborate in order to find the murderer and stop the bloody go-fast, Sara and Richard are both thrown in a breathless race against the clock on the roads of Spain and France.",
        "popularity": 696.986,
        "poster_path": "/9RvM4wawLRlX608FgZr9kL8CLmy.jpg",
        "release_date": "2022-11-04",
        "title": "Overdose",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 92
    },
    {
        "adult": false,
        "backdrop_path": "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
        "genre_ids": [
            10752,
            18,
            28
        ],
        "id": 49046,
        "original_language": "de",
        "original_title": "Im Westen nichts Neues",
        "overview": "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
        "popularity": 796.241,
        "poster_path": "/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
        "release_date": "2022-10-07",
        "title": "All Quiet on the Western Front",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 966
    },
    {
        "adult": false,
        "backdrop_path": "/tlin6STxxVoln0f818sEQYH7PyC.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 663712,
        "original_language": "en",
        "original_title": "Terrifier 2",
        "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        "popularity": 803.261,
        "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
        "release_date": "2022-10-06",
        "title": "Terrifier 2",
        "video": false,
        "vote_average": 7,
        "vote_count": 689
    },
    {
        "adult": false,
        "backdrop_path": "/fMymfWwgTfXh9RkBCFuaZrdn8Of.jpg",
        "genre_ids": [
            28,
            27
        ],
        "id": 760204,
        "original_language": "vi",
        "original_title": "The Lair",
        "overview": "Royal Air Force pilot Lt. Kate Sinclair is on her final flight mission when her jet is shot down over one of the most dangerous rebel strongholds in Afghanistan. She finds refuge in an abandoned underground bunker where deadly man-made creatures known as Ravagers — half-human, half-alien, and hungry for human flesh — are awakened.",
        "popularity": 724.126,
        "poster_path": "/ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg",
        "release_date": "2022-10-28",
        "title": "The Lair",
        "video": false,
        "vote_average": 6,
        "vote_count": 33
    },
    {
        "adult": false,
        "backdrop_path": "/3r3tZgKTw1554hcFoUfydLHE38w.jpg",
        "genre_ids": [27,9648],
        "id": 338947,
        "original_language": "en",
        "original_title": "Hellraiser",
        "overview": "A young woman struggling with addiction comes into possession of an ancient puzzle box, unaware that its purpose is to summon the Cenobites, a group of sadistic supernatural beings from another dimension.",
        "popularity": 983.967,
        "poster_path": "/f9ZAIUxTTk23vo1BC9Ur1Rx5c2E.jpg",
        "release_date": "2022-09-28",
        "title": "Hellraiser",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 330
    },
    {
        "adult": false,
        "backdrop_path": "/rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg",
        "genre_ids": [
            35,
            878,
            12
        ],
        "id": 774752,
        "original_language": "en",
        "original_title": "The Guardians of the Galaxy Holiday Special",
        "overview": "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
        "popularity": 755.423,
        "poster_path": "/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
        "release_date": "2022-11-25",
        "title": "The Guardians of the Galaxy Holiday Special",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 411
    },
    {
        "adult": false,
        "backdrop_path": "/h2VmRSlnuH8RCPa7loYZK350q6J.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 929562,
        "original_language": "en",
        "original_title": "In the Forest",
        "overview": "Helen and her daughter Emily reluctantly accompany Helen’s father Stan on a family camping trip, driving deep into the forest for a real outdoors experience, only to have angry landowner Howard arrive and force them to leave. When their RV gets stuck, Helen decides to seek help but discovers a disturbing secret on the man’s property. She must then fight to protect her family and make it out of the forest alive before being hunted down.",
        "popularity": 700.628,
        "poster_path": "/pWKTaGN9WMcKHKAir9POsKm4vEo.jpg",
        "release_date": "2022-01-28",
        "title": "In the Forest",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 11
    },
    {
        "adult": false,
        "backdrop_path": "/hNzrnsH9FMMfITu2xQqaf70CRv5.jpg",
        "genre_ids": [
            9648,
            14,
            53
        ],
        "id": 856245,
        "original_language": "es",
        "original_title": "Matar a la Bestia",
        "overview": "Emilia arrives at her Aunt Inés' hostel located on the Argentina-Brazil border, looking for her missing brother. In this lush jungle a dangerous beast which takes the form of different animals seems to be roaming around.",
        "popularity": 548.132,
        "poster_path": "/hAdkgE8lHelIQWpgrHk4wjEnbxQ.jpg",
        "release_date": "2022-04-28",
        "title": "To Kill the Beast",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 30
    },
    {
        "adult": false,
        "backdrop_path": "/729a5iDNxr5l2Zbc8lcwndlJavN.jpg",
        "genre_ids": [
            878,
            27
        ],
        "id": 844396,
        "original_language": "en",
        "original_title": "The Friendship Game",
        "overview": "A group of teens in a small town come across a strange object that tests their loyalties to each other with increasingly destructive consequences the deeper into the game they go.",
        "popularity": 639.703,
        "poster_path": "/qXaJkaVTNMhrOylFi6xrWnBQGE8.jpg",
        "release_date": "2022-11-11",
        "title": "The Friendship Game",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 9
    },
    {
        "adult": false,
        "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
        "genre_ids": [
            27,
            53,
            9648
        ],
        "id": 717728,
        "original_language": "en",
        "original_title": "Jeepers Creepers: Reborn",
        "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        "popularity": 605.993,
        "poster_path": "/qVVegwPsW6n9unBtLWq1rzOutka.jpg",
        "release_date": "2022-09-15",
        "title": "Jeepers Creepers: Reborn",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 503
    },
    {
        "adult": false,
        "backdrop_path": "/b2FxWOxe9K7ZZ1uaPOze2RJ1ajq.jpg",
        "genre_ids": [
            27,
            28,
            35
        ],
        "id": 675054,
        "original_language": "es",
        "original_title": "MexZombies",
        "overview": "A group of teenagers must face a zombie apocalypse, and help reestablish order.",
        "popularity": 632.051,
        "poster_path": "/pTxw4GFE3ZfzJfvuUsPyD5njAuI.jpg",
        "release_date": "2022-10-26",
        "title": "MexZombies",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 91
    },
    {
        "adult": false,
        "backdrop_path": "/mjV9gpXO2R2SOYI4ChJZiu6F1OE.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 759507,
        "original_language": "en",
        "original_title": "Blackout",
        "overview": "A man wakes in a hospital with no memory, and quickly finds himself on the run in a locked down hospital with the Cartel on his tail.",
        "popularity": 519.953,
        "poster_path": "/xDgnmbdWS59NtTPdzujdZGuPUPZ.jpg",
        "release_date": "2022-10-12",
        "title": "Blackout",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 90
    }
]
  constructor() { }
  getAllMovies(){
    return this.result
  }
  getMovie(id:number){
    return this.result.find((ele)=> ele.id === id)
  }
}
