export default {
    data() {
        return {
            inEdition: false,
            user: {
                typeID: "",
                ID: "",
                name: "",
                lastName: "",
                email: "",
                weight: 0,
                height: 0,
                imc: 0,
                acciones: true
            },
            listUsers: [
                {
                    typeID: "CC",
                    ID: "001",
                    name: "Isaac",
                    lastName: "Newton",
                    email: "newton@gravity.uk",
                    weight: 60,
                    height: 1.8,
                    acciones: true
                }
            ],
            types: [
                { value: null, text: "Seleccione el tipo de identificación", disables: true },
                "CC",
                "CE",
                "RN",
                "TI"
            ]
        };  
    },mounted() {
        this.getLocalStorage()
    },
     methods: {
         saveLocalStorage() {
            localStorage.setItem("users", JSON.stringify(this.listUsers));
        },
        getLocalStorage() {
            if (localStorage.getItem("users")) {
                this.listUsers = JSON.parse(localStorage.getItem("users"));
            }
        }
        ,
        loadUser( {item} ) {
            document.getElementById('formUpdate').style.display = 'block'
            let userUpdate = this.listUsers.find(u => u.ID == item.ID);
            this.inEdition = true;
            this.user = Object.assign({}, userUpdate);
            this.saveLocalStorage();

        }, deleteUser({ item }) {
            let pos = this.listUsers.findIndex(u => u.ID == item.ID);
            this.listUsers.splice(pos, 1);
            this.saveLocalStorage();
        }, updateUser() {
            let pos = this.listUsers.findIndex(u => u.ID == this.user.ID);
            this.listUsers.splice(pos, 1, this.user);
            this.user.imc = (this.user.weight / Math.pow( this.user.height, 2)).toFixed(2)
            this.user = {
                typeID: "",
                ID: "",
                name: "",
                lastName: "",
                email: "",
                weight: 0,
                height: 0,
                imc: 0,
                acciones: true
            };
            this.saveLocalStorage();
            this.inEdition = false;
        },
        state({item}){
            let currentUser = this.listUsers.find(u => u.ID == item.ID);
            let imcUser = currentUser.imc
            if(imcUser < 18.5) alert("Su peso es insuficiente")
            else if(imcUser < 25) alert("Su peso es normal")
            else if(imcUser < 27) alert("Tiene sobrepeso grado I")
            else if(imcUser < 30) alert("Tiene sobrepeso grado II (Pre-obesidad")
            else if(imcUser < 35) alert("Tiene obesidad grado I")
            else if(imcUser < 40) alert("Tiene obesidad grado II")
            else if(imcUser < 50) alert("Tiene obesidad grado III")
            else alert("Tiene obesidad grado IV (extrema")


        }
        
    }
}