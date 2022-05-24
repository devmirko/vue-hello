
const mess = new Vue ({
    el: "#container",
    data: {
        messaggio: "hello word with vue js",
        Image: "img/omer-haktan-bulut--_LKIdqHo3w-unsplash.jpg",
        counter: 0,
    },
    methods: {
        change: function () {
           
      switch (this.counter) {
          case 0:
              this.Image ="img/witchkingblogs-xZDk453dHbg-unsplash.jpg";
              this.counter++;
              break;
           case 1:
            this.Image ="img/tezos-5NX5x2-O7KU-unsplash.jpg";
            this.counter++;
             break;
             case 2:
            this.Image ="img/mingrui-he-SOxmqV_a3PU-unsplash.jpg";
            this.counter++;
             break;
         
      }
    }
  }
});