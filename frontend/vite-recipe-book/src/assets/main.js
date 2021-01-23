import post from './js/post.js'
import init from './js/init.js'
import sleep from './js/sleep.js'
import leave_comments from '../components/leave_comments.vue'
import likefun from './js/like.js'
export default {
    name: 'App',
    data() {
        return {
            textheigth: "height: 50px;",
            divheigth: "height: 350px;",
            filepath: "",
            author: "",
            pastes: [],
            q: 0,
            title: "",
            text: "",
            number: 0,
            schedulelen: "width: 0px;",
            scheduleswitch: "bottom: -40px;",
            switch: false,
            announcement: true,
            announcementde: "opacity:1;",
            announcementText: "",
            a: 0,
            annswtich: false,
            likes: []
        }
    },
    components: {
        leave_comments
    },
    methods: {
        closeAnnouncement() {
            if (!this.annswtich) {
                (async() => {
                    this.annswtich = true
                    for (let i = 1; i >= 0; i -= 0.05) {
                        this.announcementde = `opacity:${i};`
                        await sleep(50)
                    }
                    this.announcement = false
                    this.annswtich = false
                })();
            }

        },
        openAnnouncement() {
            if (!this.annswtich) {
                (async() => {
                    this.annswtich = true
                    this.announcement = true
                    for (let i = 0; i <= 1.05; i += 0.05) {
                        this.announcementde = `opacity:${i};`
                        await sleep(50)
                    }
                    this.annswtich = false
                })();
            }

        },
        inputtext() {
            let number = this.text.match(/\n/g)
            if (number !== null) {
                this.textheigth = `height: ${number.length*29+50}px;`
                this.divheigth = `height: ${number.length*29+350}px;`
            }
            if (this.text === "") {
                this.textheigth = "height: 50px;"
                this.divheigth = "height: 350px;"
            }
        },
        post() {
            post(this)
        },
        like(id) {
            likefun(this, id)
        }
    },
    beforeMount() {
        (async() => {
            for (let i = 0; i < 10; i++) {
                let number = (this.a > this.number) ? this.number : this.a
                if (document.querySelector(`#WandJ > div.content > div.pastes > div:nth-child(${number})`) !== null) {
                    console.log(document.querySelector(`#WandJ > div.content > div.pastes > div:nth-child(${number}`))
                    document.querySelector(`#WandJ > div.content > div.pastes > div:nth-child(${number})`).scrollIntoView()
                    break
                }
                await sleep(1000)
            }
        })()
    },
    mounted() {
        init(this)
    }
}