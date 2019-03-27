var states = usStates;

new Vue({
    el: "#app",
    data() {
        return {
            senate: [],
            house: [],
            dem: [],
            repub: [],
            ind: [],
            parties: [],
            stateSelect: []
        };
    },
    methods: {
        getSenateData() {
            fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
                    headers: {
                        "X-API-Key": "5jjnxg7qrhV2Bqz8558zV7SlSng0EMuyuOHGuiHl",
                        "Content-Type": "application/json"
                    },
                    mode: "cors"
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.senate = data.results[0].members;
                })
                .then(senRep => {
                    for (let i = 0; i < this.senate.length; i++) {
                        if (this.senate[i].party == "R") {
                            this.repub.push(this.senate[i]);
                        }
                    }
                    console.log(this.repub);
                })
                .then(senDem => {
                    for (let i = 0; i < this.senate.length; i++) {
                        if (this.senate[i].party == "D") {
                            this.dem.push(this.senate[i]);
                        }
                    }
                    console.log(this.dem);
                })
                .then(senInd => {
                    for (let i = 0; i < this.senate.length; i++) {
                        if (this.senate[i].party == "I") {
                            this.ind.push(this.senate[i]);
                        }
                    }
                    console.log(this.ind);
                })
                .catch(err => console.log(err))
        },
        getHouseData() {
            fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
                    headers: {
                        "X-API-Key": "5jjnxg7qrhV2Bqz8558zV7SlSng0EMuyuOHGuiHl",
                        "Content-Type": "application/json"
                    },
                    mode: "cors"
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.house = data.results[0].members;
                })
                .then(houseRep => {
                    for (let i = 0; i < this.house.length; i++) {
                        if (this.house[i].party == "R") {
                            this.repub.push(this.house[i]);
                        }
                    }
                    console.log(this.repub);
                })
                .then(houseDem => {
                    for (let i = 0; i < this.house.length; i++) {
                        if (this.house[i].party == "D") {
                            this.dem.push(this.house[i]);
                        }
                    }
                    console.log(this.dem);
                })
                .then(houseInd => {
                    for (let i = 0; i < this.house.length; i++) {
                        if (this.house[i].party == "I") {
                            this.ind.push(this.house[i]);
                        }
                    }
                    console.log(this.ind);
                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getSenateData();
        this.getHouseData();
    },
    computed: {
        topLoy: function () {
            
        },
        topLoyDem: function () {

        },
        topLoyRep: function () {

        },
        topLoyRep: function () {

        },
        botLoy: function () {

        },
        botLoyDem: function () {

        },
        botLoyRep: function () {

        },
        topAtt: function () {

        },
        topAttDem: function () {

        },
        topAttRep: function () {

        },
        botAtt: function () {

        },
        botAttDem: function () {

        },
        botAttRep: function () {

        }


    }
});
