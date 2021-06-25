<template>
  <div id="pdfvuer">
    <div v-if="isLoading">
      Загрузка документа...
    </div>

    <pdf
      v-if="!isLoading"
      :src="pdfdata"
      v-for="i in numPages"
      :key="i"
      :id="i"
      :page="i"
    >
    </pdf>
  </div>
</template>

<script>
import pdfvuer from "pdfvuer";
// import 'pdfjs-dist/build/pdf.worker.entry' // To be uncommented if you get error: Error: Setting up fake worker failed: "window.pdfjsWorker is undefined".
import $ from "jquery";

export default {
  components: {
    pdf: pdfvuer
  },
  data() {
    return {
      page: 1,
      numPages: 0,
      pdfdata: undefined,
      errors: [],
      scale: "page-width",
      isLoading: true
    };
  },
  computed: {
    formattedZoom() {
      return Number.parseInt(this.scale * 100);
    }
  },
  mounted() {
    setTimeout(this.getPdf, 1000);
  },
  watch: {
    show: function(s) {
      if (s) {
        this.getPdf();
      }
    },
    page: function(p) {
      if (
        window.pageYOffset <= this.findPos(document.getElementById(p)) ||
        (document.getElementById(p + 1) &&
          window.pageYOffset >= this.findPos(document.getElementById(p + 1)))
      ) {
        // window.scrollTo(0,this.findPos(document.getElementById(p)));
        document.getElementById(p).scrollIntoView();
      }
    }
  },
  methods: {
    getPdf() {
      this.isLoading = true;
      var self = this;
      self.pdfdata = pdfvuer.createLoadingTask("/doc.pdf");
      self.pdfdata.then(pdf => {
        self.numPages = pdf.numPages;
        window.onscroll = function() {
          changePage();
          stickyNav();
        };

        // // Get the offset position of the navbar
        // var sticky = $("#buttons")[0].offsetTop;

        // // Add the sticky class to the self.$refs.nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
        // function stickyNav() {
        //   if (window.pageYOffset >= sticky) {
        //     $("#buttons")[0].classList.remove("hidden");
        //   } else {
        //     $("#buttons")[0].classList.add("hidden");
        //   }
        // }

        // function changePage() {
        //   var i = 1,
        //     count = Number(pdf.numPages);
        //   do {
        //     if (
        //       window.pageYOffset >= self.findPos(document.getElementById(i)) &&
        //       window.pageYOffset <= self.findPos(document.getElementById(i + 1))
        //     ) {
        //       self.page = i;
        //     }
        //     i++;
        //   } while (i < count);
        //   if (window.pageYOffset >= self.findPos(document.getElementById(i))) {
        //     self.page = i;
        //   }
        // }
        this.isLoading = false;
      });
    },
    findPos(obj) {
      return obj.offsetTop;
    }
  }
};
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>
<style>
#buttons {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.page {
  padding-left: 5% !important;
}
</style>
