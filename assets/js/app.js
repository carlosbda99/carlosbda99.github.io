var app = new Vue({
    el: '#app',
    data: {
        nomeCompleto: "Carlos Henrique B Azevedo",
        cursoBtn: false,
        modalSeen: false,
        img: 'assets/img/henrique.jpeg',
        cursos: [
            {descr: "Binário Cloud",img:"assets/img/binario-cloud.png"},
            {descr: "Docker", img:"assets/img/binario-cloud.png"},
            {descr: "LGPD na prática ", img:"assets/img/binario-cloud.png"},
            {descr: "LGPD", img:"assets/img/binario-cloud.png"},
            {descr: "Mikrotik", img:"assets/img/binario-cloud.png"},
            {descr: "OSPF Avançado", img:"assets/img/binario-cloud.png"},
            {descr: "ISO 20000 Foundation", img:"assets/img/binario-cloud.png"},
            {descr: "SBRC 2018", img:"assets/img/binario-cloud.png"},
            {descr: "IX Telecom", img:"assets/img/binario-cloud.png"}
        ]
    },
    methods: {
        cursosSeen: function(){
            this.cursoBtn = !this.cursoBtn
        },
        showModal: function(a){
            this.modalSeen = !this.modalSeen
            this.img = a
        },
        closeModal: function(a=''){
            this.cursosSeen()
            this.modalSeen = !this.modalSeen
        }
    }
})