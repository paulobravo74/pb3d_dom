class Album {
    constructor(arch, loc, soft) {
        this.arch = arch;
        this.loc = loc;
        this.soft = soft;
    }
}



let portfolio = [
    {
        architect: "SM Architecture",
        local: "Fernão Ferro - Portugal",
        software: "3D Studio Max - Corona - Photshop",
        images: ["../img/SM_FF/01_exterior.jpg", "../img/SM_FF/02_exterior.jpg"]
    },
    {
        architect: "RA Architecture",
        local: "Azeitão - Portugal",
        software: "3D Studio Max - Corona - Photshop",
        images: ["../img/RA_Az/RA_Az_01.jpg", "../img/RA_Az/RA_Az_02.jpg", "../img/RA_Az/RA_Az_03.jpg"]

    }
];

export const albuns = portfolio;
