<template>
  <form @submit.prevent="send">
    <div>
      <input
        :class="{ error: errors.includes('subject') }"
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />
    </div>
    <div>
      <textarea
        :class="{ error: errors.includes('content') }"
        name="content"
        placeholder="Content"
        required
      ></textarea>
    </div>
    <div>
      <a-button type="submit">Send</a-button>
    </div>
  </form>
</template>

<script>
import AButton from "./AButton.vue";

export default {
  components: { AButton },
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    send({ target }) {
      let { subject, content } = target;
      this.errors = [];

      if (!subject.value) return this.errors.push("subject");

      if (!content.value) return this.errors.push("content");

      subject = encodeURIComponent(subject.value);
      content = encodeURIComponent(content.value);
      const link = document.createElement("a");
      link.href = `mailto:visnalize@gmail.com?subject=${subject}&body=${content}`;
      link.target = "_blank";
      link.click();
      this.errors = [];
    },
  },
};
</script>

<style lang="stylus" scoped>
div {
  margin: 0.5rem 0;
}

input, textarea {
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 100%;
  font-family: inherit;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #aaa;

  &:focus {
    border-color: $accentColor;
  }

  &.error {
    border-color: red;
  }
}

textarea {
  height: 200px;
  resize: vertical;
}
</style>