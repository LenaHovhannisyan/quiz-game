const questions = [
    {
        question: "What was the most downloaded app of 2020?",
        image: "https://metro.co.uk/wp-content/uploads/2021/10/PRC_203474626.jpg?quality=90&strip=all&zoom=1&resize=480%2C360",
        options: [
            { option: "Whatsapp", isCorrect: false },
            { option: "Instagram", isCorrect: false, isCorrect: false },
            { option: "Tik Tok", isCorrect: true },
            { option: "Telegram", isCorrect: false }]
    },
    {
        question: "What is Japanese sake made from?",
        image: "https://img.bestrecipes.com.au/ExgYZ6R5/w643-h428-cfill-q90/br/2020/08/sake-959640-1.jpg",
        options: [
            { option: "Barley", isCorrect: false },
            { option: "Rice", isCorrect: true },
            { option: "Grain", isCorrect: false },
            { option: "Maize", isCorrect: false }
        ]
    },
    {
        question: "How many countries still have the shilling as currency?",
        image: "https://www.worldatlas.com/r/w768/upload/42/84/bb/shutterstock-1696579153.jpg",
        options: [
            { option: "5", isCorrect: false },
            { option: "1", isCorrect: false },
            { option: "0", isCorrect: false },
            { option: "4", isCorrect: true }
        ]
    }, {
        question: "What is the Chinese New Year animal for 2021?",
        image: "https://thumbs.dreamstime.com/b/print-153619749.jpg",
        options: [
            { option: "Fox", isCorrect: false },
            { option: "Pig", isCorrect: false },
            { option: "Ox", isCorrect: true },
            { option: "Dog", isCorrect: false }
        ]
    }, {
        question: "Which of Shakespeare's plays is the longest?",
        image: "https://www.thoughtco.com/thmb/qC7tG4ODmvig2C9uUlIRIspRAog=/1885x1414/smart/filters:no_upscale()/GettyImages-184986309-5a1b7e7989eacc003779d5a3.jpg",
        options: [
            { option: "Othello", isCorrect: false },
            { option: "Hamlet", isCorrect: true },
            { option: "King Lear", isCorrect: false },
            { option: "Henri VI", isCorrect: false }
        ]
    }, {
        question: "Enchiladas originated in which country?",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/9/1/1/PB0910H_simple-perfect-enchiladas_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383931384304.jpeg",
        options: [{ option: "Italy", isCorrect: false },
        { option: "France", isCorrect: false },
        { option: "Mexico", isCorrect: true },
        { option: "Canada", isCorrect: false }
        ]
    }, {
        question: "What colour is a giraffe's tongue?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZmsHiR57Lb9bNWW6UsRxF2h0l0aOOZIgug&usqp=CAU",
        options: [
            { option: "Red", isCorrect: false },
            { option: "Black", isCorrect: false },
            { option: "Yellow", isCorrect: false },
            { option: "Blue", isCorrect: true }
        ]
    }, {
        question: "Which year was the Premier League founded?",
        image: "https://firstsportz.com/wp-content/uploads/2021/06/IMG-20210620-WA0295_copy_1600x900-1-1024x576.jpg",
        options: [
            { option: "1992", isCorrect: true },
            { option: "1993", isCorrect: false },
            { option: "1997", isCorrect: false },
            { option: "1995", isCorrect: false }
        ]
    }, {
        question: "What's the best selling book of all time?",
        image: "https://media.istockphoto.com/photos/magic-book-open-picture-id1203194302?k=20&m=1203194302&s=170667a&w=0&h=bCnuhnqaMPlLJ1e5ptNMpl_RmJM9NqqOv-Nyt4IjizA=",
        options: [
            { option: "Harry Potter", isCorrect: false },
            { option: "Hamlet", isCorrect: false },
            { option: "The Bible", isCorrect: true },
            { option: "The Little Prince", isCorrect: false }
        ]
    }, {
        question: "Who won the first Nobel Prize for Literature ?",
        image: "https://s26162.pcdn.co/wp-content/uploads/2019/09/Nobel-prize.jpeg",
        options: [
            { option: "Novelist", isCorrect: false },
            { option: "Dramaturge", isCorrect: false },
            { option: "Poet", isCorrect: true },
            { option: "Essayist", isCorrect: false }
        ]
    }, {
        question: "Which Chemical element was named in honor of the moon?",
        image: "https://videohive.img.customer.envatousercontent.com/files/fa5a162f-dd4a-4716-868d-875cf7e20b7d/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=8208fa3186c4033cef101ca4687d9a25",
        options: [
            { option: "Yttrium", isCorrect: false },
            { option: "Tungsten", isCorrect: false },
            { option: "Selenium", isCorrect: true },
            { option: "Krypton", isCorrect: false }
        ]
    }, {
        question: "Vanilla comes from what flowers?",
        image: "https://patchpuppy.com/wp-content/uploads/2020/11/Feature-2.jpg",
        options: [
            { option: "Zygopetalum", isCorrect: false },
            { option: "Vanda", isCorrect: false },
            { option: "Orchids", isCorrect: true },
            { option: "Miltonia", isCorrect: false }
        ]
    }, {
        question: "In which city the first film festival was held in 1932 ?",
        image: "https://miro.medium.com/max/610/1*inAkC8CSkxKsJxMFU2mprw.jpeg",
        options: [
            { option: "Paris", isCorrect: false },
            { option: "Cannes", isCorrect: false },
            { option: "Venice", isCorrect: true },
            { option: "Berlin", isCorrect: false }
        ]
    }, {
        question: "Which novel did Fenimore Cooper write while batting with his wife?",
        image: "https://i.ytimg.com/vi/991Wa-_3arE/maxresdefault.jpg",
        options: [
            { option: "The Pioneers", isCorrect: false },
            { option: "The Last of the Mohicans", isCorrect: false },
            { option: "The beast", isCorrect: false },
            { option: "A Warning", isCorrect: true }
        ]
    }, {
        question: "Which of religious philosophy direction is Dzen?",
        image: "https://media.istockphoto.com/vectors/greatthinker-vector-id1208397643?k=20&m=1208397643&s=612x612&w=0&h=8ZWKieRav4sxOV2tNNjGXRlNQMJZz8Sc-zVdfUvfLew=",
        options: [
            { option: "Hinduism", isCorrect: false },
            { option: "Taoism", isCorrect: false },
            { option: "Judaism", isCorrect: false },
            { option: "Buddhism", isCorrect: true }
        ]
    }, {
        question: "Z and which other letter are worth the most in Scrabble ?",
        image: "https://s3.envato.com/files/259760743/DSC_2122.jpg",
        options: [
            { option: "Q", isCorrect: true },
            { option: "Y", isCorrect: false },
            { option: "X", isCorrect: false },
            { option: "F", isCorrect: false },
        ]
    }, {
        question: "Which metal turns glass into crystal?",
        image: "https://goop-img.com/wp-content/uploads/2016/11/Stocksy_txp05b96a53aaF100_Medium_1035744.jpg",
        options: [
            { option: "Tin", isCorrect: false },
            { option: "Aluminium", isCorrect: false },
            { option: "Magnesium", isCorrect: false },
            { option: "Lead", isCorrect: true }
        ]
    }, {
        question: "Which oil predominates in Italian cuisine?",
        image: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/12/essentialOils-899747886-770x533-1.jpg",
        options: [
            { option: "Sunflower", isCorrect: false },
            { option: "Creamy", isCorrect: false },
            { option: "Olive", isCorrect: true },
            { option: "Beets", isCorrect: false }
        ]
    }, {
        question: "Which art movement is Salvador Dali associated with?",
        image: "https://www.artyfactory.com/art_appreciation/art_movements/art-movements/art-movements.jpg",
        options: [
            { option: "Realism", isCorrect: true },
            { option: "Surrealism", isCorrect: false },
            { option: "Modernism", isCorrect: false },
            { option: "Impressionism", isCorrect: false }
        ]
    }, {
        question: "Which is the eighth and furthest known planet from the sun in the solar system?",
        image: "https://www.grunge.com/img/gallery/how-humans-contaminated-the-solar-system/l-intro-1604523208.jpg",
        options: [
            { option: "Neptune", isCorrect: true },
            { option: "Mars", isCorrect: false },
            { option: "Jupiter", isCorrect: false },
            { option: "Saturn", isCorrect: false }
        ]
    }]

export default questions
