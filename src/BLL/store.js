

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
                {class:"", id:1, img:"https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270", text: "Lorem, ipsum dolor sit recusandae similique ipsa xyu.", boolean: true},
                {class:"post__last-block", id:2, img:"https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/fe6de6126062e4d38dd6c4cef9ba1966ee2440a43429dc98.jpg", text: "Lorem, ipsum dolor sit recusandae similique ipsa.", boolean: true},
                
            ]
        }

    }
}


export default data;