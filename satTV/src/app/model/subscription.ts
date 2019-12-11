export class Package {
    name: string;
    type: string;
    desc: string;
    imgsrc: string;
    price: number;
    expDt: string;
    subDt: string;
    channelList: Array<string>;
    isActive: number;
}

export class Service {
    name: string;
    type: string;
    desc: string;
    price: number;
    expDt: string;
    subDt: string;
    isActive: number;
}

export class Channel {
    name: string;
    type: string;
    desc: string;
    price: number;
    expDt: string;
    subDt: string;
    isActive: number
}

export let packages: Package[] = [
    {
        name: "Gold Pack",
        type: "GP",
        desc: "Gold Package Subscription",
        imgsrc: "",
        price: 100,
        expDt: "",
        subDt: "",
        channelList: [
            "Zee","Sony","Star Plus","Discovery","NatGeo"
        ],
        isActive: 0
    },
    {
        name: "Silver Pack",
        type: "SP",
        desc: "Silver Package Subscription",
        imgsrc: "",
        price: 50,
        expDt: "",
        subDt: "",
        channelList: [
            "Zee","Sony","Star Plus"
        ],
        isActive: 0
    }
];

export let services: Service[] = [
    {
        name: "Learn English",
        type: "ES",
        desc: "Learn English effictively",
        price: 200,
        expDt: "",
        subDt: "",
        isActive: 0
    },
    {
        name: "Learn Cooking",
        type: "CS",
        desc: "LEarn Cooking effictively",
        price: 100,
        expDt: "",
        subDt: "",
        isActive: 0 
    }
];

export let channelsList: Channel[] = [
    {
        name: "Nat Geo",
        type: "IC",
        desc: "Nat Geo",
        price: 20,
        expDt: "",
        subDt: "",
        isActive: 0
    },
    {
        name: "Zee",
        type: "IC",
        desc: "Zee TV",
        price: 10,
        expDt: "",
        subDt: "",
        isActive: 0
    },
    {
        name: "Star Plus",
        type: "IC",
        desc: "Star TV",
        price: 20,
        expDt: "",
        subDt: "",
        isActive: 0
    },
    {
        name: "Sony",
        type: "IC",
        desc: "Sony TV",
        price: 15,
        expDt: "",
        subDt: "",
        isActive: 0
    },
    {
        name: "Discovery",
        type: "IC",
        desc: "Discovery TV",
        price: 20,
        expDt: "",
        subDt: "",
        isActive: 0
    }
]