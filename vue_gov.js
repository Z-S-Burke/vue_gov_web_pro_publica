var states = usStates;

new Vue({
    el: "#app",
    data() {
        return {
            dem: [],
            repub: [],
            ind: [],
            parties: [],
            stateSelect: [],
            selectedState: [],
            members: [],
            senateURL: "https://api.propublica.org/congress/v1/113/senate/members.json",
            houseURL: "https://api.propublica.org/congress/v1/113/house/members.json"
        };
    },


    methods: {
        getData(url) {
            fetch(url, {
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
                    this.members = data.results[0].members;
                    console.log(this.members)
                })
                .then(allRep => {
                    for (let i = 0; i < this.members.length; i++) {
                        if (this.members[i].party == "R") {
                            this.repub.push(this.members[i]);
                        }
                    }
                    console.log(this.repub);
                })
                .then(allDem => {
                    for (let i = 0; i < this.members.length; i++) {
                        if (this.members[i].party == "D") {
                            this.dem.push(this.members[i]);
                        }
                    }
                    console.log(this.dem);
                })
                .then(allInd => {
                    for (let i = 0; i < this.members.length; i++) {
                        if (this.members[i].party == "I") {
                            this.ind.push(this.members[i]);
                        }
                    }
                    console.log(this.ind);
                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        if (document.title == "senate") {
            this.getData(this.senateURL);
        } else if (document.title == "house") {
            this.getData(this.houseURL);
        }
    }
});
