
export type PostAndNewsBlockType = {
    text: string,
    id: number,
    img: string,
    class?: string,
}

export type NewsColumnType = {
    id: number,
    text: string,
    img: string,
    description: string,

}

export interface PageContentType {
    getState(): any;
    _state: {
        PageContent: {
            Post: PostAndNewsBlockType[];
            News: PostAndNewsBlockType[];
            NewsColumn: NewsColumnType[];
            Notes: "Рекомендуем";
            NotesNews: "Новости";
        },
    }
}


const data: PageContentType = {
    getState() {
        return this._state;
    },
    _state: {
        PageContent: {
            Post: [
                { id: 1, text: "Lorem ipsy lorem bady lorem byby", img: "https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/fe6de6126062e4d38dd6c4cef9ba1966ee2440a43429dc98.jpg" },
                { id: 2, class: "post__last-block", text: "Lorem ipsy lorem bady fafu lulu", img: "https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270" },
                { id: 3, text: "Lorem ipsy lorem bady lorem byby", img: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg" },
                { id: 4, class: "post__last-block", text: "Lorem ipsy lorem bady fafu lulu", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/capsule_616x353.jpg?t=1709728210" },
                { id: 5, img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et debitis blanditiis facere quia odit." },
            ],
            News: [
                { id: 1, img: "https://deadline.com/wp-content/uploads/2022/03/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7-e1646683029138.jpeg?w=681&h=383&crop=1", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
                { id: 2, img: "https://store-images.s-microsoft.com/image/apps.54120.13752334779420762.d69df3df-407c-470e-9011-e6ad6e0b27dc.dbeb3a8c-4b9f-467c-bece-824e09048ccb?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit dsaaawe." },
                { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzbN1GG_ohPa2LDc0c4jAuyU3Le3C6KHZLA&s", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit ewwwee." },
                { id: 4, img: "https://konto.ittechblog.pl/uploads/2023/12/GTA-6.jpg", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. dsdad" },
            ],
            NewsColumn: [
                { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://lowcygier.pl/wp-content/uploads/2022/03/The-Witcher-4_facebook-scaled.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", },
                { id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3116/b1641ab1b5ec0c8f76c44e59e9d8a1639c913c98c09d057f.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", },
                { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3007/2fff756fa904befe46b838dd6f27fa49f6b53d9f3dbbb776.png', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", },
                { id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWO39RfmkvAmOPrcFtH3hevIF6ptc3oupHw&s', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", },
                { id: 5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", },
            ],
            Notes: "Рекомендуем",
            NotesNews: "Новости",
        },
    }
}

// type PageContentType = typeof data._state.PageContent

export default data;