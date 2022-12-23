<template>
  <div id="app">
    <div class="has-text-right">
      <h3 class="title is-3">Recording audio files</h3>
      <p class="subtitle">
        Simply <strong>{{ recordMode.audio }}</strong> the button to record an
        audio clip
      </p>
    </div>

    <div class="record-settings">
      <vue-record-audio
        :mode="recordMode.audio"
        @stream="onStream"
        @result="onResult"
      />
      <div class="field">
        <label class="label">Mode</label>
        <div class="select">
          <select v-model="recordMode.audio">
            <option value="press">Press</option>
            <option value="hold">Hold</option>
          </select>
        </div>
      </div>
    </div>
    <div class="recorded-audio">
      <div
        v-for="(record, index) in recordings"
        :key="index"
        class="recorded-item"
      >
        <div class="audio-container">
          <audio :src="record.src" controls />
        </div>
        <div>
          <button @click="removeRecord(index)" class="button is-dark">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      recordMode: {
        audio: "hold",
        video: "press",
      },
      recordings: [],
    };
  },
  methods: {
    removeRecord(index) {
      this.recordings.splice(index, 1);
    },
    onStream(stream) {
      console.log("Got a stream object:", stream);
    },
    onVideoStream(stream) {
      console.log("Got a video stream object:", stream);
    },
    onVideoResult(data) {
      this.$refs.Video.srcObject = null;
      this.$refs.Video.src = window.URL.createObjectURL(data);
    },
    onResult(data) {
      this.recordings.push({
        src: window.URL.createObjectURL(data),
      });
    },
  },
};
</script>

<style></style>
