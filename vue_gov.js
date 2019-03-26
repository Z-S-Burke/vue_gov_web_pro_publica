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
            console.log('senate')
            fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
                    headers: {
                        "X-API-Key": "5jjnxg7qrhV2Bqz8558zV7SlSng0EMuyuOHGuiHl",
                        "Content-Type": "application/json"
                    },
                    mode: "cors"
                })
                .then(response => {
                    console.log("2");
                    return response.json();
                })
                .then(data => {
                    this.senate = data.results[0].members;
                    console.log(this.senate);
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
                    console.log("3");
                    return response.json();
                })
                .then(data => {
                    this.house = data.results[0].members;
                    console.log(this.house);
                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getSenateData();
        this.getHouseData();
    }
});
