<style>
  @import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<script>
  import Header from "../components/Header/Header.svelte";
  import Stages from "../components/Stages/Stages.svelte";
  import Candidates from "../components/Candidates/Candidates.svelte";
</script>

<svelte:head>
  <title>Sapper project Wrello</title>
</svelte:head>

<Header></Header>
<Stages></Stages>
<Candidates></Candidates>