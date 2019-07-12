<script>
  export let name = "";
  export let notes = [];
  export let selectedNote = {};
  export let visible = false;

  $: isCreateButtonClicked = false;

  export let title = "";
  export let content = "";

  import Note from "./Note.svelte";
  import NoteDetail from "./NoteDetail.svelte";
  import {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
  } from "./services/notes.service.js";
  import { onMount } from "svelte";

  onMount(async () => {
    [notes, selectedNote, visible] = await getAllNotes();
  });

  function selectnoteHandler(event) {
    isCreateButtonClicked = false;
    const selectedId = event.detail.id;

    selectedNote = [...notes].find(note => note.id === selectedId);
  }
  async function deletenoteHandler(event) {
    const selectedId = event.detail.id;

    const [response, success] = await deleteNote(selectedId);
    if (success) {
      [notes, selectedNote, visible] = await getAllNotes();
    }
  }

  async function updatenoteHandler(event) {
    const selectedId = event.detail.id;
    const foundNote = event.detail;

    const [response, success] = await updateNote(foundNote, selectedId);
    if (success) {
      [notes, selectedNote, visible] = await getAllNotes();
    }
  }

  async function createnoteHandler(event) {
    isCreateButtonClicked = true;
    const [response, success] = await createNote({ title, content });

    if (success) {
      [notes, selectedNote, visible] = await getAllNotes();
    }

    isCreateButtonClicked = false;
  }
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .notes-sidebar,
  .note-detail {
    height: 100%;
    overflow: auto;
    float: left;
    transition: width 0.35s;
  }

  .notes-sidebar {
    background: white;
    width: 41%;
  }

  .note-detail {
    background: gray;
    width: 57%;
  }
  p {
    margin: 0.5rem 0.25rem;
  }

  button {
    font: inherit;
    background: #00d17a;
    border: 1px solid #d10057;
    color: white;
  }

  button.create {
    width: 100%;
    font: inherit;
    background: #d10057;
    border: 1px solid #d10057;
    color: white;
  }

  textarea {
    width: 90%;
  }

  input {
    width: 90%;
  }
  section.notes-sidebar {
    padding-right: 1%;
    padding-left: 1%;
  }
</style>

<section class="notes-sidebar">
  <div style="margin-bottom: 1.25rem;">
    <button
      class="create"
      on:click={() => (isCreateButtonClicked = !isCreateButtonClicked)}>
       {isCreateButtonClicked ? 'Back' : 'Create'}
    </button>
  </div>

  {#if !isCreateButtonClicked}
    {#if notes.length === 0}
      <p>Please add a note first</p>
    {:else}
      {#each notes as note}
        <Note {...note} on:selectnote={selectnoteHandler} />
      {/each}
    {/if}
  {:else}
    <div class="form">

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
      <button class="save" on:click={createnoteHandler}>Save</button>
    </div>
  {/if}

</section>

<section class="note-detail">

  {#if !selectedNote}
    <p>Please select a note</p>
  {:else if isCreateButtonClicked}
    <p>Note creation in progress...</p>
  {:else}
    <NoteDetail
      {...selectedNote}
      on:deletenote={deletenoteHandler}
      on:updatenote={updatenoteHandler} />
  {/if}
</section>
