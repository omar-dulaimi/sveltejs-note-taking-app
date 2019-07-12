<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();

  export let id = "";
  export let title = "";
  export let content = "";
  export let createdAt = "";
  export let updatedAt = "";
  export let isDeleted = false;

  function deletenote() {
    dispatch("deletenote", { id });
  }

  function updatenote() {
    dispatch("updatenote", { id, title, content });
  }
</script>

<style>
  div.main {
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 5px;
    background: white;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.25rem 0;
  }

  h2 {
    font-size: 1rem;
    margin: 0.25rem 0;
    color: #4b4b4b;
  }

  p {
    margin: 0.25rem 0;
  }

  button {
    font: inherit;
    padding: 0.15rem 0.5rem;
    background: #d10057;
    color: rgb(0, 0, 0);
  }

  button.delete {
    background: #d10057;
    color: white;
  }

  button.update {
    background: #0057d1;
    color: white;
  }

  textarea {
    width: 90%;
  }

  input {
    width: 90%;
  }
</style>

<div class="main">

  <div>
    <label for="title">Title</label>
    <input type="text" id="title" value={title} bind:value={title} />

  </div>
  <div>

    <label for="content">Content</label>
    <textarea
      type="text"
      id="content"
      value={content}
      bind:value={content}
      rows="5" />

  </div>

  <div class="note-btns">
    <button class="update" on:click={updatenote}>Update</button>
    <button class="delete" on:click={deletenote}>Delete</button>
  </div>

</div>
