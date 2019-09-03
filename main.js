var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Closer",
        url: "https://www.youtube.com/embed/PT2_F-1esPk"
      },
      {
        show: false,
        title: "Whistle",
        url: "https://www.youtube.com/embed/cSnkWzZ7ZAA"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl
      };
      this.videos.push(obj);
    },
    removeVideo: function(video) {
      console.log("Removing video");
      let title = video.title;
      let url = video.url;
      for (let i = 0; i < this.videos.length; i++) {
        console.log(this.videos.title);
        if (this.videos[i].title === title && this.videos[i].url === url) {
          this.videos.splice(i, 1);
          break;
        }
      }
    }
  }
});
