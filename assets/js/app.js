var app = new Vue({
    el: '#app',
    data: {
        nomeCompleto: "Carlos Henrique B Azevedo",
        modalSeen: false,
        img: 'assets/img/henrique.jpeg',
        cursos: [
            {descr: "Binário Cloud",img:"assets/img/binario-cloud.png"},
            {descr: "Docker", img:"assets/img/docker.png"},
            {descr: "LGPD na prática ", img:"assets/img/lgpd-na-pratica.png"},
            {descr: "LGPD", img:"assets/img/lgpd.png"},
            {descr: "Mikrotik", img:"assets/img/mikrotik-básico.png"},
            {descr: "OSPF Avançado", img:"assets/img/ospf.png"},
            {descr: "ISO 20000 Foundation", img:"assets/img/iso.png"},
            {descr: "SBRC 2018", img:"assets/img/sbrc.png"},
            {descr: "IX Telecom", img:"assets/img/ix-telecom.png"}
        ]
    },
    methods: {
        showModal: function(a){
            this.modalSeen = !this.modalSeen
            this.img = a
        },
        closeModal: function(a=''){
            this.modalSeen = !this.modalSeen
        }
    }
})