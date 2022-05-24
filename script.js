const mess = new Vue ({
    el: "#container",
    data: {
        messaggio: "hello word with vue js",
        Image: "img/omer-haktan-bulut--_LKIdqHo3w-unsplash.jpg",
    },
    methods: {
        change: function () {
            let counter = 0;
            if (counter == 0) {
                this.Image = "img/witchkingblogs-xZDk453dHbg-unsplash.jpg"
                counter++;
                console.log(counter);
            } else {
                this.Image = "img/omer-haktan-bulut--_LKIdqHo3w-unsplash.jpg"
            }
         }
    }
});