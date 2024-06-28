

const data = {
    getState() {
        return this._state;
    },
    _state: {
        Nav: {
            NavLink:[
                {fontIcon: "faFortAwesome", text: "Главная"},
                {fontIcon: "faFortAwesome", text: "Новости"},
                {fontIcon: "faFortAwesome", text: "Обзоры"},
                {fontIcon: "faFortAwesome", text: "Главная"},
                {fontIcon: "faFortAwesome", text: "Главная"},
            ]
        },
        PageContent: {
            Post: [
                {class:"", id:1, img:"https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270", text: "Lorem, ipsum dolor sit recusandae similique ipsa xyu."},
                {class:"post__last-block", id:2, img:"https://ltdfoto.ru/images/2024/06/28/elden.jpg", text: "Lorem, ipsum dolor sit recusandae similique ipsa."}
            ]
        }
    }
}


export default data;