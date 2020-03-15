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
            }, listUsers: [
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
    },
    methods: {
        create() {
            if (this.exists(this.user)) {
                alert("Este usuario ya existe")
            } else {
                this.user.imc = this.user.weight / (2 * this.user.height)

                this.listUsers.push(this.user);
                alert("Usuario agregado, su IMC es de: ", this.user.imc)
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
                }
                this.saveLocalStorage(),
                    this.getLocalStorage()
            };

        },
        exists({ item }) {
            for (let i = 0; i < this.listUsers.length; i++) {
                if (this.listUsers[i].ID == item.ID) {
                  return true
                }
              }
        },
        saveLocalStorage() {
            localStorage.setItem("users", JSON.stringify(this.listUsers));
        },
        getLocalStorage() {
            if (localStorage.getItem("users")) this.listUsers = JSON.parse(localStorage.getItem("users"));
        },
        loadUser({ item }) {
            let user = this.listUsers.find(u => u.ID == item.ID);
            this.inEdition = true;
            this.user = Object.assign({}, user);
            this.saveLocalStorage();

        }, deleteUser({ item }) {
            let pos = this.listUsers.findIndex(u => u.ID == item.ID);
            this.listUsers.splice(pos, 1);
            this.saveLocalStorage();
        }, updateUser() {
            let pos = this.listUsers.findIndex(u => u.ID == this.user.ID);
            this.listUsers.splice(pos, 1, this.user);
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
        }

    }
};