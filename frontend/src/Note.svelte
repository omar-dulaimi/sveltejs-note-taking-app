<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  import moment from "moment";
  const dispatch = createEventDispatcher();

  let visible = true;
  export let id = "";
  export let title = "";
  export let createdAt = "";
  export let updatedAt = "";
  export let content = "";
  export let isDeleted;

  let formatted_date = "";
  if (createdAt != null) {
    formatted_date = moment(createdAt).format("YYYY-MM-DD HH:mm:ss");
  }

  function selectnote() {
    dispatch("selectnote", { id });
  }
</script>

<style>
  div {
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 5px;
    background: white;
    cursor: pointer;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.25rem 0;
    word-wrap: break-word;
  }

  h2 {
    font-size: 1rem;
    margin: 0.25rem 0;
    color: #4b4b4b;
  }
</style>

<div on:click={selectnote} in:fly={{ y: 200, duration: 1000 }} out:fade>
  <h1>{title}</h1>
  <h2>{formatted_date}</h2>
</div>
