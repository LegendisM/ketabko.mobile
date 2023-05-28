const Books = {};

/* Book Weekly Planning
 * --: Daren Hardy
 */
Books["WeeklyPlanning"] = {
    active: true,
    title: "برنامه ریزی هفتگی",
    about: "نویسنده : دارن هاردی\nمترجم : فریبا سبز چمنی",
    background: require("../../assets/books/WeeklyPlanning/background.png"),
    logo: require("../../assets/books/WeeklyPlanning/logo.png"),
    flat_logo: require("../../assets/books/WeeklyPlanning/flatlogo.png"),
    cover: require("../../assets/books/WeeklyPlanning/cover.png"),
    audio: require('../../assets/books/WeeklyPlanning/audio.mp3'),
    Sections: {
        Section_1: {
            Name: "فرار از گرداب شیطان",
            InputCategories: {
                MainTarget: "اهداف اصلی",
                SubTarget: "اهداف فرعی",
                Note: "یاداشت ها"
            },
            Inputs: [
                {
                    Type: "Text",
                    Name: "Target 1",
                    Category: "MainTarget",
                    PlaceHolder: "هدف اول . . .",
                    MultiLine: true,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "Target 2",
                    Category: "MainTarget",
                    PlaceHolder: "هدف دوم . . .",
                    MultiLine: true,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "Target 3",
                    Category: "MainTarget",
                    PlaceHolder: "هدف سوم . . .",
                    MultiLine: true,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "Sub Target",
                    Category: "SubTarget",
                    PlaceHolder: "هدف فرعی . . .",
                    MultiLine: true,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "Note",
                    Category: "Note",
                    PlaceHolder: "یاداشت ها . . .",
                    MultiLine: true,
                    Style: "inputNote"
                },
            ]
        }
    }
}

/* Book MiracleOfThanksgiving
 * --: Randa Born
 */
Books["MiracleOfThanksgiving"] = {
    active: true,
    title: "معجزه شکرگزاری",
    about: "نویسنده : راندا برن\nمترجم : نفیسه متعکف",
    background: require("../../assets/books/MiracleOfThanksgiving/background.png"),
    logo: require("../../assets/books/MiracleOfThanksgiving/logo.png"),
    flat_logo: require("../../assets/books/MiracleOfThanksgiving/flatlogo.png"),
    cover: require("../../assets/books/MiracleOfThanksgiving/cover.png"),
    audio: require('../../assets/books/MiracleOfThanksgiving/audio.mp3'),
    Sections: {
        Section_1: {
            Name: "شکرگزاری نعمت",
            InputCategories: {
                bliss_1: "نعمت اول",
                bliss_2: "نعمت دوم",
                bliss_3: "نعمت سوم",
                bliss_4: "نعمت چهارم",
                bliss_5: "نعمت پنجم",
                bliss_6: "نعمت ششم",
                bliss_7: "نعمت هفتم",
                bliss_8: "نعمت هشتم",
                bliss_9: "نعمت نهم",
                bliss_10: "نعمت دهم",
            },
            Inputs: [
                {
                    Type: "Text",
                    Name: "bliss 1",
                    Category: "bliss_1",
                    PlaceHolder: "نعمت اول . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 1 detial",
                    Category: "bliss_1",
                    PlaceHolder: "دلیل شکرگزاری نعمت اول",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 2",
                    Category: "bliss_2",
                    PlaceHolder: "نعمت دوم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 2 detial",
                    Category: "bliss_2",
                    PlaceHolder: "دلیل شکرگزاری نعمت دوم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 3",
                    Category: "bliss_3",
                    PlaceHolder: "نعمت سوم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 3 detial",
                    Category: "bliss_3",
                    PlaceHolder: "دلیل شکرگزاری نعمت سوم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 4",
                    Category: "bliss_4",
                    PlaceHolder: "نعمت چهارم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 4 detial",
                    Category: "bliss_4",
                    PlaceHolder: "دلیل شکرگزاری نعمت چهارم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 5",
                    Category: "bliss_5",
                    PlaceHolder: "نعمت پنجم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 5 detial",
                    Category: "bliss_5",
                    PlaceHolder: "دلیل شکرگزاری نعمت پنجم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 6",
                    Category: "bliss_6",
                    PlaceHolder: "نعمت ششم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 6 detial",
                    Category: "bliss_6",
                    PlaceHolder: "دلیل شکرگزاری نعمت ششم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 7",
                    Category: "bliss_7",
                    PlaceHolder: "نعمت هفتم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 7 detial",
                    Category: "bliss_7",
                    PlaceHolder: "دلیل شکرگزاری نعمت هفتم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 8",
                    Category: "bliss_8",
                    PlaceHolder: "نعمت هشتم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 8 detial",
                    Category: "bliss_8",
                    PlaceHolder: "دلیل شکرگزاری نعمت هشتم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 9",
                    Category: "bliss_9",
                    PlaceHolder: "نعمت نهم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 9 detial",
                    Category: "bliss_9",
                    PlaceHolder: "دلیل شکرگزاری نعمت نهم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "bliss 10",
                    Category: "bliss_10",
                    PlaceHolder: "نعمت دهم . . .",
                    MultiLine: false,
                    Style: "input"
                },
                {
                    Type: "Text",
                    Name: "bliss 10 detial",
                    Category: "bliss_10",
                    PlaceHolder: "دلیل شکرگزاری نعمت دهم",
                    MultiLine: true,
                    Style: "inputNote"
                },
            ]
        }
    }
}

/* Book CompoundEffect
 * --: Daren Hardy
 */
Books["CompoundEffect"] = {
    active: true,
    title: "اثر مرکب",
    about: "نویسنده : دارن هاردی\nمترجم : ساینا لاهیجی",
    background: require("../../assets/books/CompoundEffect/background.png"),
    logo: require("../../assets/books/CompoundEffect/logo.png"),
    flat_logo: require("../../assets/books/CompoundEffect/flatlogo.png"),
    cover: require("../../assets/books/CompoundEffect/cover.png"),
    audio: require('../../assets/books/CompoundEffect/audio.mp3'),
    Sections: {
        Section_1: {
            Name: "ارزیابی و بهبود عادت ها",
            InputCategories: {
                Goal_1: "توضیحات کلی در مورد چه کسی باید بشوم:",
                Goal_2: "عادت ها یا رفتارهای جدیدی که باید شروع کنم:",
                Goal_3: "عادات یا رفتارهای سالم موجود که باید آنها را گسترش دهم:",
                Goal_4: "عادات یا رفتارهای بدی که باید آنها را متوقف کنم:"
            },
            Inputs: [
                {
                    Type: "Text",
                    Name: "Goal 1",
                    Category: "Goal_1",
                    PlaceHolder: "• من صرفاً روی اقدامات با بازده و بهره وری بالا تمرکز می کنم",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "Goal 2",
                    Category: "Goal_2",
                    PlaceHolder: "• سه بار در هفته حداقل 30 دقیقه ورزش کنید",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "Goal 3",
                    Category: "Goal_3",
                    PlaceHolder: "• سریع بودن ، زود رفتن به دفتر",
                    MultiLine: true,
                    Style: "inputNote"
                },
                {
                    Type: "Text",
                    Name: "Goal 4",
                    Category: "Goal_4",
                    PlaceHolder: "• تماس های شخصی یا گذراندن وقت در فیس بوک یا سایر سایت های رسانه های اجتماعی شخصی در طول روز",
                    MultiLine: true,
                    Style: "inputNote"
                },
            ]
        }
    }
}

/* Book DoNotDestroyYourSelf
 * --: Writer
 */
Books["DoNotDestroyYourSelf"] = {
    active: false,
    title: "خودت را به فنا نده ",
    about: "نویسنده : گری جان بیشاپ\nمترجم : حسین گازر",
    background: require("../../assets/books/DoNotDestroyYourSelf/background.png"),
    logo: require("../../assets/books/DoNotDestroyYourSelf/logo.png"),
    flat_logo: require("../../assets/books/DoNotDestroyYourSelf/flatlogo.png"),
    cover: require("../../assets/books/DoNotDestroyYourSelf/cover.png"),
    audio: "www.test.ir",
    Sections: {}
}

export default Books;