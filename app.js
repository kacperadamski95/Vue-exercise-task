const number1 = Vue.createApp({
  data() {
    return {
      number: 25,
      tweened: 0,
    };
  },
  computed: {
    animatedNumber() {
      return Math.floor(this.tweened);
    },
  },
  mounted() {
    gsap.to(this.$data, {
      duration: 4,
      tweened: this.number,
    });
  },
}).mount("#number1");

const number2 = Vue.createApp({
  data() {
    return {
      number: 1200,
      tweened: 0,
    };
  },
  computed: {
    animatedNumber() {
      return Math.floor(this.tweened);
    },
  },
  mounted() {
    gsap.to(this.$data, {
      duration: 1,
      tweened: this.number,
    });
  },
}).mount("#number2");

const number3 = Vue.createApp({
  data() {
    return {
      number: 14,
      tweened: 0,
    };
  },
  computed: {
    animatedNumber() {
      return Math.floor(this.tweened);
    },
  },
  mounted() {
    gsap.to(this.$data, {
      duration: 3,
      tweened: this.number,
    });
  },
}).mount("#number3");

const number4 = Vue.createApp({
  data() {
    return {
      number: 3500,
      tweened: 0,
    };
  },
  computed: {
    animatedNumber() {
      return Math.floor(this.tweened);
    },
  },
  mounted() {
    gsap.to(this.$data, {
      duration: 1.5,
      tweened: this.number,
    });
  },
}).mount("#number4");

const counters = Vue.createApp({
  data() {
    return {
      clickCounters: {
        link1: 0,
        link2: 0,
        link3: 0,
      },
      activeElement: null,
    };
  },
  methods: {
    handleClick(linkNumber) {
      const linkRef = `link${linkNumber}`;
      if (this.activeElement !== linkRef) {
        this.activeElement = linkRef;
        this.clickCounters[linkRef]++;
        console.log(
          `Kliknąłeś/aś w ${linkNumber} link. Suma kliknięć: ${this.clickCounters[linkRef]}`
        );
      }
    },
  },
}).mount("#counter");
