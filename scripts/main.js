let stageLen = 1,
    taken = [],
    c = 2,
    gameLength = $(".stages button").length,
    pLen = gameLength,
    amount = $(".stages button").eq(pLen - 1).html(),
    audience = true,
    call_a_friend = true,
    fifty_fifty = true,
    play = true,
    selected,
    answer

/**
 * The millionaire game object
 */
let millionaire = {
    random: function() {
        var rand = Math.floor(Math.random() * 6)
        try {
            while (taken.toString().match(rand)) {
                rand = Math.floor(Math.random() * 6);
            }
            taken.push(rand);
            return rand;
        } catch (e) {}
    },


    /**
     * Choose question from data
     */
    selectQuestion: function() {
        var span, rand
        rand = this.random()

        // Change stage data at every stage length of 6
        if (stageLen < 6) {
            $('.question').html(stages.stage1.data[rand]["question"])
            stages.stage1.data[rand]["options"].map((option, i) => {
                span = `<span class="${option.slice(0, 1)} opt" key="${i}">${option}</span>`
                $(".options").append(span)
            })

            $(".opt").click((e) => {
                selected = e.target.textContent.slice(0, 1)
                $(".modal").fadeIn(300);
                $(".warning").fadeIn(300)
            })

            answer = stages.stage1.data[rand]["ans"]
        } else if (stageLen < 12) {
            $('.question').html(stages.stage2.data[rand]["question"])
            stages.stage2.data[rand]["options"].map((option, i) => {
                span = `<span class="${option.slice(0, 1)} opt" key="${i}">${option}</span>`
                $(".options").append(span)
            })

            $(".opt").click((e) => {
                selected = e.target.textContent.slice(0, 1)
                $(".modal").fadeIn(300);
                $(".warning").fadeIn(300)
            })

            answer = stages.stage2.data[rand]["ans"]
        } else {
            $('.question').html(stages.stage3.data[rand]["question"])
            stages.stage3.data[rand]["options"].map((option, i) => {
                span = `<span class="${option.slice(0, 1)} opt" key="${i}">${option}</span>`
                $(".options").append(span)
            })

            $(".opt").click((e) => {
                selected = e.target.textContent.slice(0, 1)
                $(".modal").fadeIn(300);
                $(".warning").fadeIn(300)
            })

            answer = stages.stage3.data[rand]["ans"]
        }
    },


    /**
     * Start the game
     */
    start: function() {
        $('.welcome').fadeOut(500, function() {
            $('#game').fadeIn(500)
        });
        this.selectQuestion()
    },


    /**
     * Show congratulation message
     */
    won: function() {
        if (stageLen < 15) {
            stageLen++
            taken = (stageLen % 6 == 0) || (stageLen % 11 == 0) ? [] : taken;
            amount = $(".stages button").eq(pLen - 1).html();

            $('.right-wrapper').fadeIn(800);
            setTimeout(function() { $('#right').html("Bilkul Sahi Jawab!!") }, 500)
            setTimeout(function() { $('#right').html("Aapne Jeet liye hain " + amount + " points") }, 1800)
            setTimeout(function() { $('#right').html("Aur ye raha agla question aapke computer screen par") }, 3800)
            setTimeout(function() {
                $('.right-wrapper').fadeOut(1500, function() {
                    $('#right').html("")
                    $(".modal").fadeOut()
                })
            }, 5000)

            pLen--;
            $(".current").removeClass("current");
            $(".stages button").eq(pLen - 1).addClass("current");
            $(".score").html("Score: " + amount)
            gameLength++;
            $(".opt").css("display", "none");
            setTimeout(() => {
                this.selectQuestion()
            }, 4500)
        } else {
            $('.right-wrapper').fadeIn(800);
            setTimeout(function() { $('#right').html("Bilkul Sahi Jawab!! ") }, 500)
            setTimeout(function() { $('#right').html("Bohot Adhbhut khela hai aapne. Aap ban gaye hain crorepati!!") }, 1800)
            setTimeout(() => {
                $('.right-wrapper').fadeOut(800, () => {
                    $('#right').html("")
                    this.reset()
                })
            }, 2300)
        }
    },


    /**
     * Show loose message
     */
    loose: function() {
        $('.wrong-wrapper').fadeIn(800);

        setTimeout(
            function() { $('#wrong').html(`Aapka uttar galat hai<br> Aap jeetein hain ${amount} points`) }, 100)

        setTimeout(
            function() {
                $('.wrong-wrapper').fadeOut(function() {
                    $('#wrong').html("")
                    $(".modal").fadeOut(800)
                })
            }, 2000)

        setTimeout(() => { this.reset() }, 2000)
    },


    /**
     * Activate fifty fifty lifeline
     */
    fifty: function() {
        var options = ["D", "A", "C", "B"]
        var removedOptions = []
        $(".fifty").css("display", "none");
        fifty_fifty = false

        for (var i = 0; i < options.length; i++) {
            if (options[i] != answer) {
                if (removedOptions.length < 2) {
                    removedOptions.push(options[i])
                    for (var i = 0; i < removedOptions.length; i++) {
                        $(`span.${removedOptions[i]}`).html(`${removedOptions[i]}:`)
                    }
                }
            }
        }
    },


    /**
     * Activate call a friend
     */
    call: function() {
        let randFriend = Math.floor(Math.random() * 7);
        let randResp = Math.floor(Math.random() * 4)
        let friend = ["Ngozi", "Ekene", "Chioma", "Kenneth", "Bright", "Chisom", "Adaeze"]
        let sure = ["100%", "80%", "60%", "50%", "30%"]
        let resp = ["Am sure it\'s", "It\'s certainly", "It\'s definitely", "I think it\'s", "Am not sure to choose"]
        $(".call").css("display", "none");
        // $(".call").attr({ "src": "../images/call2.png" }).css("cursor", "default")
        // $(".call:hover").css("background-color", "rgb(17, 17, 138)")
        $(".modal").fadeIn()
        $('.chat-wrapper').fadeIn(500);

        setTimeout(() => {
            $('#chat').html("Calling... ☎")
        }, 100)

        setTimeout(() => {
            $('#chat').html("Connected ✔")
        }, 2000)

        setTimeout(
            function() {
                $('#chat').html(`ME: Hello ${friend[randFriend]}. I am in a hot seat right now and I need the answer to this question.<br>${$('.question').html()}`)
            }, 4800)

        setTimeout(
            function() {
                $('#chat').html(`${friend[randFriend]}: Thinking.....`)
            }, 10000)

        setTimeout(
            function() {
                $('#chat').html(`${friend[randFriend]}: ${resp[randResp]} ${answer}.`)
            }, 10000)

        setTimeout(
            function() {
                $('#chat').html("ME: How sure are you?")
            }, 13000)

        setTimeout(
            function() {
                $('#chat').html(`${friend[randFriend]}: ${sure[randResp]} sure.`)
            }, 16000)

        setTimeout(
            function() {
                $('.chat-wrapper').fadeOut(800, function() {
                    $('#chat').html("")
                    $(".modal").fadeOut()
                    call_a_friend = false
                })
            }, 18000)
    },


    /**
     * Activate audience lifeline
     */
    audience: function() {
        // $(".aud").attr({ "src": "../images/aud2.png" }).css("cursor", "default")
        // $(".aud:hover").css("background-color", "rgb(17, 17, 138)")
        $(".aud").css("display", "none");
        $(".modal").fadeIn()
        $(".chat-wrapper").fadeIn(500)

        setTimeout(function() {
            $('#chat').html("Throwing question to audience...")
        }, 100)

        setTimeout(function() {
            $('#chat').html("Audience thinking...")
        }, 1200)

        setTimeout(function() {
            $(".chat-wrapper").fadeOut()
            $('#chat').html("")
            $('.audience-wrapper').fadeIn()
            audience = false
        }, 2700)

        var options = ["D", "A", "C", "B"]
        var audiencePercentage = ["15", "32", "48", "54", "60"]

        for (var i = 0; i < options.length; i++) {
            if (options[i] != answer) {
                $(`.bar-${options[i]}`).css("width", `${audiencePercentage[i]}%`)
            } else {
                var highestPercentage = Number(audiencePercentage[4]) +
                    Math.floor(Math.random() * (23 - 10)) + 10
                $(`.bar-${answer}`).css("width", `${highestPercentage}%`)
            }
        }

        $(".closeBtn").click(function() {
            $(".audience-wrapper").fadeOut()
            $(".modal").fadeOut()
        })
    },


    /**
     * Reset game. This is called when you either finished with a win or lost
     */
    reset: function() {
        $(".modal").fadeOut()
        $("#game").fadeOut()

        setTimeout(
            function() { $(".welcome").fadeIn(600) }, 1000)

        call_a_friend = true, audience = true, fifty_fifty = true
        window.stageLen = 1;
        taken = [];
        c = 2

        gameLength = $(".stages button").length
        pLen = gameLength
        amount = $(".stages button").eq(pLen - 1).html();

        $("img:hover").css("background-color", "rgb(250, 121, 0) !important")
        $(".fifty").attr({ "src": "../images/fifty.png", "onClick": "game.fifty()" }).css("cursor", "pointer")
        $(".call_a_friend").attr({ "src": "../images/call.png", "onClick": "game.call_a_friend()" }).css("cursor", "pointer")
    }
}


/**
 * Mouse event handlers
 */
$(".no").click(function() {
    $(".modal").fadeOut()
});

$(".yes").click(function() {
    $('.warning').fadeOut(500,
        function() {
            (selected == answer) ? millionaire.won(): millionaire.loose()
        }
    )
})

$(".about-btn").click(function() {
    $('.about').fadeIn(1000);
})

$(".fifty").click(function() {
    if (fifty_fifty)
        millionaire.fifty()
})

$(".call").click(function() {
    if (call_a_friend)
        millionaire.call()
})

$(".aud").click(function() {
    if (audience)
        millionaire.audience()
})

// $(".start-btn").click(function() {
//     millionaire.start()
// })
setTimeout(() => { millionaire.start() }, 5000);