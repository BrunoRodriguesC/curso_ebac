function Computador (processador,placaMae,memoriaRam,placaDeVideo,hd,ssd,fonte) {
    this.processador = processador;
    this.placaMae = placaMae;
    this.memoriaRam = memoriaRam;
    this.placaDeVideo = placaDeVideo;
    this.hd = hd;
    this.ssd = ssd;
    this.fonte = fonte;
}

function cliente_1 (processador,placaMae,memoriaRam,placaDeVideo,hd,ssd,fonte) {
    Computador.call(this,processador,placaMae,memoriaRam,placaDeVideo,hd,ssd,fonte);
}

function cliente_2 (processador,placaMae,memoriaRam,placaDeVideo,hd,ssd,fonte) {
    Computador.call(this,processador,placaMae,memoriaRam,placaDeVideo,hd,ssd,fonte);
}

const Opcões = new Computador("Intel ou Amd","NZXT N7 B650E, Gigabyte B760 Aorus Master, MSI MPG Z790 EDGE, TUF GAMING X570-PLUS","T-Force XTREEM, Kingston Fury, Crucial Ballistix","Nvidia GeForce RTX 3090, AMD Radeon RX 6800 XT, Nvidea gtx 3080, Nvidea gtx 2060 ti","Seagate, Samsung, Kingstom","Crucial MX, WD Blue","XPG, Corsair, Cooler Master, Thermaltake");
const clienteMario = new cliente_1("Processador: Intel core i9","Placa-Mãe: TUF GAMING X570-PLUS","Memoria Ram: 16gb","Placa de Video: Nvidea gtx 2060 ti","HD: Samsung 1000gb","SSD: Crucial MX 1000gb","Fonte: XPG");
const clienteJoana = new cliente_2("Processador: amd ryzen 5","Placa-Mãe: Gigabyte B760 Aorus Master","Memoria Ram: 32gb","Placa de Video: Nvidea gtx 3080","HD: Kingstom 1000gb","SSD: Crucial MX 500gb","Fonte: Cooler master");

console.log(Opcões);
console.log(clienteMario);
console.log(clienteJoana);
